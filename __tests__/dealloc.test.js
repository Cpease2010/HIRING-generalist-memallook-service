import { heapObject } from '../heapObject.js'
import { newHeap, alloc, dealloc, show } from '../services.js'


describe('deallo()', () => {

  describe('when TAG DOES NOTE exist', () => {
    test('should return error when tag does not exist', () => {
      expect(dealloc(99)).toBe('Memory Deallocation Failed: Unknown Tag - 99')
    })
  })

  describe('when TAG DOES exist', () => {
    test('should return success when tag exist', () => {
      newHeap(16, 64)
      alloc(8)
      alloc(16)
      alloc(21)
      alloc(506)
      expect(dealloc(2)).toBe('TAG: 2 Successfully Deallocated')
    })

    test('should update memory matrix', () => {
      expect(heapObject.memory).toStrictEqual([
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