import axios from 'axios'
import { apiUrl } from '../../constants/config-app'

axios.defaults.baseURL = apiUrl;

export default {
    state: {
        token: localStorage.getItem('token') || null,
        expires_in: localStorage.getItem('expires_in') || null,
        token_created_at: localStorage.getItem('token_created_at') || null,
        date_toke: localStorage.getItem('date_toke') || null,
        user: {
            id: localStorage.getItem('user_id'),
            name: localStorage.getItem('user_name'),
            image: localStorage.getItem('user_image'),
            email: localStorage.getItem('user_email'),
            type: localStorage.getItem('user_type'),
        } || {
            id: '',
            name: '',
            image: '',
            email: '',
            type: '',
        },
    },
    getters: {
        loggedIn(state) {
            if (state.token !== null && state.expires_in !== null && 
                state.token_created_at !== null) {
                return true
            } 
            return false;
        },
        isTokenValid(state)
        {
            if (state.token !== null && state.expires_in !== null && 
                state.token_created_at !== null) {
                var time_token = Math.round((new Date().getTime() - state.token_created_at)/ 1000);
                var time_porcent = (time_token * 100) / state.expires_in;

                if (time_porcent > 80 && time_porcent < 100 ) {
                    return 'refresh';
                } else if (time_porcent >= 100) {
                    return false;
                }
                return true;
            }
            return false;
        },
        currentUser: state => state.user,
        tokenUser: state => state.token,
    },
    mutations: {
        obtainToken(state, data_token){
            state.token = data_token.token;
            state.expires_in = data_token.expires_in;
        },
        destroyToken(state) {
            localStorage.removeItem('user_name');
            localStorage.removeItem('user_id');
            localStorage.removeItem('user_email');
            localStorage.removeItem('user_type');
            localStorage.removeItem('user_image');
            localStorage.removeItem('token');
            localStorage.removeItem('expires_in');
            localStorage.removeItem('token_created_at');
            localStorage.removeItem('date_toke');
            state.token = null;
            state.expires_in = null;
            state.token_created_at = null;
            state.date_toke = null;
            state.user = {
                id: '',
                name: '',
                image: '',
                email: '',
            };
        },
        setUserAuth(state, data){
            state.user = data.user;
            state.token = data.access_token;
            state.expires_in = data.expires_in;
            state.token_created_at = localStorage.getItem('token_created_at');
            state.date_toke = localStorage.getItem('date_toke');
        },
        setToken(state, token_new)
        {
            state.token = token_new;
        }
    },
    actions: {
        obtainToken(context, credentials){
            return new Promise((resolve, reject) => {
                axios.post('/auth/login', credentials)
                .then(response => {
                    console.log(response.data.user);
                    const token = response.data.access_token;
                    localStorage.setItem('user_name', response.data.user.name);
                    localStorage.setItem('user_id', response.data.user.id);
                    localStorage.setItem('user_email', response.data.user.email);
                    localStorage.setItem('user_image', response.data.user.image);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expires_in', response.data.expires_in);
                    localStorage.setItem('token_created_at', new Date().getTime());
                    localStorage.setItem('date_toke', new Date());
                    context.commit('obtainToken', {token: token, expires_in: response.data.expires_in});
                    context.commit('setUserAuth', response.data);
                    axios.defaults.headers.common.Authorization = "bearer " + token;
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
            });
        },
        destroyToken(context){
            if (context.getters.isTokenValid) {
                /*context.commit('destroyToken');
                setTimeout(function(){
                    location.href = '/';
                }, 1000);*/
                return new Promise((resolve) => {
                    context.commit('destroyToken');
                    resolve(true);
                });
            } else {
                context.commit('destroyToken');
            }
            
        },
        refreshToken(context, token_new = null){
            var config = {
                headers: {'Authorization': "bearer " + context.state.token}
            }
            if (token_new != null) {
                config = {
                    headers: {'Authorization': "bearer " + token_new}
                };
            }
            
            return new Promise((resolve, reject) => {
                axios.post('/auth/refresh', {}, config)
                .then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('user_name', response.data.user.name);
                    localStorage.setItem('user_id', response.data.user.id);
                    localStorage.setItem('user_email', response.data.user.email);
                    localStorage.setItem('user_image', response.data.user.image);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expires_in', response.data.expires_in);
                    localStorage.setItem('token_created_at', new Date().getTime());
                    localStorage.setItem('date_toke', new Date());
                    context.commit('obtainToken', {token: token, expires_in: response.data.expires_in});
                    context.commit('setUserAuth', response.data.user);
                    axios.defaults.headers.common.Authorization = "bearer " + token;
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
            });
        },
        getUserLogin(context, token_new = null)
        {
            var data = {};
            if (token_new == null) {
                data = {token: context.state.token}
            } else {
                data = {token: token_new}
            }
            return new Promise((resolve, reject) => {
                axios.post('/auth/verified', data)
                .then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('user_name', response.data.user.name);
                    localStorage.setItem('user_id', response.data.user.id);
                    localStorage.setItem('user_email', response.data.user.email);
                    localStorage.setItem('user_image', response.data.user.image);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expires_in', response.data.expires_in);
                    localStorage.setItem('token_created_at', new Date().getTime());
                    localStorage.setItem('date_toke', new Date());
                    context.commit('obtainToken', {token: token, expires_in: response.data.expires_in});
                    context.commit('setUserAuth', response.data);
                    axios.defaults.headers.common.Authorization = "bearer " + token;
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
            });
        },
        getUser(context)
        {
           axios.defaults.headers.common.Authorization = "bearer " + context.state.token;
           return new Promise((resolve, reject) => {
                axios.post('/auth/me', {})
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
            });
        }
    }
}
