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
  }

  // Tổng lương
  tongLuong() {}
  // Xếp loại
  xepLoai() {}
}
export default Employee;
