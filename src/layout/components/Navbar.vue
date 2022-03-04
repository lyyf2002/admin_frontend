<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          
          <el-dropdown-item divided @click.native="myInfo">
            个人信息
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="changepassword">
            修改密码
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
    <el-dialog title="修改密码" :visible.sync="dialogUserVisible" :before-close="cancel" append-to-body>
      <el-form>
        <el-form-item label="密码">
          <el-input v-model="user.password" show-password />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="user.password2" show-password />
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="change">确 定</el-button>
      </div>
    </el-dialog>


    <el-dialog title="个人信息" :visible.sync="infoVisibel" :before-close="cancelInfo" append-to-body>
      <el-form>

        <el-upload class="avatar-uploader"  :show-file-list="false" :on-change="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar"/>
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>

        </el-upload>

        <el-form-item label="账号">
          <el-input v-model="info.id" :disabled="true" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="info.mail">
            <el-button slot="append" type="primary" @click="changemail">修改</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="info.tel">
            <el-button slot="append" type="primary" @click="changetel">修改</el-button>
          </el-input>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelInfo">返 回</el-button>
        <!-- <el-button type="primary" @click="change">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'

  export default {
    components: {
      Breadcrumb,
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar'
      ])
    },
    data() {
      return {
        imageUrl: this.$store.state.user.avatar,
        info: {
          id: this.$store.state.user.token,
          tel: this.$store.state.user.atel,
          mail: this.$store.state.user.amail
        },
        user: {
          password2: '',
          password: ''
        },
        dialogUserVisible: false,
        infoVisibel: false
      }
    },
    methods: {

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(op) {
        if (op.status !== 'ready') return
        var formData = new FormData()
        formData.append('aface', op.raw)
        formData.append('aid', this.$store.state.user.token)
        this.$store.dispatch('user/changeface',formData).then(()=>{


        })
        this.$message.success("修改成功")
        this.imageUrl = this.$store.state.user.avatar
        this.infoVisibel = false

      },

      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
      async logout() {
        await this.$store.dispatch('user/logout')
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      },
      changepassword() {
        this.dialogUserVisible = true
      },
      myInfo() {
        this.infoVisibel = true
      },
      cancel() {
        this.dialogUserVisible = false
        this.user = {}
      },
      cancelInfo() {
        this.infoVisibel = false
      },
      async change() {
        // console.log("start change")
        if (this.user.password == this.user.password2) {
          await this.$store.dispatch('user/changepassword', this.user).then(() => {
            //登录成功进行路由的跳转
            console.log(this.redirect);
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
            //loading效果结束

          }).catch(() => {

          });
        } else {
          this.$message.error('请输入相同的密码！');
        }


      },
      async changemail() {
        await this.$store.dispatch('user/changemail', this.info.mail).then(() => {
          //登录成功进行路由的跳转
          this.$message.success("修改成功")
          //loading效果结束

        }).catch(() => {

        });
      },
      async changetel() {
        await this.$store.dispatch('user/changetel', this.info.tel).then(() => {
          //登录成功进行路由的跳转
          this.$message.success("修改成功")
          //loading效果结束

        }).catch(() => {

        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }


      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
