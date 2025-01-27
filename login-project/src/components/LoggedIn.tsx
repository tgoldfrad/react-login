import { useContext, useRef, useState } from "react"
import {  style, UserId } from "./HomePage"
import { Avatar, Box, Button, Modal, Stack, TextField } from "@mui/material"
import { deepOrange, deepPurple } from "@mui/material/colors"
import axios from "axios"
import { FunctionContext, UserContext } from "./start"



const LoggedIn = () => {
    const currentUser = useContext(UserContext)
    const func = useContext(FunctionContext)
    const userId = useContext(UserId)
    console.log(currentUser);
    
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    
    const [isLoginUpdate, setIsLoginUpdate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
  
    //const [userID, setUserID] = useState<number>()

    return(
        <>
        <h1>detailes user: {currentUser.firstname} {currentUser.lastname} </h1>
        <h2>phone: {currentUser.phone}</h2>
        <h2>{currentUser.firstname} {currentUser.lastname}</h2>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{currentUser.firstname?.charAt(0)}</Avatar>
      <Button onClick={()=>{setOpenUpdate(!openUpdate)}} >update</Button>




      <Modal open={openUpdate} onClose={() => setOpenUpdate(false)}>
                <Box sx={style}>
                    <form onSubmit={async(event) => {
                        event.preventDefault();
                        setOpenUpdate(false); setIsLoginUpdate(true)
                        func({
                            type: 'UPDATE',
                            data: {
                                firstname: firstNameRef.current?.value || '',
                                lastname: lastNameRef.current?.value || '',
                                address: addressRef.current?.value || '',
                                email: emailRef.current?.value || '',
                                phone: phoneRef.current?.value || '',
                                password: passwordRef.current?.value || ''

                            }
                        })
                        
                        try{
                            const res = await axios.put(
                                `http://localhost:3000/api/user`,
                                {
                                    firstName: firstNameRef.current?.value,
                                    lastName: lastNameRef.current?.value,
                                    email: emailRef.current?.value,
                                    address: addressRef.current?.value,
                                    phone: phoneRef.current?.value,
                                    
                                },
                               
                                // { headers: { 'user-id': userID + '' } } 
                                { headers: { 'user-id': userId + '' } } 

                            )
                
                            //setUserID(res.data.userId)
                
                        } catch (e) {
                            console.log(e);
                            if(e.status===401||e.status===404){
                                alert('user not found, please press register') }
                          
                        }
                      
                    }}>
                    <TextField label='firstName' inputRef={firstNameRef} value={currentUser.firstname}/>
                    <TextField label='lastName' inputRef={lastNameRef} value={currentUser.lastname}/>
                    <TextField label='password' inputRef={passwordRef} value={currentUser.password}/>
                    <TextField label='phone' inputRef={phoneRef}/>
                    <TextField label='address' inputRef={addressRef}/>
                    <TextField label='email' inputRef={emailRef} value={currentUser.email}/>
                    <Button type="submit" >save</Button>
                    </form>
                </Box>
            </Modal>

       </>
    )

}
export default LoggedIn