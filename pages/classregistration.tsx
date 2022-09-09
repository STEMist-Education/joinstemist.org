import Button from "@/components/layout/Button";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import TabPage from "@/components/pages/TabPage";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { memo, useState, useRef, useEffect } from "react";
import { getCookie } from 'cookies-next';



export default function Programs() {
  let userinfo;
  let username;
  let uid;
  try {
  userinfo = JSON.parse(getCookie('user'))
  username = userinfo["name"]
  uid = userinfo["uid"]
  } catch {
    username="Please Log In First!"
    uid="Please Log In First!"
  }
  return (
    <Container title="Class Registration">
      <PartialBanner
        title="Sign up for our courses!"
        subheader="Join in on the interactive STEM learning experience"
      />
      <h1 className="text-center font-display text-4xl font-bold mb-2">
        Fill out form below to sign up for a class!
      </h1>
      <h2 className="text-center font-display text-1xl mb-8">
        Please donate $1,000,000 per class at www.donatetostemist.please
      </h2>
      <center>
      <div>
      <form>
      <label for="user">Username: </label><br></br>
        <input type="text" id="user" name="user" disabled={true} value={username}/><br></br><br></br>
        <label for="email">UID (do not share):  </label><br></br>
        <input type="text" id="user" name="user" disabled={true} value={uid}/><br></br><br></br>
        <label for="email">Email Address: </label><br></br>
        <input type="text" id="email" name="email" /><br></br><br></br>
        <label for="fullname">Full name: </label><br></br>
        <input type="text" id="fullname" name="fullname" /><br></br><br></br>
        <label for="class1">Class: </label>
        <input type="dropdown" id="class1" name="class1" /><br></br><br></br>
        <Button
            backgroundColor="bg-blue-500"
            textColor="text-white text-xl"
            target="_blank"
            type="submit"
          >
            Join Class!{" "}
            <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
          </Button> <br></br><br></br>
        <a>Note: you will probably receive a verification email within a few days of signing up. If you do not receive one, and this course does not show up on your dashboard, please email us. For any questions: anemailadress@joinstemist.org</a>
      </form>
      </div>
      </center><br></br><br></br>
      <h1 className="text-center font-display text-4xl font-bold mb-5">
        What We Teach
      </h1>
      <div className="">
        <TabPage />
      </div>
    </Container>
  );
}
