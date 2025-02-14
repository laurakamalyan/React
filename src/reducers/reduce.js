const defaultState = {
    user: null,
}

const reduce = (state = defaultState, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

export default reduce;