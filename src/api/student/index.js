import fetch from '@/utils/fetch'

export function updateMessage(data){
    return fetch({
        url:'/student/updateMessage',
        method:'POST',
        data
    })
}
export function selectMessage(data){
    return fetch({
        url:'/student/selectMessage',
        method:'POST',
        data
    })
}
export function getStudentList(data){
    return fetch({
        url:'/student/getStudentList',
        method:'POST',
        data
    })
}

export function uploadStudentAvatar(data) {
    return fetch({
        url: '/upload/student/avatar',
        method: 'post',
        data
    })
}