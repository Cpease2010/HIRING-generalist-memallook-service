import { heapObject } from "./heapObject.js"
import { returnError } from "./util.js"

const New = (pageSize, numberOfPages) => {
  if (!heapObject.isCreated) {
    for (let i = 0; i < numberOfPages; i++) {
      heapObject.pages.push('x')
      heapObject.availablePages.push(i) 
    }
    heapObject.isCreated = true
    heapObject.pageSize = pageSize
    heapObject.size = pageSize * numberOfPages
    return heapObject.id
  } else {
    return returnError(`Error: Heap already exist, ${heapObject.id}`)
  }
}

const Alloc = (size) => {
  const pagesRequired = Math.ceil(size / heapObject.pageSize)
  if (heapObject.isCreated && pagesRequired <= heapObject.availablePages.length) {
    for (let i = 0; i < pagesRequired; i++) {
      heapObject.pages[heapObject.position] = heapObject.currentTag
      heapObject.allocatedPages.push(heapObject.position)
      heapObject.position++
      heapObject.availablePages.shift()
    }
    return {tag: heapObject.currentTag++}
  } else {
    return returnError('Memory Allocation Failed!')
  }
}

export {New, Alloc}