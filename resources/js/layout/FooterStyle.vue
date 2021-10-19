<template>
    <div id="footer">
        <div id="contacts">
            <div id="contacts--contact">
                <p>{{ mail }}</p>
                <p>{{ phone }}</p>
            </div>
            <div id="contacts--social">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div id="mentions">
            <p>{{ mention }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterStyle",
    data(){
        return{
            mail : 'xavier.seignard+drangies@gmail.com',
            phone : '06.00.00.00.00',
            mention : '2018 | mentions légales'
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #17A2B8;
    color: white;
    text-align: center;
    height: 142px;
}
#contacts{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
}
#contacts--contact{
    text-align:right;
}
#contacts--social{
    width:20%;
    display : flex;
    justify-content : space-between;
}
#contacts--social div{
    height:30px;
    width:30px;
    background-color:white;
    border-radius:50%;
}
#mentions p {
    font-size:0.5em;
}
</style>
