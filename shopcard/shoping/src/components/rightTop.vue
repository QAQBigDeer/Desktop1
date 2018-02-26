<template>
    <div class="righttop">
      <div class="top"><span>热卖商品</span></div>
      <div  class="shop">
        <div class="shop01" v-for="item in $store.state.shop" v-on:click="$store.commit('foodadd',item.id)">
            <span><img :src='item.src'></span>
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
        </div>
      </div>
    </div>
</template>
<script>
    /* eslint-disable */
    import store  from './../vuex/store'
    export default {
        name: 'righttop',
        store
    }
</script>
<style scoped>
p{
    margin: 0;
    padding: 0;
}
    .righttop {
      width: 100%;
      height: 300px;
    }
  .top{
    background-color:sandybrown;
    width: 94%;
    height: 50px;
    font-size: 22px;
    line-height: 50px;
    padding:0 22px ;
    letter-spacing: 3px;
    color:rebeccapurple;
  }
  .shop{
    width: 100%;
    height:250px;
    overflow: auto;
  }
  .shop .shop01{
    height:auto;
    background-color: #ffb734;
    color: #612553;
    font-size: 18px;
    text-align: center;
    margin: 20px 30px;
    float: left;
  }
  .shop01 img{
      width:100px;
      height:100px;
  }
</style>