<template>
    <div class="main">
        <div class="welcome">
            <span>Welcome!</span>
            
        </div>
        <section class="main_title">
            <div class="box box1">
                <p class="el-icon-picture"></p>
                <div v-text="nav.chart"></div>
            </div>
            <div class="box box2">
                <p class="el-icon-menu"></p>
                <div v-text="nav.table"></div>
            </div>
            <div class="box box3">
                <p class="el-icon-star-on"></p>
                <div v-text="nav.contact"></div>
            </div>
            <div class="box box4">
                <p class="el-icon-document"></p>
                <div v-text="nav.menu"></div>
            </div>
        </section>
        <section class="carou">
            <div class="carou_left">
                <div class="block">
                    <span class="demonstration">.</span>
                    <el-carousel trigger="click" height="250px">
                        <el-carousel-item v-for="item in imgsrc">
                            <img :src="item" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="carou_right">
                <div class="content">
                    <ul>
                        <li v-for="item in content">
                            <a href="">{{item}}</a>
                            <div class="el-icon-arrow-right "></div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </section>


    </div>
</template>
<style lang="less" scoped>
        .main{
            >.welcome{
                width:200px;
                height:50px;
                border-bottom:1px solid #f0f0f0;
                margin-bottom:20px;
                >span{
                    font-size:30px;
                    line-height:50px;
                } 
            }
            >.main_title{
                width:100%;
                height:100%;
                margin-bottom:20px;
                >.box{
                    width:24%;
                    height:100px;
                    float:left;
                    border-radius:10px;
                    text-align: center;
                    cursor:pointer;
                    &+.box{
                        margin-left:10px;
                    }
                    >[class^="el-icon"]{
                        color:#fff;
                        font-size:30px;
                        line-height: 80px;
                        transition:all 0.5s;
                    }
                    >div{
                        color:#fff;
                        margin-top:-15px;
                        transition:all 0.5s;
                    }
                    &:hover [class^="el-icon"]{
                        font-size:50px;
                    }
                    &:hover div{
                        display:none;
                    }
                }
                >.box1{
                    background-color:#5EC55C;
                }
                >.box2{
                    background-color: #f1b760;
                }
                >.box3{
                    background-color: #48629e;
                }
                >.box4{
                    background-color: #f3774a;                    
                }
            }
            >.carou{
                width:350px;
                height:300px;
                position: relative;
                top:120px;
                >.carou_left{
                    >.block{
                        width:350px;
                        height:300px;
                        position:absolute;
                    }
                }
                .el-carousel__item{
                    >img{
                        width:350px;
                        height:250px;
                    }
                }
                >.carou_right{
                    border:1px solid #f0f0f0;
                    position:absolute;
                    left:400px;
                    top:20px;
                    width:400px;
                    padding:10px;
                    >.content{
                        >ul{
                            >li{
                                line-height: 30px;
                                >.el-icon-arrow-right {
                                    float: right;
                                    line-height: 30px;
                                    font-size:12px;
                                    color:#a9a9a9;
                                }
                                >a{
                                    color:rgb(60,60,60);
                                    font-size:14px;
                                }
                                &+li{
                                    border-top:1px solid #f0f0f0;
                                }
                            }
                        }
                    }
                }
            }
        }
    
</style>
<script>
    export default {
        data: () => {
            return {
                time: {
                    year: "2017",
                    month: "04",
                    days: "06"
                },
                nav: {
                    chart: "Charts",
                    table: "Table",
                    contact: "Contact",
                    menu: "Document"
                },
                imgsrc:[
                    "./src/images/carou_1.jpg",
                    "./src/images/carou_2.jpg",
                    "./src/images/carou_3.jpg",
                    "./src/images/carou_4.jpg",
                ],
                content:[
                    "面向对象三大特性是继承、封装和多态",
                    "清除浮动有很多种方式，最常用的是伪元素清除",
                    "构造函数可以创建实例化对象，实例化对象可以用...",
                    "世界上总共有70亿人口，每年会增加大约7000万",
                    "SPA：Single Page Application，即单页应用程序",
                    "MVC开发模式的核心思想是业务逻辑、数据、界面...",
                    "推断式注入和行内注入的区别在于，在使用了gulp...",
                    "闭包因为返回值一直处于被调用状态，会造成资源..."
                ]
            }
        },

    }
</script>