//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'

//测试接口函数
// import { getCategory } from '@/apis/testAPI'
// getCategory().then(res => {
//     console.log(res);
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        //el:指令绑定的那个元素
        // binding：bingding.vale是指令等于号后面绑定的表达式的值，至这里指的是图片url
        console.log(el,binding);
             useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting);
                if(isIntersecting){
                    el.src = binding.value
                }
                
            },
          )
        
    }
})



