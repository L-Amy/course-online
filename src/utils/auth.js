/*const userInfo = {
    id: '',
    name: '',
    StudentNo: '',
    imageUrl: '',
    CollegeId: ''
}*/
// 获取用户信息
export function getUserInfo(){
    return JSON.parse(window.localStorage.getItem('userInfo'));
}
// 存储修改用户信息
export function setUserInfo(data){
    var user=JSON.stringify(data);
    return window.localStorage.setItem('userInfo', user);
}

// delete userInfo || logout
export function removeUserInfo(){
    return window.localStorage.removeItem('userInfo')
}
