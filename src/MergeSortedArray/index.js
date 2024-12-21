/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   // Bắt đầu từ vị trí cuối cùng trong mảng nums1 (vị trí m + n - 1)
//   let p1 = m - 1; // Con trỏ cuối cùng của mảng nums1 (phần tử hợp lệ)
//   let p2 = n - 1; // Con trỏ cuối cùng của mảng nums2
//   let p = m + n - 1; // Con trỏ cuối cùng của mảng nums1 (vị trí chèn)
//   // Lặp qua khi cả nums1 và nums2 còn phần tử
//   while (p1 >= 0 && p2 >= 0) {
//     if (nums1[p1] > nums2[p2]) {
//       // Nếu phần tử cuối cùng của nums1 lớn hơn nums2
//       nums1[p] = nums1[p1];
//       p1--;
//     } else {
//       // Nếu phần tử cuối cùng của nums2 lớn hơn hoặc bằng nums1
//       nums1[p] = nums2[p2];
//       p2--;
//     }
//     p--; // Di chuyển con trỏ chèn về phía trước
//   }
//   // Nếu còn phần tử trong nums2, sao chép vào nums1
//   while (p2 >= 0) {
//     nums1[p] = nums2[p2];
//     p2--;
//     p--;
//   }
// }
function merge(nums1, m, nums2, n) {
  for (var i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort(function (a, b) {
    return a - b;
  });
  console.log(nums1);
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
