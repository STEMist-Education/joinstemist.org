import Button from "@/components/layout/Button";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import TabPage from "@/components/pages/TabPage";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { memo, useState, useRef, useEffect } from "react";
import { getCookie } from 'cookies-next';
import { keys } from "lodash";
import { fetchUser } from "@/lib/auth/fetch";



export default function Programs() {
  let userinfo;
  let username;
  let uid;
  let classesmap = {
    "Fake (Math)":  'MMMwuzDS7C5M4wj1zwch',
    "Fake (Phy)": 'LZ330xVM4h0jkijbSaho',
  };
  let selectchoice;
  try {
  userinfo = JSON.parse(getCookie('user'))
  username = userinfo["name"]
  uid = userinfo["uid"]
  } catch {
    username="Please Log In First!"
    uid="Please Log In First!"
  };
  function createSelectItems() {
    let toReturn = [];
    toReturn.push((<option key={0} value={null}>choose a class</option>))
    for (let i=1; i<Object.keys(classesmap).length+1; i++){
      toReturn.push((<option key={i} value={Object.keys(classesmap)[i-1]}>{Object.keys(classesmap)[i-1]}</option>))
    }
    return toReturn;
} 
async function handleCRegistration() {
  console.log(selectchoice)
    fetchUser("POST", uid, {
      classes: selectchoice//document.getElementById("class1").value,
    })
    /*await fetchUser("POST", user.uid, {
      username,
      classes: user.classes+document.getElementById("class1").value,
      role: "student",
    });*/
  
}
createSelectItems()
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
      <form onSubmit={handleCRegistration()}>
      <label for="user">Username: </label><br></br>
        <input type="text" id="user" name="user" disabled={true} value={username}/><br></br><br></br>
        <label for="email">UID (do not share):  </label><br></br>
        <input type="text" id="user" name="user" disabled={true} value={uid}/><br></br><br></br>
        <label for="email">Email Address: </label><br></br>
        <input type="text" id="email" name="email" /><br></br><br></br>
        <label for="fullname">Full name: </label><br></br>
        <input type="text" id="fullname" name="fullname" /><br></br><br></br>
        <label for="class1">Class: </label>
        <select id="class1" name="class1" onSelect={selectchoice=this}>
        {createSelectItems()}
        </select><br></br><br></br>
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
