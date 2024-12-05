import Employee from "../models/employee.js";
import EmployeeList from "../models/employeeList.js";
import Validation from "../models/validation.js";

// Create object Employee
const employee = new Employee();
// Create object List Employee
const employeeList = new EmployeeList();
// Create object Validation
const validation = new Validation();

export const getEleId = (id) => document.getElementById(id);

//Lấy thông tin nhân viên
const getInfoEmployee = () => {
  const user = getEleId("tknv").value;
  const name = getEleId("name").value;
  const email = getEleId("email").value;
  const date = getEleId("datepicker").value;
  const chucvu = getEleId("chucvu").value;
  const luongCB = getEleId("luongCB").value;
  const password = getEleId("password").value;
  const gioLam = getEleId("gioLam").value;

  // Check validation
  let isValid = true;

  // Tài khoản
  isValid &=
    validation.checkEmpty(user, "tbTKNV", "Nhập tài khoản nhân viên!") &&
    validation.checkIdExist(
      user,
      "tbTKNV",
      "Tài khoản đã tồn tại",
      employeeList.arr
    ) &&
    validation.checkCharacterAccount(
      user,
      "tbTKNV",
      "Không nhập ký tự đặc biệt"
    ) &&
    validation.checkLengthAccount(user, "tbTKNV", "Nhập từ 4-6 ký tự", 4, 6);

  //Tên nhân viên
  isValid &=
    validation.checkEmpty(name, "tbTen", "Nhập tên nhân viên!") &&
    validation.checkUserNameLength(
      name,
      "tbTen",
      "Tên không quá 50 ký tự",
      2,
      50
    );

  // Gmail
  isValid &=
    validation.checkEmpty(email, "tbEmail", "Nhập địa chỉ email") &&
    validation.checkEmail(email, "tbEmail", "Email không hợp lệ");

  // Mật khẩu
  // isValid &=
  //   validation.checkEmpty(password, "tbMatKhau", "Nhập mật khẩu") &&
  //   validation.checkPassword(
  //     password,
  //     "tbMatKhau",
  //     "Mật khẩu cần có chữ Hoa, chữ thường, số, ký tự đặc biệt"
  //   ) &&
  //   validation.checkLengthPassword(password, "tbMatKhau", "5-10 ký tự", 5, 10);

  // lương cơ bản
  isValid &= validation.checkEmpty(luongCB, "luongCB", "Nhập vào lương cơ bản");
  // Nếu không đúng trả về null
  if (!isValid) return null;

  const employee = new Employee(
    user,
    name,
    email,
    date,
    chucvu,
    luongCB,
    password,
    gioLam
  );
  employee.callTongLuong();
  return employee;
};

// Xuất ra màn hình danh sách nhân viên
const renderEmployeeList = (data) => {
  let content = "";
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    content += `
            <tr>
                <td>${employee.taiKhoan}</td>
                <td>${employee.hoVaTen}</td>
                <td>${employee.email}</td>
                <td>${employee.ngayLam}</td>
                <td>${employee.chucVu}</td>
                <td>${employee.tongLuong}</td>
                <td>${employee.xepLoai}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onclick="handleEditEmployee('${employee.user}')">Edit</button>
                    <button class="btn btn-danger" onclick="handleDeleteEmployee('${employee.taiKhoan}')">Delete</button>
                </td>
            </tr>
        `;
  }
  getEleId("tableDanhSach").innerHTML = content;
};

// Set localstorage
const setLocalStorage = () => {
  const dataJSON = employeeList.arr;

  // Convert dataJson to String
  const dataString = JSON.stringify(dataJSON);
  // Save dataString to localstorage
  localStorage.setItem("Employee_List", dataString);
};

// Get localstorage
const getLocalStorange = () => {
  const dataString = localStorage.getItem("Employee_List");

  // Check dataString is null => return
  if (!dataString) return;
  // Convert dataString to dataJson
  const dataJSON = JSON.parse(dataString);
  // Update employee list from dataJson
  employeeList.arr = dataJSON;
  // Render employee list
  renderEmployeeList(employeeList.arr);
};
getLocalStorange();

// Nút thêm nhân viên
getEleId("btnThemNV").onclick = function () {
  const employee = getInfoEmployee();
  if (!employee) return;

  // add employee
  employeeList.addEmployee(employee);
  // Render employee
  renderEmployeeList(employeeList.arr);
  // Set localstorage
  setLocalStorage();
  // Close modal
  getEleId("btnDong").click();
};

const handleDeleteEmployee = (taiKhoan) => {
  employeeList.removeEmployee(taiKhoan);
  console.log(employeeList.arr);
  renderEmployeeList(employeeList.arr);
  setLocalStorage();
};
// Khai báo handleDeleteEmployee với window
window.handleDeleteEmployee = handleDeleteEmployee;
