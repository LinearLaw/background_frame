<template>
    <div class="add_doc">
        <header class="documentInfo">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/document'}">备忘录</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <section class="add_doc_btn">
            <el-button icon="el-icon-plus">
                <router-link to='/document/adddoc'>添加备忘</router-link>
            </el-button>
        </section>
        <section class="doc_content">
            <ul>
                <li v-for="item in datalist">
                    <span>{{item.date}}</span>
                    <a :href="item.src" class="title">{{item.title}}</a>
                    <div class="btn">
                        <el-button @click="editdoc(item.id)">编辑</el-button>
                        <el-button type="text" @click="open2(item.id)">删除</el-button>
                    </div>
                </li>
                <div class="pages">
                    <div class="block">
                        <el-pagination small layout="prev, pager, next" :total="1000"></el-pagination>
                    </div>
                </div>

            </ul>
        </section>
    </div>
</template>
<style lang="less" scoped>
    .add_doc{
        width:100%;
        height:100%;
    }
    .documentInfo{
        margin-bottom: 20px;
    }
    .add_doc_btn{
        margin-bottom: 20px;
    }
    .doc_content{
        width:100%;
        height:80%;
        >ul{
            width:100%;
            height:100%;
            border:1px solid #f0f0f0;
            >.pages{
                margin-top:20px;
                float: right;
            }
            >li{
                width:100%;
                height:50px;
                border-bottom:1px solid #f0f0f0;
                line-height: 50px;
                div,span,a{
                    float:left;
                    margin-left:20px;
                }
                >span{
                    color:#999;
                    font-size:12px;
                }
                >.title{
                    width:65%;
                    display:inline-block;
                    color: #999;
                    cursor: pointer;
                    &:hover{
                        color:#ff4400;
                    }
                }
            }
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                datalist: [
                    {
                        id: 0,
                        date: "2017-05-03",
                        title: "Vue-从入门到放弃",
                        src: ""
                    },
                    {
                        id: 1,
                        date: "2017-03-03",
                        title: "React-从死记到硬背",
                        src: ""
                    },
                    {
                        id: 2,
                        date: "2017-04-03",
                        title: "Bootstrap-从膨胀到上天",
                        src: ""
                    },
                    {
                        id: 3,
                        date: "2017-02-03",
                        title: "jQuery-从精通到咸鱼",
                        src: ""
                    },
                    {
                        id: 4,
                        date: "2017-01-22",
                        title: "Angular-从放弃到抛弃",
                        src: ""
                    },
                    {
                        id: 5,
                        date: "2017-01-22",
                        title: "TypeScript-从一脸xx到万脸xx",
                        src: ""
                    },
                    {
                        id: 6,
                        date: "2017-01-22",
                        title: "Materialize-从零到负一",
                        src: ""
                    }
                ]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            editdoc: (index) => {
                console.log(index);
            },
            deldoc: (index) => {
                console.log(index);
            },
            /**
             * @desc 点击删除按钮将对应的数据从数组中删除
             */
            open2(index) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then((index) => {
                    this.datalist.splice(index,1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>