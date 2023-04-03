
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

async function getData(surveyRId : string) { 
    const surveyResults = await prisma.results.findMany({
        where : {
            surveyId : surveyRId
        }, 
        select : {
            name : true, 
            surName : true,
            answers : true
        }
    })
    return surveyResults
}

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "GET"){
        const {id} = req.query;
        getData(id as string)
        .then((response) =>{
            res.status(200).json(response)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}
