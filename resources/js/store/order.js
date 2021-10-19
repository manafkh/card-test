import axios from "axios";


export default {

    namespaced: true,

    state:{
        activeOrders:[] ,
        unActiveOrder:[],
        refusedOrder:[],
        orders:null,
        order: null,
        isRefused:false,
        isActive:false,
    },

    getters:{
        activeOrders:state => state.activeOrders,
        unActiveOrders: state => state.unActiveOrder,
        refusedOrders: state => state.refusedOrder,
        orders: state => state.orders,
        order: state => state.order,
        isRefused: state => state.isRefused,
        isActive: state => state.isActive,
    },

    mutations:{
        setOrdersData(state , orders){
            state.orders = orders
        },
        setActiveOrder(state , activeOrder){
            state.activeOrders = activeOrder
        },
        setRefusedOrder(state , refusedOrder){
            state.refusedOrder = refusedOrder
        },
        setUnActiveOrder(state , unActiveOrder){
            state.unActiveOrder = unActiveOrder
        },
        setIsActiveOrder(state , isActive){
            state.isActive = isActive
        },
        setIsRefusedOrder(state , isRefused){
          state.isRefused = isRefused
        },


    },
    actions:{

        getOrdersData({commit}){
            axios.get(process.env.APP_URL+"getAllOrders")
                .then(response=>{
                   commit("setOrdersData",response.data)
                });
        },
        getRefusedOrderData({commit}){
            axios.get("http://localhost:8000/api/getRefusedOrders")
                .then(response=>{
                    commit("setRefusedOrder",response.data)
                    console.log(response.data)
                });
        },
        getActiveOrderData({commit}){
            axios.get("http://localhost:8000/api/getActiveOrders")
                .then(response=>{
                    commit("setActiveOrder",response.data)
                    console.log(response.data)
                });
        },
        getUnActiveOrderData({commit}){
            axios.get("http://localhost:8000/api/getUnActiveOrders")
                .then(response=>{
                    commit("setUnActiveOrder",response.data)
                    console.log(response.data)
                });
        },
        getMyOrdersData({commit}){
          axios.get("http://localhost:8000/api/getMyOrders")  .then(response =>{
             commit("setOrdersData",response.data)
          });
        },

       async sendActiveOrder({commit},id){
            commit("setIsActiveOrder",true)
            await axios.post(`http://localhost:8000/api/activationOrder/${id}`)
                .then(response => {
                    commit("setIsActiveOrder",false)
                });
        },
       async sendRefusedOrder({commit},id){


         await axios.post(`http://localhost:8000/api/refusedOrder/${id}`)
             commit("setIsRefusedOrder", true)
                .then(response=>{
                  commit("setIsRefusedOrder",false)
                });
        }

    }
}
