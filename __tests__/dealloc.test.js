import { getHeapInstance } from '../heap.js'
import { newHeap, alloc, dealloc } from '../services.js'

describe('deallo()', () => {

  test('should fail gracefully when no heap exist', () => {
    expect(dealloc(99)).toBe('Deallocation Failed: HEAP is null OR memory insufficient')
  })

  describe('when TAG DOES exist', () => {
    test('should return success', () => {
      newHeap(16, 64)
      alloc(8)
      alloc(16)
      alloc(21)
      alloc(506)
      expect(dealloc(2)).toBe('TAG: 2 Successfully Deallocated')
    })

    test('should update memory matrix', () => {
      expect(getHeapInstance().memory).toStrictEqual([
        0, 1, 'x', 'x', 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
        'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
        'x', 'x', 'x', 'x'
      ])
    })
  })
})