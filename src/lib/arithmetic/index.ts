import { PositiveNumber } from "../../utils/number"
import { MakeTuple } from "../../utils/tuple"


export type Sub<T1 extends PositiveNumber, T2 extends PositiveNumber> = MakeTuple<T1> extends [...MakeTuple<T2>, ...infer Rest] ? Rest['length'] : never

export type Add<T1 extends PositiveNumber, T2 extends PositiveNumber> = [...MakeTuple<T1>, ...MakeTuple<T2>]['length']

export type Multiply<
    T1 extends PositiveNumber,
    T2 extends PositiveNumber,
    Acc extends PositiveNumber = 0
> =
    T2 extends 0 ? Acc : Multiply<T1, Sub<T2, 1>, Add<Acc, T1> & PositiveNumber>;

export type Factorial<T extends PositiveNumber, Acc extends PositiveNumber = 1> = 
    T extends 1 ? Acc : Factorial<Sub<T, 1>, Multiply<Acc, T>>
