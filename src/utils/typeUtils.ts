// @typescript-eslint/parser is buggy 🤔
// un-disable when upgrading.
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

type Append<Elm, T extends unknown[]> = ((
  arg: Elm,
  ...rest: T
) => void) extends (...args: infer T2) => void
  ? T2
  : never;

type AtLeastRec<Num, Elm, T extends unknown[], C extends unknown[]> = {
  0: T;
  1: AtLeastRec<Num, Elm, Append<Elm, T>, Append<unknown, C>>;
}[C extends { length: Num } ? 0 : 1];

// array length
// @see https://qiita.com/uhyo/items/80ce7c00f413c1d1be56
export type AtLeast<N extends number, T> = AtLeastRec<N, T, T[], []>;
