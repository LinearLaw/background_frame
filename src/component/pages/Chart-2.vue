<template>
    <div class="page12">
        <div class="title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>主页面图表</el-breadcrumb-item>
                <el-breadcrumb-item>折线图&扇形图</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="echarts">
            <IEcharts :option="line" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie" ></IEcharts>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .title{
        margin-bottom: 30px;
    }
    .echarts{
        width:400px;
        height:400px;
        float: left;
    }
</style>
<script>
    import IEcharts from 'vue-echarts-v3';
    export default{
        components: {
            IEcharts
        },
        data: () => ({
            /**
             * @desc line表示折线图，在这里配置折线图的数据
             */
            line: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '曲线图'
                },
                xAxis: {
                    data: ["JQ", "NG", "Vue", "Rea", "Boot", "Node"]
                },
                yAxis:{},
                series: [
                    {
                        name: "销量",
                        type: "line",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
            /**
             * @desc line表示扇形图，在这里配置扇形图的数据
             */
            pie: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                title : {
                    text: '饼状图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["jQuery", "Bootstrap", "Angular", "Vue", "React"]
                },
                series : [
                    {
                        name: '销量',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'jQuery'},
                            {value:310, name:'Bootstrap'},
                            {value:234, name:'Angular'},
                            {value:135, name:'Vue'},
                            {value:548, name:'React'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
        })
    }
</script>