declare type Nullable<T> = T | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

declare type Recordable<T extends any = any> = Record<string, T>

declare type Indexable<T extends any = any> = Record<string, T>

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
