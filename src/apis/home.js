import httpInstance from'@/utils/http'

// 封装banner数据接口
export function getBannerAPI(params = {}){
//默认是1，商品为2：结构赋值一下
    const {distributionSite = '1'} = params
    return httpInstance({
        url:'/home/banner',
        params:{
          distributionSite
        }
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

//封装商品推荐
/**
 * @description: 获取商品推荐
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI =()=>{
  return httpInstance({
    url:'/home/goods'
  })
}


