import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <Spinner animation="grow" variant="dark" />
    }
    if(user){
        return children;
    }else{
      alert('You have to log in first to view details');
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;