import { Observable } from "rxjs";

export type Unsubscribable = { unsubscribe: () => void };

export type Subscribable<T = any> = {
  subscribe: (callback: (value: T) => void) => Unsubscribable;
};

export type ObservableLookup = { [name: string]: Subscribable };

// Subscribable<number> ----> number
export type UnwrapObservable<Obs> = Obs extends Subscribable<infer T>
  ? T
  : never;

// { a: Subscribable<number>, b: Subscribable<string> } ----> { a: number, b: string }
export type UnwrapObservableLookup<
  TObservableLookup extends ObservableLookup | Observable<any>[]
> = {
  [Key in keyof TObservableLookup]: UnwrapObservable<TObservableLookup[Key]>;
};

// [ Subscribable<number>, Subscribable<string> ] ----> [ number, string ]
export type UnwrapObservableTuple<TObservables extends Observable<any>[]> = {
  [Index in keyof TObservables]: TObservables[Index] extends Subscribable<
    infer TValue
  >
    ? TValue
    : never;
};

export type UnwrapAny<TObs> = TObs extends Subscribable
  ? UnwrapObservable<TObs>
  : TObs extends Observable<any>[]
  ? UnwrapObservableTuple<TObs>
  : TObs extends ObservableLookup
  ? UnwrapObservableLookup<TObs>
  : never;