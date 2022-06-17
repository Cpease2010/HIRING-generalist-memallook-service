import { heapObject } from "./heapObject.js"

const New = (pageSize, numberOfPages) => {
  if (!heapObject.isCreated) {
    for (let i = 0; i < numberOfPages; i++) {
      heapObject.pages.push(Buffer.alloc(pageSize))
      heapObject.availablePages.push(i) 
    }
    heapObject.isCreated = true
    heapObject.size = pageSize * numberOfPages
    return heapObject.id
  } else {
    let errorMessage = `Error: Heap already exist, ${heapObject.id}\n`
    console.error(errorMessage)
    return errorMessage
  }
}

export {New}