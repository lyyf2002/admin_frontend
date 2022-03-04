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

export function deleteNotice(nid) {
  return request({
    url: '/api/deleteNotice/',
    method: 'POST',
    data: new URLSearchParams({'nid': nid})
  })
}

export function accept(aid,acid) {
  return request({
    url: '/api/accountCheck/',
    method: 'POST',
    data: new URLSearchParams({'aid': aid,'acid': acid,'operation':1})
  })
}
/*
根据ID获取某个后台用户
*/
export function getById(id) {
  return request({
    url: `${api_name}/get/${id}`,
    method: 'get'
  })
}

/*
保存一个新的后台用户
*/
export function add(aid,user) {
  const {
    ndes
  } = user;
  // console.log(user)
  return request({
    url: 'api/sendNotice/',
    method: 'post',
    data: new URLSearchParams({'aid':aid,'ndes':ndes})
  })
}

/*
更新一个后台用户
*/
export function update(aid,user) {
  const {
    nid,
    ndes
  } = user;
  return request({
    url: 'api/editNotice/',
    method: 'post',
    data: new URLSearchParams({'aid':aid,'nid':nid,'ndes':ndes})
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
    url: '/api/adminViewNoticeList/',
    // url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: {'search':searchObj,'page':page,'limit':limit}
  })
}
