<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h6>Add Product</h6>
            </div>
            <div class="card-body">
                <!-- <form v-on:submit.prevent="onSaveProduct" :validation-schema="schema"> -->

                <div v-if="id !== null">
                    <form method="post" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="quantity">Quantity</label>
                            <input
                                type="text"
                                name="quantity"
                                class="form-control"
                                :class="{ 'is-invalid': errors.quantity }"
                                id="quantity"
                                :value="product.quantity"
                                @input="updateProductInputAction"
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
                                name="price"
                                :class="{ 'is-invalid': errors.price }"
                                id="price"
                                :value="product.price"
                                @input="updateProductInputAction"
                            />
                            <div class="invalid-feedback" v-if="errors.price">
                                {{ errors.price[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label >Select Category</label>
                            <b-form-select
                                name="category_id"
                                :class="{ 'is-invalid': errors.category_id }"
                                v-model="product.category.id"
                                @input="updateProductInputAction"
                                :options="categories"></b-form-select>
                            <div class="invalid-feedback" v-if="errors.category_id">
                                {{ errors.category_id[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Details</label>
                            <b-form-textarea
                                id="details"
                                name="details"
                                :value="product.details"

                                rows="3"
                                max-rows="6"
                                @input="updateProductInputAction"
                            ></b-form-textarea>
                        </div>

                        <button type="button" @click="onSubmit" class="btn btn-primary">
                            Save Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions ,mapGetters} from "vuex"
export default {
    name: "EditProduct",
    data(){
       return{
           id:null,
       }
    },
    created: function(){
         this.id = this.$route.params.id;
        this.fetchDetailProduct(this.id);

    },
    mounted() {
        this.getCategoriesData()
        this.$store.commit("setErrors", {});
    },
    computed:{
        ...mapGetters(['errors']),
        ...mapGetters('product',['updateData','isUpdating','product']),
        ...mapGetters("category",['categories'])
    },
    methods:{
      ...mapActions('product',['sendUpdateProductRequest','fetchDetailProduct',"updateProductInput"]),
        ...mapActions('category',['getCategoriesData']),

        onSubmit(){
            this.sendUpdateProductRequest(this.product)
        },

        updateProductInputAction(e){
          this.updateProductInput(e);
        }
    },
    watch: {
        updateData: function () {
            if (this.updateData !== null && !this.isUpdating) {
                this.$swal.fire({
                    text: "Success, Product has been updated successfully !",
                    icon: "success",
                    position: "top-end",
                    timer: 1000,
                });
                this.$router.push({ name: "Products" });
            }
        },
    },
}
</script>

<style scoped>

</style>
