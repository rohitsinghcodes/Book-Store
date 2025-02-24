import React from 'react'
import { Navigate, Outlet } from 'react-router'

export default function AdminRoute({ children }) {
    const token = localStorage.getItem('token')
    
    if (!token) {
        return <Navigate to='/admin' />
    }
    return children ? children : <Outlet />
}
