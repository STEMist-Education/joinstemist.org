import type Class from '@/lib/types/Class';
import { useState } from 'react';
import { ArrowRightIcon } from "@heroicons/react/outline";
import Button from "@/components/layout/Button";
import { useRouter } from 'next/router'

export default function TeaPostMake(cuid:string, classI) {
    const [mtit, setMtit] = useState("Untitled Message")
    const [parg, setParg] = useState("Start typing here...")
    async function HandleCPost() {
        var classposts = classI.posts
        classposts.push({desc:parg, title:mtit})
        var query = JSON.stringify({posts:classposts, uid:cuid})
        await fetch(`/api/postadd/`, {
          method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
          body: query,
        })
        alert("Post sent! -- Refresh to see it")
      }
    
  return (
    <div className="flex flex-row flex-wrap w-full md:w-3/4 lg:w-1/2 justify-start align-top m-auto">
        <div className="mt-3 border-2 border-gray-300 w-full p-5 rounded-md text-center">
          
        
            <h1 className="text-3xl font-bold">
                Teacher View
            </h1> <br></br>

            <p>Send a Post</p> <br></br>

            <form> 
                <div><span><p>Title:</p> <input type="text" id="mtitle" value={mtit} onChange={(e) => {
          setMtit(e.target.value);
        }}/></span></div> <br></br>
                <label htmlFor="txap">Message:</label><br></br>
                <textarea name="txap" id="txap" value={parg} onChange={(e) => {
          setParg(e.target.value);
        }}></textarea>
            </form>

            <br></br>   

            <Button
              backgroundColor="bg-gradient-to-r from-blue to-steve-purple !py-1 !px-3"
              textColor="text-white"
              onClick={HandleCPost}
            >
              Send {" "}
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            </Button>

        </div>
    </div>
  );
};
