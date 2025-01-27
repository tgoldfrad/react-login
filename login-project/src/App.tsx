import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import { RouterProvider } from 'react-router'
import { router } from './router'
import userReducer, { User } from './UserModel'
import Start from './components/start'

function App() {
  // const [currentUser, currentUserDispatch] = useReducer(userReducer, {} as User)
  //  const FunctionContext = createContext<Function>(() => { });
  //  const UserContext = createContext<User>({ firstname: 'fff', lastname: "dgd", password: "546456" });//export

  return (
    <>
      {/* <HomePage/><FunctionContext.Provider value={currentUserDispatch}> <UserContext.Provider value={currentUser}>
      <RouterProvider router={router} />
      </UserContext.Provider></FunctionContext.Provider> */}
      <Start/>
    </>
  )
}

export default App
