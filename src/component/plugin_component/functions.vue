<template>
    <!--Function-->
    <div class="criteria_item" :class="{'red_border_tip':functionError.controler}">
      <input class="criteria_item_content" 
            id="sector_item" 
            :placeholder="$t('candidate_profile.edit_criteria.can_editcriteria_lbl_function')+'*'"
            v-model="functionStr" readonly="readonly"
            @click.stop="showFunction">
      <span class="error_same" v-if="functionError.controler">{{functionError.content}}</span>                  
      <span class="glyphicon glyphicon-triangle-bottom pull-right" @click.stop="showFunction"></span>
      <div class="search_data_display multiSelectStyle" v-show="candidatePop.showCandidateCriteriaFunction">
        <ul>
          <li class="col-md-6" v-for="(value,key) in functionList"  @click.stop="selectedFunction($event,value)">
              <i v-for="(innervalue,innerkey) in value" :class="{
                'icon-check_box_outline_blank':!functionSign[innerkey].check,
                'icon-check_box':functionSign[innerkey].check}"></i>
              <span v-for="(innervalue,innerkey) in value">{{innervalue}}</span>
          </li>
        </ul>
      </div>
    </div>

</template>
<script>
    import {mapState,mapMutations} from 'vuex';
    export default{
        props:["functionError"],
        data(){
            return{
                config:{},
                isFunction:false,
                functionList:[],
                functionSign:{},
                functionStr:"",
                functionListFinal:[]
            }
        },
        mounted(){
            this.initFunction();
        },
        computed:{
            ...mapState(["candidatePop"])
        },
        methods:{
            ...mapMutations(["showCriteriaFunctionDropdown","hideCriteriaFunctionDropdown"]),
            /**
             * @desc init functions
             */
            initFunction(){
                this.functionStr="";
                var tempConfig = this.CONFIG.result;
                this.functionList = tempConfig.jobFunction;
                this.config = tempConfig;
                var functionSign = {};
                var tempFunArr = this.functionList.map(function(val,ind){
                    for(var key in val){
                        var innerTemp = {};
                        innerTemp[key] = {
                            'key':key,
                            'value':val[key],
                            'check':false
                        }
                        return innerTemp
                    }
                })
                Object.assign(functionSign,...tempFunArr);
                this.functionSign = functionSign;
            },
            /**
             * @desc render outerdata
             */
            renderOuterData(obj){
                var that = this;
                obj.map(function(innerVal,innerInd){
                    that.functionSign[innerVal.key].check = true;
                });
                this.renderFunctioStr();
            },
            showFunction:function(){
                if(this.candidatePop.showCandidateCriteriaFunction == true){
                    this.hideCriteriaFunctionDropdown();
                }else{
                    this.showCriteriaFunctionDropdown();
                }
            },
            /**
             * @desc new function render
             */
            selectedFunction(event,value){
                var operateKey = "";
                for(var key in value){
                    operateKey = key;
                }
                if(this.functionSign[operateKey].check == true ){
                    this.functionSign[operateKey].check = false
                }else{
                    this.functionSign[operateKey].check = true;
                }
                this.renderFunctioStr();
            },
            renderFunctioStr(){
                var that = this;
                var tempArr = [];
                var tempStr = ""
                $.each(that.functionSign,function(index,value){
                    if(value.check == true){
                        tempStr = tempStr + value.value + ", ";
                        tempArr.push(value.key);
                    }
                })
                if(tempArr.length>0){
                    this.functionStr = tempStr.slice(0,-2);
                }else{
                    this.functionStr = "";
                }
                this.functionListFinal = tempArr;
                this.functionInput();
            },
            functionInput(){
                this.$emit("functionInput",this.functionListFinal);
            }
        }
    }
</script>
<style lang="less" scoped>
    .error_same{position:absolute;top:100%;left:10px;line-height:1.5;}
    .icon-check_box{color: #a0c5e0;font-size: 0.28rem;}
    .glyphicon {font-size: 10px;color: #626262;padding-top:5px;}
    .criteria_item .criteria_item_content{
        border:0;
        width:90%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .criteria_item .criteria_item_content::-webkit-input-placeholder {color: #95989a;}
    .search_data_display{
        width: 100%;
        padding:0.15rem 0 0.34rem 0.34rem; 
        position: absolute;
        top:100%;
        left: 0;
        z-index: 9999;
        background: #fff;
        border:1px solid #e2e2e1;
    }
    .search_data_display li{padding: 0.05rem 0;cursor: pointer;word-break: break-all;}
    .search_data_display li span{padding:0 0.1rem;color:#333;}
    .icon-check_box_outline_blank{color: #445cb3;}
    .icon-check_box,.icon-check_box_outline_blank{font-size: 16px;color: #445cb3;}
    @media screen and (max-width:767px){

    }
</style>