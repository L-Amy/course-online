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

export function getTask(data){
    return fetch({
        url:'/task/getTask',
        method:'POST',
        data
    })
}
export function deleteTask(data){
    return fetch({
        url:'/task/deleteTask',
        method:'POST',
        data
    })
}
export function updateTask(data){
    return fetch({
        url:'/task/updateTask',
        method:'POST',
        data
    })
}