<template>
    <div class="maincenten">
      <el-tabs v-model="activeName">
        <el-tab-pane label="订单" name="first"  >
          <el-table :data="$store.state.shopCar" border>
            <el-table-column
              prop="id"
              label="编号"
             >
            </el-table-column>
            <el-table-column
              prop="name"
              label="名称"
              >
            </el-table-column>
            <el-table-column
              prop="price"
              label="价格(元)"
             >
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量(件)"
             >
            </el-table-column>
            <el-table-column
              label="小计"
             >
             <template scope="scope">
               <span>{{scope.row.count*scope.row.price}}</span>
             </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template scope="scope">
                <el-button type="danger" size="small" v-on:click="$store.commit('removeID',scope.row.id)">移除</el-button>
              </template>
            </el-table-column>
          </el-table>
            <template>
              <div>合计：{{$store.state.h}}</div>
            </template>
           <div style="text-align: center;margin-top: 20px">
              <el-button type="warning" v-on:click="$store.commit('order')">挂单</el-button>
              <el-button type="danger" v-on:click="$store.commit('removeAll')">清空</el-button>
              <el-button type="success" v-on:click="$store.commit('orderture')">结账</el-button>
           </div>
        </el-tab-pane>
        <el-tab-pane label="挂单" name="second">
          <el-table :data="$store.state.ordershop" border>
            <el-table-column
              prop="orderID"
              label="编号"
             >
            </el-table-column>
            <el-table-column
              prop="arrname"
              label="订单明细"
              >
              <template scope="scope">
                <div v-for="(value,key) in scope.row.arrname">
                  <span class="name01">{{value.name}} </span>
                  <span class="price01">{{'￥'+value.price}}</span>
                  <span class="count01">{{value.count+'(件)'}}</span>
                </div>
              </template>
                </el-table-column>
                <el-table-column
                  prop="sum01"
                  label="小计"
                  width='70'
                >
            </el-table-column>
            <el-table-column
              label="操作"
            >
              <template scope="scope">
                 <el-button type="danger" size="small" v-on:click="$store.commit('removeDD',scope.row.orderID)">移除</el-button>
                 <el-button type="success" size="small" v-on:click="$store.commit('orderDDture',scope.row.orderID)">结账</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        <el-tab-pane label="结账" name="fourth">
          <el-table :data="$store.state.ordershopture" border>
            <el-table-column
              prop="orderID"
              label="编号"
             >
            </el-table-column>
            <el-table-column
              prop="arrname"
              label="订单明细"
              >
              <template scope="scope">
                <div v-for="(value,key) in scope.row.arrname">
                 <span class="name01">{{value.name}} </span>
                  <span class="price01">{{'￥'+value.price}}</span>
                  <span class="count01">{{value.count+'(件)'}}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="小计"
              width='70'
             >
            <template scope="scope">
                <div v-for="(value,key) in scope.row.arrname">
                  {{value.count*value.price}}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    

    </div>
</template>
<script>
    /* eslint-disable */
    import store  from './../vuex/store'
    export default {
      name: 'maincenten',
      store,
      data:function(){
          return {
          activeName: 'first'
        };
      }   
    }
</script>
<style scoped>
    .maincenten {
      width: 600px;
      height: 600px;
      border: 1px solid #2b542c;
      float: left;
      margin-left: 5px;
    }
    .name01{
      color: red;
      display: inline-block;
      width: 50px;
    }
    .price01{
      color: seagreen;
       display: inline-block;
      width: 40px;
    }
    .count01{
      color:slateblue;
       display: inline-block;
       width: 40px;
    }
</style>