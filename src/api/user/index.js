import fetch from '@/utils/fetch'

export function register(data){
    return fetch({
        url: '/auth/register',
        method: 'POST',
        data
    })
}

export function login(data){
    return fetch({
        url:'/auth/login',
        method:'POST',
        data
    })
}

export function logout(data){
    return fetch({
        url:'/auth/logout',
        method:'POST',
        data
    })
}
