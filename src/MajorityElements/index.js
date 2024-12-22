"use strict";
function majorityElement(nums) {
    let count = 0;
    let candidate = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }
    return candidate;
}
console.log("====================================");
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log("====================================");
