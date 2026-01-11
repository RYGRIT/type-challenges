/**
 * # 03060 - unshift
 *
 * Problem in one line: 将类型元素插入类型数组的最前面
 * Input/Output shape: Unshift<['1', 2, '3'], boolean> -> [boolean, '1', 2, '3']
 * Key trick(s):
 * My solution: type Unshift<T extends readonly unknown[], U> = [U, ...T]
 * Edge cases:
 * What I got wrong or learned:
 * Reusable pattern:
 */
// type Unshift<T extends readonly unknown[], U> = T extends [...infer R] ? [U, ...R] : never
type Unshift<T extends readonly unknown[], U> = [U, ...T]
