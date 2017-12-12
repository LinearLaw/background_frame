<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码都是admin。</p>
            </el-form>
            <!-- <el-button type="primary" @click="updateLocation">Update</el-button> -->

            <!---1、location module-->
            <!-- <Location @locationInput="locationInput" ref="locationConponent"></Location> -->

            <!---2、industry module-->
            <!-- <Industry :industryError="errorShow.industryError" @industryInput="industryInput" ref="indcomponent"></Industry> -->
        </div>
    </div>
</template>

<script>
    import Location from "./plugin_component/location.vue"
    import Industry from "./plugin_component/industry.vue"
    import {mapState,mapMutations} from "vuex"
    import "../canvas-nest.min.js"
    export default {
        components:{Location},
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                errorShow:{
                    industryError:{
                      content:this.$t('candidate_profile.notice_msg.can_criteria_msg_selectind'),
                      controler:false
                    }
                },
            }
        },
        computed:{
            ...mapState(["candidatePop"])
        },
        methods: {
            ...mapMutations(["showCriteriaIndustryDropdown","hideCriteriaIndustryDropdown"]),
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if(self.ruleForm.username != "admin" || self.ruleForm.password != "admin"){
                        valid = false;
                        alert('用户名或密码错误！请重新确认！');
                        return false;
                    }
                    if (valid) {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        location.href = "/#/home";
                        // self.$router.push('/readme');
                    } else {
                        // alert('用户名或密码错误！请重新确认！');
                        return false;
                    }
                });
            },
            updateLocation(){
                var location = {
                    "count": 12,
                    "location": [
                        {
                            "subset": [
                                {
                                    "subset": [
                                        {
                                            "key": "location_hk_sheungwan",
                                            "value": "上環"
                                        },
                                        {
                                            "key": "location_hk_central",
                                            "value": "中環"
                                        },
                                        {
                                            "key": "location_hk_admiralty",
                                            "value": "金鐘"
                                        },
                                        {
                                            "key": "location_hk_wanchai",
                                            "value": "灣仔"
                                        },
                                        {
                                            "key": "location_hk_causewaybay",
                                            "value": "銅鑼灣"
                                        },
                                        {
                                            "key": "location_hk_northpoint",
                                            "value": "北角"
                                        },
                                        {
                                            "key": "location_hk_taikoo",
                                            "value": "太古"
                                        },
                                        {
                                            "key": "location_hk_quarrybay",
                                            "value": "鰂魚涌"
                                        },
                                        {
                                            "key": "location_hk_shaukeiwan",
                                            "value": "筲箕灣"
                                        },
                                        {
                                            "key": "location_hk_chaiwan",
                                            "value": "柴灣"
                                        },
                                        {
                                            "key": "location_hk_aberdeen",
                                            "value": "香港仔"
                                        },
                                        {
                                            "key": "location_hk_apleichau",
                                            "value": "鴨脷洲"
                                        }
                                    ],
                                    "key": "location_hk_all",
                                    "value": "香港"
                                }
                            ],
                            "key": "location_all",
                            "value": "全部地區"
                        }
                    ]
                }
                console.log(this.$refs.locationConponent);
                this.$refs.locationConponent.renderGetData(location);
            },
            locationInput(location){
                console.log("父级",location);
            }，
            renderIndustry(){
                this.$refs.indcomponent.renderOuterData(industry,sector);
            },
            industryInput(obj){
              this.thisCriteria.sector = obj.sector;
              this.thisCriteria.industry = obj.industry;
            },
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #000;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:40%;
        width:400px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>