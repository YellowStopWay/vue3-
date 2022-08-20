//提供首页相关api函数
import request from "@/utils/request";
//获取品牌
//limit为品牌个数
//return promise
export const findBrand = (limit = 6) => {
    return request('/home/brand', 'get', { limit })
}