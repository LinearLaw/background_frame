<template>
    <div class="head">
        <!-- <h2>This is header!</h2>-->
        <section id="logo">
            <div class="avatar">
                <router-link to="/avatar"><img :src="avatar_src" alt=""></router-link>
            </div>
            <div class="username">
                <p class="name">{{username}}</p>
                <p>Welcome!</p>
            </div>
        </section>
        <section id="header_right">
            <div class="personal"><router-link :to="{name: 'personal'}" >个人中心</router-link></div>
            <el-button type="text" @click="logout">退出</el-button>
        </section>
    </div>
</template>

<style lang="less" scoped>
    *{
        box-sizing:border-box;
    }
    .head{
        /*// padding:10px 20px;      */
        height:100%;
        background-color:#242f42;
        margin-left:300px;
        #logo{
            height:100%;
            width:300px;
            position:absolute;
            top:0;
            left:0;
            background:#77869f;
            padding:15px;
            >.avatar{
                height:90px;
                width:90px;
                border-radius:50%;
                border:4px solid #f0f0f0;
                margin-left:20px;
                float:left;
                overflow:hidden;
                img{
                    height:100%;
                    width:100%;
                }
            }
            >.username{
                float:left;
                padding:20px 30px;
                font-size:20px;
                line-height:30px;
                color:#f0f0f0;
            }
        }
        #header_right{
            float:right;
            >.personal,.logout{
                float:left;
            }
            >.personal{
                >a{
                    /*// color:#1f2d3d;*/
                    line-height:44px;                
                    color:#a9b0c2;
                }
            }
            >.el-button{
                font-size:16px;
                line-height: 24px;   
                margin-left:20px;
                margin-right:20px;
            }
            >.el-button--text{
                // color:#1f2d3d;
                color:#a9b0c2;
            }
        }
    }
</style>
<script>
    export default {
        data() {
            /**
             * 主要显示个人信息
             */
            return {
                dialogVisible: false,
                avatar_src:"./src/images/avatar.jpg",
                username:'LinearLaw'
            };
        },
        methods:{
            logout() {
                this.$confirm('是否退出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    localStorage.clear('ms_username');
                    location.href = "/#/login";
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });          
                });
            }
        }
    };

</script>