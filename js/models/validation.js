import { getEleId } from "../controllers/main.js";

class Validation {
  // Kiểm tra người dùng có nhập ký tự vào không
  checkEmpty(value, divID, message) {
    if (value === "") {
      getEleId(divID).innerHTML = message;
      getEleId(divID).style.display = "block";
      return false;
    }
    getEleId(divID).innerHTML = "";
    getEleId(divID).style.display = "none";
    return true;
  }

  // Kiểm tra tài khoản người dùng có nhập đúng ký tự không
  checkCharacterAccount(value, divID, message) {
    const letter = "^[A-Za-z0-9]+$";
    if (value.match(letter)) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
      return true;
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }
  // Kiểm tra độ dài của account
  checkLengthAccount(value, divID, message, min, max) {
    if (value.length >= min && value.length <= max) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
      return true;
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
      return true;
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }

  // Kiểm tra email đúng ký tự chưa
  checkEmail(value, divID, message) {
    const letter = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,3}$/;
    if (value.match(letter)) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
      return true;
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }

  // Kiểm tra mật khẩu bảo mạnh hay không
  checkPassword(value, divID, message) {
    const letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=\S+$).{5,10}$/;
    if (value.match(letter)) {
      console.log(1);
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
      return true;
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }
  // Kiểm tra độ dài mật khẩu
  checkLengthPassword(value, divID, message, min, max) {
    if (value.length >= min && value.length <= max) {
      getEleId(divID).innerHTML = "";
      getEleId(divID).style.display = "none";
      return true;
    }
    getEleId(divID).innerHTML = message;
    getEleId(divID).style.display = "block";
    return false;
  }

  // Kiểm tra có trùng ký tự hay không
  checkIdExist(value, divID, message, listEmployee) {
    let isExist = false;
    for (let i = 0; i < listEmployee.length; i++) {
      const employee = listEmployee[i];
      if (employee.taiKhoan === value) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      getEleId(divID).innerHTML = message;
      getEleId(divID).style.display = "block";
      return false;
    }
    getEleId(divID).innerHTML = "";
    getEleId(divID).style.display = "none";
    return true;
  }

  // Kiểm tra có chọn chức vụ hay không
  checkSelect(isSelect, divID, message) {
    if (getEleId(isSelect).selectedIndex === 0) {
      getEleId(divID).innerHTML = message;
      getEleId(divID).style.display = "block";
      return false;
    }
    getEleId(divID).innerHTML = "";
    getEleId(divID).style.display = "none";
    return true;
  }
}

export default Validation;
