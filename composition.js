import { pipe } from 'lodash/fp';

const input = '  javasSriPt  ';

// normal approach
const string = input.trim().toLowerCase();
const result4 = `<div>${string}</div>`;

// functional approach
const trim = (str) => str.trim();
const lowerCase = (str) => str.toLowerCase();
const wrap = (str) => `<div>${str}</div>`;

const result5 = wrap(lowerCase(trim(input)));

const transform1 = pipe(trim, lowerCase, wrap);

// currying
const doTrim = (str) => str.trim();
const doLowerCase = (str) => str.toLowerCase();
const wrapWithTag = (type) => (str) => `<${type}>${str}</${type}>`;

const transform2 = pipe(doTrim, doLowerCase, wrapWithTag('span'));

export { result4, result5, transform1, transform2 };
