import { Router } from 'express'
import controller from './controller'

const routes = Router()

routes.get('/healthcheck', controller.healthcheck)
routes.get('/country/:name', controller.getCountry)

export default routes
