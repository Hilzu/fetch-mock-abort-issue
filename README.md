# fetch-mock-abort-issue

Reproduce issue https://github.com/wheresrhys/fetch-mock/issues/845.

```
$ npm t

> fetch-mock-abort-issue@1.0.0 test
> jest

 FAIL  ./abort.test.js
  abort tests
    ✓ should fetch (2 ms)
    ✕ should timeout (101 ms)

  ● abort tests › should timeout

    TypeError: Invalid state: ReadableStream is locked

      at AbortSignal.abort (node_modules/fetch-mock/dist/cjs/Router.js:131:51)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.177 s, estimated 1 s
Ran all test suites.
```
