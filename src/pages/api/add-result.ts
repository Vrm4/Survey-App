import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

// type subQuestion = {
//     value : string , 
//     number  : number | string
// }

// async function main(surveyName : string  , questionArray : Array<{
//     question: string,
//     type: string , 
//     subQuestion : Array<subQuestion>
// }>) { 
//     const survey = await prisma.survey.create({
//         data: {
//             surveyName: surveyName,
//             surveyQuestions: questionArray,
//         }
//     })
//     console.log(survey)
// }

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "POST"){
        console.log(req.body)
    }
}
