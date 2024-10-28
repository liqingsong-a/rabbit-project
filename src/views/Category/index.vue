<script setup>
import {getCategoryAPI} from '@/apis/category'
import {onMounted,ref} from 'vue'
import {useRoute} from 'vue-router'
import {getBannerAPI} from'@/apis/home'
import GoodsItem from '../Home/components/GoodsItem.vue'
import { onBeforeRouteUpdate } from 'vue-router'


//获取数据
const categoryData = ref({})
const route = useRoute()//获取路由参数的方法
// id = route.params.id括号里面的意思是下面不传参数的话就用默认的id
const getCategory = async(id = route.params.id)=>{
 const res = await getCategoryAPI(id)//括号里面的是获取路由参数的
 categoryData.value = res.result
}
onMounted(()=>getCategory())
//目标：路由参数变化的时候，可以重新把分类数据接口重新发起请求
onBeforeRouteUpdate((to)=>{
  console.log('路由参数变化了');
  // 存在问题：使用最新的路由参数请求最新的数据
  console.log(to);
  
  getCategory(to.params.id)
  
})



// 获取轮播图数据:distributionSite轮播图传的参数
const bannerList = ref([])
const getBanner = async () => {
   const res = await getBannerAPI({
    distributionSite:'2'
   })
   console.log(res);
   bannerList.value = res.result

}
onMounted(()=> getBanner())

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 实现轮播图 -->
      <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="sub-list">
  <h3>全部分类</h3>
  <ul>
    <li v-for="i in categoryData.children" :key="i.id">
      <RouterLink to="/">
        <img :src="i.picture" />
        <p>{{ i.name }}</p>
      </RouterLink>
    </li>
  </ul>
</div>
<div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
  <div class="head">
    <h3>- {{ item.name }}-</h3>
  </div>
  <div class="body">
    <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
  </div>
</div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.home-banner {
  width: 1240px;
  height: 500px;
  margin:0 auto;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>