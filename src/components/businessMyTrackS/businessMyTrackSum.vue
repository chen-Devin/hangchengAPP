<template>
    <div class='tmplBusinessMyTrackSum'>
        <div class="mui-content">
            <div class="title">
                <a @click="showAll"><span :class="{'baseIcon':isAllShow}"></span><p v-html="allClose"></p></a>
            </div>
             <ul class="mui-table-view" :class="{'viewCell':isAllShow}">
                <!-- <li class="mui-table-view-cell mui-collapse" v-for="(list,index) in 5" :class="{'mui-active':isAllShow || changeMA === index}" @click="changMuiActive(index)"> -->
                <li class="mui-table-view-cell mui-collapse" v-for="(list,index) in 5" :class="{'mui-active':showArr[index] == true}" @click="changMuiActive(index)">
                    
                    <a v-show="!isAllShow" class="mui-navigate-right" href="JavaScript:void(0)">
                        <div class="left">
                            <div class="leftOut">
                                <div class="leftDot"></div>
                            </div>                           
                        </div>
                        <div class="right">
                            <span>面板{{ index }}</span>
                            <p>{{ data | fmtDate('YYYY-MM-DD &nbsp; HH:mm')}}</p>
                            <div class="line"></div>
                        </div>
                    </a>
                    <div class="line"></div>
                    <div class="mui-collapse-content">
                        <div class="businessMyTrackTopS">
                            <ul>
                                <li>
                                    <span>运单编号</span>
                                    <span>YIH697512345/海格物流</span>
                                </li>
                                <li>
                                    <span>订&nbsp;&nbsp;舱&nbsp;&nbsp;号</span>
                                    <span>SZT9845512345</span>
                                </li>
                                <li>
                                    <span>柜号柜型</span>
                                    <span>PCIU8432607/40GP</span>
                                </li>
                                <li>
                                    <span>铅封关封</span>
                                    <span>ABSA4545/CUS4782</span>
                                </li>
                                <li>
                                    <span>车牌司机</span>
                                    <span>粤BSBL45/张大江</span>
                                </li>
                            </ul>
                        </div>
                        <div v-show="isAllShow" class="unfoldAll">
                            <div class="wordAll">还柜</div>                                                      
                        </div>
                        <div class="leftOutS">
                            <div class="leftDotS"></div>
                        </div> 
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            changeMA:'',
            data : new Date(),
            isAllShow:false,
            showArr:[false,false,false,false,false],
            allClose:'全部展开'
        }
    },
    created() {
        
    },
    methods: {
        changMuiActive:function(index){
            if(this.isAllShow){
                return false
            } 
            if(this.showArr[index] == true){
                console.log('bb');
                
                this.showArr[index] = false
                this.$set(this.showArr,index,false);
                // this.isShowCheck.splice(index,1,false);
            }else{
                console.log('aa');
                
                this.showArr[index] = true;
                this.$set(this.showArr,index,true);
                // this.isShowCheck.splice(index,1,true);
            }
            // this.isAllShow = false;
            // if(this.changeMA === index){
            //     this.changeMA = '';
            // }else{
            //     this.changeMA = index
            // }
            
            
        },
        showAll:function(){
            if(this.isAllShow == false){
                this.allClose = '全部关闭'
                this.showArr.forEach(function(item,index){
                this.$set(this.showArr,index,true);
                this.isAllShow = true;   
                }          
            ,this)
            }else{
                this.allClose = '全部展开'
                this.showArr.forEach(function(item,index){
                this.$set(this.showArr,index,false);
                this.isAllShow = false;   
                }          
            ,this)
            }
        }
    }
}
</script>

