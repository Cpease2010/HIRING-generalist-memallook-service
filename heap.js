let heapInstance

const heapObject = {
  id: `HEAP-${Math.floor(Math.random() * (999 - 100) + 100)}`,
  availablePages: 0,
  currentTag: 0,
  isCreated: false,
  memory: [],
  position: 0,
  pageSize: 0,
  size: 0,
  tags: {
    0: {
      pagesRequired: 0,
      position: 0,
      size: 0,
    }
  }
}

const createHeapInstance = () => {
  if (heapInstance) {
    return heapInstance
  }
  heapInstance = heapObject
  return heapInstance.id
}

const getHeapInstance = () => {
  if (heapInstance) {
    return heapInstance
  }
  return 0
}

const resetHeapInstance = () => {
  heapInstance = null
  console.log(heapInstance)
  return 'Reset Successsful'
}

export {createHeapInstance, getHeapInstance, resetHeapInstance}
