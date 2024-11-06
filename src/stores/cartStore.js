//封装购物车方法
import { defineStore } from "pinia";
import { computed, ref } from "vue";



export const useCartStore = defineStore('cart',() => {
    // 1,定义state - cartList
    const cartList = ref([])
    // 2,定义action- addCart
    const addCart = (goods) => {
        //添加购物车
        //1，已添加过 - count+1，
        //2，没有添加的 - 直接push
       //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
       const item = cartList.value.find((item) =>goods.skuId ===item.skuId)
       if(item){
        //找到了
        item.count++
       }else{
        //没找到
        cartList.value.push(goods)
        }
        }
    // 删除购物车
    const delCart = (skuId) =>{
        //思路：
        // 1，找到要删除的项的下标值 - splice
        // 2，使用数组的过滤方法 - filter
        const idx = cartList.value.findIndex((item) => skuId ===item.skuId)
        cartList.value.splice(idx,1)
    }
    //计算属性
    // 1总的数量 所有项的counnt之和
   const allCount =computed(() => cartList.value.reduce((a,c) => a + c.count,0))
    // 2总的价格 所有项的count*price之和
    const allPrice = computed(() => cartList.value.reduce((a,c) => a + c.count * c.price,0))

    return{
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart,
       
    }
},{
    persist:true
})


