<template>
    <div>
        <div class="personal_title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>表格</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/personal'}">添加信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="ID" prop="id">
                    <el-input v-model="ruleForm.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="地区" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择地区">
                        <el-option label="地区一" value="shanghai"></el-option>
                        <el-option label="地区二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="详细地址" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
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
                    <el-button type="primary" @click="submitForm(ruleForm)">保存</el-button>
                    <el-button @click="resetForm(ruleForm)">重置</el-button>
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
    import validate from "async-validator"
    export default {
        data() {
            return {
                ruleForm: {
                    id:'',
                    name: '',
                    region: '',
                    address:'',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    id: [
                        { required: true, message: '请输入ID号', trigger: 'blur' },
                        { min: 7, max: 20, message: '长度在 7 到 20 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: false, message: '请选择地区', trigger: 'change' }
                    ],
                    address:[{
                        required: true, message: '请填写详细地址', trigger: 'change'
                    }],
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
             * @desc 提交表单时进行验证表单，成功时进行提示
             */
            submitForm(formName) {
                new validate(this.rules).validate(formName,(error,fields) => {
                    if (error) {
                        alert('请完善表单再进行提交！');
                        return false;                        
                    } else {
                        formName.date = formName.date1;
                        this.$store.dispatch("saveMsg",formName);
                        alert('提交成功！');
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>