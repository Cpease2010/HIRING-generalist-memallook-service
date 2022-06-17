import { alloc, newHeap, show } from "../services";

describe('show()', () => {
  test('should show the current state of the heap', () => {
    newHeap(10,10)
    alloc(20)
    alloc(7)
    alloc(1)
    alloc(53)
    expect(show()).toStrictEqual({"pages":[0,0,1,2,3,3,3,3,3,3],"Allocations by tag":{"0":{"size":20,"pagesRequired":2},"1":{"size":7,"pagesRequired":1},"2":{"size":1,"pagesRequired":1},"3":{"size":53,"pagesRequired":6}}})
  });
});
