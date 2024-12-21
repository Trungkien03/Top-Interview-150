"use strict";
function removeDuplicates(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log("====================================");
console.log(removeDuplicates([1, 1, 2]));
console.log("====================================");
