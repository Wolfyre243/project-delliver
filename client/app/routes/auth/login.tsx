import { useRef } from "react";
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import useAuth from '~/hooks/useAuth'

const login = () => {
      const { setAccessToken } = useAuth();
      let usernameRef = useRef(null);
      let passwordRef = useRef(null);
    
    function handleSubmit() {
        
    }
  return (
    <div className="flex justify-center flex-col items-center h-[90vh]">
        <div className="bg-gray-900 w-150 p-8">
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
                    <Input ref={usernameRef} type="text" placeholder="Enter username" className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2" name="username" id="username" />
                </div>
                <div className="mt-4">
                    <label htmlFor="password">Password</label>
                    <Input ref={passwordRef} type="password" placeholder="Enter Password" className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2" name="password" id="password" />
                </div>
                <Button className="mt-9 w-full">Login</Button>
            </form>
        </div>
    </div>
  )
}

export default login