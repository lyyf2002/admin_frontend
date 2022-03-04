//将四个模块请求的接口函数统一暴露
import * as trademark from './product/tradeMark';
import * as attr from './product/attr';
import * as spu from './product/spu';
import * as sku from './product/sku';

//引入权限相关的接口文件
import * as user from './usermaneger/user';
import role from './acl/role';
import permission from './acl/permission';
import * as goods from './goods/goods';
import * as notice from './notice/notice';
import * as dashboard from './dashboard/dashboard';
//对外暴露
export default {
     trademark,
     attr,
     sku,
     spu,
     user,
     role,
     permission,
     goods,
	 notice,
   dashboard
}
