import { getCategoryAPI } from '@/apis/layout';
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
// 导航列表的数据管理
// state导航列表数据
const categoryList = ref([])

//action获取导航数据的方法
const getCategory =async() => {
   const res = await getCategoryAPI()
   console.log(res);
   categoryList.value = res.result
}

// 返回数据和方法
return {
    categoryList,
    getCategory
}
})
