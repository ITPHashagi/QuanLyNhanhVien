import Employee from "./employee.js";

class EmployeeList {
  constructor() {
    this.arr = [];
  }

  // Tìm vị trí trong danh sách nhân viên
  findIndexEmployee(taiKhoan) {
    let index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      let employee = this.arr[i];
      if (employee.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  }
  // Thêm danh sách nhân viên
  addEmployee(employee) {
    this.arr.push(employee);
  }

  // Xóa danh sách nhân viên
  removeEmployee(taiKhoan) {
    // Tìm vị trí cần xóa
    const index = this.findIndexEmployee(taiKhoan);

    // Xóa khỏi mảng
    if (index != -1) {
      this.arr.splice(index, 1);
    }
  }
}

export default EmployeeList;
