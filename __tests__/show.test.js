import { alloc, newHeap, show } from "../services";

describe('show()', () => {
  test('should show the current state of the heap', () => {
    newHeap(10,10)
    alloc(20)
    alloc(7)
    alloc(1)
    alloc(53)
    expect(show()).toStrictEqual({"pages":[0,0,1,2,3,3,3,3,3,3],"Allocations by tag":[{"tag":0,"size":20},{"tag":1,"size":7},{"tag":2,"size":1},{"tag":3,"size":53}]})
  });
});
