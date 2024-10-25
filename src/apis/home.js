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

//封装人气推荐

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI =()=>{
  return httpInstance({
    url:'/home/hot'
  })
}


