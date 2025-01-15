import { createContext, useReducer, useRef, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    Input,
    TextField
} from "@mui/material";
import LoggedIn from "./LoggedIn";
import userReducer, { User } from "../UserModel";
import axios from "axios";


export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const FunctionContext = createContext<Function>(() => { });
export const UserContext = createContext<User>({ firstname: 'fff', lastname: "dgd", password: "546456" });
export const UserId = createContext<number|undefined>(0);

const HomePage = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)
    const [isRegister, setisRegister] = useState('')

    const [currentUser, currentUserDispatch] = useReducer(userReducer, {} as User)

    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    const [userID, setUserID] = useState<number>()
    const url = 'http://localhost:3000/api/user';

    return (
        <>
   
         
            <Box
            sx={{
                position: 'absolute',
                top: 50,
                right: 250,
                padding: 25,
                zIndex: 1,
            }}
        >
                <h1>Home</h1>
                </Box>
     
                <Grid container>
                    <Grid size={4}>
                        {!isLogin ?
                        <div>
                            <Button color="primary" variant="contained" onClick={() => {setOpen(!open);setisRegister('/login')}}>Login</Button>
                            <Button color="primary" variant="contained" onClick={() => {setOpen(!open);setisRegister('/register')}}>register</Button>
                        </div>
                            :<UserId.Provider value={userID}> <FunctionContext.Provider value={currentUserDispatch}> <UserContext.Provider value={currentUser}><LoggedIn /></UserContext.Provider></FunctionContext.Provider></UserId.Provider>}
                    </Grid>
                </Grid>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <Box sx={style}>
                        <form onSubmit={async(event) => {
                            event.preventDefault();
                            setOpen(false); setIsLogin(true);
                      
                  
                            currentUserDispatch({
                                type: 'CREATE',
                                data: {
                                    firstname: firstNameRef.current?.value || '',
                                    lastname: lastNameRef.current?.value || '',
                                    password: passwordRef.current?.value || '',
                                    email: emailRef.current?.value || ''

                                }
                            })

                            try{
                                const res = await axios.post(
                                    url + isRegister,
                                    {
                                        email: emailRef.current?.value,
                                        password: passwordRef.current?.value
                                    },
                             
                                )
                    // currentUser={ firstname: firstNameRef.current?.value || '',
                    //     lastname: lastNameRef.current?.value || '',
                    //     password: passwordRef.current?.value || '',
                    //     email: emailRef.current?.value || ''
                    //       }
                               setUserID(res.data.userId)
                    
                            } catch (e) {
                                console.log(e);
                                if (e.status === 422){
                                    alert('user is already login, please press login');
                                    setIsLogin(false);
                                }
                                else if(e.status===401){
                                    alert('user not found, please press register');
                                    setIsLogin(false);
                                }
                            }
                          
                    
                        }}>
                            <TextField label='firstName' inputRef={firstNameRef} />
                            <TextField label='lastName' inputRef={lastNameRef} />
                            <TextField label='password' inputRef={passwordRef} />
                            <TextField label='email' inputRef={emailRef} />
                            <Button type="submit" >Login</Button>
                        </form>
                    </Box>
                </Modal>
      
        </>
    )

}
export default HomePage