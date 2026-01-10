// T[number]  将数组中每一项进行联合类型
type TupleToObject<T extends readonly (keyof any)[]> = {
  [K in T[number]]: K
}
