import { alloc, newHeap } from "../services.js";

describe('alloc()', () => {
  test('should return error if no heap exist', () => {
    expect(alloc(10)).toBe('Memory Allocation Failed: HEAP is null OR memory insufficient')
  })

  test('should track pages when allocated', () => {
    newHeap(16,64);
    [[15,0], [3,1], [24,2]].forEach(testCase => {
      expect(alloc(testCase[0])).toStrictEqual({tag: testCase[1]})
    })
  })

  test('should return error when memmory cannot be allocated', () => { 
    expect(alloc(1000)).toBe('Memory Allocation Failed: HEAP is null OR memory insufficient')
  })
})