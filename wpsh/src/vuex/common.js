export default {
    state:{
        authorization:''
    },
 
    mutations:{
        login(state,authorization){
            localStorage.setItem('Authorization',authorization)
            state.authorization = authorization
        },
        logout(state){
            state.authorization = ''
            localStorage.removeItem('Authorization');
        }
    }
}