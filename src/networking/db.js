import AsyncStorage from '@react-native-community/async-storage';
const index = 'https://shad-task-manager.herokuapp.com';

const getToken = async () => {
    let userToken = await AsyncStorage.getItem('userToken');
    return userToken;
}

const createUser = async (name, email, password) => {
    try {
        let response = await fetch(`${index}/users`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ name, email, password })
        });
        let data = await response.json(); //expect user and token
        if (data.errmsg) {
            return 'bad request';
        } else {
            console.log(data.user);
            return data.token;
        }
    } catch (error) {
        console.error(error);
    }
}

const loginUser = async (email, password) => {
    try {
        let response = await fetch(`${index}/users/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ email, password })
        });
        console.log({ response })
        let data = await response.json(); //expect user and token

        if (data.errmsg) {
            return 'bad request';
        } else {
            console.log(data.user);
            return data.token;
        }
    } catch (error) {
        console.error(error);
    }
}

const logoutUser = async () => {
    try {
        let userToken = await getToken();
        let response = await fetch(`${index}/users/logout`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }),
        });
        console.log({ response })
        if (response) {
            await AsyncStorage.removeItem('userToken');
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

const logoutAllSession = async () => {
    try {
        let userToken = await getToken();
        let response = await fetch(`${index}/users/logoutAll`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }),
        });
        if (response) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

const readUser = async () => {
    try {
        let userToken = await getToken();
        let response = await fetch(`${index}/users/me`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }),
        });
        let data = await response.json(); //expect an object with user info
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

const updateUser = async (object) => {
    try {
        let userToken = await AsyncStorage.getItem('userToken');
        let response = await fetch(`${index}/users/me`, {
            method: 'PATCH',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }),
            body: JSON.stringify(object)
        });
        let data = await response.json(); //expect an object with updated user info
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteUser = async () => {
    try {
        let userToken = await getToken();
        let response = await fetch(`${index}/users/me`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }),
        });
        let data = await response.json(); //expect an object with deleted user info
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

const uploadAvatar = async (image) => {
    let imageData = new FormData();
    imageData.append('avatar', image)
    try {
        let userToken = await getToken();
        let response = await fetch(`${index}/users/me/avatar`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + userToken,
                "Content-Type": "multipart/form-data",
            }),
            body: imageData
        });
        let data = await response.json(); //expect a base64 image data
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

const syncTasks = async (tasks) => {
    try {
        let userToken = await getToken();
        console.log({ userToken, tasks })
        let response = await fetch(`${index}/tasks/sync`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + userToken,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(tasks)
        });
        console.log({ response })
        let { message } = await response.json(); //expect message: "success"
        return message;
    } catch (error) {
        console.error(error);
    }
}

const getAllTasks = async () => {
    try {
        let userToken = await getToken();
        let response = await fetch(`${index}/tasks`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }),
        });
        let data = await response.json(); //expect an array
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    logoutAllSession,
    readUser,
    updateUser,
    deleteUser,
    uploadAvatar,
    syncTasks,
    getAllTasks
}
