 <template>
    <div class="mainLeft">
      <div class="main">
        <div><img src="../../static/images/icon_free.png"></div>
        <div><span>收银</span></div>
      </div>
      <div class="main">
        <div><img src="../../static/images/icon_free.png"></div>
        <div><span>店铺</span></div>
      </div>
      <div class="main">
        <div><img src="../../static/images/icon_free.png"></div>
        <div><span>商品</span></div>
      </div>
      <div class="main">
        <div><img src="../../static/images/icon_free.png"></div>
        <div><span>会员</span></div>
      </div>
      <div class="main">
        <div><img src="../../static/images/icon_free.png"></div>
        <div><span>统计</span></div>
      </div>
      <div class="main">
        <div><img src="../../static/images/icon_free.png"></div>
        <div><span>设置</span></div>
      </div>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
      name:'mainLeft'
    }

</script>
<style scoped>
    .mainLeft {
      width: 100px;
      height: 600px;
      background-color: #8e75cc;
      float: left;
    }
    .main{
      background-color: #8e75cc;
      text-align: center;
      padding: 10px 0;
      border-top: 1px solid #e1e1e1;
    }
  .main>div{
    width: 100%;
    height: auto;
    color: white;
  }
</style>