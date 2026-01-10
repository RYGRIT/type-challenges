// K extends keyof T 约束 K 必须在 T 类型的字段里面
// T[P] 是取类型
// [P in K] 遍历 K 类型中的所有字段，是映射类型，生成的新对象只保留 K 这些键

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
