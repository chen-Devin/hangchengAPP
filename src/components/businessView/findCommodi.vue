<template>
    <div class='tmplFindCommodi'>
        <div class="mui-content">
            <div class="mui-card" :class="{'pastDueColor':pastDue}">
                <!--页眉，放置标题-->
                <div class="mui-card-header" :class="{'colorHot':showHot}">
                    <h4>做柜时间:{{ data | fmtDate()}}</h4>
                    <p v-show="showOvertime&&show">时效倒计时:{{ dataMM | fmtDate('m分钟ss秒')}}</p>
                    <p v-show="showOvertime&&!show">时效倒计时:{{ dataMM | fmtDate('s秒')}}</p>
                    <p v-show="!showOvertime">已超时</p>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <a @click="goDetail" >
                        <businessTypeBox  class="box_l mui-media-object mui-pull-left"  :commentType = '1' :typeData = 'typeDatas1' dataRate = '8000'></businessTypeBox>
                        <div class="mui-media-body">
                            <p>YML20170812</p>
                            <p>华南物流提1/湖南湘潭阳明装/YICT还/40GP&nbsp;&nbsp;17吨</p>
                        </div>
                        <div class="upleftLine"></div>
                        <div class="findRight"></div>
                    </a>                    
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import businessTypeBox from '@C/businessTypeBox.vue'
export default {
    data() {
        return {
            data : new Date(),
            dataMM : 0,
            typeDatas1 : '出口',
            typeDatas2 : '现结',
            pastDue:false,
            show:true,
            num:1000,
            timer: null,
            showOvertime:false,
            showHot:false
        }
    },
    created() {
        this.isShowPastDue();  
        this.goDetail();
    },
    methods: {
        isShowPastDue(){
            this.pastDue=this.pastDueShow;
            this.pastDueShow != null ? this.pastDue=this.pastDueShow : this.pastDue = false;
        },
        goDetail(){
            if(this.pastDue){
                return false
            }
            const TIME_COUNT = 122456;  
            if(TIME_COUNT != null){
                this.showOvertime = true;
            }          
            this.dataMM = TIME_COUNT;
            if(this.dataMM>=60000){
                this.show = true;
            }else{
                this.show = false;
            }
            this.timer = setInterval(()=>{
                if(this.dataMM>=1000&&this.dataMM<=TIME_COUNT){                    
                    this.dataMM -=this.num;
                    if(this.dataMM<=60000){
                        this.show = false;
                    }else if(this.dataMM <= 120000){
                        this.showHot = true;
                    }
                }else{
                    clearInterval(this.timer);
                    this.dataMM = 0;   
                    this.showOvertime = false;                
                    this.pastDue = true;
                    this.timer = null;
                }
            },1000)

        }
    },
    components:{
      businessTypeBox 
    },
    computed:{
        
    },
    props:['pastDueShow']
}
</script>

<style lang="scss">
    .tmplFindCommodi{
        .mui-content{
            .mui-card{
                .mui-card-header{
                    h4{
                        color: #f15b39;
                        font-size: .4rem;
                    }
                }
                .mui-card-header.colorHot{
                    p{
                        color: #fa0000
                    }
                }
                .mui-card-content{
                    a{
                        display: flex;
                        .mui-media-body{
                            flex: 1;
                        }
                        .upleftLine{
                            position: relative;
                            width: 1px;
                            height: 1.5rem;
                            top: -.2rem;
                            background-color: #cbcbcb;
                        }
                        .findRight{
                            display: inline-block;
                            width: 1.3rem;
                            height: 1.1rem;
                            background: url('../../assets/image/tubiao/18.png') center right no-repeat;
                            background-size:1.1rem 1.1rem;
                            // border-left:1px solid #bebebe;
                            padding-left: .2rem;
                            margin-right: .1rem;
                        }
                        .findRightBg{
                            display: inline-block;
                            width: 1.3rem;
                            height: 1.1rem;
                            background: url('../../assets/image/tubiao/19.png') center right no-repeat;
                            background-size:1.1rem 1.1rem;
                            // border-left:1px solid #bebebe;
                            padding-left: .2rem;
                            margin-right: .1rem;
                        }
                    }                    
                }                
            }
            .pastDueColor.mui-card{  
                .mui-card-header{
                    h4{
                        color: #999;
                    }
                    p{
                        color: #999;
                    }
                }
                .mui-card-content{
                    a{
                        .box{
                            .boxBottom{
                                background-color:#999;
                            }
                            .boxTop{
                                background-color: #bfbfbf;
                            }
                        }
                         
                        .findRight{
                            display: inline-block;
                            width: 1.3rem;
                            height: 1.1rem;
                            background: url('../../assets/image/tubiao/19.png') center right no-repeat;
                            background-size:1.1rem 1.1rem;
                            // border-left:1px solid #bebebe;
                            padding-left: .2rem;
                            margin-right: .1rem;
                        }
                    }                    
                }                
                
            }
        }

    }
</style>