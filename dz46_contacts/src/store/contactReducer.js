const initialState = {
    items: [
        { id: 1, name: 'Vladyslav', lastname: 'Shtrikun', number: '380661844065' },
    ]
}
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                items: [...state.items, { id: (new Date()).getTime(), ...action.payload }]
            }
        case 'DELETE_CONTACT':
            return { ...state, items: state.items.filter(e => e.id !== action.payload.id) }
        default: return state;
    }
}