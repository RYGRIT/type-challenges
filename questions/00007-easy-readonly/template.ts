/**
 * # 00007 - readonly
 *
 * Problem in one line: 将对象中的所有属性全部变为只读的（ 浅层只读）
 * Input/Output shape: input { id: string } output: { readonly id: string }
 * Key trick(s): 映射类型（mapped type）+ readonly 修饰符，keyof T 拿到 T 中的所有字段 in 遍历，加入 readonly 前缀
 * My solution: type MyReadonly<T> = { readonly [K in keyof T]: T[K] }
 * Edge cases:
 * What I got wrong or learned: keyof 和 in 关键字，readonly 修饰符
 * Reusable pattern: 映射类型（readonly/?/-?）的模式
 */
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
