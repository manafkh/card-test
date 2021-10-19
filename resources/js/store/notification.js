import axios from "axios";

export default {
    namespaced: true,

    state:{
        notifications:[],
        notificationCount:null,
    },
    getters:{
        notifications: state => state.notifications,
        notificationCount: state => state.notificationCount,
    },
    mutations:{
      setNotifications(state , notification){
          state.notifications = notification
          state.notificationCount = notification.length
      },
      setMarkAtReadNotification(state ,id){
          state.notifications.filter(x => x.id !== id)
      }

    },
    actions:{
        getNotificationsRequest({commit}){
            axios.get(`http://localhost:8000/api/unreadNotification`).then(response =>{
                console.log(response.data)
               commit("setNotifications",response.data)
            }).catch(error =>{
                console.log(error)
            });
        },
        markAtReadNotificationsRequest({commit}, id){
            axios.post(`${process.env.Vue_APP_API_URL}/unreadNotification`,id).then(response =>{
                commit("setMarkAtReadNotification", id)
            }).catch(error =>{
               console.log(error)
            });
        }
    }



}
