<template>
    <div>
        <el-row class="tac">
            <el-col :span="8">
                <!--<h5>带 icon</h5>-->
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1"><i class="el-icon-menu"></i><router-link to="/home" >首页</router-link></el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>主页面图表</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link :to="{ name:'chart_1'}">基础图表</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link :to="{ name:'chart_2'}">扇形图</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-menu"></i>表格</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link :to="{ name:'table_1'}">表格信息</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link :to="{ name:'table_2'}">添加角色</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="4"><i class="el-icon-star-on"></i><router-link :to="{ name:'document'}" >备忘录</router-link></el-menu-item>
                    <el-menu-item index="5"><i class="el-icon-document"></i><router-link :to="{ name:'contact'}" >联系方式</router-link></el-menu-item>
                    <el-menu-item index="6"><i class="el-icon-setting"></i><router-link :to="{ name:'setting'}" >系统设置</router-link></el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
    div{
        width:100%;
        height:100%;
       
        >.el-col{
            >.el-menu{
                /*background-color:#48576a;*/
                >.el-submenu{
                    >li{
                        color:#bfcbd9;        
                    }
                    >ul{
                        background-color: #48576a;
                    }
                    .el-menu{
                        >.el-menu-item-group{
                            >ul{
                                >.el-menu-item{
                                    >a{
                                        padding:20px; 
                                        padding-right:162px;
                                        color:#48576a;
                                    }
                                    &:hover{
                                        background-color: #fff;
                                    }
                                }
                            }
                            
                        }
                    }
                }
                >.el-menu-item{
                    >a{
                        padding:20px;    
                        padding-right:125px;    
                        padding-left:0;                            
                        color:#48576a;                    
                    }
                }
            }
        }
        .el-menu-item, .el-submenu__title{
            color:#bfcbd9;        
        }   
    }
      
</style>
<script>
    export default{
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    }
</script>