import { alloc, newHeap, show } from "../services";

describe('show()', () => {
  test('should show the current state of the heap', () => {
    newHeap(10,11)
    alloc(20)
    alloc(7)
    alloc(1)
    alloc(53)
    expect(show()).toStrictEqual({"pages":[0,0,1,2,3,3,3,3,3,3,"x"],"Allocations by tag":{"0":20,"1":7,"2":1,"3":53}})
  });
});
