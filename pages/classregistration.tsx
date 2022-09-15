import Button from "@/components/layout/Button";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import TabPage from "@/components/pages/TabPage";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from 'cookies-next';
import useSWR from 'swr';


var userinfo = {};
var username = "";
var uid = "";
var classesmap = {
  "Fake (Math)":  'MMMwuzDS7C5M4wj1zwch',
  "Fake (Phy)": 'LZ330xVM4h0jkijbSaho',
};

const fetcher = (url) => fetch(url).then((res) => res.json())
let selectchoice = "";
/*try {
userinfo = JSON.parse(getCookie('user').toString())
username = userinfo["name"]
uid = userinfo["uid"]
} catch {
  username="Please Log In First!"
  uid="Please Log In First!"
};*/
try {
if (getCookie('user')!==null) {
  userinfo = JSON.parse(getCookie('user').toString())
  username = userinfo["name"]
  uid = userinfo["uid"]
} else {
  username="Please Log In First!"
  uid="Please Log In First!"
}} catch {
  username="Please Log In First!"
  uid="Please Log In First!"
}
function createSelectItems() {
  let toReturn = [];
  toReturn.push((<option key={0} value={null}>choose a class</option>));
  for (let i=1; i<Object.keys(classesmap).length+1; i++){
    toReturn.push((<option key={i} value={Object.keys(classesmap)[i-1]}>{Object.keys(classesmap)[i-1]}</option>));
  }
  return toReturn;
} 



export default function Programs() {
  const [value, setValue] = useState("");
  const [emvalue, setEmValue] = useState("");
  const [nvalue, setnValue] = useState("");
  async function useHandleCRegistration() {
    var classes_copy = JSON.parse(JSON.stringify(userinfo["classes"]))
    classes_copy.push(classesmap[value])
    //console.log({classes:classes_copy, uid:uid, username:username, email:emvalue})
    var query = JSON.stringify({classes:classes_copy, uid:uid, username:username, email:emvalue, classes:classes_copy, name:nvalue})
    //setCookie("crquery", {classes:userinfo["classes"], uid:uid})
    await fetch(`/api/classadd/`, {
      method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
      body: query,
    })
    alert("Registration Succeeded\n\nPlease make sure to donate $10 upon signing up\n\nIf you do not receive a confirmation email within a few days, or have any questions, please email us at anemailaddress@joinstemist.org")
  }
  return (
    <Container title="Class Registration Page">
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
      <label htmlFor="user">Username: </label><br></br>
        <input type="text" id="user" name="user" disabled={true} value={username}/><br></br><br></br>
        <label htmlFor="email">UID (do not share):  </label><br></br>
        <input type="text" id="user" name="user" disabled={true} value={uid}/><br></br><br></br>
        <label htmlFor="email">Email Address: </label><br></br>
        <input type="text" id="email" name="email" value={emvalue} onChange={(e) => {
          setEmValue(e.target.value);
        }}/><br></br><br></br>
        <label htmlFor="fullname">Full name: </label><br></br>
        <input type="text" id="fullname" name="fullname" value={nvalue} onChange={(e) => {
          setnValue(e.target.value);
        }}/><br></br><br></br>
        <label htmlFor="class1">Class: </label>
        <select id="class1" name="class1" value={value} onChange={(e) => {
          setValue(e.target.value);
        }}>
        {createSelectItems()}
        </select><br></br><br></br>
        <Button
            backgroundColor="bg-blue-500"
            textColor="text-white text-xl"
            target="_blank"
            type="button"
            onClick={useHandleCRegistration}
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
      <div>
        <TabPage />
      </div>
    </Container>
  );
}
