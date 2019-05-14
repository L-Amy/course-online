import fetch from '@/utils/fetch'

export function publishTask(data){
    return fetch({
        url:'/task/publishTask',
        method:'POST',
        data
    })
}
export function getTaskList(data){
    return fetch({
        url:'/task/getTaskList',
        method:'POST',
        data
    })
}