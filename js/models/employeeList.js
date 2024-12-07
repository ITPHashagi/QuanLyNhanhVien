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

  // Chỉnh sửa thông tin nhân viên
  editEmployee(taiKhoan) {
    const index = this.findIndexEmployee(taiKhoan);
    if (index != -1) {
      return this.arr[index];
    }
    return null;
  }

  // cập nhật nhân viên
  updateEmployee(employee) {
    const index = this.findIndexEmployee(employee);
    if (index != 1) {
      this.arr[index] = employee;
    }
  }

  // Tìm kiếm nhân viên theo xếp loại
  searchEmployee(keyword) {
    let result = [];
    for (let i = 0; i < this.arr.length; i++) {
      let employee = this.arr[i];
      const keywordLowerKey = keyword.toLowerCase();
      const xepLoaiLowerKey = employee.xepLoai.toLowerCase();
      if (xepLoaiLowerKey.indexOf(keywordLowerKey) !== -1) {
        result.push(employee);
      }
    }
    return result;
  }
}

export default EmployeeList;
