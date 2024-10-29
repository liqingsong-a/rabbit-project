// request是和httpInstance一样的，下那个名字都一样的只不过是对axios的二次封装封装，request是对axios的二次封
import request from '@/utils/http'


export function getCategoryAPI(id){
    return request({
        url:'/category',
        params:{
            id
        }
    })
}

// 二级分类的面包屑导航
/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
    return request({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}










