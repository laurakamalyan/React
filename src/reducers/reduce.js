const defaultState = {
    data: [
        {id: 1, name: 'staff 1', availableTimes: ['10:00', '11:00', '12:00']},
        {id: 2, name: 'staff 2', availableTimes: ['12:00', '12:30', '14:00', '18:00']},
        {id: 3, name: 'staff 3', availableTimes: ['09:00', '11:00', '18:00', '18:15', '19:30']},
        {id: 4, name: 'staff 4', availableTimes: ['16:00', '20:00']},
    ],
    selectedStaffIndex: 0,
}

const reduce = (state = defaultState, action) => {
    switch (action.type) {
        case "show":
            return {
                ...state,
                selectedStaffIndex: action.payload,
            }
        default:
            return state;
    }
}

export default reduce;