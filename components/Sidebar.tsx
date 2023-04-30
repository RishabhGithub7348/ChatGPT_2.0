'use client'
import {useSession, signOut} from "next-auth/react"
import {useCollection} from "react-firebase-hooks/firestore"
import NewChat from "./NewChat"
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { query } from "@firebase/firestore";
import ChatRow from "./ChatRow";
import { orderBy } from "@firebase/firestore";
import ModelSelection from "./ModelSelection";


function Sidebar() {

  const {data: session} = useSession();
  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'),
     orderBy('createdAt', 'asc')
    
    )
  )

  
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
       <div>

    {/* NewChat */}
    <NewChat/>

    <div className="hidden sm:inline ">
      <ModelSelection/>   

    </div>

    <div className="flex flex-col space-y-2 my-2">

      {loading && (
        <div className="animate-pulse text-center text-white">Loading Chats</div>
      )}
      {/* Map through the chatRows*/}
    {chats?.docs.map(chat => (
      <ChatRow key= {chat.id} id={chat.id} />
    ))}
    </div>

       </div>
      </div>
      <div className="flex items-center justify-between ">
      {session && (
        <p className="ml-3">
         <span className="font-bold text-white  hidden md:inline-flex truncate">{session.user?.name}</span>
         
        </p>
      )}
      

      {session && (
        <img onClick={() => signOut()} src={session.user?.image!} alt="profile" className="h-12 w-12 mr-3 rounded-full cursor-pointer hover:opacity-50 mx-auto mb-2" />
      )}
      </div>
    </div>
  )
}

export default Sidebar
