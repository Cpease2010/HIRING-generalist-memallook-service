import express from 'express'
import {New} from './services.js'
const router = express.Router()

router.use((_req, _res, next) => {
  console.log({Time: Date.now(), Path: _req.url})
  next()
})

router.get('/new/:pageAmount/:pageSize', (_req, _res) => {
  let pageAmount = Number(_req.params.pageAmount),
      pageSize = Number(_req.params.pageSize)
  _res.send(New(pageSize, pageAmount))
})

router.get('*', (_req, _res) => {
  _res.status(400).send('Bad Request: Please check your path && operation')
})

export default router