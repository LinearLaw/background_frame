<template>
    <div class="adddoc">
        <header class="documentInfo">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/document'}">备忘录</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/document/adddoc'}">添加备忘</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
</template>
<style lang="less" scoped>
    .documentInfo{
        margin-bottom:20px;
    }
    .adddoc{
        width:100%;
        height:70%;
        .quill-editor{
            margin-bottom:20px;
        }
    }
    
</style>
<script>
    import { quillEditor } from 'vue-quill-editor';
    export default {
        data: function(){
            return {
                content: '<p>Hello BBK</p>',
                editorOption: {
                    // something config
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        }
    }
</script>