<template>
    <div>

        <b-card header="User Account" v-if="id !== null">
            <b-list-group class="text-center">
                <b-list-group-item href="#">Username : {{user.name}}</b-list-group-item>
                <b-list-group-item href="#">Phone Number : {{user.phone_number}}</b-list-group-item>
                <b-list-group-item href="#">Email Account : {{user.email}}</b-list-group-item>
                <b-list-group-item href="#">Balance  : {{user.balance}}</b-list-group-item>
                <b-list-group-item href="#">Activation Account : {{user.active === 1 ? "Yes": "No"}}</b-list-group-item>
                <b-button v-b-modal.modal-prevent-closing>Add balance</b-button>

            </b-list-group>
        </b-card>
        <div>
            <b-table striped hover :items=formatItems :fields="fields">
                <template #cell(actions)="row">
                                    <b-button size="sm" @click="destroy(row.item.id)" class="mr-1">
                                        <i class="fa fa-trash"></i> Delete
                                    </b-button>
                </template>
            </b-table>
        </div>

        <b-modal
            id="modal-prevent-closing"
            ref="my-modal"
            title="Add Budget"

        >
            <form method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="balance">Budget</label>
                    <input
                        type="text"
                        name="balance"
                        class="form-control"
                        :class="{ 'is-invalid': errors.balance }"
                        id="balance"
                        v-model="account.balance"

                    />
                    <div class="invalid-feedback" v-if="errors.balance">
                        {{ errors.balance[0] }}
                    </div>
                </div>
                <button type="button" @click="create" class="btn btn-primary">
                    Save Product
                </button>
            </form>
        </b-modal>

    </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex'
import moment from "moment";
export default {
    name: "ViewUser",
    data(){
        return{
            id:null,
            account:{
                balance:null,
                userID : null,
            },
            fields: [
                { key: 'balance', label: 'Balance', sortable: true, sortDirection: 'desc' },
                { key: 'created_at', label: 'Created Date',
                    sortable: true,
                    sortByFormatted: true,
                    filterByFormatted: true
                },
                { key: 'actions', label: 'Actions' }
            ]

        }
    },
    created:function () {
        this.id = this.$route.params.userId;
        this.account.userID =  this.$route.params.userId

        this.getUserData(this.id);
    },
    mounted() {
        this.$store.commit("setErrors", {});
    },
    computed:{
        ...mapGetters('user',["user","balance","isCreating"]),
        ...mapGetters(['errors']),
        formatItems () {
            if (!this.user.accounts || this.user.accounts.length === 0) return []
            return this.user.accounts.map(item => {
                return {
                    ...item,
                    created_at: moment(item.created_at).format('MM/DD/YYYY hh:mm'),
                }
            })
        },
    },
    watch: {
        balance: function () {
            this.$refs['my-modal'].hide()
            if (this.balance !== null && !this.isCreating) {
                this.$swal.fire({
                    text: "Success, Budget has been add successfully !",
                    icon: "success",
                    position: "top-end",
                    timer: 1000,
                });

            }
        },
    },
    methods:{
        ...mapActions('user',['getUserData','sendDestroyBalanceRequest','sendCreateBalanceRequest']),

        destroy(id)
        {
            this.$swal.fire({
                text: "Are You Sure For Deleted ? ",
                icon:"error",
                cancelButtonText: "cancel",
                confirmButtonText: "yes ,Confirm Delete "
            }).then((res)=>{
                if(["isConfirmed"]){
                    this.sendDestroyBalanceRequest(id);
                    this.getUserData(this.id);

                    this.$swal.fire({
                        text: "Success , Balance has been Successfully",
                        icon:"success",
                        position:'top-end',
                        timer:2000,
                    })
                }
            });
        },
        create(){
            console.log(this.account)
            this.sendCreateBalanceRequest(this.account);
        }

    },
}
</script>

<style scoped>

</style>