<style lang='scss'>
    .tmplBusinessMyTrackSum{
        margin-top: 0.3rem;
        .mui-content{
            font-size: .4rem;
            background-color: #fff;
            padding-bottom: .5rem;
            >::after{
                    display: none;
                }
            .title{
                display: flex;
                justify-content: flex-end;
                margin-right: 0.5rem;
                a{
                    display: inline-block;
                    height: 1.5rem;
                    line-height: 1.8rem;
                    // background-color: #cacaca;
                    right: 0;
                    span{
                        content: '';
                        display: inline-block;
                        position:relative;
                        width: .6rem;
                        // margin-top: .4rem;
                        height: .6rem;
                        background: url('../../assets/image/tubiao/14.png') no-repeat center center;
                        background-size:.6rem .6rem;
                    }
                    p{
                        display: inline-block;
                        position:relative;
                        color: #27a2f0;
                        top: -.12rem;
                        height: 0.6rem;
                        margin-bottom: 0;
                        line-height: .6rem;
                    }
                    .baseIcon{
                        content: '';
                        display: inline-block;
                        position:relative;
                        width: .6rem;
                        // margin-top: .4rem;
                        height: .6rem;
                        background: url('../../assets/image/tubiao/13.png') no-repeat center center;
                        background-size:.6rem .6rem;
                    }
                }
            }
            .mui-table-view{
                
                .mui-table-view-cell{
                    // padding: 0;

                    
                    .mui-navigate-right{
                            display: flex;
                            justify-content: space-between;
                            height: 1.5rem;
                            padding: 0 0.4rem;
                        .left{
                            width: 1px;
                            height: 1.5rem;
                            display: inline-block;
                            background-color: #cacaca;
                            // position: relative;
                            margin-right: 1rem;
                            .leftOut{
                                    line-height: 1.5rem;
                                    position: relative;
                                    top: 0.6rem;
                                    right: 0.15rem;
                                    width: .4rem;
                                    height: .4rem;
                                    // margin: 0.1rem;
                                    border-radius: 50%;
                                    background-color: #fff;
                                .leftDot{
                                    line-height: 1.5rem;
                                    position: absolute;
                                    top: .1rem;
                                    right: 0.14rem;
                                    width: .2rem;
                                    height: .2rem;
                                    // margin: 0.1rem;
                                    border-radius: 50%;
                                    background-color: #cacaca;
                                }
                            }
                            
                        }
                        .right{      
                            flex: 1; 
                            display: flex;
                            justify-content: space-between;                     
                            span{
                                line-height: 1.5rem;
                            }
                            p{
                                display: inline-block;
                                line-height: 1.5rem;
                                margin-right: 1rem;
                            }
                            
                        }
                        &::after{
                                content: '';
                                width: .4rem;
                                height: .4rem;
                                background: url('../../assets/image/tubiao/12.png') no-repeat center center;
                                background-size:.8rem .8rem;
                        } 
                  
                    }
                    &.mui-table-view-cell.mui-active{
                        background-color: #fff;
                        margin-top: 0;
                        .mui-navigate-right{
                            &::after{
                                content: '';
                                width: .4rem;
                                height: .4rem;
                                background: url('../../assets/image/tubiao/11.png') no-repeat center center;
                                background-size:.8rem .8rem;
                            }                        
                        }
                        .leftOut{
                            .leftDot{
                                background-color: #eb6100;
                            }
                        }
                        .line{
                            display: inline-block;
                        }
                        
                    }
                    
                    .mui-collapse-content{
                        padding: 0 .4rem;
                        position: relative;
                        .businessMyTrackTopS{
                            padding: .2rem .2rem;
                            font-size: .35rem;
                            background-color: #fff;
                            border-left:1px solid #c8c7cc;
                            li{
                                display: flex;                
                                height: .8rem;
                                span{
                                    line-height: .8rem;
                                }
                                
                                :first-child{
                                    padding-right: 0.6rem;
                                    flex: 3;
                                    text-align:right;
                                }
                                :last-child{
                                    flex: 9;
                                    color: #8f8f8f;
                                }
                            }
                        }
                        
                    }
                    .line{
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        left: 1rem;
                        height: 1px;
                        display: none;
                        // width: 6rem;
                        content: '';
                        -webkit-transform: scaleY(.5);
                        transform: scaleY(.5);
                        background-color: #c8c7cc;
                    }
                    
                }
                >::after{
                    // display: none;
                    left:1rem;
                    // height:10px;
                }
                
            }
            
        }
        .unfoldAll{
            display: inline-block;
            position: absolute;
            width: .32rem;
            left:1rem;
            top:50%;
            margin-top: -.4rem;
        }
        .mui-content .mui-table-view.viewCell .mui-table-view-cell{
            padding: 0;
            .mui-collapse-content{
                padding-left: 2rem; 
                margin: 0;            
            }
        } 
        .mui-content .mui-table-view.viewCell > ::after{
            left: 2.5rem;
        }
        .viewCell .leftOutS{
            position: absolute;
            top: 50%;
            left: 1.83rem;
            width: .6rem;
            height: .6rem;
            // margin: 0.1rem;
            border-radius: 50%;
            margin-top: -.3rem;
            background-color: #fff;
            .leftDotS{
                position: absolute;
                top: 0.15rem;
                left: .05rem;
                width: .3rem;
                height: .3rem;
                // margin: 0.1rem;
                border-radius: 50%;
                background-color: #cacaca;
            }
        } 
    }

</style>