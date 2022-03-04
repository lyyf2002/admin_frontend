// 引入axios（axios进行二次封装）
import request from '@/utils/request'
// import axios from 'axios'
//对外暴露登录接口函数
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
export function changepassword(data) {
  console.log(data);
  return request({
    url: '/api/adminChangePassword/',
    method: 'post',
    data: new URLSearchParams(data)
  })
}

export function changemail(data) {
  console.log(data);
  return request({
    url: '/api/changeAdminEmail/',
    method: 'post',
    data: new URLSearchParams(data)
  })
}
export function changetel(data) {
  console.log(data);
  return request({
    url: '/api/changeAdminTel/',
    method: 'post',
    data: new URLSearchParams(data)
  })
}

export function changeface(data) {
  // console.log(data);
  return request({
    url: '/api/changeAdminFace/',
    method: 'post',
    data: data
  })
}
