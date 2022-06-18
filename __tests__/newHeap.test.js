import { heapObject } from "../heapObject.js";
import { newHeap } from "../services.js";

describe('newHeap()', () => {
  test('should create new HEAP', () => {
    expect(newHeap(16,64)).toContain(`HEAP-`)
    expect(heapObject.size).toEqual(1024)
    expect(heapObject.pageSize).toEqual(16)
    expect(heapObject.availablePages).toEqual(64)
  })

  test('should return error message if already created', () => { 
    expect(newHeap(10,10)).toContain(`Failed: Heap Exist with ID, ${heapObject.id}`)
    expect(heapObject.size).toEqual(1024)
    expect(heapObject.pageSize).toEqual(16)
    expect(heapObject.availablePages).toEqual(64)
  })
})