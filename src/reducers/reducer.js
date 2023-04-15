export const initialState = {
    user: null,
};

export const reducer = (state, { type, payload }) => {
    switch(type){
        case 'SET_USER':
            return {
                ...state,
                user: payload.user
            };
        default:
            return state;
    }
};