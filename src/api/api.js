import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ec426fce-33e0-48a7-ab9a-0cadf75c7500"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = '') {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export const followAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(statusText) {
        return instance.put(`profile/status`, {status: statusText})
    },
    setPhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => response.data)
    },
    updateProfileData(profile){
        return instance.put(`profile`, profile).then(response => response.data)
    }
}

export const securityAPI = {
    getCaptcha(){
        return instance.get("security/get-captcha-url").then(response => response.data)
    }
}