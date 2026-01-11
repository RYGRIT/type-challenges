/**
 * # 00533 - concat
 *
 * Problem in one line: 将两个类数组类型连接起来
 * Input/Output shape: input Concat<[1], [2]> output [1, 2]
 * Key trick(s): 使用扩展运算符进行连接
 * My solution: 如下
 * Edge cases: readonly tuple
 * What I got wrong or learned:  扩展运算符、extends 关键字类型约束的使用
 * Reusable pattern: 扩展运算符
 */
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]
