<template>
    <div class="login mt-5">
        <div class="card">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            :class="{ 'is-invalid': errors.email }"
                            id="email"
                            v-model="details.email"
                            placeholder="Enter email"
                        />
                        <div class="invalid-feedback" v-if="errors.email">
                            {{ errors.email[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': errors.password }"
                            id="password"
                            v-model="details.password"
                            placeholder="Password"
                        />
                        <div class="invalid-feedback" v-if="errors.password">
                            {{ errors.password[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Confirm password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password_confirmation"
                            v-model="details.password_confirmation"
                            placeholder="Confirm password"
                        />
                    </div>
                    <button type="button" @click="resetPassword" class="btn btn-primary">
                        Confirm {{token}}
                    </button>

                </form>
            </div>
            <b-alert show variant="primary">{{message}}</b-alert>
            <b-alert show variant="primary">{{errors.token}}</b-alert>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
    name: "ResetPassword",
    data(){
        return{
            details:{
                token: null,
                email: null,
                password : null,
                password_confirmation: null

            }
        }
    },
    created() {
        this.details.token = this.$route.params.token
    },
    mounted() {
        this.$store.commit("setErrors",{})

    },
    computed:{
        ...mapGetters('auth',["message"]),
        ...mapGetters(["errors"])
    },
    methods:{
        ...mapActions('auth',["findTokenRequest","resetPasswordRequest"]),

        resetPassword: function (){
            // this.token = this.$route.params.token
            this.resetPasswordRequest(this.details).then(()=>{
                console.log("g :  " +this.details.token)
                // this.$router.push({name : "Home"})
            })
        }
    }

}
</script>

<style scoped>

</style>
