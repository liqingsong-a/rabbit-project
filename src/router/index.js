// createRouter：创建router实例对象
// createWebHistory:创建history模式的路由对象
// routes:路由规则数组

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // 配置path和component对应关系的位置
  routes: [
   {
    path:'/',
    component:Layout,
    children:[ //配置二级路由
      {
        path:'',// 空字符串表示默认子路由
        component:Home
      },
      {
        path:'category/:id',
        component:Category
      },
      {
        path:'category/sub/:id',
        component:SubCategory
      },
      {
        path:'detail/:id',
        component:Detail
      }
    ]
   },
   {
    path:'/login',
    component:Login
   }
  ],
  // 路由行为的配置项
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
