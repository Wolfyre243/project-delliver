import { Link } from "react-router"
import { Button } from "~/components/ui/button"

export default function AppBar() {
    return (
        // TODO: Turn into proper responsive app bar
        <div className="bg-secondary flex flex-row w-full p-3 justify-between">
            <div className="">
                <Link to={"/"}><h1 className="text-2xl">HealthNest</h1></Link>
            </div>
            {/* TODO: Create array for links, and use shadcn ui for nav menu */}
            {/* <div className="flex flex-row w-1/4 justify-evenly items-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>About</Link>
            </div> */}
            {/* TODO: Dont show if user is logged in */}
            <div className="flex flex-row gap-2 justify-center items-center">
                <Button asChild>
                    <Link to={"/auth/login"}>Login</Link>
                </Button>
            </div>
        </div>
    )
}