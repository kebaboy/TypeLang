export type Map<
    Arr extends unknown[],
    F extends (x: unknown) => unknown,
    Out extends unknown[] = []
> = Arr extends [infer H, ...infer T]
    ? Map<T, F, [...Out, F extends (arg: H) => infer R ? R : never]>
    : Out;
