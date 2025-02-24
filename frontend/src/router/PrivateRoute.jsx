import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({children}) {
    const {currentUser, loading} = useAuth()

    if(loading) {
      return <div>Loading</div>
    }
    if(currentUser){
        return children;
    }

  return <Navigate to='/register' replace/>
}
