//set option for CarCompany
let getCarCompany = document.getElementById("carCompany");
let values = ["VinFast", "Toyota", "Ford", "BMW"];
values.forEach(function (value) {
  let option = document.createElement("option");
  option.text = value;
  option.value = value;
  getCarCompany.add(option);
});
//set option for Vehicles select
let getVehicles = document.getElementById("vehicles");
const vinfast = ["Fadil", "VF3", "VF4"];
const toyota = ["Allex", "Allion", "Alphard"];
const ford = ["Artic", "Capri", "Cargo"];
const bmw = ["1600", "1800", "2000"];
const printfOptionVehicles = (arr) => {
  // làm rỗng option
  getVehicles.innerHTML = " ";
  // create 1 option
  let firstOption = document.createElement("option");
  firstOption.text = "Chọn dòng xe";
  getVehicles.add(firstOption);
  // push option được chọn
  arr.forEach(function (value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    getVehicles.add(option);
  });
};
function carCompany(value) {
  if (value != "Chọn hãng xe") {
    //turn on option
    getVehicles.disabled = false;
    switch (value) {
      case "VinFast":
        printfOptionVehicles(vinfast);
        break;
      case "Toyota":
        printfOptionVehicles(toyota);
        break;
      case "Ford":
        printfOptionVehicles(ford);
        break;
      case "BMW":
        printfOptionVehicles(bmw);
        break;
      default:
        break;
    }
  } else {
    getVehicles.innerHTML = " ";
    let firstOption = document.createElement("option");
    firstOption.text = "Chọn dòng xe";
    getVehicles.add(firstOption);
    //turn off option
    getVehicles.disabled = true;
  }
}

//Set option for Version Select
let getCarVersion = document.getElementById("carVersion");
const vinfastVersion = ["Cao cấp", "Nâng cao", "Tiêu chuẩn", "Plus"];
const toyotaVersion = ["Khác", "VT3", "3.0 Sedan (FWD)"];
const fordVersion = ["Khác", "1.0 Coupe", "1.4 Van (FWD)"];
const bmwVersion = ["Khác", "VT 300"];
const printfOptionVersion = (arr) => {
  // làm rỗng option
  getCarVersion.innerHTML = " ";
  // create 1 option
  let firstOption = document.createElement("option");
  firstOption.text = "Chọn phiên bản xe";
  getCarVersion.add(firstOption);
  // push option được chọn
  arr.forEach(function (value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    getCarVersion.add(option);
  });
};
function vehicles(value) {
  if (value != "Chọn dòng xe") {
    getCarVersion.disabled = false;
    if (value == "Fadil" || value == "VF3" || value == "VF4") {
      printfOptionVersion(vinfastVersion);
    }
    if (value == "Allex" || value == "Allion" || value == "Alphard") {
      printfOptionVersion(toyotaVersion);
    }
    if (value == "Artic" || value == "Capri" || value == "Cargo") {
      printfOptionVersion(fordVersion);
    }
    if (value == "1600" || value == "1800" || value == "2000") {
      printfOptionVersion(bmwVersion);
    }
  } else {
    getCarVersion.innerHTML = " ";
    let firstOption = document.createElement("option");
    firstOption.text = "Chọn phiên bản xe";
    getCarVersion.add(firstOption);
    getCarVersion.disabled = true;
  }
}

//set option for Year Select
let yearProduce = document.getElementById("year");
let value = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
value.forEach(function (value) {
  let option = document.createElement("option");
  option.text = value;
  option.value = value;
  yearProduce.add(option);
});

//set option for Designs
{
  let getDesign = document.getElementById("Designs");
  let values = [
    "Couple",
    "Wagon",
    "Minivan",
    "Pick-up",
    "Hatchback",
    "MPV",
    "SUV",
    "Sedan",
  ];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getDesign.add(option);
  });
}

//set option for foamBox
{
  let getFoamBox = document.getElementById("foamBox");
  let values = ["Số tự động", "Số sàn"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getFoamBox.add(option);
  });
}

//set option for fuel
{
  let getFule = document.getElementById("fuel");
  let values = ["Xăng", "Dầu", "Điện", "Hybrid", "Plug - in Hybrid"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getFule.add(option);
  });
}

