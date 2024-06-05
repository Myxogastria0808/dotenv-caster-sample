import { DotEnvCaster } from "dotenv-caster";
import dotenv from "dotenv";

dotenv.config();

//Create an instance
const dotenvCaster = new DotEnvCaster();

//string | undefined -> string
const stringSample: string = dotenvCaster.castString(process.env.STRING_SAMPLE);
//string | undefined -> number
const numberSample: number = dotenvCaster.castNumber(process.env.NUMBER_SAMPLE);
//string | undefined -> bigint
const bigIntSample: bigint = dotenvCaster.castBigInt(process.env.BIGINT_SAMPLE);
//string | undefined -> symbol
const symbolSample: symbol = dotenvCaster.castSymbol(process.env.SYMBOL_SAMPLE);
//string | undefined -> boolean
const booleanSample: boolean = dotenvCaster.castBoolean(
  process.env.BOOLEAN_SAMPLE
);
//string | undefined -> null
const nullSample: null = dotenvCaster.castNull(process.env.NULL_SAMPLE);

//Display results in console.log()
//result of [string | undefined -> string]
console.log(`stringSample: ${stringSample}\ntype: ${typeof stringSample}`);
//result of [number | undefined -> number]
console.log(`numberSample: ${numberSample}\ntype: ${typeof numberSample}`);
//result of [bigint | undefined -> bigint]
console.log(`bigintSample: ${bigIntSample}\ntype: ${typeof bigIntSample}`);
//result of [symbol | undefined -> symbol]
//A variable of type symbol is converted to a variable of type string for display in console.log()
console.log(
  `symbolSample: ${String(symbolSample)}\ntype: ${typeof symbolSample}`
);
//result of [boolean | undefined -> boolean]
console.log(`booleanSample: ${booleanSample}\ntype: ${typeof booleanSample}`);
//result of [null | undefined -> null]
console.log(`nullSample: ${nullSample}\ntype: ${typeof nullSample}`);
//A example of using nullish coalescing operator
console.log(`${nullSample ?? "nullSample is null"}`);
