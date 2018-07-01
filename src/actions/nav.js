// 导出方法
let setContentType = (contentType = '') => {
    return {
        type: 'SET_CONTENT_TYPE', // type属性一定要有
        contentType
    }
};

export default {
    setContentType,
};
