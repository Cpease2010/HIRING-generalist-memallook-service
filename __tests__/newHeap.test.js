import { getHeapInstance } from "../heap.js";
import { newHeap } from "../services.js";

describe('newHeap()', () => {
  test('should create new HEAP', () => {
    expect(newHeap(16,64)).toContain(`HEAP-`)
    expect(getHeapInstance().size).toEqual(1024)
    expect(getHeapInstance().pageSize).toEqual(16)
    expect(getHeapInstance().availablePages).toEqual(64)
  })

  test('should fail gracefully when heap already exist', () => { 
    expect(newHeap(10,10)).toContain(`Failed: Heap Exist with ID, ${getHeapInstance().id}`)
    expect(getHeapInstance().size).toEqual(1024)
    expect(getHeapInstance().pageSize).toEqual(16)
    expect(getHeapInstance().availablePages).toEqual(64)
  })
})