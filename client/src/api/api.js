import axios from 'axios'
// added comments
axios.defaults.baseURL = "http://localhost:8000/api";
// auth

export const saveToken = (token) => {
    console.log(token)
    return axios.defaults.headers.common["Authorization"] = token;
}

export const login = async (email, password) => {
    return await axios.post("/login", { email, password });
}
export const signup = async (formData) => {
    return await axios.post("/signup", formData);
}

export const logout = () => {
    axios.defaults.headers.common['Authorization'] = '';
}

export const forgotPassword = async(email) => {
    return await axios.post("/forgotPassword", { email});
}

export const resetPassword = async(id, token, password,)  => {
   
    return await axios.post(`/resetPassword/${id}/${token}`,{password});
}


// users
export const getUsers = async () => {
    return await axios.get('/users/allUsers')
}

export const getAvatar = async (id) => {
    return await axios.get(`/images/getUsersAvatar/${id}`)
}


// songs
export const getAllSongs = async () => {
    return await axios.get('/songs/allSongs')
}

// achieve
export const increaseLoves = async (id) => {
    return await axios.get(`songs/allSongs/${id}`)

}


export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};

