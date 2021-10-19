<template>
<!--    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">-->
    <div class="container">
        <div class="row flex-lg-nowrap">

            <div class="col">
                <div class="row">
                    <div class="col mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="e-profile">
                                    <div class="row">

                                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                            <div class="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{ user.name }}</h4>
                                                <p class="mb-0">{{ user.email }}</p>

                                            </div>
                                            <div class="text-center text-sm-right">
                                                <span class="badge badge-secondary">"{{ user.role }}"</span>
                                                <div class="text-muted"><small>{{changeFormatDate(user.created_at)}}</small></div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item"><a class="nav-link active"
                                                                id="v-tabs-settings-tab"
                                                                data-toggle="tab"
                                                                href="#v-tabs-settings"
                                                                role="tab"
                                                                aria-controls="v-tabs-settings"
                                                                aria-selected="true">Settings</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link "
                                                                id="v-tabs-accounts-tab"
                                                                data-toggle="tab"
                                                                href="#v-tabs-accounts"
                                                                role="tab"
                                                                aria-controls="v-tabs-accounts"
                                                                aria-selected="true">Accounts</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link "
                                                                id="v-tabs-password-tab"
                                                                data-toggle="tab"
                                                                href="#v-tabs-password"
                                                                role="tab"
                                                                aria-controls="v-tabs-password"
                                                                aria-selected="true">Change Password</a>
                                        </li>

                                    </ul>
                                    <div class="tab-content pt-3" id="v-tabs-tabContent" >
                                        <div class="tab-pane fade show active"
                                             id="v-tabs-settings"
                                             role="tabpanel"
                                             aria-labelledby="v-tabs-settings-tab">
                                            <form method="post" enctype="multipart/form-data">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>Username</label>
                                                                    <input class="form-control" :class="{ 'is-invalid': errors.name }" name="name" type="text"  :value="user.name" @input="updateUserInputAction">
                                                                </div>

                                                                <div class="invalid-feedback" v-if="errors.name">
                                                                    {{ errors.name[0] }}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>Phone Number</label>
                                                                    <input class="form-control" :class="{ 'is-invalid': errors.phone_number }" name="phone_number" :value="user.phone_number" type="text" @input="updateUserInputAction">
                                                                    <div class="invalid-feedback" v-if="errors.phone_number">
                                                                        {{ errors.phone_number[0] }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-end">
                                                        <button type="button" class="btn btn-primary" @click="settings">Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                        <div class="tab-pane fade"
                                             id="v-tabs-accounts"
                                             role="tabpanel"
                                             aria-labelledby="v-tabs-accounts-tab">
                                            <b-table
                                                :items="user.accounts"
                                                :fields="fields"
                                            >
                                            </b-table>

                                        </div>

                                        <div class="tab-pane fade"
                                             id="v-tabs-password"
                                             role="tabpanel"
                                             aria-labelledby="v-tabs-password-tab">

                                            <form method="post" enctype="multipart/form-data">
                                                <div class="row">
                                                    <div class="col-12 col-sm-6 mb-3">
                                                        <div class="mb-2"><b>Change Password</b></div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>Current Password</label>
                                                                    <input class="form-control" name="oldPassword" :class="{ 'is-invalid': errors.oldPassword }" v-model="password.oldPassword" type="password" placeholder="••••••">
                                                                    <div class="invalid-feedback" v-if="errors.oldPassword">
                                                                        {{ errors.oldPassword[0] }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>New Password</label>
                                                                    <input class="form-control" :class="{ 'is-invalid': errors.password }" v-model="password.password" type="password" placeholder="••••••">
                                                                    <div class="invalid-feedback" v-if="errors.password">
                                                                        {{ errors.password[0] }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>Confirm <span class="d-none d-xl-inline">Password</span></label>
                                                                    <input class="form-control"v-model="password.password_confirmation" type="password" placeholder="••••••"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-end">
                                                        <button type="button" class="btn btn-primary" @click="changePassword" >Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters ,mapActions} from "vuex"
import moment from "moment";
import Table from "../../layout/Table"
export default {
    name: "Profile",

    data(){
        return{
            details:{
                id : null,
                name:null,
                phone_number:null,
            },
            password:{
                id : null,
                email:null,
                password:null,
                password_confirmation:null,
                oldPassword:null,
            },
            fields:[
                { key: 'balance', label: 'Balance', sortable: true, sortDirection: 'desc' },
                { key: 'created_at', label: 'Date Created', sortable: true, class: 'text-center' },
            ]
        }

    },
    computed:{
        ...mapGetters("auth",["user"]),
        ...mapGetters(['errors']),

    },
    created() {
        // this.getUserData()
    },
    mounted() {
        this.$store.commit("setErrors",{})
    },

    methods:{
        ...mapActions("auth",["updateProfile","changePasswordRequest","updateUserInput"]),
        settings: function(){
            this.updateProfile(this.user).then(()=>{

                // this.$router.push({name: "Home"});
            });
        },
        updateUserInputAction(e){
            this.updateUserInput(e)
        },
        changeFormatDate: function (date){
            return moment(date).format("MM/DD/YYYY hh:mm")
        },
        changePassword: function (){
            this.password.id =  this.user.id;
            this.password.email = this.user.email
            this.changePasswordRequest(this.password).then(()=>{
                console.log(this.password)
                // this.$router.push({name: "Home"});
            });
        }

    },
    components:{
        "table-info":Table
    }
}

</script>

<style scoped>

</style>
