// Import services and hooks
import { apiPrivate } from '../services/api';
import useAuth from './useAuth';
import { jwtDecode } from 'jwt-decode';

const useRefreshToken = () => {
    const { setAccessToken, setUserId } = useAuth();

    // Define access token refresh function
    const refreshToken = async () => {
        try {
            console.log("[DEBUG] Refreshing access token...")
            // Call endpoint to get new accessToken
            const response = await apiPrivate.post('/auth/refresh', {
                withCredentials: true
            })

            // Helps set role in context
            const payload: any = jwtDecode(response.data.accessToken);
            setAccessToken(response.data.accessToken);
            setUserId(payload.user_id);

            return response.data.accessToken;
        } catch (error: any) {
            setAccessToken('');
            setUserId(null);
            throw error;
        }
    }

    return refreshToken;
};

export default useRefreshToken;