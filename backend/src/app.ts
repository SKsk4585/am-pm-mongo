import express from "express"
import catchAll from "./3-middlewere/catchAll"
import routeNotFound from "./3-middlewere/RouteNotFound"
import productController from "./6-controllers/products-controller"
import appConfig from "./2-utils/app-config"
import dal from "./2-utils/dal"
import cors from "cors"

dal.connect()
const server = express()
server.use(cors())
server.use(express.json())
server.use("/api", productController)
server.use("*",routeNotFound)
server.use(catchAll)
server.listen(appConfig.port,(()=>console.log(`listen on port${appConfig.port}`)))
