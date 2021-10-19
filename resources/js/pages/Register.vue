<template>
    <div class="login mt-5">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <form method="POST" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="email">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.name }"
                            id="name"
                            v-model="details.name"
                            placeholder="Enter name"
                        />
                        <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
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
                        <label for="phone">Phone Number</label>
                        <input
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.phone_number }"
                            id="phone"
                            v-model="details.phone_number"
                            placeholder="Enter name"
                        />
                        <div class="invalid-feedback" v-if="errors.phone_number">
                            {{ errors.phone_number[0] }}
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
                    <button type="button" @click="register" class="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
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
                name: null,
                email: null,
                phone_number:null,
                password: null,
                password_confirmation: null,
            }
        };
    },

    computed: {
        ...mapGetters(["errors"])
    },
    mounted() {
        this.$store.commit("setErrors", {});
    },
    methods: {
        ...mapActions("auth", ["sendRegisterRequest"]),
        register: function() {
            this.sendRegisterRequest(this.details).then(() => {
                this.$router.push({ name: "Home" });
            });
        }
    }
};
</script>





<!--<template>-->
<!--    <div class="container">-->
<!--        <div class="card card-default">-->
<!--            <div class="card-header">Inscription</div>-->
<!--            <div class="card-body">-->
<!--                <div class="alert alert-danger" v-if="has_error && !success">-->
<!--                    <p v-if="error == 'registration_validation_error'">Erreur(s) de validation, veuillez consulter le(s) message(s) ci-dessous.</p>-->
<!--                    <p v-else>Erreur, impossible de s'inscrire pour le moment. Si le problème persiste, veuillez contacter un administrateur.</p>-->
<!--                </div>-->
<!--                <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">-->
<!--                    <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">-->
<!--                        <label for="email">E-mail</label>-->
<!--                        <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email">-->
<!--                        <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>-->
<!--                    </div>-->
<!--                    <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">-->
<!--                        <label for="password">Mot de passe</label>-->
<!--                        <input type="password" id="password" class="form-control" v-model="password">-->
<!--                        <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>-->
<!--                    </div>-->
<!--                    <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">-->
<!--                        <label for="password_confirmation">Confirmation mot de passe</label>-->
<!--                        <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation">-->
<!--                    </div>-->
<!--                    <button type="submit" class="btn btn-default">Inscription</button>-->
<!--                </form>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--import auth from '../auth'-->
<!--export default {-->
<!--    data() {-->
<!--        return {-->
<!--            name: '',-->
<!--            email: '',-->
<!--            password: '',-->
<!--            password_confirmation: '',-->
<!--            has_error: false,-->
<!--            error: '',-->
<!--            errors: {},-->
<!--            success: false-->
<!--        }-->
<!--    },-->
<!--    methods: {-->
<!--        register() {-->
<!--            var app = this-->
<!--            this.$auth.register({-->
<!--                data: {-->
<!--                    email: app.email,-->
<!--                    password: app.password,-->
<!--                    password_confirmation: app.password_confirmation-->
<!--                },-->
<!--                success: function () {-->
<!--                    app.success = true-->
<!--                    this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})-->
<!--                },-->
<!--                error: function (res) {-->
<!--                    console.log(res.response.data.errors)-->
<!--                    app.has_error = true-->
<!--                    app.error = res.response.data.error-->
<!--                    app.errors = res.response.data.errors || {}-->
<!--                }-->
<!--            })-->
<!--        }-->
<!--    },-->
<!--    components:{-->
<!--        auth-->
<!--    }-->
<!--}-->
<!--</script>-->
