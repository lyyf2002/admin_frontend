<template>
  <div class="app-container">

    <el-form inline>

      <!-- 表单元素 -->
      <el-form-item>
        <el-input v-model="tempSearchObj.username" placeholder="商品名" />
      </el-form-item>
      <!-- 查询与情况的按钮 -->
      <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
      <el-button type="default" @click="resetSearch">清空</el-button>

    </el-form>
    <el-form style="padding-bottom: 20px;">
      <el-select v-model="curclass" placeholder="全部类别" clearable @change="changeclasses" @clear="changeclasses">
        <el-option v-for="item in classes" :key="item.gclassid" :label="item.gclassname" :value="item.gclassid">
        </el-option>
      </el-select>
      <el-radio-group v-model="operation" @change="changeclasses">
        <el-radio-button label="所有"></el-radio-button>

        <el-radio-button label="上架中"></el-radio-button>
        <el-radio-button label="已售罄"></el-radio-button>
        <el-radio-button label="已下架"></el-radio-button>

      </el-radio-group>
      <!-- <el-checkbox v-model="operation" @change="changeclasses">待审核</el-checkbox> -->
    </el-form>

    <!--    <div style="margin-bottom: 20px">
      <el-button type="primary" @click="acceptBatch" :disabled="selectedIds.length===0">
        批量通过</el-button>
      <el-button type="danger" @click="refuseBatch" :disabled="selectedIds.length===0">批量拒绝</el-button>

    </div> -->

    <!-- table表格：展示用户信息的地方 -->
    <el-table border stripe v-loading="listLoading" :data="users" @selection-change="handleSelectionChange" rowheight="150">

      <el-table-column type="selection" width="55" />

      <el-table-column type="index" label="序号" width="80" align="center" />

      <el-table-column prop="gid" label="商品编号" />
      <el-table-column prop="gname" label="商品名称" />
      <el-table-column prop="gclassname" label="商品类别" />
      <el-table-column prop="gprice" label="商品价格" />
      <el-table-column prop="gnum" label="商品数量" />
      <el-table-column prop="gdes" label="商品描述" />
      <el-table-column prop="gstate" label="商品状态" />
      <el-table-column prop="gimages" label="商品图片" width="220">
        <template slot-scope="{row}">
          <!-- <div style="height: 200px; overflow: hidden;" > -->
          <el-scrollbar ref="el_scrollbar" style="height: 200px;width: 200px;">
            <el-image v-for="url in row.gimages" :preview-src-list="row.gimages" :key="url" :src="url" fit="cover"
              style="width: 200px; height: 200px"></el-image>
          </el-scrollbar>
          <!-- </div> -->
        </template>
      </el-table-column>
      <el-table-column prop="sname" label="卖家姓名" />

      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="{row}">
          <el-button type="primary" size="medium" @click="updata(row)" icon="el-icon-edit">修改信息</el-button>
          <el-popconfirm :title="`确定下架 ${row.gname} 吗?`" @onConfirm="deletegoods(row)">
            <el-button style="margin-top: 20px;" type="danger" slot="reference" size="medium" icon="el-icon-delete" :disabled="row.gstate === '已下架'">下架商品</el-button>
          </el-popconfirm>
          <!-- <el-popconfirm :title="`确定删除 ${row.username} 吗?`" @onConfirm="removeUser(row.id)">
            <HintButton style="margin-left:10px" slot="reference" type="danger" size="mini" icon="el-icon-delete"
              title="删除用户"/>
          </el-popconfirm> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination :current-page="page" :total="total" :page-size="limit" :page-sizes="[3, 10, 20, 30, 40, 50, 100]"
      style="padding: 20px 0;" layout="prev, pager, next, jumper, ->, sizes, total" @current-change="getUsers"
      @size-change="handleSizeChange" />
<el-dialog title="修改信息" :visible.sync="updataVisible" :before-close="cancel">
      <el-form ref="updataForm" :model="user" label-width="120px" >

        <el-form-item label="商品编号" >
          <el-input v-model="user.gid" :disabled="true"/>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="user.gname" />
        </el-form-item>
        <el-form-item label="商品类别">
          <el-select v-model="user.gclassid" placeholder="类别">
            <el-option v-for="item in classes" :key="item.gclassid" :label="item.gclassname" :value="item.gclassid">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input-number :precision="2" :step="0.1" :min="0" v-model="user.gprice" />
        </el-form-item>
        <el-form-item label="商品数量" >
          <el-input-number v-model="user.gnum" :min="0" />
        </el-form-item>
