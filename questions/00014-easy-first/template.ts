// infer F，推断 F 的类型，可以理解成定义变量
// 在模式匹配中捕获第一个元素的类型

type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never
