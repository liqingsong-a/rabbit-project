import request from '@/utils/http'
//结算页面接口
export const getCheckInfoAPI = ()=> {
    return request({
        url:'/member/order/pre'
    })
}



