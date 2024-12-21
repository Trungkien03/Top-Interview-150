"use strict";
function removeElement(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
// => function này không được dùng filter bởi vì filter sẽ tạo ra mảng mới
console.log(removeElement([3, 2, 2, 3], 3));
