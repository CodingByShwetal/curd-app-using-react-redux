import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) =>({
    type: types.GET_USERS,
    payload: users
});

const removeUser = () =>({
    type: types.DELETE_USERS,
});

const addNewUser = () =>({
    type: types.ADD_USERS
});

const getSingleUser = (user) =>({
    type: types.GET_SINGLE_USER,
    payload: user
});

const editUser = () =>({
    type: types.UPDATE_USER
});

export const loadUsers = () => {
    return function (dispatch) {
        // axios.get("http://localhost:5000/users").then((response) => {
        //     console.log(response);
        //     dispatch(getUsers(response.data));
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        fetch("http://localhost:5000/users").then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(getUsers(data));
        },(error) => {
            console.log(error);
        });
    }
}

export const deleteUsers = (id) => {
    return function (dispatch) {

        axios.delete("http://localhost:5000/users/"+id).then((response) => {
            console.log(response);
            dispatch(removeUser());
            dispatch(loadUsers());
        })
        .catch((error) => {
            console.log(error);
        });

        // fetch("http://localhost:5000/users/"+id, { method: 'DELETE'}).then((response) => {
        //     console.log(response);
        //     return response.json();
        // }).then((data) => {
        //     console.log(data);
        //     dispatch(removeUser());
        //     dispatch(loadUsers());
        // },(error) => {
        //     console.log(error);
        // });
    }
}

export const addUser = (user) => {
    return function (dispatch) {

        // axios.post("http://localhost:5000/users", user).then((response) => {
        //     console.log(response);
        //     dispatch(addNewUser());
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        fetch("http://localhost:5000/users/", { 
            method: 'post', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(addNewUser());
        },(error) => {
            console.log(error);
        });
    }
}

export const getUserDetail = (id) => {
    return function (dispatch) {

        axios.get("http://localhost:5000/users/"+id).then((response) => {
            console.log(response);
            dispatch(getSingleUser(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

        fetch("http://localhost:5000/users/"+id, { method: 'GET'}).then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(getSingleUser(data));
        },(error) => {
            console.log(error);
        });
    }
}

export const updateUser = (id, user) => {
    return function (dispatch) {

        // axios.put("http://localhost:5000/users/"+id, user).then((response) => {
        //     console.log(response);
        //     dispatch(editUser());
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        fetch("http://localhost:5000/users/"+id, { 
            method: 'PUT', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(editUser());
        },(error) => {
            console.log(error);
        });
    }
}