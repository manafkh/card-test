<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h6>Add Product</h6>
            </div>
            <div class="card-body">
                <!-- <form v-on:submit.prevent="onSaveProduct" :validation-schema="schema"> -->
                <form method="POST" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="quantity">Quantity</label>
                        <input
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.quantity }"
                            id="quantity"
                            v-model="product.quantity"
                            placeholder="Enter name"
                        />
                        <div class="invalid-feedback" v-if="errors.quantity">
                            {{ errors.quantity[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            class="form-control"
                            :class="{ 'is-invalid': errors.price }"
                            id="price"
                            v-model="product.price"
                            placeholder="Enter Price"
                        />
                        <div class="invalid-feedback" v-if="errors.price">
                            {{ errors.price[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label >Select Category</label>
                        <b-form-select
                            :class="{ 'is-invalid': errors.category_id }"
                            v-model="product.category_id"
                            :options="categories"></b-form-select>
                        <div class="invalid-feedback" v-if="errors.category_id">
                            {{ errors.category_id[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Details</label>
                        <b-form-textarea
                            id="details"
                            v-model="product.details"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                    </div>

                    <button type="button" @click="onSubmit" class="btn btn-primary">
                        Save Product
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
    data: function () {
     return {
         product:{
             quantity: null,
             price: null,
             category_id:null,
             details:null
         }
     }


    },
    computed: { ...mapGetters("product",["isCreating", "createData"]),
                ...mapGetters("category",["categories"]),
                ...mapGetters(["errors"])

    },
    mounted() {
        this.getCategoriesData();
        this.$store.commit("setErrors", {});
    },
    methods: {
        ...mapActions("product",["sendCreateProductRequest"]),
        ...mapActions("category",["getCategoriesData"]),
        onSubmit :function() {
            console.log(this.product)
            this.sendCreateProductRequest(this.product)

        }
    },
    watch: {
        createData: function () {
            if (this.createData !== null && !this.isCreating) {
                this.$swal.fire({
                    text: "Success, Product has been added.",
                    icon: "success",
                    position: "top-end",
                    timer: 1000,
                });

                this.$router.push({ name: "Products" });

            }
        },
    },

};
</script>
