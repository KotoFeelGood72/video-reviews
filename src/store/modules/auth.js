import axios from 'axios'
import router from '@/router'

export default {
    state: {
        user: {},
        exit: {},
        auth: {}
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        exitUser(state, exit) {
            state.exit = exit
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    actions: {
        async postUser({commit}, user) {
            try {
                const response = await axios.post('login/', user);
                commit('setUser', response.data.user)
                commit('setUser', response.data.result)

                if(response.data.status === true && response.data.auth === true) {
                    console.log('Good login', response.status)
                    router.push('/admin/dashboard/');
                }
            } catch (error) {
                console.log(error);
            }
            
        },
        async userExit({commit}) {
            try {
                const response = await axios.post('logout/', {})
                commit('exitUser', response.data)

                if(response.status === true) {
                    console.log('Good logout', response.status)
                    router.push('/');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}