<template>
    <div class="avatar_uploads">
        
        <!--<h2>Now you can upload your Avatar Pics!</h2>-->
        <header>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/avatar'}">头像设置</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <!--<div class="avatar_title">
            <h1>Click the pics to upload your avatar</h1>
        </div>-->
        <div class="saying">
            <i class="el-icon-picture"></i>
            <span>头像图片</span>
        </div>
        <div class="upload_area">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                <div class="shade">
                    <span>点击上传头像</span>
                </div>
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="avatar_notice">
            <p>1、可上传jpg, gif, png格式文件.</p>
            <p>2、图片建议尺寸大于300x150.</p>
            <p>3、文件大小不能超过2M.</p>
        </div>
        <div class="avatar_button">
                <el-button type="primary">保存</el-button>
                <el-button>取消</el-button>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: './src/images/avatar.jpg'
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style lang="less" scoped>
    .avatar_uploads{
        width: 100%;
        height: 100%;
    }
    header{
        margin-bottom:20px;
    }
    .avatar_button{
        position:absolute;
        bottom:0;
        right:0;
        margin-bottom:50px;
        margin-right:80px;
    }
    .saying{
        width: 100%;
        height:50px;
        padding-left:30px;
        border-bottom:1px solid #f0f0f0;
        >.el-icon-picture{
            float:left;
            line-height:50px;
        }
        >span{
            font-size:20px;
            line-height: 50px;
            margin-left:10px;
            float:left;
            color:rgb(60,60,60);
        }
    }
    .upload_area{
        padding:3px;
        border:3px dashed #f0f0f0;
        margin:50px;
        float:left;
    }
    .avatar_notice{
        width:500px;
        margin-top:100px;
        margin-left:50px;
        line-height:30px;
        color:#777;
        font-size:14px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    } 
    .shade{
        width: 178px;
        height: 178px;
        position: absolute;
        display:none;
        background-color: rgba(0,0,0,0.5);
        transition:all 0.5s;
    }
    .shade>span{
        text-align: center;
        line-height: 178px;
        color:#f0f0f0;
    }
    .el-upload:hover .shade{
        display: block;
    }
</style>