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













