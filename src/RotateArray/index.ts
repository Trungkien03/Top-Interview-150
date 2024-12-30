function rotate(nums: number[], k: number): void {
  if (k <= 0) {
    return;
  }

  k = k % nums.length; // Đảm bảo k không lớn hơn độ dài của mảng

  // Đảo ngược toàn bộ mảng
  nums.reverse();

  // Đảo ngược phần đầu của mảng
  nums.splice(0, k, ...nums.slice(0, k).reverse());

  // Đảo ngược phần còn lại của mảng
  nums.splice(k, nums.length - k, ...nums.slice(k).reverse());
}

rotate([1, 2, 3, 4, 5, 6, 7], 3); // Output: [5,6,7,1,2,3,4]
