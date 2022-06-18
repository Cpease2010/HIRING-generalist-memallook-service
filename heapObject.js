export const heapObject = {
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
      occupiedPages: [],
      pagesRequired: 0,
      postition: 0,
      size: 0,
    }
  }
}