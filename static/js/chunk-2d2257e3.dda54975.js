(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2257e3"],{e541:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-form",{attrs:{inline:""}},[s("el-form-item",[s("el-input",{attrs:{placeholder:"类别名"},model:{value:e.tempSearchObj.username,callback:function(t){e.$set(e.tempSearchObj,"username",t)},expression:"tempSearchObj.username"}})],1),s("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("查询")]),s("el-button",{attrs:{type:"default"},on:{click:e.resetSearch}},[e._v("清空")])],1),s("div",{staticStyle:{"margin-bottom":"20px"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.showadd}},[e._v(" 添 加")]),s("el-button",{attrs:{type:"danger",disabled:0===e.selectedIds.length},on:{click:e.refuseBatch}},[e._v("批量删除")])],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{border:"",stripe:"",data:e.users},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),s("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),s("el-table-column",{attrs:{prop:"gclassname",label:"类别",align:"center"}}),s("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("el-button",{attrs:{type:"success",size:"medium",icon:"el-icon-setting"},on:{click:function(t){return e.updata(a)}}},[e._v("修改")]),s("el-popconfirm",{attrs:{title:"确定删除 "+a.gclassname+" 吗?"},on:{onConfirm:function(t){return e.refuse(a)}}},[s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger",size:"medium",icon:"el-icon-delete"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),s("el-pagination",{staticStyle:{padding:"20px 0"},attrs:{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[3,10,20,30,40,50,100],layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"current-change":e.getUsers,"size-change":e.handleSizeChange}}),s("el-dialog",{attrs:{title:"添加类别",visible:e.dialogaddVisible,"before-close":e.cancel},on:{"update:visible":function(t){e.dialogaddVisible=t}}},[s("el-form",{ref:"user",attrs:{model:e.user,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"类别名",prop:"uid"}},[s("el-input",{model:{value:e.user.gclassname,callback:function(t){e.$set(e.user,"gclassname",t)},expression:"user.gclassname"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.cancel}},[e._v("取 消")]),s("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.add}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"修改类别",visible:e.dialogupdataVisible,"before-close":e.cancelupdata},on:{"update:visible":function(t){e.dialogupdataVisible=t}}},[s("el-form",{ref:"user",attrs:{model:e.user,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"类别名",prop:"uid"}},[s("el-input",{model:{value:e.user.gclassname,callback:function(t){e.$set(e.user,"gclassname",t)},expression:"user.gclassname"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.cancelupdata}},[e._v("取 消")]),s("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.updataclass}},[e._v("确 定")])],1)],1)],1)},n=[],r=s("5530"),i=s("1da1"),l=(s("96cf"),s("d81d"),s("0644")),o=s.n(l),c={name:"GoodsclassList",data:function(){return{listLoading:!1,searchObj:{username:""},tempSearchObj:{username:""},selectedIds:[],users:[],page:1,limit:3,total:0,user:{},dialogaddVisible:!1,dialogupdataVisible:!1,userRules:{username:[{required:!0,message:"用户名必须输入"},{min:4,message:"用户名不能小于4位"}],password:[{required:!0,validator:this.validatePassword}]},loading:!1,dialogRoleVisible:!1,allRoles:[],userRoleIds:[],isIndeterminate:!1,checkAll:!1}},created:function(){this.getUsers()},methods:{handleCheckAllChange:function(e){this.userRoleIds=e?this.allRoles.map((function(e){return e.id})):[],this.isIndeterminate=!1},updataclass:function(){var e=this,t=this.user;this.loading=!0,this.$API.goods.update(t).then((function(s){e.loading=!1,e.$message.success("修改成功!"),e.getUsers(t.uid?e.page:1),e.user={},e.dialogupdataVisible=!1}))},add:function(){var e=this,t=this.user;this.loading=!0,this.$API.goods.add(t).then((function(s){e.loading=!1,e.$message.success("添加成功!"),e.getUsers(t.uid?e.page:1),e.user={},e.dialogaddVisible=!1}))},refuse:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$API.goods.refuse(e.gclassid);case 2:t.$message.success("删除成功"),t.getUsers(1===t.users.length?t.page-1:t.page);case 4:case"end":return s.stop()}}),s)})))()},refuseBatch:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e.selectedIds.length-1;case 1:if(!(s>=0)){t.next=8;break}return console.log(e.selectedIds[s]),t.next=5,e.$API.goods.refuse(e.selectedIds[s]);case 5:s--,t.next=1;break;case 8:e.selectedIds=[],e.$message.success("删除成功"),e.getUsers(1===e.users.length?e.page-1:e.page);case 11:case"end":return t.stop()}}),t)})))()},search:function(){this.searchObj=Object(r["a"])({},this.tempSearchObj),this.getUsers()},resetSearch:function(){this.searchObj={username:""},this.tempSearchObj={username:""},this.getUsers()},showAddUser:function(){var e=this;this.user={},this.dialogUserVisible=!0,this.$nextTick((function(){return e.$refs.userForm.clearValidate()}))},revomveUsers:function(){var e=this;this.$confirm("确定删除吗?").then(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$API.user.removeUsers(e.selectedIds);case 2:e.$message.success("删除成功"),e.getUsers();case 4:case"end":return t.stop()}}),t)})))).catch((function(){e.$message.info("取消删除")}))},handleSelectionChange:function(e){this.selectedIds=e.map((function(e){return e.gclassid}))},updata:function(e){this.user=o()(e),this.dialogupdataVisible=!0},showadd:function(){this.user={},this.dialogaddVisible=!0},removeUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$API.user.removeById(e);case 2:t.$message.success("删除成功"),t.getUsers(1===t.users.length?t.page-1:t.page);case 4:case"end":return s.stop()}}),s)})))()},getUsers:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,n,r,i,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:1,t.page=0===a?1:a,n=t.limit,r=t.searchObj,t.listLoading=!0,s.next=6,t.$API.goods.getgoodsclassPageList(t.page,n,r.username);case 6:i=s.sent,console.log(i),t.listLoading=!1,console.log(i.data),l=i.data,console.log(l),t.users=l,console.log(t.users),t.total=i.total,console.log(t.total),t.selectedIds=[];case 17:case"end":return s.stop()}}),s)})))()},handleSizeChange:function(e){this.limit=e,this.getUsers()},cancel:function(){this.dialogaddVisible=!1,this.user={}},cancelupdata:function(){this.dialogupdataVisible=!1,this.user={}},addOrUpdate:function(){var e=this;this.$refs.userForm.validate((function(t){if(t){var s=e.user;e.loading=!0,e.$API.user[s.id?"update":"add"](s).then((function(t){e.loading=!1,e.$message.success("保存成功!"),e.getUsers(s.id?e.page:1),e.user={},e.dialogUserVisible=!1}))}}))}}},u=c,d=s("2877"),g=Object(d["a"])(u,a,n,!1,null,null,null);t["default"]=g.exports}}]);