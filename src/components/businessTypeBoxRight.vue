<template>
    <div class='businessTypeBoxRight'>
        <div class="box">
            <!-- <div :class="boxTop">{{ typeData }}</div> -->
            <div>{{ typeData }}</div>
            <div>{{ dataRate }}</div>
            <!-- <div :class="boxBottom">￥{{ dataRate }}</div> -->
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            boxTop:'',
            boxBottom:''
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
    .businessTypeBoxRight{
        .box{
            padding-top: .15rem;
            width: 1.1rem;
            height: 1.1rem;                    
            color: #fff;
            text-align: center;   
            background-color:#27a2f0 ;  
            border-radius: 0.08rem; 
            font-size: .3rem;
            div{
                line-height: 1.4;
            }
            
                 
        }
    }
</style>