import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

async function main() { 
    const survey = await prisma.survey.create({
        data: {
            title: 'Deneme',
            questions: [
                {
                    question: 'Deneme title ',
                    type: 'Deneme'
                }
            ]
        }
    })
    console.log(survey)
}

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    console.log(req.body)
    
    main().then(() =>{
        res.status(200).send('Added')
    })
    .catch((err) =>{
        console.log(err)
        res.status(500).send('Error')
    })
    
}
