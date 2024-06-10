# dotenv-caster-sample

## How to Use

1. install packages

```sh
npm i
```

2. create `.env`

.env content

```.env
STRING_SAMPLE=Hello
NUMBER_SAMPLE=0
BIGINT_SAMPLE=123456789
SYMBOL_SAMPLE=SYMBOL
BOOLEAN_SAMPLE=true
NULL_SAMPLE=null

```

3. execute `src/index.ts`

```sh
npm run dev
```

3. execute `dist/index.js`

```sh
npm run compile
npm start
```

## Execution Result

```sh
$ npm run dev

> dotenv-caster-sample@1.0.0 dev
> ts-node-dev --respawn ./src/index.ts

[INFO] 17:42:26 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.4.5)
stringSample: Hello
type: string
numberSample: 0
type: number
bigintSample: 123456789
type: bigint
symbolSample: Symbol(SYMBOL)
type: symbol
booleanSample: true
type: boolean
nullSample: null
type: object
nullSample is null

```

```sh
$ npm run compile

> dotenv-caster-sample@1.0.0 compile
> tsc -p .


$ npm start

> dotenv-caster-sample@1.0.0 start
> node dist/index.js

stringSample: Hello
type: string
numberSample: 0
type: number
bigintSample: 123456789
type: bigint
symbolSample: Symbol(SYMBOL)
type: symbol
booleanSample: true
type: boolean
nullSample: null
type: object
nullSample is null

```
