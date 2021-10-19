import axios from "axios";
import VueCookies from "vue-cookies";
export default {
    namespaced: true,

    state: {
        user: null,
        messageData: null,
        resetToken: null,
        role:null,
        updatedData:false,
        changePassword:false,

    },

    getters: {
        user: state => state.user,
        message: state => state.messageData,
        resetToken:state =>state.resetToken,
        role:state => state.role,
        updatedData: state => state.updatedData,
        changePassword: state => state.changePassword,
    },

    mutations: {
        setUserData(state, user) {
            state.user = user;
            // axios.defaults.headers.common.Authorization =`bearer ${user.token}`;
        },
        setUpdatedData(state , updatedData){
          state.updatedData =  updatedData
        },
        setMessageData(state,message){
            state.messageData = message
        },
        resetTokenData(state , resetToken){
            state.resetToken = resetToken
        },
        setRoleData(state , role){
            state.role = role
        },
        setUserDetailInput: (state, e) => {
            let user = state.user;
            user[e.target.name] = e.target.value;
            state.user = user
        },
        setChangePassword(state, changePassword){
            state.changePassword = changePassword
        }
    },

    actions: {
        getUserData({ commit }) {
            axios
                .get("http://localhost:8000/api/user")
                .then(response => {
                    commit("setUserData", response.data.data);
                    commit("setRoleData",response.data.data.role)
                })
                .catch(() => {
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("role");
                });
        },
        updateProfile({commit}, data ){
            commit("setErrors", {}, { root: true });
            commit("setUpdatedData",true)
           return  axios.post("http://localhost:8000/api/updateProfile",data).then(response =>{
                commit("setUserData",response.data);
                commit("setUpdatedData",false);
         }).catch(error=>{
             console.log("error : " + error.response)
            });
        },
        updateUserInput({commit},e){
            commit('setUserDetailInput',e)
        },
        sendLoginRequest({ commit }, data) {
            commit("setErrors", {}, { root: true });
            return axios
                .post(`http://localhost:8000/api/login`, data )
                .then(response => {
                    commit("setUserData", response.data.user);
                    commit("setRoleData",response.data.user.role);

                    localStorage.setItem("authToken", response.data.access_token);
                    localStorage.setItem("role",response.data.user.role);

                }).catch(error=>{
                    commit("setMessageData","Unauthorized")

                });
        },
        sendRegisterRequest({ commit }, data) {
            commit("setErrors", {}, { root: true });
            return axios
                .post("http://localhost:8000/api/register", data)
                .then(response => {
                    commit("setUserData", response.data.user);
                    localStorage.setItem("authToken", response.data.token.accessToken);
                    localStorage.setItem("role",response.data.user.role)
                });
        },
        sendLogoutRequest({ commit }) {
            axios.get( "http://localhost:8000/api/logout").then(() => {
                commit("setUserData", null);

                localStorage.removeItem("authToken");
                localStorage.removeItem("role");
            });
        },
        sendResetLinkRequest({ commit }, data) {
            commit("setErrors", {}, { root: true });
            return axios.post("http://localhost:8000/api/password/create",data).then(response=>{
                commit("setMessageData",response.data.message);

            }).catch(error=>{
                commit("setMessageData","We can\\'t find a user with that e - mail address .")
                console.log(error.response.data.message)
            });
        },
        findTokenRequest({ commit }, token) {
            return axios
                .get(process.env.APP_URL + "password/find/" + token)
                .then(() => {
                    commit('resetTokenData',token)
                });
        },
        resetPasswordRequest({commit},data){
            commit("setErrors", {}, { root: true });
            return axios
                .post("http://localhost:8000/api/password/reset",data)
                .then(response=>{
                    commit("setMessageData",response.data.message)
                }).catch(error =>{
                    commit("setMessageData", error.response)
                    console.log(error.response)
                });
        },

        changePasswordRequest({commit},data){
            commit("setChangePassword", true)
            commit("setErrors", {}, { root: true });
          return   axios.post("http://localhost:8000/api/changePassword",data).then(response =>{
                commit("setChangePassword",false)

            })

        }
    }
};
