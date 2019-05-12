import fetch from '@/utils/fetch'

export function register(data){
    return fetch({
        url: '/create/account',
        method: 'POST',
        data
    })
}