import { Router } from 'express'
import controller from '../controller/controller'

const routes = Router()

routes.get('/healthcheck', controller.healthcheck)
routes.get('/country/:name', controller.getCountry)
routes.get('/countrys', controller.getAllCountry)

export default routes
