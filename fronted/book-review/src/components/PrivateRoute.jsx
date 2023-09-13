import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute = ({children})=>{
    const auth = useSelector((store)=>store.authReducer.isAuth);
    const location = useLocation();

let isToken = JSON.parse(localStorage.getItem("TOKEN"));
console.log("kunal");


    return isToken ? children : <Navigate state={location.pathname} to={"/login"} replace={true}/>
}