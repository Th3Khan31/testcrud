import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import data from './modules/data'
import { nameApp } from '../constants/config-app'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        titlePage: nameApp,
    },
    mutations: {
        setTitle(state, title){
            state.titlePage = title;
            document.title = title;
        }
    },
    actions: {
        setTitlePage(context, title=''){
            if (title != nameApp) {
                title = title + ' | ' + nameApp;
                context.commit('setTitle', title);
            } else {
                context.commit('setTitle', nameApp);
            }
        }
    },
    modules: {
        user,
        data,
    }
})