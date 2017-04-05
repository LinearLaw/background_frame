<template>
    <div>
        <!--<ul class="oriul">
            <li>
                <router-link to="/pageone" >主页面图表</router-link>
            </li>
            <li>
                <router-link to="/pagetwo" >点击切换pagetwo</router-link>
            </li>
            <li>
            <router-link to="/pagethree" >点击切换pagethree</router-link>
            </li>
            <li>
            <router-link to="/pagefour" >点击切换pagefour</router-link>
            </li>
        </ul>-->
        <el-row class="tac">
            <el-col :span="8">
                <!--<h5>带 icon</h5>-->
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>主页面图表</template>
                    <el-menu-item-group>
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="1-1"><router-link to="/pageone">主页面图表1</router-link></el-menu-item>
                        <el-menu-item index="1-2"><router-link to="/pageone">主页面图表2</router-link></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2"><i class="el-icon-menu"></i><router-link to="/pagetwo" >点击切换pagetwo</router-link></el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i><router-link to="/pagethree" >点击切换pagethree</router-link></el-menu-item>
                <el-menu-item index="4"><i class="el-icon-setting"></i><router-link to="/pagefour" >点击切换pagefour</router-link></el-menu-item>
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
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>