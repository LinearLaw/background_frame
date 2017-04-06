<template>
    <div>
        <header class="documentInfo">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/document'}">备忘录</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <section>
            <el-button icon="el-icon-plus"><router-link to='/document/adddoc'>添加备忘</router-link></el-button>
        </section>
        
    </div>
</template>
<style>
    .documentInfo{
        margin-bottom:20px;
    }
</style>
<script>
    
</script>