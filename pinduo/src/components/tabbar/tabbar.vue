<template>
    <div class="tabbar">
        <div class="item" @click="switchTo('/home')">
            <img :src=' $route.path.includes("/home") ? routerList[0].selected : routerList[0].actine' alt="">
            <span :class="{on: $route.path.includes('/home')}">首页</span>
        </div>
        <div class="item" @click="switchTo('/recommended')">
            <img :src=' "/recommended" === $route.path ? routerList[1].selected : routerList[1].actine' alt="">
            <span :class="{on: '/recommended' === $route.path}">推荐</span>
        </div>
        <div class="item" @click="switchTo('/search')">
            <img :src=' "/search" === $route.path ? routerList[2].selected : routerList[2].actine' alt="">
            <span :class="{on: '/search' === $route.path}">搜索</span>
        </div>
        <div class="item" @click="switchTo('/chat')">
            <img :src=' "/chat" === $route.path ? routerList[3].selected : routerList[3].actine' alt="">
            <span :class="{on: '/chat' === $route.path}">聊天</span>
        </div>
        <div class="item" @click="switchTo('/my')">
            <img :src=' "/my" === $route.path ? routerList[4].selected : routerList[4].actine' alt="">
            <span :class="{on: '/my' === $route.path}">个人中心</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            routerList:[{
                actine:"static/img/wu.png",
                selected:"static/img/you.png"
            },{
                actine:"static/img/wu.png",
                selected:"static/img/you.png"
            },{
                actine:"static/img/wu.png",
                selected:"static/img/you.png"
            },{
                actine:"static/img/wu.png",
                selected:"static/img/you.png"
            },{
                actine:"static/img/wu.png",
                selected:"static/img/you.png"
            }]
        }
    },
    computed:{

    },
    methods:{
        switchTo(path){
            this.$router.replace(path);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .tabbar{
        width: 100%;
        height: 1.1733333rem;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        font-size: .3733333rem;
        border-top: 1px solid #ccc;
        background: #fff;
    }
    .item{
        flex: 1;
        text-align: center;
    }
    img{
        width: .6133333rem;
        height: .6133333rem;
        text-align: center;
    } 

    span{
        display: block;
    }
    .on{
        color: red;
    }
    
</style>