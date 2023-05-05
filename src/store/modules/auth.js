import axios from 'axios'

export default {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, user) {
            state.user = user
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
                user.action = 'ping';
                const response = await axios.post('https://roblitetmoub.beget.app/', user);
                commit('setUser', response.user)
            } catch (error) {
                console.log(error);
            }
            
        }
    }
}