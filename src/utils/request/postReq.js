// post request example
function post(vue) {
    let app = vue.app;
    vue.$axios.post('', {})
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
            }
        })
        .catch(error => {
            vue.app.notify(error.messages ? error.messages :
                app.messages.ERR, 'error');
            vue.app.overlay = false;
        })
        .finally(() => {
            vue.app.overlay = false;
        })
}

function register(vue){
    let app = vue.app;
    vue.$axios.post('/user/signUp', {
        name: vue.name,
        role: vue.role
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.REGISTER_S, 'success');
                // do something
                vue.$router.replace({path: '/login'});
            }
        })
        .catch(error => {
            vue.app.notify(error.messages ? error.messages :
                app.messages.ERR, 'error');
            app.overlay = false;
        })
        .finally(() => {
            app.overlay = false;
        })
}
function login(vue){
    let app = vue.app;
    vue.$axios.post('/user/signIn', {
        name: vue.name,
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.LOGIN_S, 'success');
                // do something
                vue.$store.commit('login', res.data);
                vue.$router.replace({path: '/'});
            }
        })
        .catch(error => {
            app.notify(error.messages ? error.messages :
                app.messages.ERR, 'error');
            app.overlay = false;
        })
        .finally(() => {
            app.overlay = false;
        })
}

function addProduct(vue) {
    let app = vue.app;
    vue.$axios.post('/user/audit/productType/add', {
        name: vue.addName
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
            }
        })
        .catch(error => {
            vue.app.notify(error.messages ? error.messages :
                app.messages.ERR, 'error');
            vue.app.overlay = false;
        })
        .finally(() => {
            vue.app.overlay = false;
        })
}

function addAuditTask(vue) {
    let app = vue.app;
    vue.$axios.post('/user/audit/auditTask/initiate', {
        auditTaskType: vue.auditTaskType,
        expert: vue.expert,
        description: vue.description,
        deadline: vue.deadline,
        productTypes: vue.productTypes,
        markets: vue.markets_s
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
            }
        })
        .catch(error => {
            vue.app.notify(error.messages ? error.messages :
                app.messages.ERR, 'error');
            vue.app.overlay = false;
        })
        .finally(() => {
            vue.app.overlay = false;
        })
}

function submitMarketReport(vue) {
    let app = vue.app;
    vue.$axios.post('/user/market/marketReport/submit', {
        id: vue.id,
        entrySlims: vue.entrySlims
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.entrySlims = [];
            }
            if (res.status === 201) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.entrySlims = [];
            }
        })
        .catch(error => {
            vue.app.notify(error.messages ? error.messages :
                app.messages.ERR, 'error');
            vue.app.overlay = false;
        })
        .finally(() => {
            vue.app.overlay = false;
        })
}
function submitExpertReport(vue) {
        let app = vue.app;
        vue.$axios.post('user/expert/expertReport/submit', {
            id: vue.id,
        })
            .then(res => {
                // 根据后端的返回数据修改
                if (res.status === 200) {
                    app.notify(app.messages.SUCCESS, 'success');
                }
                else if (res.status === 400) {
                    app.notify(app.messages.REPORT_NOT_COMPLETED, 'warning');
                }
            })
            .catch(error => {
                vue.app.notify(error.messages ? error.messages :
                    app.messages.ERR, 'error');
                vue.app.overlay = false;
            })
            .finally(() => {
                vue.app.overlay = false;
            })
    }
function submitSubMarketReport(vue) {
    let app = vue.app;
    vue.$axios.post('/user/expert/expertReport/marketReport/submit', {
        id: vue.id,
        entrySlims: vue.entrySlims
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.entrySlims = [];
            }
            if (res.status === 201) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.entrySlims = [];
            }
        })
        .catch(error => {
            vue.app.notify(error.messages ? error.messages :
                app.messages.ERR, 'error');
            vue.app.overlay = false;
        })
        .finally(() => {
            vue.app.overlay = false;
        })
}

export default {
    register,
    login,

    addProduct,

    addAuditTask,

    submitMarketReport,
    submitExpertReport,
    submitSubMarketReport
}