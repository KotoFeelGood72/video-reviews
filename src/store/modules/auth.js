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
                user.action = 'userAuth';
                const response = await axios.post('https://roblitetmoub.beget.app/', user);
                commit('setUser', response.data.user)
            } catch (error) {
                console.log(error);
            }
            
        }
    }
}