//set option for color
{
  let getColor = document.getElementById("color");
  let values = [
    "Đen",
    "Đỏ",
    "Vàng",
    "Trắng",
    "Nâu",
    "Cam",
    "Bạc",
    "Xám",
    "Vàng đồng",
    "Xanh dương",
    "Xanh lá",
    "Tím",
    "Hồng",
    "Đồng",
    "Vàng cát",
    "Cam đất",
  ];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getColor.add(option);
  });
}

//set option for chair
{
  let getChair = document.getElementById("chair");
  let values = ["4", "5", "6", "7", "8"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getChair.add(option);
  });
}

//set option for origin
{
  let getOrigin = document.getElementById("origin");
  let values = ["Trong nước", "Ngoài nước"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getOrigin.add(option);
  });
}

function button() {
  let Vehicles = document.getElementById("vehicles").value;
  let Version = document.getElementById("carVersion").value;
  let Year = document.getElementById("year").value;
  let Kilometer = document.getElementById("kilometer").value;
  let Phone = document.getElementById("phone").value;
  if (
    Vehicles != " " &&
    Version != " " &&
    Year != " " &&
    Kilometer != " " &&
    Phone > 10 ** 8
  ) {
    let btn = document.getElementById("btn");
    btn.disabled = false;
  } else btn.disabled = true;
}
//fetch API province, districts
const callAPIProvince = async () => {
  const response = await fetch("http://localhost:5000/province");
  const callProvince = await response.json();
  // console.log(callProvince.data);
  const provinceSelect = document.getElementById("province");
  callProvince.data.data.forEach((el) => {
    const option = document.createElement("option");
    option.text = el.name;
    option.value = el.code;
    provinceSelect.appendChild(option);
  });
};
callAPIProvince();
const callAPIDistrict = async () => {
  let codeProvince = document.getElementById("province").value;
  const response = await fetch("http://localhost:5000/districts");
  const callDistrict = await response.json();
  const districtSelect = document.getElementById("district");
  districtSelect.innerHTML = "";
  let firstOption = document.createElement("option");
  firstOption.text = "Chọn quận/huyện";
  districtSelect.add(firstOption);
  callDistrict.data.data.forEach((el) => {
    const option = document.createElement("option");
    option.text = el.name;
    option.value = el.parent_code;
    if (option.value == codeProvince) {
      districtSelect.add(option);
    }
  });
};

const showData = async (imageURL) => {
  try {
    const carCompany = document.getElementById("carCompany").value;
    const Vehicles = document.getElementById("vehicles").value;
    const Version = document.getElementById("carVersion").value;
    const Year = document.getElementById("year").value;
    const Kilometer = document.getElementById("kilometer").value;
    const Phone = document.getElementById("phone").value;
    const Money = document.getElementById("money").value;
    const Designs = document.getElementById("Designs").value;
    const foamBox = document.getElementById("foamBox").value;
    const fuel = document.getElementById("fuel").value;
    const color = document.getElementById("color").value;
    const chair = document.getElementById("chair").value;
    const Name = document.getElementById("name").value;
    const origin = document.getElementById("origin").value;
    const nameCar = document.getElementById("nameCar").value;
    // const ImageURL = url;
    const Province = document.getElementById("province");
    const valueProvince = Province.options[Province.selectedIndex].text;
    const District = document.getElementById("district");
    const valueDistrict = District.options[District.selectedIndex].text;

  
    const url = "http://localhost:5000/car";
    const getData = {
      Address: {
        Province: valueProvince,
        Districts: valueDistrict,
      },
      Personal: Name,
      Phone: Phone,
      CarType: carCompany,
      Vehicles: Vehicles,
      Version: Version,
      Year: Year,
      Kilometer: Kilometer,
      Price: Money,
      Style: Designs,
      Transmission: foamBox,
      Fuel: fuel,
      Color: color,
      Seats: chair,
      Origin: origin,
      Title: nameCar,
      ImageUrl: imageURL,
    };

    const response = await axios.post(url, getData);
    
    console.log("Data posted successfully:", response.data);

    Toastify({
      text: "Nhận thông tin thành công",
      className: "info",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();

    return response.data;
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu:", error.message);

    Toastify({
      text: "Đã xảy ra lỗi",
      className: "infor",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    throw error;
  }
};