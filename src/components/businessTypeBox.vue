<template>
    <div class='tmplBusinessTypeBox'>
        <div class="box">
            <div :class="boxTop">{{ typeData }}</div>
            <div :class="boxBottom">{{ dataRate }}</div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            boxTop:'',
            boxBottom:'',
        }
    },
    created() {
        // this.typeData = '出口',
        // this.dataRate = '8000',
        // this.commentType = '1'
        this.getColor();
    },
    methods: {
        getColor(){

            if(this.commentType=='1'){
                this.boxTop = 'boxTop',
                this.boxBottom = 'boxBottom'
            }else if(this.commentType=='2'){
                this.boxTop = 'boxTop2',
                this.boxBottom = 'boxBottom2'
            }
        }
    },
    props:['commentType','typeData','dataRate']
}
</script>

<style lang = 'scss'>
    .tmplBusinessTypeBox{
        .box{
            width: 1.1rem;
            height: 1.1rem;                    
            color: #fff;
            text-align: center;            
            .boxTop{
                height: 0.7rem;
                line-height:0.7rem;
                font-size: .4rem;
                background-color: #83dd5c; 
                border-top-left-radius:.08rem;
                border-top-right-radius:.08rem;
            }
            .boxBottom{
                height: 0.4rem;
                background-color: #5ab632;
                line-height: 0.4rem;
                font-size: .22rem;
                border-bottom-left-radius:.08rem;
                border-bottom-right-radius:.08rem;
            }
            .boxTop2{
                height: 0.7rem;
                line-height:0.7rem;
                font-size: .4rem;
                background-color: #6f8aff;
                border-top-left-radius:.08rem;
                border-top-right-radius:.08rem;
            }
            .boxBottom2{
                height: 0.4rem;
                background-color: #514ed7;
                line-height: 0.4rem;
                font-size: .22rem;
                border-bottom-left-radius:.08rem;
                border-bottom-right-radius:.08rem;
            }
        }
    }
</style>