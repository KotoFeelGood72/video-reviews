// import router from '@/router'
// import axios from 'axios'

export default {
    state: {
        exit: {},
        auth: {},
        user: null,
        token: null
    },
    mutations: {
        exitUser(state, exit) {
            state.exit = exit
        },
        setUser(state, { user, token }) {
            state.user = user;
            state.token = token;
            // localStorage.setItem('token', token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    },
    getters: {
        // getUser(state) {
        //     return state.user
        // }
    },
    actions: {
        // async login({ commit }, user) {
        //     try {
        //       const response = await axios.post('test', user);
        //       const token = response.data.info.token; // Предположим, что токен возвращается в поле "token" объекта ответа
        //       console.log(response.data, user, token)
        //       commit('setUser', user);
        //     } catch (error) {
        //       console.error(error); // Отображение ошибки в консоли для отладки
        //       // Обработка ошибки
        //     }
        //   }

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
        
        // async userExit({commit}) {
        //     try {
        //         const response = await axios.post('logout/')
        //         commit('exitUser', response.data)

        //         if(response.data.status === true) {
        //             console.log('Good logout', response.data.status)
        //             router.push('/');
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
    }
}