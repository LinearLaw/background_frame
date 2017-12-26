<template>
    <div class="criteria_item clearfix" 
        :class="{'red_border_tip':industryError.controler}" 
        @click.stop="showIndustry">
      <input class="criteria_item_content" 
              id="industry_item" 
              :placeholder="$t('candidate_profile.edit_criteria.can_editcriteria_lbl_industry')" 
              v-model="displayStr" readonly="readonly"
              @click.stop="showIndustry">
      <span class="error_same" v-if="industryError.controler">{{industryError.content}}</span>                  
      <span class="glyphicon glyphicon-triangle-bottom pull-right"></span>
      <div class="search_data_display multiSelectStyle industry" v-show="candidatePop.showCandidateCriteriaIndustry">
        <ul>
          <li class="industry_block_style industry_item clearfix" v-for="(value,index) in configIndustry">
              <i :class="{'icon-check_box':displayIndustry[index],
                'icon-check_box_outline_blank':!displayIndustry[index]}"
                @click.stop="selectedIndustry($event,index)"><span>{{value.actualValue}}</span></i>
              <span class="glyphicon glyphicon-triangle-bottom pull-right"></span>
              <div class="location_border_style sectorStr">
                <ul class="clearfix">
                  <li class="col-md-6" v-for="(innerVal,innerInd) in configSector[index]">
                      <i :class="{'icon-check_box':innerVal.sectorSelect,
                        'icon-check_box_outline_blank':!innerVal.sectorSelect}"
                        @click.stop="selectSector($event,index,innerInd)"><span>{{innerVal.sectorValue}}</span></i>
                  </li>  
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
    import {mapState,mapMutations} from "vuex"
    export default {
        props:["industryError"],
        data(){
            return{
                configSector:[],     //render sector checked                
                configIndustry:[],   //render industry checked
                displayIndustry:[],  //display industry checked
                
                config:{},          //all config

                industryStr:"",
                sectorStr:"",
                displayStr:"",

                sectorList:[],
                industryList:[],

                errorShow:{
                    industryError:{
                        content:this.$t('candidate_profile.notice_msg.can_criteria_msg_selectind'),
                        controler:false
                    }
                },
                lang:""
            }
        },
        created(){
            var that = this;
            var tempConfig = this.CONFIG.result;
            this.hideCriteriaIndustryDropdown();
            this.config = tempConfig;
            this.configSector = [];
            this.configIndustry = [];
            this.displayIndustry = [];
            //压平数组
            tempConfig.industry.map(function(value,index){
                for(var key in value){
                    that.configIndustry.push({
                        'actualKey':key,
                        'actualValue':value[key],
                        'actualSelect':false
                    })
                    that.displayIndustry.push(false);
                }
            })
            this.configSector = that.configIndustry.map(function(value,index){
                if(tempConfig[value.actualKey]){
                    var tempSector = [];
                    tempConfig[value.actualKey].map(function(innVal,innInd){
                        for(var key in innVal){
                            tempSector.push({
                                'sectorKey':key,
                                'sectorValue':innVal[key],
                                'sectorSelect':false
                            })
                        }
                    })
                    return tempSector;
                }else{
                    return []
                }
            })
        },
        computed:{
            ...mapState(["candidatePop"])
        },
        methods:{
            ...mapMutations(["showCriteriaIndustryDropdown","hideCriteriaIndustryDropdown"]),
            /**
             * @desc industry is [] and sector is []
             *      eg:[{key:"",value:""},{key:"",value:""}]
             */
            renderOuterData(outerIndustry,outerSector){
                this.renderOuterIndustry(outerIndustry);
                if(outerSector){
                    this.renderOuterSector(outerSector);
                }
                this.renderAllSelect();
                this.renderData();
            },
            //查询industry的选中
            renderOuterIndustry(outerIndustry){
                var that = this;
                var tempIndObj = [];
                //压平数组
                outerIndustry.map(function(value,index){
                    tempIndObj.push(value);
                })
                //查询
                tempIndObj.map(function(value,index){
                     that.configIndustry.map(function(innVal,innInd){
                        if(value.key == innVal.actualKey){
                             that.configIndustry[innInd].actualSelect = true;
                        }
                    })
                })
            },
            //查询sector的选中
            renderOuterSector(outerSector){
                var that = this;
                var tempSecObj = [];
                //压平数组
                outerSector.map(function(value,index){
                    tempSecObj.push(value)
                })
                //查询
                tempSecObj.map(function(value,index){
                    that.configSector.map(function(innVal,innInd){
                        innVal.map(function(finalVal,finalInd){
                            if(value.key == finalVal.sectorKey){
                                that.configSector[innInd][finalInd].sectorSelect = true;
                            }
                        })
                    })
                })
            },
            //查询sector是否全选
            renderAllSelect(){
                var that = this;
                that.configSector.map(function(innVal,innInd){
                    var isAllSelect = true;     //是否全选
                    var haveSelect = false;     //至少有一项选中
                    if(innVal.length>0){
                        innVal.map(function(finalVal,finalInd){
                            if(finalVal.sectorSelect == false){
                                isAllSelect = false;
                            }
                            if(finalVal.sectorSelect == true){
                                haveSelect = true;
                            }
                        })
                        if(haveSelect == true){
                            that.configIndustry[innInd].actualSelect = true;
                        }
                        if(isAllSelect == true){
                            that.displayIndustry[innInd] = true;
                        }else{
                            that.displayIndustry[innInd] = false;
                        }
                    }else{
                        if(that.configIndustry[innInd].actualSelect == true){
                            that.displayIndustry[innInd] = true;
                        }else{
                            that.displayIndustry[innInd] = false;
                        }
                    }
                })
            },
            /**
            * @desc Industry Module
            */
            showIndustry:function(){
                if(this.candidatePop.showCandidateCriteriaIndustry == true){
                    this.hideCriteriaIndustryDropdown();
                }else{
                    this.showCriteriaIndustryDropdown();
                }
            },
            //选中industry的内容,每次选中都更新industry数组的值
            selectedIndustry:function(event,index){
                var that = this;
                if(this.displayIndustry[index] == true){
                    this.displayIndustry[index] = false;
                    this.configIndustry[index].actualSelect = false;
                }else{
                    this.displayIndustry[index] = true;
                    this.configIndustry[index].actualSelect = true;
                }
                this.selectAllSector(index);
                this.renderData();
            },
            selectAllSector(index){
                var that = this;                
                var tempBoolean = this.displayIndustry[index];
                if(this.configSector[index].length>0){
                    that.configSector[index].map(function(val,ind){
                        that.configSector[index][ind].sectorSelect = tempBoolean;
                    })
                }
            },
            selectSector:function(event,index,innerInd){
                var that = this;
                if(this.configSector[index][innerInd].sectorSelect == true){
                    this.configSector[index][innerInd].sectorSelect = false;
                }else{
                    this.configSector[index][innerInd].sectorSelect = true;
                }
                this.renderAllSelect();
                this.renderData();
            },
            /**
             * @desc render display string and send Data
             */
            renderData(){
                var that = this;
                var indStr = "";
                var secStr = "";
                var str = "";
                var industryArr = [];
                var sectorArr = [];
                var multiIndustry = [];
                that.configIndustry.map(function(value,index){
                    if(that.displayIndustry[index] == true){
                        str = str + value.actualValue + ", ";
                        indStr = indStr + value.actualValue + ", ";
                    }
                    var tempIndustry = {}
                    if(value.actualSelect == true){
                        industryArr.push(value.actualKey);
                        tempSearchItem ={
                            industry:value.actualKey,
                            sector:[]
                        };
                        var tempSector = [];
                        var tempStr = "";
                        that.configSector[index].map(function(secVal,secIndex){
                            if(secVal.sectorSelect == true){
                                tempStr = tempStr + secVal.sectorValue + ", ";
                                secStr = secStr + secVal.sectorValue + ", ";
                                tempSector.push(secVal.sectorKey);
                                tempSearchItem.sector.push(secVal.sectorKey);
                            }
                        })
                        sectorArr.push(...tempSector);
                        if(tempSector.length != that.configSector[index].length){
                            str = str + tempStr;
                        }
                    }
                    if(tempSearchItem.industry){
                        multiIndustry.push(tempSearchItem);
                    }
                })
                if(industryArr.length>0){
                    indStr = indStr.slice(0,-2);
                }else{
                    indStr = "";
                }
                if(sectorArr.length>0){
                    secStr = secStr.slice(0,-2);
                }else{
                    secStr = "";
                }
                if(sectorArr.length>0||industryArr.length>0){
                    str = str.slice(0,-2);
                }else{
                    str = "";
                }
                this.industryStr = indStr;
                this.sectorStr = secStr;
                this.displayStr = str;
                this.sectorList = sectorArr;
                this.industryList = industryArr;
                /**
                 * @data structure industryArr:[ 'industry_key1','industry_key2',... ]
                 *       sectorArr:[ 'sector_key1','sector_key2',... ]
                 *       multiIndustry:
                 *           [ { industry:'industry_key',sector:[ 'sector_key1','sector_key2' ] },... ]
                 *       
                 */
                this.$emit("industryInput",{
                    industry:industryArr,
                    sector:sectorArr,
                    multiIndustry:multiIndustry
                });
            }
        }
    }
</script>
<style lang="less" scoped>
.error_same{position:absolute;top:100%;left:10px;line-height:1.5;}
.icon-check_box{color: #a0c5e0;font-size: 0.28rem;}
  .glyphicon {font-size: 10px;color: #626262;padding-top:5px;}
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
  .search_data_display li{padding: 0.05rem 0;cursor: pointer;}
  .search_data_display li span{padding:0 0.1rem;color:#333;}
  .icon-check_box_outline_blank{color: #445cb3;}
  .icon-check_box,.icon-check_box_outline_blank{font-size: 16px;color: #445cb3;}
  .location_border_style{border-top:1px solid #cfcfcf;padding:0.15rem 0 0 0.3rem;margin-top: 0.1rem;}
  .location_border_style ul{overflow: unset;height: auto;}
  .industry_block_style{padding: 0;}
  @media screen and (max-width:767px){

  }
</style>