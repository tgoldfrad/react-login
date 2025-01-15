import { useContext } from "react"
import { Link, NavLink } from "react-router"
import { FunctionContext, UserContext } from "./HomePage"
import { Box, Button, Grid, Grid2, Snackbar } from "@mui/material"



const NavBar = () => {
    const user = useContext(UserContext)
    //const func = useContext(FunctionContext)
    return (<>
    <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                padding: 2,
                zIndex: 1,
            }}
        >
   
        <nav >
            <Link to='/'>HomePage</Link> | 
            <Link to='/about'>About</Link> | 
            <Link to={`/loggedin/${user.firstname}`}>User</Link>
            <NavLink to='/rer'/>
        </nav>
    </Box>
     
    </>)
}

export default NavBar