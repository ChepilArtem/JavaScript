export function saveCalls(func) {
    let calls = [];

    function withMemory(...arg) {
      calls.push(arg);
      return func.apply(this, arg);
    };

    withMemory.calls = calls;
    return withMemory;
  };