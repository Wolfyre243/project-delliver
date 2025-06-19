import { useRef, useState } from "react";
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import useAuth from '~/hooks/useAuth'
import api from "~/services/api";
import { useJWTDecode } from '~/hooks/useJWTDecode'
import { useNavigate } from 'react-router'
import { isAxiosError } from "axios";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

const login = () => {
    const { setAccessToken } = useAuth();
    let usernameRef: any = useRef(null);
    let passwordRef: any = useRef(null);
    const JWTDecode = useJWTDecode()
    const navigate = useNavigate()
    let [classNameOfAlert, setClassNameOfAlert] = useState("mt-6 hidden");
    let [statusCodeOfError, setStatusCodeOfError] = useState("");
    let [messageOfError, setMessageOfError] = useState("");
    async function handleSubmit() {
        try {
            let passwordInput = passwordRef.current.value;
            let usernameInput = usernameRef.current.value;
            let body = {
                username: usernameInput,
                password: passwordInput
            }
            const {data: responseData} = await api.post(
                "/auth/login",
                body,
                { withCredentials: true }
            )
            setAccessToken(responseData.accessToken)
            await JWTDecode(responseData.accessToken);
            navigate('/');
        } catch (error: any) {
            let message
            if (isAxiosError(error)) {
                message =
                error.response?.data.message ||
                'Something went wrong. Please try again later.'
            }
            setStatusCodeOfError(error.status);
            setMessageOfError(message);
            setClassNameOfAlert("mt-6");
        }
    }
  return (
    <div className="flex justify-center flex-col items-center h-[90vh]">
        <div className="w-150 p-8 shadow-grey shadow-md">
            <h1 className="text-4xl font-bold leading-16 text-center">Welcome back</h1>
            <p className="text-center">Don't have an account?{" "}
                <a href="/" className="underline underline-offset-4">
                    Sign up
                </a>
            </p>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();
            }}>
                <div className="mt-9">
                    <label htmlFor="username">Username</label>
                    <Input required ref={usernameRef} type="text" placeholder="Enter username" className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2" name="username" id="username" />
                </div>
                <div className="mt-4">
                    <label htmlFor="password">Password</label>
                    <Input required ref={passwordRef} type="password" placeholder="Enter Password" className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2" name="password" id="password" />
                </div>
                <Button className="mt-9 w-full">Login</Button>
            </form>
            <div className={classNameOfAlert}>
                <Alert variant={"destructive"}>
                    <AlertCircleIcon></AlertCircleIcon>
                    <AlertTitle>Error {statusCodeOfError}:</AlertTitle>
                    <AlertDescription>
                        <p>{messageOfError} Please try again.</p>
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    </div>
  )
}

export default login