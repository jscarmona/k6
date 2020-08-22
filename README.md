# K6 Typescript

## Test Setup

### Options

Called once per run

```ts
export const options: Options = {
  vus: 1,
  iterations: 1,
  duration: '10s',
};
```

---

### Life cycle stages

```ts
// 1. Init

export const setup = () => {
  // 2. Setup
};

export default (data?: ReturnType<typeof setup>) => {
  // 3. Default/Main
};

export const teardown = (data?: ReturnType<typeof setup>) => {
  // 4. Teardown
};
```

#### Init

[Docs](https://k6.io/docs/using-k6/test-life-cycle#init-and-vu-stages)

---

#### Setup

[Docs](https://k6.io/docs/using-k6/test-life-cycle#setup-and-teardown-stages)

---

#### Default/Main function

[Docs](https://k6.io/docs/using-k6/test-life-cycle#the-default-function-life-cycle)

---

#### Teardown

[Docs](https://k6.io/docs/using-k6/test-life-cycle#setup-and-teardown-stages)
