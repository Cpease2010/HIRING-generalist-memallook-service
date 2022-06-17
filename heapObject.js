export const heapObject = {
  id: `HEAP-${Math.floor(Math.random() * (999 - 100) + 100)}`,
  isCreated: false,
  size: 0,
  availablePages: [],
  allocatedPages: [],
  pages: [],
}