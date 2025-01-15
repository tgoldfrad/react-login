export type User = {
   
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    address?: string,
    phone?: string,
}

type action = {
    type: string,
    data: User
}

const userReducer = (state: User, action: action): User => {
    switch (action.type) {
        case 'CREATE':
            return state.firstname!==action.data.firstname||state.lastname!==action.data.lastname||state.password!==action.data.password?action.data:state;
        case 'UPDATE':
            return {...state, ...action.data};
        case 'REMOVE':
            return state;
        default:
            return state;
    }
}
export default userReducer;


