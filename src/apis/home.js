import httpInstance from'@/utils/http'

// 封装banner数据接口
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })

}





