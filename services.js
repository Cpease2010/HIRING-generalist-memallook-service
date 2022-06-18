import { heapObject } from "./heapObject.js"
import { returnError } from "./util.js"

const newHeap = (pageSize, numberOfPages) => {
  if (!heapObject.isCreated) {
    for (let i = 0; i < numberOfPages; i++) {
      heapObject.memory.push('x')
      heapObject.availablePages++
    }
    heapObject.isCreated = true
    heapObject.pageSize = pageSize
    heapObject.size = pageSize * numberOfPages
    return heapObject.id
  } else {
    return returnError(`Failed: Heap Exist with ID, ${heapObject.id}`)
  }
}

const alloc = (size) => {
  const pagesRequired = Math.ceil(size / heapObject.pageSize)
  if (pagesRequired <= heapObject.availablePages) {
    heapObject.tags[heapObject.currentTag] = {}
    heapObject.tags[heapObject.currentTag]['pagesRequired'] = pagesRequired
    heapObject.tags[heapObject.currentTag]['position'] = heapObject.position
    heapObject.tags[heapObject.currentTag]['size'] = size
    for (let i = 0; i < pagesRequired; i++) {
      heapObject.memory[heapObject.position] = heapObject.currentTag
      heapObject.position++
      heapObject.availablePages--
    }
    return {tag: heapObject.currentTag++}
  } else {
    return returnError('Memory Allocation Failed: HEAP is null OR memory insufficient')
  }
}

const show = () => {
  const allocationsByTag = {}
  for (let i = 0; i < heapObject.currentTag; i++) {
    allocationsByTag[i] = heapObject.tags[i].size
  }  
  return {
    pages: heapObject.memory,
    'Allocations by tag': allocationsByTag
  }
}

const dealloc = (tag) => {
  if (!heapObject.tags[tag]) {
    return returnError(`Memory Deallocation Failed: Unknown Tag - ${tag}`)
  }
  const removals = heapObject.tags[tag].pagesRequired
  let positionInMemory = heapObject.tags[tag].position
  for (let i = 0; i < removals; i++) {
    heapObject.memory[positionInMemory++] = 'x'
  }
  return `TAG: ${tag} Successfully Deallocated`
}

export {newHeap, alloc, show, dealloc}