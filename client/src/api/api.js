import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/api";
// auth

export const saveToken = (token) => {
    return axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const login = async (email, password) => {
    return await axios.post("/login", { email, password });
}
export const signup = async (name, username, email, password,avatar, role) => {
    return await axios.post("/signup", { name, username, email, password, avatar,role });
}

export const logout = () => {
    const empty = null
    axios.defaults.headers.common['Authorization'] = `Bearer ${empty}`;
}


// users
export const getUsers = async () => {
    return await axios.get('/users/allUsers')
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

