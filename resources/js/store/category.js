import axios from "axios";

export default {
    namespaced : true,

    state:{
        categories:[],
        createdData:null,
        isCreating:false,
        deletedData:null,
        isDeleting:false,

    },
    getters:{
        categories: state => state.categories
    },
    mutations:{
        setCategories(state , categories){
            state.categories = categories
        },
        setCreateCategory(state , category){
            state.categories.unshift(category);
            state.createdData = category
        },
        setDestroyCategory(state , id){
            state.categories.filter(x => x.id !== id)
        },
        setCategoryIsCreating(state , isCreating){
          state.isCreating = isCreating
        },
        setCategoryIsDeleting(state , isDeleting){
            state.isDeleting = isDeleting
        }
    },
    actions:{
        getCategoriesData({commit}){
            axios.get("http://localhost:8000/api/categories").then(response =>{
                commit("setCategories",response.data);

            }).catch(errors =>{
                console.log("errors :" + errors)

            });

        },
        createCategoryData({commit},data){
            commit("setCategoryIsCreating",true);
            axios.post("http://localhost:8000/api/createCategory",data).then(response =>{
               commit("setCreateCategory",response.data)
                commit("setCategoryIsCreating",false);
            });
        },
        destroyCategoryData({commit}, id){
            commit("setCategoryIsDeleting", true)
            axios.delete("").then(response =>{
                commit("setDestroyCategory",response.data)
                commit("setCategoryIsDeleting",false)
            });
        }

    }
}
