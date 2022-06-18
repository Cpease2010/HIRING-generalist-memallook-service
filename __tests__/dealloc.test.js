import { heapObject } from '../heapObject.js'
import { newHeap, alloc, dealloc, show } from '../services.js'

test('should return error is tag does not exist', () => { 
  expect(dealloc(99)).toBe('Memory Deallocation Failed: Unknown Tag - 99')
})

describe('deallo()', () => {
  test('should return success when tag exist', () => {
    newHeap(16,64)
    alloc(8)
    alloc(16)
    alloc(21)
    alloc(506)
    expect(dealloc(3)).toBe('TAG: 3 Successfully Deallocated')
  })
})