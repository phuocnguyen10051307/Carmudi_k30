function closeNavbar() {
  document.getElementById("navbarSupportedContent").classList.remove("show");
}

//gói đăng tin
// Dữ liệu các gói
const plans = {
  "1-thang": [
    {
      title: "Gói kinh tế",
      icon: "assets/tag-pricing.svg",
      price: "499.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 3 xe/tháng",
      item1: "1 tin VIP",
      item2: "2 tin thường",
      item3: "30 lượt đẩy tin",
    },
    {
      title: "Gói chuyên gia",
      icon: "assets/tag-pricing.svg",
      price: "999.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 5 xe/tháng",
      item1: "2 tin VIP",
      item2: "3 tin thường",
      item3: "75 lượt đẩy tin",
    },
    {
      title: "Gói cao cấp",
      icon: "assets/tag-pricing.svg",
      price: "2.299.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 10 xe/tháng",
      item1: "4 tin VIP",
      item2: "6 tin thường",
      item3: "200 lượt đẩy tin",
    },
  ],
  "3-thang": [
    {
      title: "Gói kinh tế",
      icon: "assets/tag-pricing.svg",
      priceone: "",
      pricesecond: "1.497.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 3 xe/tháng",
      item1: "",
      item2: "3 tin VIP",
      item3: "6 tin thường",
      item4: "90 lượt đẩy tin",
    },
    {
      title: "Gói chuyên gia",
      icon: "assets/tag-pricing.svg",
      priceone: "3.996.000 đ",
      pricesecond: "2.997.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 5 xe/tháng",
      discount: "Tiết kiệm 28%",
      item1: "Tặng 1 tháng",
      item2: "6 tin VIP",
      item3: "9 tin thường",
      item4: "225 lượt đẩy tin",
    },
    {
      title: "Gói cao cấp",
      icon: "assets/tag-pricing.svg",
      priceone: "9.196.000 đ",
      pricesecond: "5.747.500 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 10 xe/tháng",
      discount: "Tiết kiệm 38%",
      item1: "Tặng 1 tháng",
      item2: "12 tin VIP",
      item3: "18 tin thường",
      item4: "600 lượt đẩy tin",
    },
  ],
  "6-thang": [
    {
      title: "Gói kinh tế",
      icon: "assets/tag-pricing.svg",
      priceone: "3.493.000 đ",
      pricesecond: "2.495.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 3 xe/tháng",
      discount: "Tiết kiệm 29%",
      item1: "Tặng 1 tháng",
      item2: "7 tin VIP",
      item3: "14 tin thường",
      item4: "210 lượt đẩy tin",
      item5: "",
    },
    {
      title: "Gói chuyên gia",
      icon: "assets/tag-pricing.svg",
      priceone: "7.992.000 đ",
      pricesecond: "4.995.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 5 xe/tháng",
      discount: "Tiết kiệm 38%",
      item1: "Tặng 2 tháng",
      item2: "16 tin VIP",
      item3: "24 tin thường",
      item4: "600 lượt đẩy tin",
      item5: "",
    },
    {
      title: "Gói cao cấp",
      icon: "assets/tag-pricing.svg",
      priceone: "21.392.000 đ",
      pricesecond: "11.495.000 đ",
      content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình 10 xe/tháng",
      discount: "Tiết kiệm 46%",
      item1: "Tặng 2 tháng",
      item2: "32 tin VIP",
      item3: "48 tin thường",
      item4: "1600 lượt đẩy tin",
      item5: "1 tháng Banner",
    },
  ],
};

