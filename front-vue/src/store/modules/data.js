import axios from 'axios'
import { apiUrl } from '../../constants/config-app'
import user from './user'

axios.defaults.baseURL = apiUrl;
axios.defaults.headers.common.Authorization = "bearer " + user.state.token;

export default {
    state: {
        config_token: localStorage.getItem('token') || null,
        processing: false,
        paginationData: {
            total: 0,
            current_page: 1,
            per_page: 100,
            last_page: 0,
            from: 0,
            to: 0
        }
    },
    getters: {
        processingData: state => state.processing,
        pagination: state => state.paginationData,
    },
    mutations: {
        changeProcessing(state, status){
            state.processing = status;
        },
        makePagination: function(state, response){
            state.paginationData = {
                total: response.total,
                current_page: response.current_page,
                per_page: parseInt(response.per_page),
                last_page: response.last_page,
                from: (response.from == null) ? 0 : response.from,
                to: (response.to == null) ? 0 : response.to
            }
        }
    },
    actions: {
        getAllWithPagination(context, params){
            context.commit('changeProcessing', true);
            return new Promise((resolve, reject) => {
                axios.get(params.url)
                .then(response => {
                    context.commit('makePagination', response.data)
                    context.commit('changeProcessing', false);
                    resolve(response);
                })
                .catch(error => {
                    context.commit('changeProcessing', false);
                    reject(error);
                });
            });
        },
        getData(context, params){
            context.commit('changeProcessing', true);
            return new Promise((resolve, reject) => {
                axios.get(params.url)
                .then(response => {
                    context.commit('changeProcessing', false);
                    resolve(response);
                })
                .catch(error => {
                    context.commit('changeProcessing', false);
                    reject(error);
                });
            });
        },
        saveData(context, params){
            context.commit('changeProcessing', true);
            return new Promise((resolve, reject) => {
                axios.post(params.url, params.formData).then(response => {
                    context.commit('changeProcessing', false);
                    resolve(response);
                })
                .catch(error => {
                    context.commit('changeProcessing', false);
                    if (typeof error.response != 'undefined') {
                        reject(error);
                    } else {
                        reject(error);
                    }                   
                })
            })
        },
        updateData(context, params){
            context.commit('changeProcessing', true);
            return new Promise((resolve, reject) => {
                axios.put(params.url, params.formData).then(response => {
                    context.commit('changeProcessing', false);
                    resolve(response);
                })
                .catch(error => {
                    context.commit('changeProcessing', false);
                    reject(error);
                })
            })
        },
        deleteData(context, params){
            context.commit('changeProcessing', true);
            return new Promise((resolve, reject) => {
                axios.delete(params.url).then(response => {
                    context.commit('changeProcessing', false);
                    resolve(response);
                })
                .catch(error => {
                    context.commit('changeProcessing', false);
                    reject(error);
                })
            })
        },
        validateEmailUser(context, params){
            context.commit('changeProcessing', true);
            return new Promise((resolve, reject) => {
                axios.get(params.url+params.email).then(response => {
                    context.commit('changeProcessing', false);
                    resolve(response);
                })
                .catch(error => {
                    context.commit('changeProcessing', false);
                    reject(error);
                })
            })
        },
    }
}