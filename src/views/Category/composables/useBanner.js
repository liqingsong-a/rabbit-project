//封装banner(轮播图)相关的业务代码
import {getBannerAPI} from'@/apis/home'
import {onMounted,ref} from 'vue'
 export function useBanner() {
    // 获取轮播图数据:distributionSite轮播图传的参数
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        console.log(res);
        bannerList.value = res.result
    }
    onMounted(() => getBanner())
    return{
        bannerList
    }
}





















