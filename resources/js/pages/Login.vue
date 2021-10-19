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
                    <button type="button" @click="login" class="btn btn-primary">
                        Login
                    </button>
                    <router-link
                        class="btn btn-primary"
                        :to="{name : 'Verify'}" >reset password</router-link>
                </form>
            </div>
            <b-alert show variant="primary">{{message}}</b-alert>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Home",
    data: function() {
        return {
            details: {
                email: null,
                password: null
            }
        };
    },
    computed: {
        ...mapGetters(["errors"]),
        ...mapGetters("auth",["role","message"]),
    },
    mounted() {
        this.$store.commit("setErrors", {});
    },
    methods: {
        ...mapActions("auth", ["sendLoginRequest"]),

        login: function() {
            this.sendLoginRequest(this.details).then(() => {
                    this.$router.push({ name: "Home" });

            });
        }
    }
};
</script>
