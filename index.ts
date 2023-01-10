import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import routes from './src/routes/routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(process.env.API_PORT, () =>
  console.log(`Server init, use port: ${process.env.API_PORT}`),
)
