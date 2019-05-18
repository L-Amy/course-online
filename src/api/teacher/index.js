import fetch from '@/utils/fetch'

export function updateMessage(data){
    return fetch({
        url:'/teacher/updateMessage',
        method:'POST',
        data
    })
}
export function selectMessage(data){
    return fetch({
        url:'/teacher/selectMessage',
        method:'POST',
        data
    })
}

export function uploadTeacherAvatar(data) {
    return fetch({
        url: '/upload/teacher/avatar',
        method: 'post',
        data
    })
}