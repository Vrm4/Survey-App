
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

async function getData() { 
    const survey = await prisma.survey.findMany({
        select : { 
            title  : true
        }
    })
    const surveyCount = await prisma.survey.count({
        where : {
            questions: {
                some: {},
              },
        }
    })
    return {survey,surveyCount}
}

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "GET"){
        getData()
        .then((response) =>{
            res.status(200).json(response)
        })
        .catch((err) =>{
            res.status(500).send('Error')
        })
    }
}
