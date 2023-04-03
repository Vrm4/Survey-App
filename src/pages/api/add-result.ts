import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})
type surveyResult = {
  name : string , 
  surName : string , 
  surveyId : string ,
  answers : userAnswers[]
}
type userAnswers = {
    questionNumber : number , 
    questionType : string , 
    answer : string  | Array<CheckBoxValues>
}
type CheckBoxValues = { 
    value : string
}


async function main(surveyData : Array<surveyResult>) { 
    const survey = await prisma.results.create({
        data: surveyData
    })
    return survey
}

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "POST"){
        console.log(req.body)
        main(req.body)
        .then(() =>{
          res.status(200).send('Added')
        })
        .catch((err) =>{
          console.log(err)
          res.status(500).send('Error')
      })
    }
}
