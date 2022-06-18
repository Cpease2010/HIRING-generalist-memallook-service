## _Design Decisions:_
- `memory storage` was not included, as requirements and design examples only called for the need to track memory allocation.
- `Next Fit Strategy` was chosen due to time constraints. However, code is in a good position to implement more efficient strategies (ie. first fit, best fit).
- `getHeapInstance()` was created to prevent direct access to heap creation, as Javascript doesn't have a __singleton__ type to prevent duplication this was an easy work around.
- `jest` writtetn and ran with [expiremental modules](./package.json) to accomodate for [ES6](https://jestjs.io/docs/ecmascript-modules). Development of these modules is expected to continue as adoption of ES6 is becoming more standard. 
  - `__tests__` were implemented with happy path in mind, future interation would account for more edge cases. Currently `no heap` is only edge case accounted for.
  - `logging` while the application doesn't track errors it does produce console errors. The idea being these error logs can be aggregated and filtered for debugging and performance analysis at a later date/implementation.
  - `defrag()` was not included due to time constraints but application is in position to have defrag implemented with minimal refactor or preexisting code.
## _Resources:_
- [Next Fit Allocation Method](https://www.geeksforgeeks.org/partition-allocation-methods-in-memory-management/)
- [ES6 in Jest](https://jestjs.io/docs/ecmascript-modules)
- [Get Number Within Range](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values)
- [Buffers in Node](https://nodejs.org/api/buffer.html)
## _The Pattern:_
`n = Byte = index`
`p = Page[Byte] = array`
`h = Heap[Page] = index * array`
## _Psuedo Example:_
#### NEW(pageSize, numberOfPages): Setup
b = 5
p = 16
h = 80
#### ALLOC(bytes): Fill
|Tag|Bytes|
|-|-|
|A|3|
|B|10|
|C|28|
|D|9|
|E|21|
#### SHOW( ): Get
|||||
|-|-|-|-|
| [3/5:A] | [5/5:B] | [5/5:B] | [5/5:C] |
| [5/5:C] | [5/5:C] | [5/5:C] | [5/5:C] |
| [3/5:C] | [5/5:D] | [4/5:D] | [5/5:E] |
| [5/5:E] | [5/5:E] | [5/5:E] | [1/5:E] |
#### DEALLOC(order): Remove
|||||
|-|-|-|-|
| [3/5:A] | [5/5:B] | [5/5:B] | [0/0:?] |
| [0/0:?] | [0/0:?] | [0/0:?] | [0/0:?] |
| [0/0:?] | [5/5:D] | [4/5:D] | [5/5:E] |
| [5/5:E] | [5/5:E] | [5/5:E] | [1/5:E] |
#### DEFRAG( ): CleanUp
|||||
|-|-|-|-|
| [3/5:A] | [5/5:B] | [5/5:B] | [5/5:D] |
| [4/5:D] | [5/5:E] | [5/5:E] | [5/5:E] |
| [5/5:E] | [1/5:E] | [0/0:?] | [0/0:?] |
| [0/0:?] | [0/0:?] | [0/0:?] | [0/0:?] |
