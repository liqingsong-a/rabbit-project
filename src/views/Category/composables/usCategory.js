//封装分类相关的代码
import { onBeforeRouteUpdate } from 'vue-router'
import {getCategoryAPI} from '@/apis/category'
import {onMounted,ref} from 'vue'
import {useRoute} from 'vue-router'


export function useCategory() {
    //获取数据
    const categoryData = ref({})
    const route = useRoute()//获取路由参数的方法
    // id = route.params.id括号里面的意思是下面不传参数的话就用默认的id
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)//括号里面的是获取路由参数的
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    //目标：路由参数变化的时候，可以重新把分类数据接口重新发起请求
    onBeforeRouteUpdate((to) => {
        console.log('路由参数变化了');
        // 存在问题：使用最新的路由参数请求最新的数据
        console.log(to);

        getCategory(to.params.id)
    })
    return{
        categoryData
    }
}







