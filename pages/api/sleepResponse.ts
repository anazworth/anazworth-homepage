import type { NextApiRequest, NextApiResponse } from 'next'
import {toJSON} from "yaml/util";
import {json} from "stream/consumers";

type Data = {
    response: string,
    age: number,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data: Data = req.body

    await sendData(data.age, data.response)

    res.status(200).json(req.body)
}

const sendData = async (age: number, response: string) => {
    console.log(age)
    console.log(response)

    let responseBool = false
    if (response === "true") {
        responseBool = true
    }

    if (response === "true")
{         await fetch(process.env.NEXT_PUBLIC_SLEEPSTATS_URL + '/api/v1/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            body: JSON.stringify({
                "age": 18,
                "response": true
            })
        })
 }
    else if (response === "false") {
        await fetch(process.env.NEXT_PUBLIC_SLEEPSTATS_URL + '/api/v1/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            body: JSON.stringify({
                "age": 18,
                "response": false
            })
        })
    }
}