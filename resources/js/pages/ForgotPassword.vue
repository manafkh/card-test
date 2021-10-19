<template>
    <div>
        <form>
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="resetPassword.email"
                       class="form-control form-control-lg"
                       :class ="{'is-invalid' : errors.email}"
                />
                <div class="invalid-feedback" v-if="errors.email">
                    {{ errors.email[0] }}
                </div>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" @click="Reset">Reset password</button>
            <b-alert show variant="danger">{{message}}</b-alert>
        </form>
    </div>
</template>

<script>
import {mapGetters , mapActions} from "vuex"
export default {
    data() {
        return {
            resetPassword:{
                email: null
            }
        }
    },
    computed:{
        ...mapGetters("auth",["message"]),
        ...mapGetters(["errors"])

    },
    mounted() {
        this.$store.commit("setErrors", {});
    },
    methods:{
        ...mapActions("auth",["sendResetLinkRequest"]),

        Reset: function (){
            this.sendResetLinkRequest(this.resetPassword).then(()=>{

            })
        }

    }
}
</script>
