import express from 'express'
import { newHeap, alloc, show, dealloc, reset } from './services.js'
const router = express.Router()

router.use((_req, _res, next) => {
  console.log({Time: Date.now(), Path: _req.url})
  next()
})

router.get('/newHeap/:pageSize/:numberOfPages', (_req, _res) => {
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

router.get('/dealloc/:tag', (_req, _res) => {
    let tag = Number(_req.params.tag)
  _res.send(dealloc(tag))
})

router.get('/reset', (_req, _res) => {
  _res.send(reset())
})

router.get('*', (_req, _res) => {
  _res.status(200).send('The specified path OR resource does not exist')
})

export default router