/**
 * # 03057 - push
 *
 * Problem in one line: 将类型元素 push 到类型数组中
 * Input/Output shape: input Push<'1', 2, '3', boolean> output ['1', 2, '3', boolean]
 * Key trick(s): 扩展运算符
 * My solution: type Push<T extends any[], U> = [...T, U]
 * Edge cases:
 * What I got wrong or learned:
 * Reusable pattern: 扩展运算符
 */
// type Push<T extends any[], U> = [...T, U]
type Push<T extends readonly unknown[], U> = T extends [...infer R] ? [...R, U] : never
