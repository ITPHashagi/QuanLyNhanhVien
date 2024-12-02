import { getEleId } from "../controllers/main.js";

class Validation {
  // Kiểm tra người dùng có nhập ký tự vào không
  checkEmpty(value, divID, message) {
    if (value === "") {
      getEleId(divID).innerHTML = message;
      getEleId(divID).style.display = "block";
    }
    getEleId(divID).innerHTML = "";
    getEleId(divID).style.display = "none";
    return true;
  }

  // Kiểm tra tài khoản người dùng có nhập đúng ký tự không
  checkCharacterAccount(value, divID, message) {
    const letter = "^[A-Za-z][0-9]+$";
    if (value.match(letter)) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }

  // Kiểm tra họ và tên người dùng nhập đúng và đủ không
  checkUserNameLength(value, divID, message, min, max) {
    const letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter) && value.length >= min && value.length <= max) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }

  // Kiểm tra email đúng ký tự chưa
  checkEmail(value, divID, message) {
    const letter = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
    if (value.match(letter)) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }

  // Kiểm tra mật khẩu bảo mạnh hay không
  checkPassword(value, divID, message) {
    const letter =
      "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{0,}$/";
    if (value.match(letter)) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }

  // Kiểm tra có trùng ký tự hay không
  checkIdExist(value, divID, message, listEmployee) {
    // Kiểm tra bằng điều kiện bằng some
    const isExist = listEmployee.some(
      (employee) => employee.taiKhoan === value
    );

    // Cập nhật giao diện
    const displayStyle = isExist ? "block" : "none";
    const displayMessage = isExist ? message : "";
    const element = getEleId(divID);

    if (element) {
      // Kiểm tra tồn tại của phần tử DOM
      element.innerHTML = displayMessage;
      element.style.display = displayStyle;
    }
  }
}

export default Validation;
