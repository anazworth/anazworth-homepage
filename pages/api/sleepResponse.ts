import type { NextApiRequest, NextApiResponse } from 'next'
import {toJSON} from "yaml/util";
import {json} from "stream/consumers";

type Data = {
    response: boolean,
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

const sendData = async (age: number, response: boolean) => {
    const data: Data = {
        response: response,
        age: age
    }
    console.log(data)
    let sentData = await fetch("http://10.10.10.10:8080/api/v1/response", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            response: response,
            age: age
        })
    }).then(r => r.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))

    console.log(sentData)
}