var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function rotate(nums, k) {
    if (k <= 0) {
        return;
    }
    nums.reverse();
    nums.splice.apply(nums, __spreadArray([0, k], nums.slice(0, k).reverse(), false));
    console.log("====================================");
    console.log(nums);
    console.log("====================================");
}
rotate([1, 2, 3, 4, 5, 6, 7], 3); // Output: [5,6,7,1,2,3,4]
