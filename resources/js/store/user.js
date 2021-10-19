import axios from 'axios'

export default {
    namespaced : true,

    state:{
        users:[],
        user:null,
        balance:null,
        createdData:null,
        isCreating:false,
        isDeleting:false

    },
    getters:{
        users: state => state.users,
        user: state => state.user,
        balance : state => state.balance,
        createdData: state => state.createdData,
        isCreating: state => state.isCreating,
        isDeleting: state => state.isUpdating,

    },
    mutations:{
        setUsersData(state , users){
            state.users = users
        },
        setUserData(state , user){
            state.user = user
        },
        setCreateBalance(state , balance){
            state.user.accounts.unshift(balance)
            state.balance = balance
        },
        setIsCreatingBalance(state,isCreating){
            state.isCreating = isCreating
        },
        setIsDeleteBalance(state , id){
            state.user.accounts.filter(x => x.id !== id)

        },

        setIsDeletingBalance(state , isUpdating){
           state.isUpdating = isUpdating
        }

    },
    actions:{
       async getUsersData({commit}){
           await axios.get(`http://localhost:8000/api/getAllUser`).then(response =>{
               console.log(response.data.data)
               commit("setUsersData",response.data.data)
            });
        },
        async getUserData({commit},id){
           await axios.get(`http://localhost:8000/api/showUser/${id}`).then(response =>{
               commit("setUserData",response.data.data)
           });
        },
        async sendCreateBalanceRequest({commit},data){

            commit("setErrors", {}, { root: true });
            commit("setIsCreatingBalance",true)
         return   await axios.post(`http://localhost:8000/api/createBalance/${data.userID}`,data).then(response =>{
               commit("setCreateBalance",response.data)
               commit("setIsCreatingBalance",false)
           })
        },
        async  sendDestroyBalanceRequest({commit},id){
            commit("setIsDeletingBalance",false)
           await axios.delete(`http://localhost:8000/api/destroyBalance/${id}`).then(response =>{
               commit("setIsDeleteBalance",id);
               commit("setIsDeletingBalance",false)
               console.log(response.data)
           });
        },
    }
}
