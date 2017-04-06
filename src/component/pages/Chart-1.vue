<template>
    <div class="page11">
        <!--<h2>This is page_1!</h2>-->
        <header>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>主页面图表</el-breadcrumb-item>
                <el-breadcrumb-item>基础图表</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <section>
            <div class="echarts">
                <IEcharts :option="bar" @click="onClick"></IEcharts>
                <button @click="doRandom">Random</button>
            </div>
        </section>
    </div>
</template>
<style lang="less" scoped>
    .page11{
        /*padding:30px;*/
    }
    header{
        margin-bottom: 20px;
    }
    .echarts {
        width: 600px;
        height: 400px;
        >button{
            width: 80px;
            height:30px;
            outline:none;
            border:0;
        }
    }
</style>
<script>
    import IEcharts from 'vue-echarts-v3';
    export default{
        name: 'view',
        components: {
            IEcharts
        },
        props: {

        },
        data: () => ({
            loading: true,
            bar: {
                title: {
                    text: 'ECharts'
                },
                tooltip: {},
                xAxis: {
                    data: ['Vue', 'Angular', 'React', 'jQuery', 'Bootstrap', 'Materialize']
                },
                yAxis: {},
                series: [{
                    name: 'Sales',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }),
        methods: {
            /**
             * @desc 点击按钮后生成随机数，加载到数据中
             */
            doRandom() {
                const that = this;
                let data = [];
                for (let i = 0, min = 5, max = 99; i < 6; i++) {
                    data.push(Math.floor(Math.random() * (max + 1 - min) + min));
                }
                that.loading = !that.loading;
                that.bar.series[0].data = data;
            },
            onClick(event, instance, echarts) {
                // console.log(arguments);
            }
        }
    };
</script>