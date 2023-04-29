// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi, CreateChatCompletionResponse } from "openai";


const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CreateChatCompletionResponse>
  ) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Hello!"}]
    }).then((response) => {
        console.log(response.data);
        return response.data;
    });
    res.status(200).json(response)
  }
  