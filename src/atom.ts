import { BehaviorSubject } from "rxjs";
import { WritableAtom } from './writable-atom';
import { ReadonlyAtom } from "./read-only-atom";
/**
 * Atom : BehaviorSubject and distinctUntilChanged
 */
export type Atom<T> = WritableAtom<T> | ReadonlyAtom<T>;

export function atom<T>(value: T) {
  return new WritableAtom<T>(new BehaviorSubject<T>(value));
}

export function readonlyAtom<T>(
  value: T
): [ReadonlyAtom<T>, (value: T) => void] {
  const atm = atom(value);
  return [atm.readonly(), atm.set.bind(atm)];
}