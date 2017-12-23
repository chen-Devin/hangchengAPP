<template>
    <div class='tmplReimbursingTemporaries'>
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4>临时费用</h4>
                    <div class="btn">
                        <button id="" v-for="(item,index) in btnArr" v-show="item" @click="getBG(item,index)" type="button" class="mui-btn mui-btn-primary" :class = "isShowCheck[index] == true ? '' : 'mui-btn-outlined'">{{ index }}<span v-show="isShowCheck[index]" class="mui-icon mui-icon-checkmarkempty"></span></button>
                    </div>
                    
                    <!-- mui-btn-outlined -->
                    <!-- <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" >压车费<span v-show="isShowCheck"  class="mui-icon mui-icon-checkmarkempty"></span></button> -->
                    <!-- <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">打单费<span v-show="isShowCheck" class="mui-icon mui-icon-checkmarkempty"></span></button> -->
                    <div class="add" @click="addType">+</div>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <div class="mui-media-body">
                        <div class="setFlex">
                            <p v-text = 'msg'></p>
                            <input type="text" placeholder="请输入费用,保留2位小数">
                        </div>
                        
                        <div class="photoBox">
                            <div class="photograph">
                                <img src="../../assets/image/tubiao/photograph.png" alt="">
                                <p>单证拍照</p>
                            </div>
                        </div>
                    </div>                                         
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            // btnArr : ["过磅费","压车费","打单费"],
            btnArr : {"过磅费":1,"压车费":1,"异提费":0,"高速费":0,"预提费":0,"反空费":0,"关场费":0,"停车费":0,"查柜费":0,"打单费":1,"其他费":0,"多地装货费":0},
            isShowCheck:{"过磅费":true,"压车费":false,"打单费":false},
            // isShowCheck:[true,false,false],
            // btnNum:1
            istoggle:'过磅费',
            msg : '过磅费',
        }
    },
    created() {
        
    },
    methods: {
        getBG(item,index){
            console.log(this.$el.getElementsByClassName('mui-btn')[index]);
            console.log(this.isShowCheck);

            console.log(item);
            console.log(index);
            // this.btnArr[index] = '过路费';
            console.log(this.btnArr);

            this.msg = index;
            this.isShowCheck[index] = true;
            this.isShowCheck[this.istoggle] = false;
            this.istoggle = index;                      
            // this.$set(this.isShowCheck,index,true);
            // this.isShowCheck.splice(index,1,true);
        },
        addType(){
            console.log('abc');
            this.$root.eventBus.$emit('addTypes',this.btnArr)
        },       
    },
    mounted:function() {
        this.$root.eventBus.$on('addTypesTo', function(e) {
            // this.barCount++
            console.log(e);
            // this.btnArrRe = e;
            Object.assign(this.btnArr,e);
            // console.log(this.saveStart);
        }.bind(this))
    }
    
}
</script>

<style lang = "scss">
    .tmplReimbursingTemporaries{
        .mui-content{
            .mui-card-header{
                min-height : 1rem;
                justify-content : flex-start;
                h4{
                    font-size: .40rem;
                    color: #f15b39;
                    font-weight: 500;
                }
                .btn{
                    width: 6.5rem;
                    .mui-btn {
                        border-radius:0.1rem;
                        /* width: .1.5rem; */
                        height: 0.6rem;
                        line-height: 0.6rem;
                        font-size: .3rem;
                        padding: 0 .2rem;
                        margin-left: 0.25rem;
                        margin-bottom: 0.15rem;
                    }
                    .mui-icon{
                        /* border: 0.01rem solid #fff; */
                        border-radius: 50%;
                        color: #27a2f0;
                        font-weight:900;
                        font-size: 0.2rem;
                        background-color: #fff;
                        position: absolute;
                        bottom: 0.06rem;
                        right: 0.06rem;                       
                    }
                }                
                .add{
                    font-size: .6rem;
                    color: #f8763c;
                    position: absolute;
                    right: .2rem;
                }
            }
            .mui-card-content{
                height: auto;
                padding-bottom: .8rem;
                text-align: center;
                .mui-media-body{
                    padding: 0;
                    .setFlex{
                        display:flex;
                        width:6rem;
                        margin-bottom: 0.3rem;
                        p{
                            font-size: .5rem;
                            font-weight: 500;
                            color: #333;
                            width: 2.3rem;
                        }
                        input{
                            height: .5rem;
                            padding: 0 0 0 .2rem;
                            font-size: .3rem;
                            border:0;
                            border-bottom: 0.02rem solid #cacaca;
                            &::-webkit-input-placeholder{
                                color: #cacaca;
                            }
                        }
                    }
                    .photoBox{
                        width: 100%;
                        height: 4rem;
                        border: .02rem solid #cacaca;
                        border-radius: 0.1rem;
                        .photograph{
                            display: inline-block;
                            width: 1.5rem;
                            margin-top: 1rem;
                            img{
                                color: #cacaca;
                                width: 70%;                           
                            }
                        }
                        
                    }
                }
            }
        }
    }
</style>