import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/login/login'
import findCommodity from '@/pages/findCommodity/findCommodityInfo'
import businessMy from '@/pages/businessMy/businessMyInfo'
import businessMyList from '@/pages/businessMy/businessMyList'
import businessMyReimbursingInfo from '@/pages/businessMy/businessMyReimbursing/businessMyReimbursingInfo'
import waybillDetail from '@/pages/businessMy/waybill/waybillDetail'
import reassignment from '@/pages/businessMy/waybill/reassignment'
import businessMyBill from '@/pages/businessMy/businessMyBill'
import businessSwiper from '@/components/businessBill/businessSwiper'
import businessConfirmed from '@/pages/businessMy/businessConfirmed/businessConfirmed'
import businessFee from '@/pages/businessMy/businessConfirmed/businessFee' 
import chargeback from '@/pages/businessMy/waybill/chargeback'
import businessFeeConfirmed from '@/pages/businessMy/businessConfirmed/businessFeeConfirmed' 
import singleDetail from '@/pages/businessMy/businessConfirmed/singleDetail' //待对账单票账单明细
import monthDetail from '@/pages/businessMy/businessConfirmed/monthDetail'//待对账月账单明细
import businessMyTrack from '@/pages/businessMy/businessMyReimbursing/businessMyTrack'   //查看轨迹
import accountInfo from '@/pages/businessMy/paymentPending/accountInfo'//催款信息
import uncommittedMonthDetail from '@/pages/businessMy/monthBill/uncommittedMonthDetail'
import callinDocument from '@/pages/businessMy/monthBill/callinDocument'
import orderDetail from '@/pages/businessMy/monthBill/orderDetail'
import reminedPay from '@/pages/businessMy/payWait/remiendPay'  //提醒付款
import receivables from '@/pages/businessMy/payWait/receivables'  //收款明细
import inAccountAffirm from '@/pages/businessMy/receiptWait/inAccountAffirm'  //到账确认
import paymentDetail from '@/pages/businessMy/payWait/paymentDetail'  //付款明细
import payment from '@/pages/businessMy/payWait/payment'  //我要付款
import detail from '@/pages/businessMy/detail/detail'; //历史账单
import unbilledBill from '@/pages/businessMy/detail/unbilledBill'; //未出账单
import businessBillInfo from '@/pages/businessMy/payWait/bussinessBillInfo'; //待付款账单信息
import expensesWaitBillInfo from '@/pages/businessMy/payWait/expensesWaitBillInfo'; //待收款账单信息
Vue.use(Router)




var routesArr = [];




const addRouter = function (path, component, name) {
    var route = {
        path: path,
        component: component
    };

    if (name) {
        route.name = name;
    }

    routesArr.push(route);

}

// addRouter('/',login);
// addRouter('/home',login);
addRouter('/findCommodity',findCommodity);  //找货
addRouter('/businessMy',businessMy);        //我的业务首页
addRouter('/businessMyIndo/businessMyList/:businessMyListId',businessMyList);  //更多业务（类型）
addRouter('/businessMyIndo/businessMyReimbursingInfo',businessMyReimbursingInfo);  //全部业务里面的费用报销
addRouter('/businessMy/waybill/waybillDetail',waybillDetail);
addRouter('/businessMy/waybill/reassignment',reassignment);
addRouter('/businessMyIndo/businessMyBill', businessMyBill);
addRouter('/businessBill/businessSwiper', businessSwiper);
addRouter('/businessMyIndo/businessConfirmed/:businessConfirmedId', businessConfirmed);
addRouter('/businessMyIndo/businessFee/:businessFeeId', businessFee);
addRouter('/businessMy/waybill/chargeback',chargeback);
addRouter('/businessMyIndo/businessFeeConfirmed/:businessFeeConfirmedId', businessFeeConfirmed);
addRouter('/businessMyIndo/singleDetail/:singleDetailId', singleDetail);
addRouter('/businessMyIndo/monthDetail/:monthDetailId', monthDetail);
addRouter('/businessMyIndo/accountInfo/:accountInfoId', accountInfo);
addRouter('/businessMyIndo/reminedPay/:reminedPayId', reminedPay);
addRouter('/businessMyIndo/receivables',receivables);
addRouter('/businessMyIndo/inAccountAffirm',inAccountAffirm);
addRouter('/businessMyIndo/paymentDetail',paymentDetail);
addRouter('/businessMyIndo/payment',payment);
addRouter('/businessMy/monthBill/uncommittedMonthDetail',uncommittedMonthDetail);
addRouter('/businessMy/monthBill/callinDocument',callinDocument);
addRouter('/businessMy/monthBill/orderDetail',orderDetail);
addRouter('/businessMy/detail', detail);
addRouter('/businessMy/unbilledBill', unbilledBill);
addRouter('/businessMyIndo/businessBillInfo/:businessBillInfoId', businessBillInfo);
addRouter('/businessMyIndo/expensesWaitBillInfo/:expensesWaitBillInfoId', expensesWaitBillInfo);
export default new Router({
    routes: routesArr
})