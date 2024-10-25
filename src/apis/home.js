import httpInstance from'@/utils/http'

// 封装banner数据接口
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })

}


// 封装新鲜好物接口

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}