// TIN LẺ
const oddNews = [
  {
    title: "tin thường",
    icon: "assets/tag-pricing.svg",
    price: "25.000 đ",
    content:
      "Để mua tin lẻ quý khách vui lòng nạp tiền vào tài khoản thanh toán",
    item1: "Vị trí hiển thị: dưới tin VIP",
    item2: "Trung bình tiếp cận 458+ khách hàng/ngày",
  },
  {
    title: "tin vip",
    icon: "assets/tag-pricing.svg",
    price: "510.000 đ",
    content:
      "Để mua tin lẻ quý khách vui lòng nạp tiền vào tài khoản thanh toán",
    item1: "Vị trí hiển thị: trên tin THƯỜNG",
    item2: "Trung bình tiếp cận 458+ khách hàng/ngày",
  },
];

// gói quảng cáo
const advertisement = [
  {
    title: "gói 1 tháng",
    icon: "assets/tag-pricing.svg",
    priceone: "",
    pricesecond: "3.400.000 đ",
    content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình xe/tháng",
    discount: "",
    item1: "Banner",
    item2: "Bài viết truyền thông",
  },
  {
    title: "gói 3 tháng",
    icon: "assets/tag-pricing.svg",
    priceone: "15.899.000",
    pricesecond: "8.700.000 đ",
    content: "Phù hợp với nhà kinh doanh xe giao dịch trung bình xe/tháng",
    discount: "Tiết kiệm 45%",
    item1: "Tặng gói quảng cáo 1 tháng",
    item2: "Tặng gói đăng tin cao cấp 1 tháng",
  },
];

function handleButtonClick(activeButtonId) {
  const buttons = document.querySelectorAll(".group-btn");

  buttons.forEach((button) => {
    if (button.id === activeButtonId) {
      button.classList.add("active");
      button.classList.remove("inactive");
    } else {
      button.classList.remove("active");
      button.classList.add("inactive");
    }
  });
}

function showOddNews() {
  const data = oddNews;

  const pricingPlans = document.getElementById("pricing-plans");
  pricingPlans.innerHTML = "";
  data.forEach((news) => {
    let cardContent = `
      <div class="col-md-6 d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 400px;">
    `;

    // Check if plan has discount information
    if (news.discount) {
      cardContent += `
        <div class="card-image-container">
          <img src="assets/23percent.svg" class="card-image" alt="" />
          <span class="discount-label text-uppercase fw-bold">${news.discount}</span>
        </div>
      `;
    }

    cardContent += `
      <div class="row g-0 p-2">
        <div class="col-md-4">
          <img src="${news.icon}" class="img-fluid rounded-start p-2" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bold text-uppercase">${news.title}</h5>
            <p class="card-text fw-bold">${news.price ? news.price : ""}</p>
            <div class="d-flex justify-content-around">
              <p class="card-text text-decoration-line-through fw-bold my-auto" style="color:red; font-size:14px;">${
                news.priceone ? news.priceone : ""
              }</p>
              <span class="fw-bold" style="font-size: 24px;">${
                news.pricesecond ? news.pricesecond : ""
              }</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row p-2">
        <div class="card-body">
          <p class="card-text">${news.content}</p>
          <a href="#" class="btn btn-primary w-100 mb-2" style="border-radius:20px">Nạp tiền</a>
    `;

    // Adding items dynamically
    if (news.item1) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${news.item1}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (news.item2) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${news.item2}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (news.item3) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${news.item3}</p>
          <span class="text-primary" ><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (news.item4) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${news.item4}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (news.item5) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${news.item5}</p>
          <span  class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }

    cardContent += `
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    pricingPlans.innerHTML += cardContent;
  });

  document.getElementById("note").style.display = "block";
  document.getElementById("box-button").style.display = "none";
  handleButtonClick("btn-odd-news");
}

function showAdvertisement() {
  const data = advertisement;

  const pricingPlans = document.getElementById("pricing-plans");
  pricingPlans.innerHTML = "";
  data.forEach((ad) => {
    let cardContent = `
      <div class="col-md-6 d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 400px;">
    `;

    // Check if plan has discount information
    if (ad.discount) {
      cardContent += `
        <div class="card-image-container">
          <img src="assets/23percent.svg" class="card-image" alt="" />
          <span class="discount-label text-uppercase fw-bold">${ad.discount}</span>
        </div>
      `;
    }

    cardContent += `
      <div class="row g-0 p-2">
        <div class="col-md-4">
          <img src="${ad.icon}" class="img-fluid rounded-start p-2" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bold text-uppercase">${ad.title}</h5>
            <p class="card-text fw-bold">${ad.price ? ad.price : ""}</p>
            <div class="d-flex justify-content-around">
              <p class="card-text text-decoration-line-through fw-bold my-auto" style="color:red; font-size:14px;">${
                ad.priceone ? ad.priceone : ""
              }</p>
              <span class="fw-bold" style="font-size: 24px;">${
                ad.pricesecond ? ad.pricesecond : ""
              }</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row p-2">
        <div class="card-body">
          <p class="card-text">${ad.content}</p>
          <a href="#" class="btn btn-primary w-100 mb-2" style="border-radius:20px">Nạp tiền</a>
    `;

    // Adding items dynamically
    if (ad.item1) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${ad.item1}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (ad.item2) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${ad.item2}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (ad.item3) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${ad.item3}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (ad.item4) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${ad.item4}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (ad.item5) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${ad.item5}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }

    cardContent += `
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    pricingPlans.innerHTML += cardContent;
  });

  document.getElementById("note").style.display = "none";
  document.getElementById("box-button").style.display = "none";
  handleButtonClick("btn-advertisement");
}

