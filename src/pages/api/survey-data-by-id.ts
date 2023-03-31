import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  })
  
  async function getData(idValue : string) { 
      const survey = await prisma.survey.findMany({
          where : { 
            id : idValue
          }
      })
      return survey
  }

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    const id = req.body
    if(req.method === 'POST'){
        getData(id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) =>{
            res.status(400).send('Error');
        })
    }
}
