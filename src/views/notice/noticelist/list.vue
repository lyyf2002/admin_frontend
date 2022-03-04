<template>
  <div class="app-container">
    <el-form inline>
      <!-- 表单元素 -->
      <el-form-item>
        <el-input v-model="tempSearchObj.username" placeholder="用户名" />
      </el-form-item>
      <!-- 查询与情况的按钮 -->
      <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
      <el-button type="default" @click="resetSearch">清空</el-button>
    </el-form>

    <div style="margin-bottom: 20px">
      <!-- 添加与批量添加按钮 -->
      <el-button type="primary" @click="showAddUser">添 加</el-button>

    </div>

    <!-- table表格：展示用户信息的地方 -->
    <el-table border stripe v-loading="listLoading" :data="users" @selection-change="handleSelectionChange">

      <el-table-column type="selection" width="55" />

      <el-table-column type="index" label="序号" width="80" align="center" />
      <el-table-column prop="nid" label="通知id" align="center" width="120" />
      <el-table-column prop="ndes" label="通知内容" align="center" />
      <el-table-column prop="ntime" label="通知时间" align="center" width="220" />
      <el-table-column prop="aid" label="发送者" align="center" width="220"/>

      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="{row}" align="center">



          <el-button type="primary" size="medium" icon="el-icon-edit" @click="showUpdatenotice(row)">修改通知</el-button>


          <el-popconfirm :title="`确定删除通知 ${row.nid} 吗?`" @onConfirm="deletenotice(row)">
            <el-button type="danger" style="margin-left:10px" slot="reference" size="medium" icon="el-icon-delete">删除通知</el-button>
          </el-popconfirm>



        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination :current-page="page" :total="total" :page-size="limit" :page-sizes="[3, 10, 20, 30, 40, 50, 100]"
      style="padding: 20px 0;" layout="prev, pager, next, jumper, ->, sizes, total" @current-change="getUsers"
      @size-change="handleSizeChange" />
    <!-- 对话框的结构 -->
    <el-dialog title="添加通知" :visible.sync="dialogUserVisible" :before-close="cancel">
      <el-form ref="user" :model="user" label-width="120px">
        <el-form-item label="通知内容" prop="uid">
          <el-input v-model="user.ndes" />
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button :loading="loading" type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改通知" :visible.sync="updataVisible" :before-close="cancelupdata">
      <el-form ref="updataForm" :model="user" label-width="120px">

        <el-form-item label="通知id">
          <el-input v-model="user.nid" :disabled="true" />
        </el-form-item>
        <el-form-item label="通知内容">
          <el-input v-model="user.ndes" />
        </el-form-item>



      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelupdata">取 消</el-button>

        <el-button :loading="loading" type="primary" @click="Update">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import cloneDeep from 'lodash/cloneDeep'

  export default {
    name: 'AclUserList',

    data() {
      return {
        listLoading: false, // 是否显示列表加载的提示
        searchObj: { // 包含请求搜索条件数据的对象
          username: ''
        },
        tempSearchObj: { // 收集搜索条件输入的对象
          username: ''
        },
        selectedIds: [], // 所有选择的user的id的数组
        users: [], // 当前页的用户列表
        page: 1, // 当前页码
        limit: 3, // 每页数量
        total: 0, // 总数量
        user: {}, // 当前要操作的user
        dialogUserVisible: false, // 是否显示用户添加/修改的dialog
        updataVisible: false,
        userRules: { // 用户添加/修改表单的校验规则
          userid: [{
              required: true,
              message: '用户id必须输入'
            },

          ],
          username: [{
              required: true,
              message: '用户名必须输入'
            },
            {
              min: 4,
              message: '用户名不能小于4位'
            }
          ],
          password: [{
            required: true,

          }]
        },
        loading: false, // 是否正在提交请求中
        dialogRoleVisible: false, // 是否显示角色Dialog
        allRoles: [], // 所有角色列表
        userRoleIds: [], // 用户的角色ID的列表
        isIndeterminate: false, // 是否是不确定的
        checkAll: false, // 是否全选
      }
    },

    //发请求一般情况下，我们都是在mounted去发，但是也可以在created内部去发
    created() {
      this.getUsers()
    },

    methods: {


      /*
      自定义密码校验
      */
      validatePassword(rule, value, callback) {
        if (!value) {
          callback('密码必须输入')
        } else if (!value || value.length < 6) {
          callback('密码不能小于6位')
        } else {
          callback()
        }
      },
      /*
      根据输入进行搜索
      */
      search() {
        this.searchObj = { ...this.tempSearchObj
        }
        this.getUsers()
      },

      /*
      重置输入后搜索
      */
      resetSearch() {
        this.searchObj = {
          username: ''
        }
        this.tempSearchObj = {
          username: ''
        }
        this.getUsers()
      },

      /*
      显示添加用户的界面
      */
      showAddUser() {
        this.user = {}
        this.dialogUserVisible = true


      },

      /*
      删除所有选中的用户
      */
      async removeUser(id) {
        await this.$API.user.removeUser(id)
        this.$message.success('删除成功')
        this.getUsers(this.users.length === 1 ? this.page - 1 : this.page)
      },
      revomveUsers() {
        this.$confirm('确定删除吗?').then(async () => {
          let i = this.selectedIds.length - 1
          while (i >= 0) {
            await this.$API.user.removeUser(this.selectedIds[i])
            i--
          }

          this.$message.success('删除成功')
          this.getUsers()
        }).catch(() => {
          this.$message.info('取消删除')
        })
      },

      /*
      列表选中状态发生改变的监听回调
      */
      handleSelectionChange(selection) {
        this.selectedIds = selection.map(item => item.nid)
      },

      /*
      显示更新用户的界面
      */
      showUpdatenotice(user) {
        this.user = cloneDeep(user)
        this.updataVisible = true
      },

      /*
      删除某个用户
      */


      /*
      获取分页列表
      */
      async getUsers(page = 1) {
        this.page = page === 0? 1 :page
        const {
          limit,
          searchObj
        } = this
        console.log(searchObj.username);
        this.listLoading = true
        const result = await this.$API.notice.getUserList(this.page, limit, searchObj.username)
        console.log(result);
        this.listLoading = false
        console.log(result.data)
        const items = result.data
        console.log(items)
        // this.users = items.filter(item => item.username !== 'admin')
        this.users = items
        console.log(this.users)
        this.total = result.total
        console.log(this.total)
        this.selectedIds = []
      },

      /*
      处理pageSize发生改变的监听回调
      */
      handleSizeChange(pageSize) {
        this.limit = pageSize
        this.getUsers()
      },

      /*
      取消用户的保存或更新
      */
      cancelupdata() {
        this.updataVisible = false
        this.user = {}
      },
      cancel() {
        this.dialogUserVisible = false
        this.user = {}
      },

      /*
      保存或者更新用户
      */
      add() {


        const {
          user
        } = this
        this.loading = true
        this.$API.notice.add(this.$store.state.user.token, user).then((result) => {
          this.loading = false
          this.$message.success('发送成功!')
          this.getUsers(user.uid ? this.page : 1)
          this.user = {}
          this.dialogUserVisible = false
        })


      },
      Update() {
        const {
          user
        } = this
        this.loading = true
        this.$API.notice.update(this.$store.state.user.token, user).then((result) => {
          this.loading = false
          this.$message.success('修改成功!')
          this.getUsers(user.uid ? this.page : 1)
          this.user = {}
          this.updataVisible = false
        })
      },
      async deletenotice(u) {
        // console.log(u.acid)
        // console.log(this.$store.state.user.token)
        await this.$API.notice.deleteNotice(u.nid)
        this.$message.success('删除成功！')
        this.getUsers(this.users.length === 1 ? this.page - 1 : this.page)
      },

    }
  }
</script>
