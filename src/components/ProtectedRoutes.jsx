import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {

    const userName = useSelector(state => state.nameUser)

    if(userName){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }  
}                 
export default ProtectedRoutes