<template>
  <div>
    <header class="contactInfo">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/contact'}">联系方式</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <div class="search">
      <el-input placeholder="搜索" icon="search" v-model="input2" :on-icon-click="dataFilter(tableData)">
      </el-input>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
    .contactInfo{
        margin-bottom:20px;
    }
    .search{
      width: 200px;
      margin-bottom:20px;
    }
</style>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '易筋经',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '137-3455-3232'
        },
        {
          date: '2016-05-04',
          name: '九阴白骨爪',
          address: '上海市普陀区金沙江路 1517 弄',
          phone: '137-3455-3232'
        },
        {
          date: '2016-05-01',
          name: '降龙十八掌',
          address: '上海市普陀区金沙江路 1519 弄',
          phone: '137-3455-3232'
        },
        {
          date: '2016-05-01',
          name: '葵花宝典',
          address: '上海市普陀区金沙江路 1519 弄',
          phone: '137-3455-3232'
        },
        {
          date: '2016-05-03',
          name: '轩辕剑',
          address: '上海市普陀区金沙江路 1516 弄',
          phone: '137-3455-3232'
        },
        {
          date: '2016-05-03',
          name: '天之痕',
          address: '上海市普陀区金沙江路 1516 弄',
          phone: '137-3455-3232'
        },
        {
          date: '2016-05-03',
          name: '仙剑奇侠传',
          address: '上海市普陀区金沙江路 1516 弄',
          phone: '137-3455-3232'
        },
        {
          date: '2016-05-03',
          name: '笑傲江湖',
          address: '上海市普陀区金沙江路 1516 弄',
          phone: '137-3455-3232'
        },
        ],
        input2: "",
        list: this.tableData
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      /**
       * @desc 过滤数据，待优化
       */
    //   dataFilter:(val)=>{
    //     // console.log(val);
    //     for(var i=0;i<val.length;i++){
    //       for(var key in val[i]){
    //         if(key.indexOf(this.input2) != -1){
    //           this.list.push({key:val[i][key]});
    //       }
    //     } 
    //   }
    // }
  }
}
</script>