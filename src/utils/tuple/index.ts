export type MakeTuple<
    Length extends number,
    T extends unknown[] = []
> = T["length"] extends Length ? T : MakeTuple<Length, [unknown, ...T]>;
