function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // size of two given array
    const n1 = nums1.length, n2 = nums2.length

    const arr3 = []

    // apply the merge step
    let i = 0, j = 0
    while(i < n1 && j < n2) {
      if(nums1[i] < nums2[j]) arr3.push(nums1[i++])
      else arr3.push(nums2[j++])
    }
    // giả sử nếu mà 1 trong 2 trường hợp list kia dài hơn list còn lại thì đi tiếp


    // copy the left-out elements - merge tiếp list dài nhất
    while(i < n1) arr3.push(nums1[i++])
    while(j < n2) arr3.push(nums2[j++])

    // find the median
    const n = n1 + n2
    if(n % 2 === 1){
      console.log(Math.floor(n/2))
      return arr3[Math.floor(n/2)]
    }

    console.log("arr3[n/2]", arr3[n/2])
    console.log("arr3[n/2 - 1]", arr3[n/2 - 1])
    const median = (arr3[n/2] + arr3[(n/2) - 1]) / 2.0
    return median
};
