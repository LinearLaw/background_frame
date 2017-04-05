<template>
    <div>
        <el-table :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
                <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
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
  
</template>

<script>
  export default {
    data() {
      return {
          /**
           * @desc 显示在表格中的数据，是一个数组
           * @param {array} tableData3 
           */
        tableData3: [{
          date: '2016-05-03',
          name: '风来吴山',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '鹤归孤山',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '梅暗香',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '双曜亭',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '上阳宫观风殿',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '引仙水榭',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '徽山书院',
          address: '上海市普陀区金沙江路 1518 弄'
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
            address:''
        },

        formLabelWidth: '120px'
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
      }
    }
  }
</script>