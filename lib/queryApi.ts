// import openai from "./chatgpt";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
})

const openai = new OpenAIApi(configuration);

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
    }).then((res) => res.data.choices[0].text)
    .catch(
        (err) => {
            `Chatgpt query failed for chatId: ${chatId} with error: ${err}`
        }    
    )
    return res;
}

export default query;