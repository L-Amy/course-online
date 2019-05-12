/*const userInfo = {
    id: '',
    name: '',
    StudentNo: '',
    imageUrl: '',
    CollegeId: ''
}*/
// 获取用户信息
export function getUserInfo(){
    return window.localStorage.getItem('userInfo');
}
// 存储修改用户信息
export function setUserInfo(data){
    return window.localStorage.setItem('userInfo', data);
}

// delete userInfo || logout
export function removeUserInfo(){
    return window.localStorage.removeItem('userInfo')
}
