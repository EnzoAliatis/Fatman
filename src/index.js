'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import Dotenv from 'dotenv'

import schema from './schemas/index'
import logging from './lib/logging'

Dotenv.config({ path: `${__dirname}/.env` })

const app = express()
const server = new ApolloServer({ schema })

// Middlewares
app.use(logging.requestLogger)
app.use(bodyParser.json())
// extended, le digo que no quiero la version extendida
app.use(bodyParser.urlencoded({ extended: false }))

// End Middlewares

app.get('/', (req, res) => res.send('Estoy Vivo'))
app.get('/test', (req, res) => res.send('Test ok'))

function closeApp () {
  process.exit(0)
}

const PORT = process.env.PORT || 3000

const init = async () => {
  // conectar primero la bd
  console.log('conectado la bd')
  console.log(`${__dirname}/.env`)
  try {
    await mongoose.connect(process.env.ATLAS_URI,
      {
        useNewUrlParser: true,
        dbName: process.env.DB_NAME
      })
    console.log('Db Connected')
    // fin connection BD
    console.log('Iniciando express')
    // specials routes
    server.applyMiddleware({ app })
    app.use(logging.errorLogger)
    app.use((req, res) => {
      res.status(404).send('Pages Not Found')
    })
    app.use((err, req, res) => {
      res.status(500).send(err.response || 'Something broke!')
    })
    // end specials routes
    app.listen(PORT, () => {
      console.log(`servidor Corriendo en el puerto ${process.env.PORT || 3000}`)
    })
  } catch (error) {
    console.log('Error conectandose a la BBDD')
    closeApp()
    throw new Error('Error connectandoce a la database')
  }

  process.on('SIGINT', closeApp)
  process.on('SIGTERM', closeApp)
}

init()
