<template>
    <div>

        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="/home">Al-Muhtarf</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse  id="nav-collapse" is-nav>
                    <b-navbar-nav  v-show="role === 'admin'">
                        <b-nav-item href="/users">Users</b-nav-item>

                        <b-nav-item-dropdown  text="Products">
                            <b-dropdown-item href="/createProduct">Create Product</b-dropdown-item>
                            <b-dropdown-item href="/products">View Products</b-dropdown-item>

                        </b-nav-item-dropdown>
<!--                        <b-nav-item href="#" >Disabled</b-nav-item>-->

                            <b-nav-item-dropdown text="Orders">
                                <b-dropdown-item href="/refused">Refused Order</b-dropdown-item>
                                <b-dropdown-item href="/active">Active Order</b-dropdown-item>
                                <b-dropdown-item href="/unactive">UnActive Order</b-dropdown-item>
                            </b-nav-item-dropdown>



                    </b-navbar-nav>

                    <b-navbar-nav v-show="role === 'user'">
                        <b-nav-item href="/myOrders">Orders</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-form>
                        <div class="autocomplete">
                            <b-form-input autoComplete="off" v-model="query" v-on:keyup="autoComplete"  size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <ul class="autocomplete-items" v-if="results.length">
                                <li class="list-group-item " v-for="result in results">
                                    {{ result.quantity }}
                                </li>
                            </ul>
                        </div>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown v-show="role === 'admin'"  text="Notification" right>
                            <b-dropdown-item v-for="notification in formatItems "href="#">
                               <p>{{notification.data.email}}</p>
                                 <strong>{{notification.data.phone}}</strong>
                                   <small>{{notification.created_at}}</small>

                            </b-dropdown-item>
                            <hr>
                            <b-dropdown-item href="#">
                                <p>Show all notification</p>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown  text="Lang" right>

                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em v-if="user"> {{ user.name }}</em>
                                <em v-else>User</em>
                            </template>
                            <b-dropdown-item v-if="user">{{user.balance}}</b-dropdown-item>
                            <b-dropdown-divider ></b-dropdown-divider>
                            <b-dropdown-item href="/profile" v-show="user">Profile</b-dropdown-item>
                            <b-dropdown-divider v-show="user"></b-dropdown-divider>
                            <b-dropdown-item href="#" @click="logout" v-show="user">Sign Out</b-dropdown-item>

                            <b-dropdown-item href="/register" v-show="!user">Register</b-dropdown-item>
                            <b-dropdown-divider  v-show="!user"></b-dropdown-divider>
                            <b-dropdown-item href="/login" v-show="!user">Login</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>

        </div>
        <div class="wrapper">
            <router-view />
            <div class="push"></div>.
        </div>
        <footer-style></footer-style>


    </div>


</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FooterStyle from "./layout/FooterStyle";
import Notification from "./layout/Notification";
import moment from "moment";
export default {
    data(){
        return{
            query:null,
            results: []
        }
    },
    computed: {
        ...mapGetters("auth", ["user","role"]),
        ...mapGetters("notification",["notificationCount","notifications"]),
        formatItems () {
            if (!this.notifications || this.notifications.length === 0) return []
            return this.notifications.map(item => {
                return {
                    ...item,
                    created_at: moment(item.created_at).format('MM/DD/YYYY hh:mm'),
                }
            })
        }
    },
    created() {


    },
    mounted() {
        if (localStorage.getItem("authToken") && localStorage.getItem("role")) {
            this.getUserData();
            this.getNotificationsRequest()
        }
    },
    methods: {
        ...mapActions("notification",["getNotificationsRequest",'markAtReadNotificationsRequest']),
        ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),
        logout() {
            this.sendLogoutRequest();
            this.$router.push({name: "Home"});
        },
        autoComplete(){
            this.results = [];
            if(this.query.length > 2){
                axios.get('http://localhost:8000/api/search',{params: {query: this.query}}).then(response => {
                    console.log("res : " + response.data)
                    this.results = response.data;
                });
            }
        }
    },
    components:{
        "footer-style":FooterStyle,
        "notification":Notification
    }

};
</script>

<style scoped>
* {
    margin: 0;
}
html, body {
    height: 100%;
}
.wrapper {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -142px; /* the bottom margin is the negative value of the footer's height */
}
.push {
    height: 142px; /* .push must be the same height as .footer */
}
.autocomplete {
    position: relative;
    display: inline-block;
}
#ul-autoComplete{
    z-index:2000 !important;
}
.autocomplete-items {
    background:#E8F0FE;
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    /*position the autocomplete items to be the same width as the container:*/
    top: 100%;
    left: 0;
    right: 0;
}
.autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
}




</style>
