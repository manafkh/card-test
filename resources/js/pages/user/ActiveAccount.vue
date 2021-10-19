<template>

    <b-card bg-variant="dark" text-variant="white" title="Card Title">
        <b-card-text>
            {{this.$router.query.token}}
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

</template>

<script>
export default {
    name: "ActiveAccount",

    // methods:{
    //     ActiveAccount(){
    //         axios.get("signup/activate/").then(response=>{
    //            this.$router.push({name:"Home"});
    //         });
    //     }
    // }
}
</script>

<style scoped>

</style>
