import { heapObject } from "./heapObject.js";
import { New } from "./services.js";

describe('New', () => {

  test('should create new HEAP', () => {
    expect(New(16,64)).toContain(`HEAP-`)
    expect(heapObject.size).toEqual(1024)
    expect(heapObject.allocatedPages.length).toEqual(0)
    expect(heapObject.availablePages.length).toEqual(64)
  })

  test('should return error message if already created', () => { 
    expect(New(10,10)).toContain(`Error: Heap already exist, ${heapObject.id}`)
    expect(heapObject.size).toEqual(1024)
    expect(heapObject.allocatedPages.length).toEqual(0)
    expect(heapObject.availablePages.length).toEqual(64)
  })
})