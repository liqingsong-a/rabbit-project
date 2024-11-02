//把components里面的插件进行全局化注册
// 通过插件的方法
// 导入组件
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
    install (app){
        // app.component('组件的名字'，组件配置对象)
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}