<el-form-item label="商品描述" >
          <el-input v-model="user.gdes"  />
        </el-form-item>
        <el-form-item label="商品状态" >
          <el-input v-model="user.gstate"  :disabled="true"/>
        </el-form-item>
        <el-form-item label="商品地区" >
          <el-radio-group v-model="user.gspot">
            <el-radio-button label="学院路校区"></el-radio-button>

            <el-radio-button label="沙河校区"></el-radio-button>


          </el-radio-group>
        </el-form-item>
        <el-form-item label="商品图片" >
          <el-image v-for="url in user.gimages" :preview-src-list="user.gimages" :key="url" :src="url" fit="cover"
            style="width: 200px; height: 200px"></el-image>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button  @click="cancel">取 消</el-button>

        <el-button :loading="loading"  type="primary" @click="Update">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import cloneDeep from 'lodash/cloneDeep'

  export default {
    name: 'GoodsCheckList',

    data() {
      return {
        // scrolContainer: HTMLElement,
        curclass: '',
        classes: [],
        operation: '所有',
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
        userRules: { // 用户添加/修改表单的校验规则
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
            validator: this.validatePassword
          }]
        },
        loading: false, // 是否正在提交请求中
        updataVisible: false, // 是否显示角色Dialog
        allRoles: [], // 所有角色列表
        userRoleIds: [], // 用户的角色ID的列表
        isIndeterminate: false, // 是否是不确定的
        checkAll: false, // 是否全选
      }
    },

    //发请求一般情况下，我们都是在mounted去发，但是也可以在created内部去发
    created() {
      this.getClasses()
      this.getUsers()
    },
    // mounted() {
    //     this.scrollContainer = this.$refs.el_scrollbar.wrap;  // 将 el-scrollbar 的 wrap 对象找出来，指定给 scroll-container
    //   },
    methods: {
      // scrollContainer() {
      //   this.scrolContainer = this.$refs.el_scrollbar.wrap
      //   return this.scrolContainer
      // },
      /*
      全选勾选状态发生改变的监听
      */
      // handleCheckAllChange(value) { // value 当前勾选状态true/false
      //   // 如果当前全选, userRoleIds就是所有角色id的数组, 否则是空数组
      //   this.userRoleIds = value ? this.allRoles.map(item => item.id) : []
      //   // 如果当前不是全选也不全不选时, 指定为false
      //   this.isIndeterminate = false
      // },
      async accept(u) {
        // console.log(u.acid)
        // console.log(this.$store.state.user.token)
        await this.$API.goods.acceptcheck(this.$store.state.user.token, u.gcid)
        this.$message.success('通过成功')
        this.getUsers(this.users.length === 1 ? this.page - 1 : this.page)
      },
      async deletegoods(u) {
        // console.log(u.acid)
        // console.log(this.$store.state.user.token)
        await this.$API.goods.cancelGoods( u.gid)
        this.$message.success('下架成功')
        this.getUsers(this.users.length === 1 ? this.page - 1 : this.page)
      },
      async acceptBatch() {
        // console.log(u.acid)
        // console.log(this.selectedIds)
        let i = this.selectedIds.length - 1
        while (i >= 0) {
          // console.log(this.selectedIds[i])
          await this.$API.goods.acceptcheck(this.$store.state.user.token, this.selectedIds[i])
          i--
        }
        this.selectedIds = []
        this.$message.success('通过成功')
        this.getUsers(this.users.length === 1 ? this.page - 1 : this.page)
      },
      async refuseBatch() {
        // console.log(u.acid)
        // console.log(this.selectedIds)
        let i = this.selectedIds.length - 1
        while (i >= 0) {
          // console.log(this.selectedIds[i])
          await this.$API.goods.refusecheck(this.$store.state.user.token, this.selectedIds[i])
          i--
        }
        this.selectedIds = []
        this.$message.success('拒绝成功')
        this.getUsers(this.users.length === 1 ? this.page - 1 : this.page)
      },

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
      // showAddUser() {
      //   this.user = {}
      //   this.dialogUserVisible = true

      //   this.$nextTick(() => this.$refs.userForm.clearValidate())
      // },

      /*
      删除所有选中的用户
      */
      // revomveUsers() {
      //   this.$confirm('确定删除吗?').then(async () => {
      //     await this.$API.user.removeUsers(this.selectedIds)
      //     this.$message.success('删除成功')
      //     this.getUsers()
      //   }).catch(() => {
      //     this.$message.info('取消删除')
      //   })
      // },

      /*
      列表选中状态发生改变的监听回调
      */
      handleSelectionChange(selection) {

        this.selectedIds = selection.map(item => item.gcid)
        console.log(this.selectedIds)
      },
      changeclasses(v) {
        console.log(v)
        this.getUsers()

      },
      /*
      显示更新用户的界面
      */
      updata(user) {
        this.user = cloneDeep(user)
        this.updataVisible = true
      },
      Update(){
        const {
          gid,
          gnum,
          gprice,
          gclassid,
          gdes,
          gspot
        } = this.user
        console.log(this.user)

        this.loading = true
        this.$API.goods.update(new URLSearchParams({'gid':gid,'gnum':gnum,'gprice':gprice,'gclassid':gclassid,'gdes':gdes,'gspot':gspot})).then((result) => {
          this.loading = false
          this.$message.success('修改成功!')
          this.getUsers(this.page)
          this.user = {}
          this.updataVisible = false
        })
      },

      /*
      删除某个用户
      */
      // async removeUser(id) {
      //   await this.$API.user.removeById(id)
      //   this.$message.success('删除成功')
      //   this.getUsers(this.users.length === 1 ? this.page - 1 : this.page)
      // },

      /*
      获取分页列表
      */
      async getClasses() {

        // console.log(searchObj.username);

        const result = await this.$API.goods.getGoodsClassList()


        const items = result.data

        // this.users = items.filter(item => item.username !== 'admin')
        this.classes = items
        this.curclass = ''

      },

      async getUsers(page = 1) {

        this.page = page === 0 ? 1:page
        const {
          operation,
          limit,
          searchObj
        } = this
        console.log(searchObj);
        this.listLoading = true
        const result = await this.$API.goods.getGoodsInfoList(operation === '所有' ? 0 : (operation === '上架中' ? 1 : (operation === '已下架'?3:2)),
          this.curclass, searchObj.username,
          this.page, limit)
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
      cancel() {
        this.updataVisible = false
        this.user = {}
      },

      /*
      保存或者更新用户
      */
      addOrUpdate() {
        this.$refs.userForm.validate(valid => {
          if (valid) {
            const {
              user
            } = this
            this.loading = true
            this.$API.user[user.id ? 'update' : 'add'](user).then((result) => {
              this.loading = false
              this.$message.success('保存成功!')
              this.getUsers(user.id ? this.page : 1)
              this.user = {}
              this.dialogUserVisible = false
            })
          }
        })
      }
    }
  }
</script>
<style>
  /*去掉横向滚动条*/

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
