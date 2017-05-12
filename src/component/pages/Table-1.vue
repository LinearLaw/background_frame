<template>
    <div>
        <header class="table_info">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>表格</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/table_2'}">信息页</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <div class="table_main">
            <el-table :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="日期" width="120">
                    <template scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
                <el-table-column prop="id" label="ID" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">

                    <template scope="scope">
                        <el-button size="small" type="info" @click="editInfo(scope.$index)">编辑</el-button>


                        <el-dialog title="编辑信息" v-model="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="日期" :label-width="formLabelWidth">
                                <el-input v-model="form.date" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="地址" :label-width="formLabelWidth">
                                <el-input v-model="form.address" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="ID" :label-width="formLabelWidth">
                                <el-input v-model="form.id" auto-complete="off"></el-input>
                            </el-form-item>
                        </el-form>


                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="saveInfo(scope.$index)">确 定</el-button>
                        </div>
                        </el-dialog>

                        <el-button size="small" type="danger" @click="open2(scope.$index)">删除</el-button>
                    </template>

                </el-table-column>
            </el-table>
        </div>
        <div class="table_page">
            <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage3"
                    :page-size="40"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                    </el-pagination>
            </div>
        </div>
        
    </div>
  
</template>
<style lang="less" scoped>
    .table_info{
        margin-bottom:20px;
    }
    .table_main{
        margin-bottom:20px;
    }
    .table_page{
        >.block{
            >.el-pagination{
                .btn-prev{
                    float: right;
                }
                button,ul,span{
                    float: right;
                }
            }
        }
    }
    
</style>
<script>
  export default {
    data() {
      return {
          /**
           * @desc 显示在表格中的数据，是一个数组
           * @param {array} tableData3 
           */
        tableData3: [{
          date: '2017-05-03',
          name: '风来吴山',
          address: '上海市普陀区金沙江路 1518 弄',
          id:'888-14124'
        }, {
          date: '2014-05-02',
          name: '鹤归孤山',
          address: '深圳市宝安区xx街道',
          id:'676-14199'
        }, {
          date: '2016-05-04',
          name: '梅暗香',
          address: '深圳市罗湖区',
          id:'543-64188'
        }, {
          date: '2017-03-21',
          name: '双曜亭',
          address: '深圳市福田区',
          id:'234-14167'
        }, {
          date: '2022-05-08',
          name: '上阳宫观风殿',
          address: '深圳市龙华新区',
          id:'322-41243'
        }, {
          date: '2012-05-06',
          name: '引仙水榭',
          address: '深圳市宝龙',
          id:'271-314125'
        }, {
          date: '2011-11-07',
          name: '徽山书院',
          address: '深圳市坑梓',
          id:'932-31410'
        }],
        multipleSelection: [],

        /**
         * @desc 确认框的弹出和隐藏 
         * @param {boolean} dialogTableVisible 
         */
        dialogTableVisible: false,

        /**
         * @desc form表单的显示和隐藏
         * @param {boolean} dialogFormVisible
         */
        dialogFormVisible: false,

        /**
         * @desc 弹出的form表单的初始化信息
         * @param {object} form 
         */
        form: {
            date:'',
            name:'',
            address:'',
            id:''
        },

        formLabelWidth: '120px',
        currentPage3: 5
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },

      /**
       * @desc 删除按钮 
       * @param {number} index 当前点击的元素在数组中的索引
       */
      open2(index) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            this.tableData3.splice(index,1);
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
      },
      /**
       * @desc 点击编辑按钮，编辑框弹出，并将该索引下的内容显示在表单中
       * @param {number} index 当前点击的元素在数组中的索引
       */
      editInfo(index){
        this.dialogFormVisible = true;
        this.form = this.tableData3[index];
      },
      /**
       * @desc 在弹出的编辑框中点击确认按钮，将form的数据输出到指定的data中
       * @param {number} index 代表了该元素在数组中的索引
       */
      saveInfo(index){
        this.dialogFormVisible = false;
        this.tableData3[index] = this.form;
      },

      /**
       * @desc 分页
       */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    /**
     * @desc 在页面加载完成后，将state中的数据取出，加入到页面data中
     * @return {[type]} [description]
     */
    mounted:function(){
      var that = this.tableData3;
      this.$store.state.msg.forEach(function(ele,index){
       
        that.push(ele);
      })
    }
  }
</script>