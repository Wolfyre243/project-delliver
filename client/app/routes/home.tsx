import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { useEffect, useRef, useState } from "react";
import stuff from "./stuff.svg";
import { Input } from "~/components/ui/input";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landing Page" },
    { name: "description", content: "Welcome to React Router" },
  ];
}

export default function Home() {
  let [loggedInclasses, setLoggedInclasses] = useState("hidden");
  let [notLoggedInClasses, setNotLoggedInClasses] = useState("");
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoggedInclasses("");
      setNotLoggedInClasses("hidden");
    } else {
      setLoggedInclasses("hidden");
      setNotLoggedInClasses("");
    }
  }, []);
  return (
    <>
      <LoggedIn classname={loggedInclasses}></LoggedIn>
      <NotLoggedIn classname={notLoggedInClasses}></NotLoggedIn>
    </>
  );
}

const LoggedIn = (props: { classname: any }) => {
  return (
    <div className={props.classname}>
      <h1>Hi! you are logged in </h1>
    </div>
  );
};

const NotLoggedIn = (props: { classname: any }) => {
  let fName: any = useRef(null);

  return (
    <div className={props.classname}>
      <div className="flex justify-center h-150 items-center flex-col">
        <h1 className="text-6xl text-center mt-3 leading-18 font-bold">
          Fight Back with Every Step,<br></br>Your Health starts here
        </h1>
        <p className="mt-3 text-xl">
          Take on personalized health missions to help you live a healthier life{" "}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem("email", fName.current.value);
            window.location.href = "/auth/register";
          }}
        >
          <div className="flex gap-5 mt-8">
            <Input
              className="bg-[#222630] px-4 py-3 h-13.5 outline-none w-[400px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center"
              name="text"
              placeholder="Enter email"
              type="email"
              ref={fName}
              required
            />
            <Button className="px-4 py-3 h-full">
              Next <img src={stuff} alt="arrow" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
