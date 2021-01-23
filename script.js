import { add, addWithCurry, addWithCurryArrow } from './curry';
import { result4, result5, transform1, transform2 } from './composition';

const result1 = add(10, 20);
const result2 = addWithCurry(10)(20);
const result3 = addWithCurryArrow(10)(20);

console.log(result1, result2, result3);

console.log(result4, result5);

console.log(transform1('  javascRIPT   '));

console.log(transform2('  javascRIPT   '));

