import { Observable, distinctUntilChanged, map } from "rxjs";
import { IS_ATOM } from "./constants";
import observable from 'symbol-observable';
import { get } from "./get";

export class ReadonlyAtom<T> {
    [observable]() {
      return this.source;
    }
  
    [IS_ATOM] = true;
  
    private source: Observable<T>;
  
    constructor(source: Observable<T>) {
      this.source = source.pipe(distinctUntilChanged());
    }
  
    get() {
      return get(this.source);
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
  }