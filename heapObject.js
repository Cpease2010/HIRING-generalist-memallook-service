export const heapObject = {
  id: `HEAP-${Math.floor(Math.random() * (999 - 100) + 100)}`,
  isCreated: false,
  position: 0,
  currentTag: 0,
  pageSize: 0,
  size: 0,
  availablePages: [],
  allocated: {pages: [], meta: {}},
  memory: []
}