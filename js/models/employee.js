class Employee {
  constructor(
    _taiKhoan,
    _hoVaTen,
    _email,
    _ngayLam,
    _chucVu,
    _password,
    _luongCB,
    _gioLam
  ) {
    this.taiKhoan = _taiKhoan;
    this.hoVaTen = _hoVaTen;
    this.email = _email;
    this.ngayLam = _ngayLam;
    this.chucVu = _chucVu;
    this.password = _password;
    this.luongCB = _luongCB;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
  }

  // Tổng lương
  callTongLuong() {
    if (
      this.luongCB >= 1000000 &&
      this.luongCB <= 20000000 &&
      this.gioLam >= 80 &&
      this.gioLam <= 200
    ) {
      // Tính lương
      this.tongLuong = parseFloat(this.luongCB * this.gioLam);
    }
    return this.tongLuong;
  }
  // Xếp loại
  xepLoai() {}
}
export default Employee;