function showPlans(type, button) {
  const buttons = document.querySelectorAll(".btn-custom");
  buttons.forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");

  const data = plans[type];

  const pricingPlans = document.getElementById("pricing-plans");
  pricingPlans.innerHTML = "";
  data.forEach((plan) => {
    let cardContent = `
      <div class="col-md-4 d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 400px;">
    `;
    if (plan.discount) {
      cardContent += `
        <div class="card-image-container">
          <img src="assets/23percent.svg" class="card-image" alt="" />
          <span class="discount-label text-uppercase fw-bold">${plan.discount}</span>
        </div>
      `;
    }

    cardContent += `
      <div class="row g-0 p-2">
        <div class="col-md-4">
          <img src="${plan.icon}" class="img-fluid rounded-start p-2" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bold text-uppercase">${plan.title}</h5>
            <p class="card-text fw-bold">${plan.price ? plan.price : ""}</p>
            <div class="d-flex justify-content-around">
              <p class="card-text text-decoration-line-through fw-bold my-auto" style="color:red; font-size:14px;">${
                plan.priceone ? plan.priceone : ""
              }</p>
              <span class="fw-bold" style="font-size: 24px;">${
                plan.pricesecond ? plan.pricesecond : ""
              }</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row p-2">
        <div class="card-body">
          <p class="card-text">${plan.content}</p>
          <a href="#" class="btn btn-primary w-100 mb-2" style="border-radius:20px">Nạp tiền</a>
    `;

    // Adding items dynamically
    if (plan.item1) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${plan.item1}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (plan.item2) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${plan.item2}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (plan.item3) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${plan.item3}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (plan.item4) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${plan.item4}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }
    if (plan.item5) {
      cardContent += `
        <div class="d-flex justify-content-between">
          <p>${plan.item5}</p>
          <span class="text-primary"><i class="fa-solid fa-circle-check"></i></span>
        </div>
      `;
    }

    cardContent += `
        </div>
      </div>
    </div>
  </div>
</div>
`;

    pricingPlans.innerHTML += cardContent;
  });

  // Show note and box-button
  document.getElementById("note").style.display = "block";
  document.getElementById("box-button").style.display = "flex";
  handleButtonClick("btn-plans");
}

// Mặc định hiển thị gói 6 tháng khi vào trang
showPlans("6-thang", document.getElementById("btn-6-thang"));

// hãng xe
// toyota
const toyotaCar = [
  {
    name: "Xe Toyota Vios",
  },
  {
    name: "Xe Toyota Veloz",
  },
  {
    name: "Xe Toyota Fortuner",
  },
  {
    name: "Xe Toyota Corolla Cross",
  },
];

