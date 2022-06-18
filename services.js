import { createHeapInstance, getHeapInstance, resetHeapInstance } from "./heap.js"
import { returnError } from "./util.js"

const newHeap = (pageSize, numberOfPages) => {
  if (!getHeapInstance().isCreated) {
    createHeapInstance()
    for (let i = 0; i < numberOfPages; i++) {
      getHeapInstance().memory.push('x')
      getHeapInstance().availablePages++
    }
    getHeapInstance().isCreated = true
    getHeapInstance().pageSize = pageSize
    getHeapInstance().size = pageSize * numberOfPages
    return getHeapInstance().id
  } else {
    return returnError(`New Failed: Heap Exist with ID, ${getHeapInstance().id}`)
  }
}

const alloc = (size) => {
  const pagesRequired = Math.ceil(size / getHeapInstance().pageSize)
  let currentTag = getHeapInstance().currentTag
  const tag = {}
  if (pagesRequired <= getHeapInstance().availablePages) {
    tag['pagesRequired'] = pagesRequired
    tag['position'] = getHeapInstance().position
    tag['size'] = size
    getHeapInstance().tags[currentTag] = tag
    for (let i = 0; i < pagesRequired; i++) {
      getHeapInstance().memory[getHeapInstance().position] = currentTag
      getHeapInstance().position++
      getHeapInstance().availablePages--
    }
    return { tag: getHeapInstance().currentTag++ }
  } else {
    return returnError('Allocation Failed: HEAP is null OR memory insufficient')
  }
}

const show = () => {
  if (!getHeapInstance()) {
    return returnError('Show Failed: HEAP is null OR memory insufficient')
  }
  const allocationsByTag = {}
  const tags = getHeapInstance().tags
  Object.keys(tags).forEach(tag => {
      allocationsByTag[tag] = tags[tag].size
  })
  return {
    pages: getHeapInstance().memory,
    'Allocations by tag': allocationsByTag
  }
}

const dealloc = (tag) => {
  try {
    if (!getHeapInstance().tags[tag]) {
      return returnError(`Deallocation Failed: Unknown Tag - ${tag}`)
    }
    const removals = getHeapInstance().tags[tag].pagesRequired
    const memory = getHeapInstance().memory
    let positionInMemory = getHeapInstance().tags[tag].position
    for (let i = 0; i < removals; i++) {
      memory[positionInMemory++] = 'x'
    }
    
    delete getHeapInstance().tags[tag]
    return `TAG: ${tag} Successfully Deallocated`
  } catch (error) {
    return returnError('Deallocation Failed: HEAP is null OR memory insufficient')
  }
}

const reset = () => {
  return resetHeapInstance()
}

export { newHeap, alloc, show, dealloc, reset }