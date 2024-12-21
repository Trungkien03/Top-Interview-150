function findDivisors(n: number): number[] {
  const divisors: number[] = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i); // Thêm ước số nhỏ
      if (i !== n / i) {
        divisors.push(n / i); // Thêm ước số lớn
      }
    }
  }

  return divisors.sort((a, b) => a - b); // Sắp xếp theo thứ tự tăng dần
}

console.log(findDivisors(12)); // Output: [1, 2, 3, 4, 6, 12]
