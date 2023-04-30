import type { NextApiRequest, NextApiResponse } from 'next'
import  query  from '../../lib/queryApi'
import admin from 'firebase-admin'
import {adminDb} from '../../firebaseAdmin'


type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data> 
) {

    const {prompt, chatId, model , session} = req.body
  
    if(!prompt || !chatId || !model || !session) {
        res.status(400).json({ answer: 'Missing body parameters' })
        return
    }

    // Chatgpt Query

    const response = await query(prompt, chatId, model)
   

    const messsage: Message = {
        text: response || 'Sorry, I did not understand that.',
        createdAt: admin.firestore.Timestamp.now(), 
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://links.papareact.com/89k'
        }
    }
    await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(messsage)

    res.status(200).json({ answer: messsage.text }) 
}
