import request from '@/utils/request'

const api_name = 'api/usermaneger/user'

// /*
// 登陆
// */
// export function login({ username, password }) {
//   return request({
//     url: '/admin/acl/index/login',
//     method: 'post',
//     data: { username, password }
//   })
// }

// /*
// 获取用户信息(根据token)
// */
// export function getInfo() {
//   return request({
//     url: '/admin/acl/index/info',
//     method: 'get'
//   })
// }

// /*
// 登出
// */
// export function logout() {
//   return request({
//     url: '/admin/acl/index/logout',
//     method: 'post'
//   })
// }
export function login(data) {
  console.log(data);
  return request({
    url: '/api/adminLogin/',
    method: 'post',
    data: new URLSearchParams(data)
  })
}
//对外暴露获取用户信息的函数
export function getInfo(token) {
  return request({
    url: '/api/viewAdminInfo/',
    method: 'get',
    params: { 'aid' : token }
  })
}
//对外暴露退出登录函数
export function logout() {
  return request({
    url: '/api/adminLogout/',
    method: 'post'
  })
}

export function getOrderNum() {
  return request({
    url: '/api/getOrderNum',
    method: 'get'

  })
}
export function getVisitNum() {
  return request({
    url: '/api/getVisitNum',
    method: 'get'

  })
}
export function getOrderNumList() {
  return request({
    url: '/api/getOrderNumList',
    method: 'get'

  })
}

export function getVisitNumList() {
  return request({
    url: '/api/getVisitNumList',
    method: 'get'

  })
}

export function getActData() {
  return request({
    url: '/api/getActData',
    method: 'get'

  })
}
getMoneyList
export function getMoneyList() {
  return request({
    url: '/api/getMoneyList',
    method: 'get'

  })
}
export function getrankdata() {
  return request({
    url: '/api/getMostPopularGoods',
    method: 'get'

  })
}

export function getMoneyBySpot(gspot) {
  return request({
    url: '/api/getMoneyBySpot',
    method: 'get',
    params: { 'gspot' : gspot }

  })
}
export function getGoodsNumBySpot(gspot) {
  return request({
    url: '/api/getGoodsNumBySpot',
    method: 'get',
    params: { 'gspot' : gspot }

  })
}
/*
获取当前用户的菜单权限列表
*/
export function getMenu() {
  return request('/admin/acl/index/menu')
}


/*
获取后台用户分页列表(带搜索)
*/
export function getaccountCheckPageList(page, limit, searchObj) {
  // console.log("testsearch");
  // console.log(searchObj));
  return request({
    url: '/api/accountCheck/',
    // url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: {'searchid':searchObj,'page':page,'limit':limit}
  })
}

export function getGoodsCheckInfoList(operation,curclass,search,page,limit) {
  // console.log("testsearch");
  // console.log(searchObj));
  return request({
    url: '/api/getGoodsCheckInfoList/',
    // url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: {'operation':operation,'gclassid':curclass, 'gname':search,'page':page,'limit':limit}
  })
}
export function getGoodsInfoList(operation,curclass,search,page,limit) {
  // console.log("testsearch");
  // console.log(searchObj));
  return request({
    url: '/api/adminViewGoodsListInfo/',
    // url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: {'operation':operation,'gclassid':curclass, 'gname':search,'page':page,'limit':limit}
  })
}
export function getGoodsClassList() {
  // console.log("testsearch");
  // console.log(searchObj));
  return request({
    url: '/api/getGoodsClassList/',
    // url: `${api_name}/${page}/${limit}`,
    method: 'get'
  })
}

export function getgoodsclassPageList(page, limit, searchObj) {
  // console.log("testsearch");
  // console.log(searchObj));
  return request({
    url: '/api/getgoodsclassPageList/',
    // url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: {'searchid':searchObj,'page':page,'limit':limit}
  })
}

export function cancelGoods(gid) {
  return request({
    url: '/api/cancelGoods/',
    method: 'POST',
    data: new URLSearchParams({'gid': gid})
  })
}
export function refuse(gclassid) {
  return request({
    url: '/api/deleteGoodsClass/',
    method: 'POST',
    data: new URLSearchParams({'gclassid': gclassid})
  })
}

export function acceptcheck(aid,gcid) {
  return request({
    url: '/api/goodsCheck/',
    method: 'POST',
    data: new URLSearchParams({'aid': aid,'gcid':gcid,operation:0})
  })
}
export function refusecheck(aid,gcid) {
  return request({
    url: '/api/goodsCheck/',
    method: 'POST',
    data: new URLSearchParams({'aid': aid,'gcid':gcid,operation:1})
  })
}

/*
保存一个新的后台用户
*/
export function add(user) {
  const {
   gclassname
  } = user;
  // console.log(user)
  return request({
    url: 'api/addGoodsClass/',
    method: 'post',
    data: new URLSearchParams({'gclassname':gclassname})
  })
}

/*
更新一个后台用户
*/
export function update(data) {

  return request({
    url: 'api/changeGoodsInfo/',
    method: 'post',
    data: data
  })
}

/*
获取某个用户的所有角色
*/
// export function getRoles(userId) {
//   return request({
//     url: `${api_name}/toAssign/${userId}`,
//     method: 'get'
//   })
// }

/*
给某个用户分配角色
roleId的结构: 字符串, 'rId1,rId2,rId3'
*/
// export function assignRoles(userId, roleId) {
//   return request({
//     url: `${api_name}/doAssign`,
//     method: 'post',
//     params: {
//       userId,
//       roleId
//     }
//   })
// }

/*
删除某个用户
*/
export function removeuser(id) {
  return request({
    url: `${api_name}/remove/${id}`,
    method: 'delete'
  })
}//to do


export function getUserList(page, limit, searchObj) {
  // console.log("testsearch");
  // console.log(searchObj));
  return request({
    url: '/api/viewUserAllInfo/',
    // url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: {'searchid':searchObj,'page':page,'limit':limit}
  })
}

export function getMoneys(){
  return request({
    url: '/api/getMoneys',
    method: 'get',

  })
}
