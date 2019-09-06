import axios from 'axios';

export default {
    state:{
        cartlist:[]
    },
    getters:{
        totalPrice:function(state){
            return state.cartlist.reduce(function(prev,item){
                // prev：前一次reduce的返回值
                return prev+item.SellPrice*item.qty
            },0)
            
            
        }
    },

    //修改state的唯一方式：mutations
    // 触发mutation: store.commit('addItem',{})
    mutations:{
        addItem(state,goods){
            state.cartlist.push(goods)
        },
        removeItem(state,id){
            state.cartlist = state.cartlist.filter(item=>item.CommodityCode!=id);
        },
        changeQty(state,{qty,id}){
            state.cartlist = state.cartlist.map(item=>{
                if(item.CommodityCode === id){
                    item.qty = qty;
                }
                return item;
            })
        },
      
    },

}