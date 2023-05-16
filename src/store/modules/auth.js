import axios from 'axios'
import router from '@/router'

export default {
    state: {
        user: {},
        exit: {},
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
                    console.log(response.data.status)
                    router.push('/admin/dashboard/');
                }
            } catch (error) {
                console.log(error);
            }
            
        },
        async userExit({commit}, exit) {
            try {
                exit.action = 'userLogout';
                const response = await axios.post('https://roblitetmoub.beget.app/', exit)
                commit('exitUser', response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }
}