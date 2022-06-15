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

## _Resources:_
- [Buffers in Node]('https://nodejs.org/api/buffer.html')