import { createContext, useReducer } from "react";
import userReducer, { User } from "../UserModel";
import { RouterProvider } from "react-router";
import { router } from "../router";

export const FunctionContext = createContext<Function>(() => { });
export const UserContext = createContext<User>({ firstname: 'fff', lastname: "dgd", password: "546456" });

const Start = () => {
    const [currentUser, currentUserDispatch] = useReducer(userReducer, {} as User)
    

    return (<>
         <FunctionContext.Provider value={currentUserDispatch}> <UserContext.Provider value={currentUser}>
      <RouterProvider router={router} />
      </UserContext.Provider></FunctionContext.Provider>
    </>)
}

export default Start