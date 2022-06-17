import { Alloc, New } from "./services.js";

describe('Alloc', () => {
  test('should return error if no heap exist', () => {
    expect(Alloc(10)).toBe('Please create HEAP before attempting allocation.')
  })

  test('should track pages when allocated', () => {
    New(16,64);
    [[15,0], [3,1], [24,2]].forEach(testCase => {
      expect(Alloc(testCase[0])).toStrictEqual({tag: testCase[1]})
    })
  })

  test('should return error when memmory cannot be allocated', () => { 
    expect(Alloc(50)).toBe
  })
})