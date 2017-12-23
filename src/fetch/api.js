import {axiosByGet, axiosByPost, axiosByPut, axiosByDelete} from './axiosUtils';

// 公共接口地址
const API_URL = {
    LOGIN: '/login.shtml',
    BILLINGINFO:'/ucenter/business/module/billingInfo.shtml',


};


export default {
    // 用户登录
    Login(param, config) {
        return axiosByPost(API_URL.LOGIN, param, config);
    },
    GetBusinessMy(param, config){
        return axiosByGet('/ucenter/tms/waybill/driverSearch/search.shtml',param, config)
    },
    GetOrganization(param, config) {
        return axiosByGet('/ucenter/centre/core/organization.shtml', param, config);
    },
    GetTrack(param, config) {
        return axiosByGet('/ucenter/centre/core/organization.shtml', param, config);
    },
    GetPaymentDetail(param,config){
        return axiosByGet('/ucenter/business/module/paymentDetails.shtml', param, config);
    }
    ,
    GetAccountInfo(param, config){
        return axiosByGet('/ucenter/business/module/urgRecordInfo.shtml',param,config);
    },
    GetBusinessCon(param, config) {
        return axiosByGet('/ucenter/freightFee/feeContrast.shtml', param, config);
    },
    GetBillInfo(param,config){
        return axiosByGet(API_URL.BILLINGINFO, param, config);
    },

}
