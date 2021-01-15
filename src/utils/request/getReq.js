function get(vue) {
    let app = vue.app;
    vue.$axios.get('')
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

function getDate(app) {
    app.$axios.get('/user/date')
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200 && res.data) {
                // app.notify(app.messages.SUCCESS, 'success');
                // do something
                app.$store.commit('updateDate', res.data.date);
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
function getMarkets(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/users/market')
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200 && res.data.length !== 0) {
                app.notify(app.messages.GET_MARKETS_S, 'success');
                // do something
                vue.markets = res.data;
            }
            else if(res.status === 200){
                app.notify(app.messages.NO_MARKET, 'warning');
                vue.markets = res.data;
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
function getExperts(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/users/expert')
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200 && res.data.length !== 0) {
                app.notify(app.messages.GET_EXPERTS_S, 'success');
                // do something
                vue.experts = res.data;
            }
            else if(res.status === 200){
                app.notify(app.messages.NO_EXPERT, 'warning');
                vue.experts = res.data;
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

function getGrades(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/user/grades?name='+vue.name)
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.GET_GRADES_S, 'success');
                // do something
                vue.grades = res.data;
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
function getGradeRecords(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/user/gradeRecords',{
        params:{
            name: vue.name
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.records = res.data.sort((r1,r2)=>r2.id-r1.id);
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

function getProducts(vue) {
    let app = vue.app;
    vue.$axios.get('/user/productTypes')
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.products = res.data;
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
function getUnqualifiedNum(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/productType/unqualified',{
        params:{
        typeName: vue.uqName,
        from: vue.fromTime,
        to: vue.toTime
    }}, )
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.num = res.data;
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

function getAuditTasks(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/auditTasks',{
        params: {
            completed: vue.completed
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.auditTasks = res.data.tasks;
                console.log(vue.auditTasks);
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
function getAuditTask(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/auditTask',{
        params:{
            id: vue.id
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.auditTask = res.data;
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
function getUnqualifiedNumInTask(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/auditTask/productType/unqualified',{
        params:{
            typeName:vue.typeName,
            id: vue.id
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.num = res.data;
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
function getProductTypesInTask(vue) {
    let app = vue.app;
    vue.$axios.get('/user/audit/auditTask/productTypes',{
        params:{
            id: vue.id,
            completed: vue.completed
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.productTypes = res.data;
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

function getMarketReports(vue) {
    let app = vue.app;
    vue.$axios.get('/user/market/marketReports')
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.marketReports = res.data;
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
function getMarketReport(vue) {
    let app = vue.app;
    vue.$axios.get('/user/market/marketReport',{
        params:{
            id:vue.id
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.marketReport = res.data;
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

function getExpertReports(vue) {
    let app = vue.app;
    vue.$axios.get('/user/expert/expertReports')
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.expertReports = res.data;
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
function getExpertReport(vue) {
    let app = vue.app;
    vue.$axios.get('/user/expert/expertReport',{
        params:{
            id:vue.id
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.expertReport = res.data;
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

function getSubMarketReports(vue) {
    let app = vue.app;
    vue.$axios.get('/user/expert/expertReport/marketReports',{
        params:{
            id:vue.id
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.subMarketReports = res.data;
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
function getSubMarketReport(vue) {
    let app = vue.app;
    vue.$axios.get('/user/expert/expertReport/marketReport',{
        params:{
            id:vue.id
        }
    })
        .then(res => {
            // 根据后端的返回数据修改
            if (res.status === 200) {
                app.notify(app.messages.SUCCESS, 'success');
                // do something
                vue.subMarketReport = res.data;
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

export default{
    getDate,

    getMarkets,
    getExperts,

    getGrades,
    getGradeRecords,

    getProducts,
    getUnqualifiedNum,

    getAuditTasks,
    getAuditTask,

    getProductTypesInTask,
    getUnqualifiedNumInTask,

    getMarketReports,
    getMarketReport,

    getExpertReports,
    getExpertReport,

    getSubMarketReports,
    getSubMarketReport
}