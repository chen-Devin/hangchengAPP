<template>
    <div class="tmplPopupsCostTypeS">
        <div class='tmplPopupsCostType' :class="showClass == true ? 'active' : ''">
    <!-- <div class='tmplPopupsCostType' :class="'active'"> -->
            <div class="top">
                <button class="cancel" @click="cancelS">取消</button>
                <button class="confirm" @click="showC">确定</button>
            </div>
            <div class="footer">
                <!-- <div v-for="(item,index) in btnObj" :key="index"><button :class="this.btnObj[index] == 1 ? 'SizeColor' : ''">{{ index }}</button></div> -->
                <div v-for="(item,index) in btnObj" ><button @click="btnColor(index)" :class="btnArrRe[index] == 1 ? 'SizeColor' : ''">{{ index }}</button></div>
                <!-- <div><button :class="this.btnArrRe['压车费'] == 1 ? 'SizeColor' : ''">压车费</button></div>
                <div><button :class="this.btnArrRe['异提费'] == 1 ? 'SizeColor' : ''">异提费</button></div>
                <div><button :class="this.btnArrRe['多地装货费'] == 1 ? 'SizeColor' : ''">多地装货费</button></div>
                <div><button :class="this.btnArrRe['高速费'] == 1 ? 'SizeColor' : ''">高速费</button></div>
                <div><button :class="this.btnArrRe['预提费'] == 1 ? 'SizeColor' : ''">预提费</button></div>
                <div><button :class="this.btnArrRe['反空费'] == 1 ? 'SizeColor' : ''">反空费</button></div>
                <div><button :class="this.btnArrRe['关场费'] == 1 ? 'SizeColor' : ''">关场费</button></div>
                <div><button :class="this.btnArrRe['停车费'] == 1 ? 'SizeColor' : ''">停车费</button></div>
                <div><button :class="this.btnArrRe['查柜费'] == 1 ? 'SizeColor' : ''">查柜费</button></div>
                <div><button :class="this.btnArrRe['打单费'] == 1 ? 'SizeColor' : ''">打单费</button></div>
                <div><button :class="this.btnArrRe['其他费'] == 1 ? 'SizeColor' : ''">其他费</button></div> -->
            </div>
            <!-- <div :class="addTypess == true ? 'shade' : ''" ></div> -->
        </div>
        <!-- 遮罩层 -->
        <div :class="showClass == true ? 'shade' : ''" @click="shadeCancel" ></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showClass : false,
            btnArrRe:{"过磅费":0,"压车费":0,"异提费":0,"高速费":0,"预提费":0,"反空费":0,"关场费":0,"停车费":0,"查柜费":0,"打单费":0,"其他费":0,"多地装货费":0},
            btnObj:{"过磅费":0,"压车费":0,"异提费":0,"高速费":0,"预提费":0,"反空费":0,"关场费":0,"停车费":0,"查柜费":0,"打单费":0,"其他费":0,"多地装货费":0},
            saveStart:1
        }
    },
    created() {
 
    },
    methods: {
        showC(){
            console.log(this.btnArrRe);
            this.$root.eventBus.$emit('addTypesTo',this.btnArrRe);
            console.log(this.$root.eventBus);
            this.showClass = false;
        },
        shadeCancel(){
            // Object.assign(this.btnArrRe,this.saveStart);
            Object.assign(this.$data, this.$options.data())
            this.showClass = false;
            
        },
        cancelS(){
            Object.assign(this.$data, this.$options.data())
            this.showClass = false;
        },
        btnColor(index){
            // console.log(this.btnArrRe);
            // console.log();
            this.btnArrRe[index] == 1 ? this.btnArrRe[index] = 0 :this.btnArrRe[index] = 1;
            // Object.assign(this.btnArrRe,{index:1})
            // console.log(this.btnArrRe);
        }
    },
    mounted:function() {
        this.$root.eventBus.$on('addTypes', function(e) {
            // this.barCount++
            console.log(e);
            // this.btnArrRe = e;
            // this.$root.eventBus.$off('addTypesTo');
            Object.assign(this.btnArrRe,e);
            console.log(this.saveStart);
            this.showClass = true;
        }.bind(this))
    }
}
</script>

<style lang='scss'>
    .tmplPopupsCostType{
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 100%;
        width: 100%;
        z-index: 999;
        background-color: #eee;
        transition:.3s;
        .top{
            
            height: 1.2rem;
            padding: 0.1rem .2rem;
            display: flex;
            justify-content: space-between;
            border-bottom: .02rem solid #cacaca;
            button{
                height: 0.8rem;
                font-size: 0.4rem;
                margin-top: .07rem;
                padding: 0.1rem 0.3rem;
            }
        }
        .footer{
            // height: 6rem;
            padding: 0.4rem 0.3rem;

            display: flex;
            flex-wrap: wrap;
            div{
                width: 33.33%;
                padding: .2rem .3rem;
                text-align: center;
                button{
                    width: 80%;
                    height: 1rem;
                    font-size: 0.3rem;
                    padding:0.2rem;
                    border-color: #fff;
                }
                .SizeColor{
                    color: #27a2f0;
                    border-color: #27a2f0;
                }
            }
        }
    }
    .active{
        transform: translateY(-100%);
        box-shadow: 0px -5px 7px 0px rgba(0, 0, 0, 0.1);
    }
    .shade{
        /* width: 100%;
        height: 100%; */
        position: fixed;
        z-index: 998;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3)
    }
    
</style>