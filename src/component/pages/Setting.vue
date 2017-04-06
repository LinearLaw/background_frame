<template>
    <!--<h2>page4</h2>-->
    <div>
        <header class="setInfo">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/setting'}">系统设置</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <div class="content">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="实时更新">
                    <el-switch on-text="" off-text="" v-model="form.delivery_1"></el-switch>
                    <span style="margin-left:20px;color:#d0d0d0">设置该项可以xxx</span>
                </el-form-item>
                <el-form-item label="启动">
                    <el-switch on-text="" off-text="" v-model="form.delivery_2"></el-switch>
                    <span style="margin-left:20px;color:#d0d0d0">设置该项可以xxx</span>
                </el-form-item>
                <el-form-item label="下载">
                    <el-switch on-text="" off-text="" v-model="form.delivery_3"></el-switch>
                    <span style="margin-left:20px;color:#d0d0d0">设置该项可以xxx</span>
                </el-form-item>
                <el-form-item label="内容">
                    <el-switch on-text="" off-text="" v-model="form.delivery_4"></el-switch>
                    <span style="margin-left:20px;color:#d0d0d0">设置该项可以xxx</span>
                </el-form-item>
                <el-form-item label="搜索">
                    <el-switch on-text="" off-text="" v-model="form.delivery_5"></el-switch>
                    <span style="margin-left:20px;color:#d0d0d0">设置该项可以xxx</span>                    
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<style>
    .setInfo{
        margin-bottom: 20px;
    }
</style>
<script>
    export default {
        data() {
            return {
                form: {
                    delivery_1: false,
                    delivery_2: false,
                    delivery_3: false,
                    delivery_4: false,
                    delivery_5: false,
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>