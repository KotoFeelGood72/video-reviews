import axios from 'axios'

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
                user.action = 'userAuth';
                const response = await axios.post('https://roblitetmoub.beget.app/', user);
                commit('setUser', response.data.user)
                commit('setUser', response.data.result)
                console.log('Good', response.data.result)
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