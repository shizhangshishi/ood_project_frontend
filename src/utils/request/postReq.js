// post request example

function post(vue) {
    let app = vue.app;
    this.$axios.post('', {})
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
export default {
    register,
    login
}