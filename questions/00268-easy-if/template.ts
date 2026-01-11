/**
 * # 00268 - if
 *
 * Problem in one line: 如果 C 是 true 字面量返回 T，C 是 false 字面量返回 F，如果是 boolean 类型则返回 T | F 的并集
 * Input/Output shape: input If<true, 'a', 'b'> output 'a'
 * Key trick(s): 使用 extends 关键字进行类型约束
 * My solution: 如下
 * Edge cases:
 * What I got wrong or learned: 不知道怎么判断 null 情况，如果需要约束传入的类型，使用 extends 关键字
 * Reusable pattern: 使用 extends 关键字进行类型约束
 */
type If<C extends boolean, T, F> = C extends true
  ? T
  : F
