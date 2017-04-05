<template>
    <div>
        <!-- <h2>This is header!</h2>-->
        <section id="logo">
            <div>This is Logo</div>
        </section>

        <section id="header_right">
            <div><router-link to="/personal" >个人中心</router-link></div>
            <el-button type="text" @click="dialogVisible = true">退出</el-button>

            <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                <span>是否退出登录？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>

        </section>

        <section>
        
        </section>
    </div>
</template>

<style lang="less" scoped>
    *{
        box-sizing:border-box;
    }
    div{
        padding:10px 20px;      
        height:100%;
        background-color:skyblue;
        >h2{

        }
        #logo{
            height:100%;
            float:left;
        }
        #header_right{
            float:right;
            >div,button{
                float:left;
            }
            >div{
                >a{
                    color:#1f2d3d;
                }
            }
            >.el-button{
                font-size:16px;
                line-height: 24px;   
            }
            >.el-button--text{
                color:#1f2d3d;
            }
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                dialogVisible: false
            };
        }
    };

</script>