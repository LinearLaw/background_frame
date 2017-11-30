<template>
    <div class="search_location search_item" @click.stop="showLocations($event)">
      <span class="item_text">{{locationStr}}</span>
      <span class="glyphicon pull-right" 
          :class="{'glyphicon-triangle-bottom':!isShowDetail,'glyphicon-triangle-top':isShowDetail}"></span>
      <div class="search_data_display multiSelectStyle" v-if="isShowDetail">
        <ul>
          <li class="location_all_style">
            <i :class="{
              'icon-check_box_outline_blank':!isZeroSelect,
              'icon-check_box':isZeroSelect}" 
              @click.stop="selectAllLocation($event);search_info()"></i>
            <span>{{location.location[0].location_all}}</span>
          </li>
          <li class="location_block_style clearfix" 
              v-for="(value,key) in this.location.locationAll"
              @click.stop="showTwiceDetail($event,key);">
              <span>
                <i :class="{
                  'icon-check_box_outline_blank':!isFirstSelect[key],
                  'icon-check_box':isFirstSelect[key]}"
                  @click.stop="selectFirstLocation($event,key);search_info()"></i>
                <span v-for="(twiceValue,twiceKey) in value">{{twiceValue}}</span>
              </span>
              <span class="glyphicon pull-right"
                  :class="{'glyphicon-triangle-bottom':!locationDetailShow[key],'glyphicon-triangle-top':locationDetailShow[key]}" @click.stop="showTwiceDetail($event,key)"></span>
              <div class="location_border_style" v-show="locationDetailShow[key]">
                <ul>
                  <li class="col-md-6" 
                      v-for="(thirdValue,thirdKey) in location.locationAllDetail[key]"
                      @click.stop="selectTwiceLocation($event,key,thirdKey);search_info()">
                      <span v-for="(innerValue,innerKey) in thirdValue">
                        <i :class="{
                          'icon-check_box_outline_blank':!isTwiceSelect[key][thirdKey],
                          'icon-check_box':isTwiceSelect[key][thirdKey]}"></i>
                        <span>{{innerValue}}</span>
                      </span>
                  </li>  
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<style scoped>
  .search{background-color: #445cb3;}
  .search_item {padding: 0.21rem 0.25rem;background: #fff;position: relative;float: left;}
  .search_item {float: none;margin-bottom: 0.08rem;box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.19);padding: 0.2rem 0.25rem;border-radius: 3px;}
  .search_item + .search_item {border-left: solid 1px #d8dbf6;}
  .search_item input {
    width: 100%;
    border: 0;
    outline: 0;
    padding-right:0.3rem;
    font-size: 16px;color: #36404a;
  }
  .search_item > span {vertical-align: middle;font-size: 16px;}
  .item_text {
    /* max-width: 90%; */
    padding-right:15px;
    font-size: 16px;
    white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

  .search_item .glyphicon-triangle-bottom,.search_item .glyphicon-triangle-top{
    font-size: 12px;
    position: absolute;
    right: 0.25rem;
    top:50%;
    transform:translateY(-50%);
  }
  .search_location {width:100%;cursor: pointer;}
  .search_location .search_data_display{ width:150%;}
  .open_more_item {padding: 0.23rem 0.24rem;padding-right:0;font-size: 15px;cursor: pointer;}
  .open_more_item span {line-height: 0.16rem;vertical-align: middle;color: #ffffff;}
  .glyphicon {font-size: 12px;line-height: none;color: #626262;}

  .search_data_display,.job_title_drop_down{width: 100%; position: absolute;top:100%;left: 0;z-index: 9999;background: #fff;box-shadow: 0px 5px 3.3px 0.7px rgba(0, 0, 0, 0.33);z-index: 9999;border-top:1px solid #d9dcf6;}
  .search_data_display{padding:0.15rem 0 0.34rem 0.34rem;}
  .search_data_display li{padding: 0.05rem 0;padding-left:25px;position:relative;cursor: pointer;}
  .search_data_display li .glyphicon-triangle-bottom,.search_btn .search_data_display li .glyphicon-triangle-top{
    top:0.2rem;
  }
  .salary_item{
    padding-left:calc(80px + 0.25rem);
  }
  .salary_item .item_text{
    max-width:70px;
    padding:0;
    white-space: normal;
    position: absolute;
    left:0.25rem;
    top:50%;
    transform:translateY(-50%);
  }

  .icon-check_box_outline_blank{color: #445cb3;}
  .icon-check_box,.icon-check_box_outline_blank{
    font-size: 22px;
    color: #445cb3;
    position: absolute;
    left:0;
  }
  span{vertical-align: top;}
  li.location_block_style{
    margin-left: 0.3rem;
    padding:0;
    padding-top:0.1rem;
    padding-left:25px;
    position:relative;
    border-bottom:1px solid #cfcfcf;
  }
  .location_border_style{border-top:1px solid #cfcfcf;padding:0.15rem 0 0 0.3rem;}
  .location_border_style ul{overflow: unset;height: auto;}
  .location_all_style{margin-bottom: 0.1rem;}

  ul.height_auto{height: auto;}
  @media screen and (max-width:768px){


  }
</style>
<script>
/**
 * @desc 默认的首页
 */
export default{
  name: 'homepage',
  data:function(){
    return{
      //new Location
      location:{
        location:null,
        locationAll:null,
        locationAllDetail:[]
      },
      
      isShowDetail:false,
      locationDetailShow:[false,false,false],
      isZeroSelect:false, //是否发生第一级全选
      isFirstSelect:[false,false,false],
      isTwiceSelect:[[],[],[]],
      firstLocationName:[],
      firstLocationValue:[],
      config:{},

      //new industry
      locationStr:"Locations",

      isShowFunction:false,
      isIndustry:false,
      isSector:false,
      config:{},

      locationDisplayStr:[],

      roleType:""
    }
  },
  mounted:function(){
    this.lang = localStorage.i18n;
    this.refreshData();
    
    document.addEventListener('click', (event) => {
        event.cancelBubble = true;
        event.preventDefault=true;//阻止默认事件（原生方法）
        event.stopPropagation();
        this.isShowJobList = false;
        this.isShowDetail = false;
        this.isIndustry = false;
        this.isShowFunction = false;
    })
  },
  methods:{
    refreshData:function(){
      var that = this;

      //读取config里面的location
      var tempConfig = this.CONFIG.result;
      this.config = tempConfig;
      /**
      * @desc location create
      */
      this.locationDetailShow = [];
      this.isFirstSelect = [];
      this.isTwiceSelect = [];
      this.location.location = tempConfig.location;
      this.location.locationAll = tempConfig.location_all;
      //获取所有大地点的名称数组
      var secondLocationName = tempConfig.location_all.map(function(value,index){
        for(var key in value){
          return key
        }
      });
      //通过大地点的名称查询到二级地点的数组
      this.location.locationAllDetail = secondLocationName.map(function(value,index){
        that.locationDetailShow.push(false);
        that.isFirstSelect.push(false);
        that.isTwiceSelect.push([]);
        return tempConfig[value]
      })
      $.each(that.location.locationAllDetail,function(index,value){
        that.isTwiceSelect[index].length = value.length;
        for(var i =0;i<that.isTwiceSelect[index].length;i++){
          that.isTwiceSelect[index][i] = false;
        }
      })
      var tempFirstLocation = [];
      var tempAllLocation = [];    
      $.each(that.location.locationAll,function(index,value){
        $.each(value,function(innerIndex,innerValue){
          tempFirstLocation.push(innerIndex);
          tempAllLocation.push(innerValue);        
        })
      })
      this.firstLocationName = tempFirstLocation;
      this.firstLocationValue = tempAllLocation;
    },
    allClose:function(item){
      var temp = this[item];
      this.isShowDetail = false;
      this[item] = temp;
    },
    showLocations:function(){
      this.allClose('isShowDetail');
      if(this.isShowDetail == true){
        this.isShowDetail = false;
      }else{
        this.isShowDetail = true;
      }
    },
    /**
     * @desc location data module
     */
    showTwiceDetail:function(event,key){
      if(this.locationDetailShow[key]){
        this.$set(this.locationDetailShow,key,false);
      }else{
        this.$set(this.locationDetailShow,key,true);
      }
    },
    //所有地点
    selectAllLocation:function(event){
      var that = this;
      if(this.isZeroSelect){
        this.isZeroSelect = false;
        this.operationData(this.isFirstSelect,false);
        $.each(that.isTwiceSelect,function(index,value){
          that.operationData(value,false);
        })
      }else{
        this.isZeroSelect = true;
        this.operationData(this.isFirstSelect,true);
        $.each(that.isTwiceSelect,function(index,value){
          that.operationData(value,true);
        })
      }
      this.calculateLocationStr();
    },
    //第一级地点
    selectFirstLocation:function(event,key){
      if(this.isFirstSelect[key]){
        this.$set(this.isFirstSelect,key,false);
        this.operationData(this.isTwiceSelect[key],false);
      }else{
        this.$set(this.isFirstSelect,key,true);
        this.operationData(this.isTwiceSelect[key],true);
      }
      this.calculateLocationStr();
      this.judgeFirstAllSelect();
    },
    judgeFirstAllSelect:function(){
      //判断第一级所有是否全选，向上作用
      var that = this;
      var isAllSelect = true;
      $.each(that.isFirstSelect,function(index,value){
        if(value == false){
          isAllSelect = false;
        }
      })
      isAllSelect==true?this.isZeroSelect=true:this.isZeroSelect = false;
    },
    //第二级地点
    selectTwiceLocation:function(event,key,thirdKey){
      if(this.isTwiceSelect[key][thirdKey]){
        this.$set(this.isTwiceSelect[key],thirdKey,false);
      }else{
        this.$set(this.isTwiceSelect[key],thirdKey,true);
      }
      this.calculateLocationStr();
      this.judgeTwiceAllSelect(key,thirdKey);
    },
    judgeTwiceAllSelect:function(key,thirdKey){
      //判断第一级所有是否全选，向上作用
      var that = this;
      var isAllSelect = true;
      $.each(that.isTwiceSelect[key],function(index,value){
        if(value == false){
          isAllSelect = false;
          return;
        }
      })
      isAllSelect==true?this.isFirstSelect[key]=true:this.isFirstSelect[key]=false;
    },
    // 1、计算location的界面显示字符串
    calculateLocationStr:function(){
      var that = this;
      var str = "";
      this.renderLocationData();
      this.locationDisplayStr.map((item,index)=>{
        str += item + ","
      })
      str = str.slice(0,-1);
      if(this.locationDisplayStr.length <= 0){
        this.locationStr = "Location";
      }else{
        this.locationStr = str;
      }
    },
    // 2、计算location的三级二叉树结构的数组
    calculateLocation:function(){
      var that = this;
      var tempSendLocation = [];
      var tempFirstLocation = this.firstLocationName;
      //构造大数组
      $.each(that.isTwiceSelect,function(index,value){
        if(value.length>0){
          var tempObj={
            "key":that.firstLocationName[index],
            "value":that.firstLocationValue[index],
            "subset":[]
          };
          $.each(value,function(innerIndex,innerValue){
            if(innerValue == true){
              $.each(that.location.locationAllDetail[index][innerIndex],function(lastKey,lastValue){
                tempObj["subset"].push({key:lastKey,value:lastValue})
              })
            }
          })
          if(tempObj["subset"].length>0){
            tempSendLocation.push(tempObj);
          }
        }
      })
      return [{"key":"location_all","subset":tempSendLocation}]
    },
    // 3、计算用于搜索的数组
    renderLocationData:function(){
      var locationFinal = [];
      var locationFinalValue = [];
      var that = this;
      var originLocationData = this.calculateLocation();
      $.each(originLocationData[0]["subset"],function(index,value){
        if(value["subset"].length==0){
          locationFinal.push(value["key"]);
          locationFinalValue.push(value["value"]);
        }else if(value["subset"].length == that.isTwiceSelect[index].length){
          locationFinal.push(value["key"]);
          locationFinalValue.push(value["value"]);
        }else{
          $.each(value["subset"],function(innerkey,innervalue){
            locationFinal.push(innervalue["key"]);
            locationFinalValue.push(innervalue["value"]);
          })
        }
      })
      this.locationDisplayStr = locationFinalValue;
      return {locationArr:locationFinal,locationThreeLevel:originLocationData};
    },
    operationData:function(obj,needValue){
      //批量操作数据，将对象的value全部变成needValue
      var that = this;
      var tempObj = obj;
      $.each(obj,function(index,value){
        obj[index] = needValue;
      })
      this.$set(obj,tempObj);
    },
    //获取location三级数组
    search_info:function(){
      var locationDisplayStr = this.locationDisplayStr;//显示到input栏的str，eg：“香港,九龍,新界”
      /**
       * @description  location包含两个对象
       *                location{
                          locationArr:[ 以所有location的key的数组，只有一级 ],  eg：["location_hk_all", "location_kl_all"]
                          locationThreeLevel:[ 对，就是那个神坑，三级数组 ]
                        }
       */ 
      var location = this.renderLocationData();
      // 向外暴露location对象
      this.$emit("locationInput",location);
    },
  }
}
</script>
