import axios from '@/../axios.config'
import router from '@/router'

export default {
    state: {
        exit: {},
        auth: {}
    },
    mutations: {
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
        async login({commit}, data) {
            try {
                const response = await axios.post('login', data)
                // console.log(data)
                commit('exitUser', data)
                if(response.data.auth === true) {
                    console.log('Good login', response.data.status)
                    router.push('/admin/dashboard/');
                }
            } catch (error) {
                console.log(error);
            }
            
        },

        // async resiterUser({commit}, user) {
        //     try {
        //         const response = await axios.post('register/', user);
        //         commit('setUser', response.data.user)
        //         commit('setUser', response.data.result)

        //         if(response.data.status === true && response.data.auth === true) {
        //             console.log('Good login', response.data.status)
        //             router.push('/admin/dashboard/');
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
            
        // },
        
        async userExit({commit}) {
            try {
                const response = await axios.post('logout/')
                commit('exitUser', response.data)

                if(response.data.status === true) {
                    console.log('Good logout', response.data.status)
                    router.push('/');
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
}