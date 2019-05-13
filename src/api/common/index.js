import fetch from '@/utils/fetch'
export function getColleagueList(){
    return fetch({
        url: '/common/getColleagueList',
        method: 'POST',
    })
}
export function getSpecilityList(data){
    return fetch({
        url: '/common/getSpecilityList',
        method: 'POST',
        data
    })
}
export function getGradeList(data){
    return fetch({
        url: '/common/getGradeList',
        method: 'POST',
        data
    })
}
export function getClassList(data){
    return fetch({
        url: '/common/getClassList',
        method: 'POST',
        data
    })
}