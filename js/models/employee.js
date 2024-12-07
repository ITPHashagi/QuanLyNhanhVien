class Employee {
  constructor(
    _taiKhoan,
    _hoVaTen,
    _email,
    _ngayLam,
    _chucVu,
    _luongCB,
    _password,
    _gioLam
  ) {
    this.taiKhoan = _taiKhoan;
    this.hoVaTen = _hoVaTen;
    this.email = _email;
    this.ngayLam = _ngayLam;
    this.chucVu = _chucVu;
    this.luongCB = _luongCB;
    this.password = _password;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
  }

  // Tổng lương
  callTongLuong() {
    let chucVu = "";
    if (
      chucVu === "Sếp" &&
      this.luongCB >= 1000000 &&
      this.luongCB <= 20000000 &&
      this.gioLam >= 80 &&
      this.gioLam <= 200
    ) {
      // Tính lương
      this.tongLuong = this.luongCB * this.gioLam * 3;
    } else if (
      chucVu === "Trưởng phòng" &&
      this.luongCB >= 1000000 &&
      this.luongCB <= 20000000 &&
      this.gioLam >= 80 &&
      this.gioLam <= 200
    ) {
      this.tongLuong = this.luongCB * this.gioLam * 2;
    } else if (
      chucVu === "Nhân viên" &&
      this.luongCB >= 1000000 &&
      this.luongCB <= 20000000 &&
      this.gioLam >= 80 &&
      this.gioLam <= 200
    ) {
      this.tongLuong = this.luongCB * this.gioLam;
    } else {
      return (this.tongLuong = this.luongCB);
    }
    return this.tongLuong;
  }
  // Xếp loại
  callXepLoai() {
    if (this.gioLam >= 192) {
      this.xepLoai = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      this.xepLoai = "Nhân viên giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      this.xepLoai = "Nhân viên khá";
    } else {
      this.xepLoai = "Nhân viên trung bình";
    }
    return this.xepLoai;
  }
}
export default Employee;
