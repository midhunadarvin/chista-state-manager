import { BehaviorSubject, Observable, distinctUntilChanged, map } from "rxjs";
import { IS_ATOM } from "./constants";
import { ReadonlyAtom } from "./read-only-atom";
import observable from 'symbol-observable';


export class WritableAtom<T> {
    [observable]() {
      return this.source;
    }
  
    [IS_ATOM] = true;
  
    private bs: BehaviorSubject<T>;
    private source: Observable<T>;
  
    constructor(bs: BehaviorSubject<T>) {
      this.bs = bs;
      this.source = bs.pipe(distinctUntilChanged());
    }
  
    get() {
      return this.bs.getValue();
    }
  
    set(value: T) {
      this.bs.next(value);
    }
  
    update(updater: (value: T) => T) {
      this.set(updater(this.get()));
    }
  
    map<TMapperReturnValue>(mapper: (value: T) => TMapperReturnValue) {
      return new ReadonlyAtom<TMapperReturnValue>(this.pipe(map(mapper)));
    }
  
    // @ts-ignore - haven't been able to work with args spread and pipe overloads yet
    pipe: Observable<T>["pipe"] = (...args: any[]) => {
      // @ts-ignore
      return this.source.pipe(...args);
    };
  
    subscribe(callback: (value: T) => void) {
      return this.source.subscribe(callback);
    }
  
    readonly() {
      return new ReadonlyAtom<T>(this.source);
    }
  }