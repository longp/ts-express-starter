import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
// Controllers (route handlers)
import * as homeController from './controllers/home'
dotenv.config()
// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'))

/**
 * Primary app routes.
 */
app.get('/', homeController.index)

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('woah not found')
})

export default app
