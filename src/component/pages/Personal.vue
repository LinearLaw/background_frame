<template>
    <div>
        <div class="personal_title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/personal'}">个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="地区" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择地区">
                        <el-option label="地区一" value="shanghai"></el-option>
                        <el-option label="地区二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="入职时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="是否管理员" prop="delivery">
                    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="技术栈" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="VueJS" name="type"></el-checkbox>
                        <el-checkbox label="AngularJS" name="type"></el-checkbox>
                        <el-checkbox label="React" name="type"></el-checkbox>
                        <el-checkbox label="jQuery" name="type"></el-checkbox>
                        <el-checkbox label="BootStrap" name="type"></el-checkbox>
                        <el-checkbox label="ElementUI" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="性别" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="个人描述" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style scoped>
    .personal_title{
        margin-bottom:20px;
    }
</style>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: 'LinearLaw',
                    region: 'Shenzhen',
                    date1: '2017-04-07',
                    date2: '',
                    delivery: true,
                    type: ["VueJS","AngularJS","jQuery","BootStrap"],
                    resource: '',
                    desc: 'To be or not to be.'
                },
                rules: {
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择地区', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个技术栈', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写个人描述', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            /**
             * @desc 表单提交时进行验证，验证通过则提交，不通过则提示
             */
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>