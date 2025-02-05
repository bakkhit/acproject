<template>
    <div id="footer">
        <div class="footerItem">
            <a href="">
                <img src="/acGreyLogo.png" alt="games">
            </a>
        </div>
        <div class="footerItem">
            <a href="">
                <img src="/acGreyLogo.png" alt="timeline">
            </a>
        </div>
        <div class="footerItem">
            <a href="">
                <img src="/acGreyLogo.png" alt="quiz">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style scoped>
#footer {
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    background-color: #242424;
    border-top: 2px solid rgb(253, 59, 59);
}

#footer img {
    width: 30px;
}
.footerItem{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: none;
    border-radius: 100%;
    transition: all 1s;
}
.footerItem:hover{
    background-color: rgb(253, 59, 59);
    scale: 1.2;
}
</style>