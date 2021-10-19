import axios from "axios"

export default {
    namespaced: true,

    state: {
        products: [],
        product:null,
        isLoading:false,
        isCreating:false,
        isUpdating:false,
        isDeleting:false,
        createData: null,
        updateData: null,
        deleteData: null,

    },

    getters: {
        products: state => state.products,
        product : state => state.product,
        isLoading : state => state.isLoading,
        isUpdating: state => state.isUpdating,
        isDeleting: state => state.isDeleting,
        isCreating: state => state.isCreating,
        createData: state => state.createData,
        updateData : state => state.updateData,
        deleteData:  state => state.deleteData,
    },

    mutations: {
        setProductsData(state, products) {
            state.products = products
        },
        setProductDetail(state , product){
            state.product = product
        },
        setDeleteProduct(state , id){
                state.products.filter(x => x.id !== id)
        },
        saveNewProduct(state , product){
          state.products.unshift(product)
            state.createData = product
        },
        saveUpdateProduct(state , product){
            state.products.unshift(product)
            state.updateData = product
        },
        setProductIsCreating(state , isCreating){
            state.isCreating = isCreating
        },
        setProductIsUpdating(state , isUpdating){
            state.isUpdating = isUpdating
        },
        setProductIsLoading(state , isLoading){
            state.isLoading = isLoading
        },
        setProductIsDeleting(state , isDeleting){
            state.isDeleting = isDeleting
        },
        setProductDetailInput: (state, e) => {
            let product = state.product;
            product[e.target.name] = e.target.value;
            state.product = product
        },

    },
    actions: {
        getProductsData({commit}) {

            commit("setProductIsLoading",true)
            axios.get("http://localhost:8000/api/product").then(response => {
                commit("setProductsData", response.data.data)
                commit("setProductIsLoading",false)
            }).catch(err => {
                console.log('error', err);
                commit('setProductIsCreating', false);
            });
        },
        async fetchDetailProduct({commit}, id) {
            commit('setProductIsLoading', true);

            await axios.get(`http://localhost:8000/api/editProduct/${id}`)
                .then(res => {
                    console.log(res.data.data)
                    commit('setProductDetail', res.data.data);
                    commit('setProductIsLoading', false);
                }).catch(err => {
                    console.log('error', err);
                    commit('setProductIsLoading', false);
                });
        },

        sendCreateProductRequest({commit}, data) {
            commit("setErrors", {}, { root: true });
            commit("setProductIsCreating",true)
           return  axios.post("http://localhost:8000/api/createProduct",data).then(response => {

                    commit("saveNewProduct",response.data.data)
                    commit("setProductIsCreating",false)
            }).catch(err => {
                console.log('error', err);
                commit('setProductIsCreating', false);
            });
        },
        async sendUpdateProductRequest({commit},product) {
            commit("setErrors", {}, { root: true });
            commit("setProductIsUpdating",true)
           await axios.post(`http://localhost:8000/api/updateProduct/${product.id}?_method=PUT`,product).then(response => {
            commit("saveUpdateProduct",response.data.data)
            commit("setProductIsUpdating",false)

            }).catch(err => {
                console.log('error', err);
                commit('setProductIsUpdating', false);
            });
        },
        sendDestroyProductRequest({commit}, productId){
            commit("setProductIsDeleting",true)
            axios.delete(`http://localhost:8000/api/destroyProduct/${productId}`).then(response =>{
                console.log(response.data)
                commit("setDeleteProduct",productId)
                commit("setProductIsDeleting",false)
            }).catch(err => {
                console.log('error', err);
                commit('setProductIsDeleting', false);
            });
        },
        updateProductInput({ commit }, e) {
            commit('setProductDetailInput', e);
        }

    }
}
