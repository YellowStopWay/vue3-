//提供首页相关api函数
import request from "@/utils/request";
//获取品牌
//limit为品牌个数
//return promise
export const findBrand = (limit = 6) => {
    return request('/home/brand', 'get', { limit })
}
//获取轮播图
export const findBanner = () => {
    return request('/home/banner', 'get')
}

//获取新鲜好物
export const findNew = () => {
    return request('/home/new', 'get')
}
//获取人气推荐
export const findHot = () => {
    return request('/home/hot', 'get')
}