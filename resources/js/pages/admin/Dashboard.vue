<template>
    <div>

        <nav-bar></nav-bar>
        <div>
            <t-table></t-table>
        </div>

    </div>
</template>
<script>

import NavBar from "../../layout/NavBar";
import Table from "../../layout/Table";

export default {
    name:"Home",
    mounted() {
        //
    },

    components:{
        NavBar,
        't-table': Table,

    }
}
</script>
