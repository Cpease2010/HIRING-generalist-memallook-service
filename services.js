import { heapObject } from "./heapObject.js"
import { returnError } from "./util.js"

const newHeap = (pageSize, numberOfPages) => {
  if (!heapObject.isCreated) {
    for (let i = 0; i < numberOfPages; i++) {
      heapObject.memory.push('x')
      heapObject.availablePages.push(i) 
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
  if (heapObject.isCreated && pagesRequired <= heapObject.availablePages.length) {
    for (let i = 0; i < pagesRequired; i++) {
      heapObject.memory[heapObject.position] = heapObject.currentTag
      heapObject.allocated.pages.push(heapObject.position)
      heapObject.position++
      heapObject.availablePages.shift()
    }
    heapObject.allocated.meta[heapObject.currentTag] = size
    return {tag: heapObject.currentTag++}
  } else {
    return returnError('Memory Allocation Failed: HEAP is null OR memory insufficient')
  }
}

const show = () => { 
  return {
    pages: heapObject.memory,
    'Allocations by tag': heapObject.allocated.meta
  }
}

const dealloc = (tag) => {
  return returnError(`Memory Deallocation Failed: Unknown Tag - ${tag}`)
}

export {newHeap, alloc, show, dealloc}