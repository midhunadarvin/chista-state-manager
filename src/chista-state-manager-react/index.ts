// Convenience method to get the current value of any "stateful observable"
// BehaviorSubjects already have the getValue method, but that won't work
import { useState, useEffect } from 'react';
import { Atom } from "../atom";

// on derived state
export function get(observable$: Atom<any>) {
  let value;
  observable$.subscribe((val) => (value = val)).unsubscribe();
  return value;
}

// Custom React hook for unwrapping observables
export function useUnwrap(observable$: Atom<any>) {
  const [value, setValue] = useState(() => get(observable$));

  useEffect(() => {
    const subscription = observable$.subscribe(setValue);
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, [observable$]);

  return value;
}
