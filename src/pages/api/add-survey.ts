import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

type subQuestion = {
    value : string , 
    number  : number | string
}

async function main(surveyName : string  , questionArray : Array<{
    question: string,
    type: string , 
    subQuestion : Array<subQuestion>
}>) { 
    const survey = await prisma.survey.create({
        data: {
            title: surveyName,
            questions: questionArray,
        }
    })
    console.log(survey)
}

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "POST"){
        console.log(req.body)
        main(req.body[0] , req.body[1]).then(() =>{
            res.status(200).send('Added')
        })
        .catch((err) =>{
            console.log(err)
            res.status(500).send('Error')
        })
    }
}
