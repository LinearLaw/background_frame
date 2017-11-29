<template>
    <div class="head">
        <!-- <h2>This is header!</h2>-->
        <section id="logo">
            <div class="avatar">
                <router-link to="/avatar"><img :src="avatar_src" alt=""></router-link>
            </div>
            <div class="username">
                <p class="name">{{username}}</p>
                <p>Welcome!</p>
            </div>
            
        </section>
        <section id="header_right">
            <div class="personal"><router-link :to="{name: 'personal'}" >个人中心</router-link></div>
            <el-button type="text" @click="logout">退出</el-button>
            <a href="javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)) ))" target="_blank" title="Facebook" class="amp-social-share" @click="GA_share('Facebook')">
                          <span class="btn-fb">facebook</span>
            </a>
            <a href="javascript: void(window.open('https://plus.google.com/share?url='.concat(encodeURIComponent(location.href))))" target="_blank" title="Google+" class="amp-social-share" @click="GA_share('Google')">
                <span class="btn-gplus">google plus</span>
            </a>
        </section>
    </div>
</template>

<style lang="less" scoped>
    *{
        box-sizing:border-box;
    }
    .head{
        /*// padding:10px 20px;      */
        height:100%;
        background-color:#242f42;
        margin-left:300px;
        #logo{
            height:100%;
            width:300px;
            position:absolute;
            top:0;
            left:0;
            background:#77869f;
            padding:15px;
            >.avatar{
                height:90px;
                width:90px;
                border-radius:50%;
                border:4px solid #f0f0f0;
                margin-left:20px;
                float:left;
                overflow:hidden;
                img{
                    height:100%;
                    width:100%;
                }
            }
            >.username{
                float:left;
                padding:20px 30px;
                font-size:20px;
                line-height:30px;
                color:#f0f0f0;
            }
        }
        #header_right{
            float:right;
            >.personal,.logout{
                float:left;
            }
            >.personal{
                >a{
                    /*// color:#1f2d3d;*/
                    line-height:44px;                
                    color:#a9b0c2;
                }
            }
            >.el-button{
                font-size:16px;
                line-height: 24px;   
                margin-left:20px;
                margin-right:20px;
            }
            >.el-button--text{
                // color:#1f2d3d;
                color:#a9b0c2;
            }
            a{
                display:block;
            }
        }
    }
</style>
<script>
    export default {
        data() {
            /**
             * 主要显示个人信息
             */
            return {
                dialogVisible: false,
                avatar_src:"./src/images/avatar.jpg",
                username:'LinearLaw',

                shareTitle:"",
                shareContent:"",
                pageHref:location.href,
                shareImgs:""

            };
        },
        created(){
            // this.getTitle();
            console.log(new Date().getTime());
            this.shareTitle="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
            this.shareContent="阿坝擦擦擦",
            this.pageHref=location.href,
            this.shareImgs="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg"
        },
        metaInfo(){
            return{
                title:this.shareTitle,
                meta:[{ charset: 'utf-8' },
                      {"property":"og:title",content:this.shareTitle},
                      {"property":"og:type",content:"website"},
                      {"property":"og:description",content:this.shareContent},
                      {"property":"og:url",content:this.pageHref},
                      {"property":"og:image",content:this.shareImgs},
                      {"property":"og:image:width",content:640},
                      {"property":"og:image:height",content:360},
                      {"property":"og:image:type",content:"image/jpeg"},
                      {"property":"og:site_name",content:"Backend"}]
            }
        },
        methods:{
            getTitle:async function(){
                var that = this;
                // function resolveAfter2Seconds(x) { 
                //   return new Promise(resolve => {
                    
                //   });
                // }

                async function f1(x) {
                  var x = await setTimeout((x)=>{
                        that.shareTitle="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                        that.shareContent="阿坝擦擦擦",
                        that.pageHref=location.href,
                        that.shareImgs=""
                    }, 2000);
                  alert(x); // 10
                }
                f1("来帮你宁宁四");
                alert(11);
                // var url = "http://e47f09e6.ngrok.io/get";
                // await this.$http.get(url,{emulateJSON:true}).then(await function(res){
                //     console.log(res);
                //     console.log(new Date().getTime());
                // },(err)=>{console.log(err);})
            },
            logout() {
                this.$confirm('是否退出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    localStorage.clear('ms_username');
                    location.href = "/#/login";
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });          
                });
            }
        }
    };

</script>