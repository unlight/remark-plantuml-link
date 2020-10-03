const remark = require('remark');
const plantumlLink = require('.');
const input = '<!-- ```plantuml\n(A)\n``` -->';
const output = remark().use(plantumlLink).processSync(input).toString();
// Input:
console.log(input);
// Output:
console.log(output);
