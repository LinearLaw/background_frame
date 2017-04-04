<template>
    <div>
        <!-- <h2>This is header!</h2>-->
        <section id="logo">
            <div>这是logo</div>
        </section>

        <section id="header_right">
            <div><a href="">个人中心</a></div>
            <div><a href="">退出</a></div>
        </section>

        <section>
        
        </section>
    </div>
</template>

<style lang="less" scoped>
    *{
        box-sizing:border-box;
    }
    div{
        padding:10px 20px;      
        height:100%;
        background-color:skyblue;
        >h2{

        }
        #logo{
            height:100%;
            float:left;
        }
        #header_right{
            float:right;
            >div{
                float:left;
            }
        }
    }
</style>
<script>
    

</script>