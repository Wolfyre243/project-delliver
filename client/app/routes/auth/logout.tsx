import React, { useEffect } from 'react'
import api from '~/services/api'
import useAuth from '~/hooks/useAuth'
import { isAxiosError } from 'axios'
import { useNavigate } from 'react-router'

const Logout = () => {
  const { setAccessToken } = useAuth()
    const navigate = useNavigate()

    async function logout() {
        try {
            const { data: responseData } = await api.post('/auth/logout',{},{
                withCredentials: true
            })
            setAccessToken("");
            navigate('/');
        } catch (error) {
            let message
            if (isAxiosError(error)) {
                message =
                error.response?.data.message ||
                'Something went wrong. Please try again later.'
            }
        }
    }
    useEffect(()=>{
        logout();
    },[])
  return (
    <div></div>
  )
}

export default Logout;