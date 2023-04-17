export const initialState = {
    user: null,
};

export const reducer = (state, { type, payload }) => {
    switch(type){
        
        case 'SET_USER':
            if(!!payload.user) {
                const oldInitial = localStorage.getItem('initial') ? 
                JSON.parse(localStorage.getItem('initial')) : '';
                const newInitial = payload?.user.displayName ? payload?.user.displayName[0] :
                payload?.user.email[0];
                if (newInitial && oldInitial !== newInitial) localStorage.setItem('initial', JSON.stringify(newInitial));
            } 
            return {
                ...state,
                user: payload.user,
            };
        default:
            return state;
    }
};