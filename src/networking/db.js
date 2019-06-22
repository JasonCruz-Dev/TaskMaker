const index = 'https://shad-task-manager.herokuapp.com';

const createUser = async (name, email, password) => {
    try {
        let response = await fetch(`${index}/users`, {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        });
        let data = await response.json(); //expect user and token
        if (data) {
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
            body: JSON.stringify({ email, password })
        });
        let data = await response.json(); //expect user and token
        if (data) {
            console.log(data.user);
            return data.token;
        }
    } catch (error) {
        console.error(error);
    }
}

const logoutUser = async (token) => {
    try {
        let response = await fetch(`${index}/users/logout`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Basic ' + token,
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

const logoutAllSession = async (token) => {
    try {
        let response = await fetch(`${index}/users/logoutAll`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Basic ' + token,
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

const readUser = async (token) => {
    try {
        let response = await fetch(`${index}/users/me`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic ' + token,
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

const updateUser = async (token, object) => {
    try {
        let response = await fetch(`${index}/users/me`, {
            method: 'PATCH',
            headers: new Headers({
                'Authorization': 'Basic ' + token,
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

const deleteUser = async (token) => {
    try {
        let response = await fetch(`${index}/users/me`, {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Basic ' + token,
            }),
            body: JSON.stringify(object)
        });
        let data = await response.json(); //expect an object with deleted user info
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

const uploadAvatar = async (token, image) => {
    let imageData = new FormData();
    imageData.append('avatar', image)
    try {
        let response = await fetch(`${index}/users/me/avatar`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Basic ' + token,
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

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    logoutAllSession,
    readUser,
    updateUser,
    deleteUser,
    uploadAvatar
}
