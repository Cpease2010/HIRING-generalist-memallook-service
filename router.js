import express from 'express'
import {newHeap, alloc, show} from './services.js'
const router = express.Router()

router.use((_req, _res, next) => {
  console.log({Time: Date.now(), Path: _req.url})
  next()
})

router.get('/new/:pageSize/:numberOfPages', (_req, _res) => {
  let pageSize = Number(_req.params.pageSize),
      numberOfPages = Number(_req.params.numberOfPages)
  _res.send(newHeap(pageSize, numberOfPages))
})

router.get('/alloc/:size', (_req, _res) => {
  let size = Number(_req.params.size)
  _res.send(alloc(size))
})

router.get('/show', (_req, _res) => {
  _res.send(show())
})

router.get('*', (_req, _res) => {
  _res.status(400).send('Bad Request: Please check your path && operation')
})

export default router