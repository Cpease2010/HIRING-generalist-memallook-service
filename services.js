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
  if (heapObject.isCreated && pagesRequired <= heapObject.availablePages) {
    heapObject.allocated.meta[heapObject.currentTag] = {}
    heapObject.allocated.meta[heapObject.currentTag]['occupiedPages'] = []
    heapObject.allocated.meta[heapObject.currentTag]['pagesRequired'] = pagesRequired
    heapObject.allocated.meta[heapObject.currentTag]['postition'] = heapObject.position
    heapObject.allocated.meta[heapObject.currentTag]['size'] = size
    for (let i = 0; i < pagesRequired; i++) {
      heapObject.memory[heapObject.position] = heapObject.currentTag
      heapObject.allocated.meta[heapObject.currentTag].occupiedPages.push(heapObject.position)
      heapObject.allocated.pages.push(heapObject.position)
      heapObject.position++
      heapObject.availablePages--
    }
    return {tag: heapObject.currentTag++}
  } else {
    return returnError('Memory Allocation Failed: HEAP is null OR memory insufficient')
  }
}

const show = () => {
  let allocationsByTag = {}
  for (let i = 0; i < heapObject.currentTag; i++) {
    allocationsByTag[i] = heapObject.allocated.meta[i].size
  }  

  return {
    pages: heapObject.memory,
    'Allocations by tag': allocationsByTag
  }
}

const dealloc = (tag) => {
  if (heapObject.allocated.meta[tag]) {
    console.log({tag, deallocFunction: heapObject.allocated.meta[tag]})
    return `TAG: ${tag} Successfully Deallocated`
  }
  return returnError(`Memory Deallocation Failed: Unknown Tag - ${tag}`)
}

export {newHeap, alloc, show, dealloc}