let itemToyotaCar = "";
for (let i = 0; i < toyotaCar.length; i++) {
  itemToyotaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${toyotaCar[i].name}</a></p>`;
}

document.getElementById("toyota").innerHTML = itemToyotaCar;

// mazda
const mazdaCar = [
  {
    name: "Xe Mazda CX-5",
  },
  {
    name: "Xe Mazda CX-8",
  },
  {
    name: "Xe Mazda 2",
  },
  {
    name: "Xe Mazda 3",
  },
];

let itemMazdaCar = "";
for (let i = 0; i < toyotaCar.length; i++) {
  itemMazdaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${mazdaCar[i].name}</a></p>`;
}

document.getElementById("mazda").innerHTML = itemMazdaCar;

// KIA
const kiaCar = [
  {
    name: "Xe Kia K3",
  },
  {
    name: "Xe Kia Seltos",
  },
  {
    name: "Xe Kia Sorento",
  },
  {
    name: "Xe Kia Sonet",
  },
];

let itemKiaCar = "";
for (let i = 0; i < kiaCar.length; i++) {
  itemKiaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${kiaCar[i].name}</a></p>`;
}

document.getElementById("KIA").innerHTML = itemKiaCar;

// Ford
const fordCar = [
  {
    name: "Xe Ford Everest",
  },
  {
    name: "Xe Ford Eco Sport",
  },
  {
    name: "Xe Ford Territory",
  },
  {
    name: "Xe Ford Ranger",
  },
];

let itemFordCar = "";
for (let i = 0; i < fordCar.length; i++) {
  itemFordCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${fordCar[i].name}</a></p>`;
}

document.getElementById("Ford").innerHTML = itemFordCar;

// Huyndai
const huyndaiCar = [
  {
    name: "Xe Hyundai Accent",
  },
  {
    name: "Xe Hyundai Santafe",
  },
  {
    name: "Xe Hyundai i10",
  },
  {
    name: "Xe Hyundai Tucson",
  },
];

let itemHuyndaiCar = "";
for (let i = 0; i < huyndaiCar.length; i++) {
  itemHuyndaiCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${huyndaiCar[i].name}</a></p>`;
}

document.getElementById("huyndai").innerHTML = itemHuyndaiCar;

// Mitsubishi

const mitsubishiCar = [
  {
    name: "Xe Mitsubishi Xpander",
  },
  {
    name: "Xe Mitsubishi Attage",
  },
  {
    name: "Xe Mitsubishi Triton",
  },
  {
    name: "Xe Mitsubishi Outlander",
  },
];

let itemMitsubishiCar = "";
for (let i = 0; i < mitsubishiCar.length; i++) {
  itemMitsubishiCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${mitsubishiCar[i].name}</a></p>`;
}

document.getElementById("mitsubishi").innerHTML = itemMitsubishiCar;

// Honda
const hondaCar = [
  {
    name: "Xe Honda City",
  },
  {
    name: "Xe Honda Civic",
  },
  {
    name: "Xe Honda CR-V",
  },
  {
    name: "Xe Honda HR-V",
  },
];

let itemHondaCar = "";
for (let i = 0; i < hondaCar.length; i++) {
  itemHondaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${hondaCar[i].name}</a></p>`;
}

document.getElementById("honda").innerHTML = itemHondaCar;

// BMW
const bmwCar = [
  {
    name: "Xe BMW i8",
  },
  {
    name: "Xe BMW X1",
  },
  {
    name: "Xe BMW X5",
  },
  {
    name: "Xe BMW X6",
  },
];

let itemBMWCar = "";
for (let i = 0; i < bmwCar.length; i++) {
  itemBMWCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${bmwCar[i].name}</a></p>`;
}

document.getElementById("bmw").innerHTML = itemBMWCar;
