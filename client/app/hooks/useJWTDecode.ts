import { jwtDecode } from 'jwt-decode';
import useAuth from './useAuth';

export const useJWTDecode = () => {
    const { setUserId } = useAuth();

    const JWTDecode = async (token: string) => {
        try {
            const payload: any = await jwtDecode(token);
            console.log('[DEBUG] Decoding JWT...\nPayload:', payload);
            setUserId(payload.user_id);
            return payload;
        } catch (error) {
            console.log(error);
            setUserId(null);
        }
    }

    return JWTDecode;
}