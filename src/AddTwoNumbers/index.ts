class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let res = dummy;
  let total = 0,
    carry = 0;

  // Lặp qua khi còn phần tử trong l1, l2 hoặc carry
  while (l1 || l2 || carry) {
    total = carry; // Khởi tạo tổng bằng giá trị "nhớ" từ phép cộng trước đó

    if (l1) {
      total += l1.val; // Cộng giá trị của l1
      l1 = l1.next; // Chuyển đến nút tiếp theo
    }

    if (l2) {
      total += l2.val; // Cộng giá trị của l2
      l2 = l2.next; // Chuyển đến nút tiếp theo
    }

    let num = total % 10; // Giá trị của nút hiện tại
    carry = Math.floor(total / 10); // Tính giá trị "nhớ" cho nút tiếp theo
    dummy.next = new ListNode(num); // Tạo nút mới trong danh sách kết quả
    dummy = dummy.next; // Di chuyển con trỏ `dummy` đến nút vừa thêm
  }

  return res.next; // Trả về danh sách kết quả, bỏ qua nút giả
}
