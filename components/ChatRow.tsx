'use client'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { orderBy } from '@firebase/firestore';
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

type Props = {
    id: string;
  }
function ChatRow({id} : Props) {
    const pathname = usePathname();
    const router = useRouter();
    const {data: session} = useSession();
    const [active, setActive] = useState(false);


  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
    
  )

  const removeChat = async () => {
    await deleteDoc(doc(db,"users",session?.user?.email!, "chats", id));
    router.replace("/");
  }

  useEffect(() => {
    if(!pathname) return;
    setActive(pathname.includes(id))
  },[pathname])

  return (
    <Link
     href={`/chat/${id}`} className={`chatRow justify-center ${active && "bg-gray-700/50"} `}>
        <ChatBubbleLeftIcon className='h-5 w-5' />
        <p className='flex-1 hidden md:inline-flex truncate'> 
        {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
         </p>
        <TrashIcon onClick={removeChat} className='h-5 e-5 text-gray-700 hover:text-red-700' />
    </Link>
  )
}

export default ChatRow
