import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "~/components/ui/select";

const register = () => {
  let username = useRef(null);
  let password = useRef(null);
  let [step, setStep] = useState(1);
  return (
    <>
      <div className="flex justify-center h-150 flex-col items-center">
        <div className="w-150">
          <h3>Step {step} of 3</h3>
          {renderStep(step, setStep)}
        </div>
      </div>
    </>
  );
};

function renderStep(step: any, setStep: any) {
  if (step === 1) {
    return <Step1 setStep={setStep} />;
  } else if (step === 2) {
    return <Step2 setStep={setStep} />;
  } else {
    return <Step3 setStep={setStep} />;
  }
}

const Step1 = (props: { setStep: Function }) => {
  return (
    <>
      <h1 className="mt-6 text-5xl font-bold leading-16">
        👋 Tell Us About Yourself!
      </h1>
      <p className="text-2xl mt-4">
        A little about you so we can tailor your health journey.
      </p>
      <hr className="bg-white mt-10"></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setStep(2);
        }}
      >
        <div className="flex gap-3 mt-9 text-xl">
          <Checkbox id="FamilyHistory" className="self-center" />
          <label htmlFor="FamilyHistory">
            My immediate family has a history of cancer
          </label>
        </div>
        <div className="flex gap-3 mt-4 text-xl">
          <Checkbox id="smokeHistory" className="self-center" />
          <label htmlFor="smokeHistory">
            I smoke or live with people who smoke
          </label>
        </div>
        <div className="flex gap-3 mt-4 text-xl">
          <Checkbox id="screeningHistory" className="self-center" />
          <label htmlFor="screeningHistory">
            Have you been to a health screening from SCS in the past 6 months?
          </label>
        </div>
        <div className="mt-4">
          <p className="text-xl mb-3">How often do you exercise per week?</p>
          <Select required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select the duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no activity">I do not exercise</SelectItem>
              <SelectItem value="light activity">
                1–2 times (light activity)
              </SelectItem>
              <SelectItem value="heavy activity">
                3 or more times (moderate activity)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="mt-7">Next </Button>
      </form>
    </>
  );
};

const Step2 = (props: { setStep: Function }) => {
  return (
    <>
      <h1 className="mt-6 text-5xl font-bold leading-16">
        ❓How'd we call you?
      </h1>
      <p className="text-2xl mt-4">We’d love to address you properly.</p>
      <hr className="bg-white mt-10"></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setStep(3);
        }}
      >
        <div className="mt-7">
          <label htmlFor="fname">First name:</label>
          <Input
            id="fname"
            type="text"
            placeholder="Enter first name"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="lname">Last name:</label>
          <Input
            id="lname"
            type="text"
            placeholder="Enter last name"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="username">Username:</label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            required
          />
        </div>
        <Button className="mt-7">Next</Button>
      </form>
    </>
  );
};

const Step3 = (props: { setStep: Function }) => {
  return (
    <>
      <h1 className="mt-6 text-5xl font-bold leading-16">
        You're almost there! 🌟
      </h1>
      <p className="text-2xl mt-4">
        Pick a password you’ll remember — and no one else will!
      </p>
      <hr className="bg-white mt-10"></hr>
            <form
        onSubmit={(e) => {
          e.preventDefault();
          
        }}
      >
        <div className="mt-7">
          <label htmlFor="fname">Password:</label>
          <Input
            id="fname"
            type="password"
            placeholder="Enter password"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="lname">Confirm password:</label>
          <Input
            id="lname"
            type="password"
            placeholder="Enter password again"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            required
          />
        </div>
        <Button className="mt-7">Sign up</Button>
      </form>
    </>
  );
};
export default register;
