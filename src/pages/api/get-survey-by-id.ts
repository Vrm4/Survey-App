
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

async function getData(surveyId : string) { 
    const survey = await prisma.survey.findUnique({
        where : {
            id : surveyId
        }, 
        select : {
            title : true, 
            questions : true
        }
    })
    return survey
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
