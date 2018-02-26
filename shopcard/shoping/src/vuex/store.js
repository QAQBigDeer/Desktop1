/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    h:0,  // 合计
    shopCar:[],
    shop:[{
        id:1001,
        name:'苹果',
        price:12,
        src:'./../../static/images/1.jpg'
      },{
        id:1002,
        name:'香蕉',
        price:5,
        src:'../../static/images/2.jpg'
      },{
        id:1003,
        name:'西瓜',
        price:8,
        src:'../../static/images/3.jpg'
      },{
        id:1004,
        name:'芒果',
        price:4,
        src:'../../static/images/4.jpg'
      },{
        id:1005,
        name:'橘子',
        price:6,
        src:'../../static/images/5.jpg'
      }], 
      ordershop:[
        //   {
        //       orderID:'20170001',
        //       arrname:[
        //           {
        //               id:'1001',
        //               name:'苹果',
        //               count:1
        //           }
        //       ]
        //   }
      ],
      ordershopture:[],
}
const mutations={
    //删除单个商品
    removeID(state,id){

        // alert('aaa')
        var _this=this;
    
       this.state.shopCar.forEach(function(item,index) {
            //alert(item.id) 
            if(id==item.id){
                var m=confirm('亲，确定要删除此商品吗？');
                if(m){
                     _this.state.shopCar.splice(index,1);
                }
            }
       }); 
        this.state.h=0;
        this.state.shopCar.forEach(function(item,index){
            _this.state.h+=item.count*item.price;
        });

    },
    //把商品添加到购物车
    foodadd(state,id){
        //alert('aaaa');
        var _this=this;
        var flag=false;
        var obj=new Object();
        this.state.shop.forEach(function(item,index){
            if(id==item.id){
                obj.id=item.id;
                obj.name=item.name;
                obj.price=item.price;
                _this.state.shopCar.forEach(function(value,index){
                    if(id==value.id){
                        obj.count=value.count++;
                        flag=true;
                    }
                });
            
                if(!flag){
                     obj.count=1;
                     _this.state.shopCar.push(obj);
                }
            }  
        })
            this.state.h=0;
            this.state.shopCar.forEach(function(item,index){
            _this.state.h+=item.count*item.price;
        });
    },
    //清空购车
    removeAll(state){
       // alert('aaa')
         var m=confirm('亲，确定要删除此商品吗？');
        if(m){
             this.state.shopCar=[];
              this.state.h=0;
        }
           
        
    },
    //商品合计
    totalPrice(state){
        var _this=this;
        this.state.shopCar.forEach(function(item,index){
            _this.state.h+=item.count*item.price;
        })
    },       

    //挂单
    order(state){
        var sum=0;
        var _this=this;
        var orderdate=new Date();
        var obj=new Object();
        obj.orderID='G'+orderdate.getTime();
        obj.arrname=this.state.shopCar;
        obj.arrname.forEach(function(value,index){
            sum+=value.count*value.price;
        })
        obj.sum01=sum;
        this.state.ordershop.push(obj);
        this.state.shopCar=[];
        this.state.h=0;       
     },
     //删除订单
     removeDD(state,id){
         var _this=this;
         this.state.ordershop.forEach(function(value,index){
             if(id==value.orderID){
                var m=confirm('亲，确定要删除此订单吗？');
                if(m){
                    _this.state.ordershop.splice(index,1);
                }
                 
             }
         })
     },
     //结账
     orderture(state){
        var sum=0;
        var _this=this;
        var orderdate=new Date();
        var obj=new Object();
        obj.orderID='G'+orderdate.getTime();
        obj.arrname=this.state.shopCar;
        obj.arrname.forEach(function(value,index){
            sum+=value.count*value.price;
        })
        obj.sum01=sum;
        this.state.ordershopture.push(obj);
        this.state.shopCar=[];
        this.state.h=0;       
     },
     //结账订单
     orderDDture(state,orderID){
         var _this=this;
         this.state.ordershop.forEach(function(value,index){
             if(value.orderID==orderID){
                 var m = _this.state.ordershop.slice(index,index+1)[0];
                 _this.state.ordershop.splice(index,1);
                 _this.state.ordershopture.push(m);
             }
         })
     }

}

export default new Vuex.Store({
    state,
     mutations
})