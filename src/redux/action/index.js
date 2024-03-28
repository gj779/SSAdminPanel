export const userLogin = (payload) => {
    return {
        type: "LOGIN",
        payload: payload
    }
}
export const logOut = (payload) => {
    return {
        type: "LOGOUT",
        payload: payload
    }
}

export const setUsers = (payload) => {
    return {
        type: "ALL_USERS",
        payload: payload
    }
}
export const setJobs = (payload) => {
    return {
        type: "ALL_JOBS",
        payload: payload
    }
}

export const removeUser = (payload) => {
    return {
        type: "DELETE_USER",
        payload: payload
    }
}
export const deleteJob = (payload) => {
    return {
        type: "DELETE_JOB",
        payload: payload
    }
}

export const setPage = (payload) => {
    return {
        type: "SET_PAGE",
        payload: payload,
    };
};
