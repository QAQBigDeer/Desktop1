<template>
    <div class="mainright">
      <righttop></righttop>
    </div>
</template>
<script>
    /* eslint-disable */
    import righttop from './rightTop.vue';
    export default {
        name: 'mainright',
        components:{righttop}
    }   
</script>
<style scoped>
    .mainright {
      width: 700px;
      height: 600px;
      background-color: #fdf7c1;
      float: right;
    }
</style>