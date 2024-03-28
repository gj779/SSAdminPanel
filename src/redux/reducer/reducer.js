const initialValue = {
    user: {},
    users: [],
    jobs: [],
    isLoggedIn: false,
    currentPage: 1,
    itemPerPage: 3,
}

const reducerData = (state = initialValue, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        }
        case "LOGOUT": {
            return {
                isLoggedIn: false,
            }
        }
        case "ALL_USERS": {
            return {
                ...state,
                users: action.payload
            }
        }
        case "ALL_JOBS": {
            return {
                ...state,
                jobs: action.payload
            }
        }
        case "DELETE_USER": {
            const userId = state.users.findIndex((e) => e.user_id === action.payload);
            if (userId !== -1) {
                const updatedUsers = [...state.users]
                updatedUsers.splice(1, userId);
                return {
                    ...state,
                    users: state.users
                }
            }
            return state;
        }
        case "DELETE_JOB": {
            const jobId = state.jobs.findIndex((e) => e.post_id === action.payload);
            if (jobId !== -1) {
                const updatedJobs = [...state.jobs]
                updatedJobs.splice(1, jobId);
                return {
                    ...state,
                    jobs: updatedJobs
                }
            }
            return state;
        }
        case "SET_PAGE": {
            return {
                ...state,
                currentPage: action.payload,
            }
        }

        default:
            return state
    }
}

export default reducerData