import router from '@/router'
import axios from 'axios'

export default {
    state: {
        user: null,
        auth: false,
    },
    mutations: {
        REGISTER_USER() {

        },
        SET_USER(state, {user, auth}) {
            state.user = user
            state.auth = auth
            localStorage.setItem('auth', true)
        },
        CLEAR_USER(state) {
            state.user = null
            state.auth = false;
            localStorage.setItem('auth', false)
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.auth
        }
    },
    actions: {
        async signin({commit}, user) {
            const response = await axios.post('login', user, { withCredentials: true })
            const auth = response.data.auth
            const users = response.data.user.user
            commit('SET_USER', { user: users, auth})
            if(response.data.auth) {
                router.push('/admin/dashboard')
            }

        },
        async register({commit}, user) {
            const response = await axios.post('register', user, { withCredentials: true })
            const auth = response.data.auth
            const users = response.data.user.user

            commit('REGISTER_USER', { user: users, auth})
            if(response.data.auth) {
                router.push('/register/confirm')
            }

        }
    }
}