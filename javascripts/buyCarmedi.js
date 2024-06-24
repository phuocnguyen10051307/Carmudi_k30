// import * as generativeAi from '@google/generative-ai'; 

const wrappers = document.querySelectorAll(".wrapper");

wrappers.forEach(wrapper => {
    const rangeInputs = wrapper.querySelectorAll(".range-input input"),
          yearInputs = wrapper.querySelectorAll(".year-input input"),
          progress = wrapper.querySelector(".slider .progress");

    let yearGap = 1; // Minimum gap is 1 year

    function updateProgress() {
        let minVal = parseInt(rangeInputs[0].value),
            maxVal = parseInt(rangeInputs[1].value);
        progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
        progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
    }

    yearInputs.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(yearInputs[0].value),
                maxVal = parseInt(yearInputs[1].value);

            if ((maxVal - minVal >= yearGap) && maxVal <= parseInt(yearInputs[1].max) && minVal >= parseInt(yearInputs[0].min)) {
                if (e.target.className === "input-min") {
                    rangeInputs[0].value = minVal;
                    progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                } else {
                    rangeInputs[1].value = maxVal;
                    progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                }
                searchPriceCar(); // Call search function when inputs change
            }
        });
    });

    rangeInputs.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInputs[0].value),
                maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < yearGap) {
                if (e.target.className === "range-min") {
                    rangeInputs[0].value = maxVal - yearGap;
                } else {
                    rangeInputs[1].value = minVal + yearGap;
                }
            } else {
                yearInputs[0].value = minVal;
                yearInputs[1].value = maxVal;
                progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                searchPriceCar(); // Call search function when range inputs change
            }
        });
    });

    updateProgress();
});

document.addEventListener('DOMContentLoaded', function () {
  const wrappers = document.querySelectorAll('.wrapper');

  // Add event listeners to input elements to trigger search and update search view
  wrappers.forEach(wrapper => {
    const rangeInputs = wrapper.querySelectorAll(".range-input input");
    rangeInputs.forEach(input => {
      input.addEventListener('input', () => {
        searchPriceCar();
        updateSearchView();
      });
    });

    const yearInputs = wrapper.querySelectorAll(".year-input input");
    yearInputs.forEach(input => {
      input.addEventListener('input', () => {
        searchPriceCar();
        updateSearchView();
      });
    });
  });

  searchPriceCar(); // Initial search to display all products
});

// Function to filter products based on price
const filterByPrice = (products, minPrice, maxPrice) => {
  return products.filter(product => {
    const price = parseInt(product.Price);
    return price >= minPrice && price <= maxPrice;
  });
};

// Function to filter products based on year
const filterByYear = (products, minYear, maxYear) => {
  return products.filter(product => {
    const year = parseInt(product.Year);
    return year >= minYear && year <= maxYear;
  });
};

// Function to filter products based on kilometers
const filterByKilometer = (products, minKilometer, maxKilometer) => {
  return products.filter(product => {
    const kilometer = parseInt(product.Kilometer);
    return kilometer >= minKilometer && kilometer <= maxKilometer;
  });
};

// Function to search and filter products
const searchPriceCar = async () => {
  const minPriceInput = document.querySelector('#flush-collapseThree .range-min');
  const maxPriceInput = document.querySelector('#flush-collapseThree .range-max');
  const minYearInput = document.querySelector('#panelsStayOpen-collapseFour .range-min');
  const maxYearInput = document.querySelector('#panelsStayOpen-collapseFour .range-max');
  const minKilometerInput = document.querySelector('#panelsStayOpen-collapseFive .range-min');
  const maxKilometerInput = document.querySelector('#panelsStayOpen-collapseFive .range-max');

  const minPrice1 = minPriceInput ? parseInt(minPriceInput.value) : 0;
  const maxPrice1 = maxPriceInput ? parseInt(maxPriceInput.value) : Infinity;

  const minYear = minYearInput ? parseInt(minYearInput.value) : 0;
  const maxYear = maxYearInput ? parseInt(maxYearInput.value) : new Date().getFullYear();

  const minKilometer = minKilometerInput ? parseInt(minKilometerInput.value) : 0;
  const maxKilometer = maxKilometerInput ? parseInt(maxKilometerInput.value) : Infinity;

  try {
    const response = await fetch(`http://localhost:5000/car`);
    const data = await response.json();

    let filteredProducts = filterByPrice(data, minPrice1, maxPrice1);
    filteredProducts = filterByYear(filteredProducts, minYear, maxYear);
    filteredProducts = filterByKilometer(filteredProducts, minKilometer, maxKilometer);

    updateProductList(filteredProducts);
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};

const updateSearchView = () => {
  let showSearch = document.getElementById('showSearch');
  showSearch.innerHTML = '';

  const minPriceInput = document.querySelector('#flush-collapseThree .range-min');
  const maxPriceInput = document.querySelector('#flush-collapseThree .range-max');
  const minYearInput = document.querySelector('#panelsStayOpen-collapseFour .range-min');
  const maxYearInput = document.querySelector('#panelsStayOpen-collapseFour .range-max');
  const minKilometerInput = document.querySelector('#panelsStayOpen-collapseFive .range-min');
  const maxKilometerInput = document.querySelector('#panelsStayOpen-collapseFive .range-max');

  const minPrice = minPriceInput ? minPriceInput.value : '';
  const maxPrice = maxPriceInput ? maxPriceInput.value : '';
  const minYear = minYearInput ? minYearInput.value : '';
  const maxYear = maxYearInput ? maxYearInput.value : '';
  const minKilometer = minKilometerInput ? minKilometerInput.value : '';
  const maxKilometer = maxKilometerInput ? maxKilometerInput.value : '';

  if (minPrice && maxPrice) {
    addFilterItem(showSearch, `Từ ${minPrice} - ${maxPrice}`);
  }

  if (minYear && maxYear) {
    addFilterItem(showSearch, `Từ ${minYear} - ${maxYear}`);
  }

  if (minKilometer && maxKilometer) {
    addFilterItem(showSearch, `Từ ${minKilometer} - ${maxKilometer}`);
  }
};

const addFilterItem = (container, text) => {
  let li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.style.backgroundColor = 'rgba(45,144,229,0.30)';
  li.style.border = '1px solid #ddd';
  li.style.marginRight = '5px';
  li.style.boxSizing = 'border-box';
  li.innerHTML = `${text} <button class="btn border-0 btn-sm clear-filter">X</button>`;

  li.querySelector('.clear-filter').addEventListener('click', function () {
    li.remove();
    deleteFilter(text); // Function to clear the specific filter
  });

  container.appendChild(li);
};

const deleteFilter = (li) => {
  if (!li) {
    console.error('Li element is undefined or null.');
    return;
  }

  const text = li.trim();
  if (text.includes('Giá')) {
    const minPriceInput = document.querySelector('#flush-collapseThree .range-min');
    const maxPriceInput = document.querySelector('#flush-collapseThree .range-max');
    const minPriceNumber = document.querySelector('#flush-collapseThree .year-input .input-min');
    const maxPriceNumber = document.querySelector('#flush-collapseThree .year-input .input-max');

    

    minPriceInput.value = 50000000;
    maxPriceInput.value = 5000000000;
    minPriceNumber.value = 50000000;
    maxPriceNumber.value = 5000000000;
  } else if (text.includes('Năm')) {
    const minYearInput = document.querySelector('#panelsStayOpen-collapseFour .range-min');
    const maxYearInput = document.querySelector('#panelsStayOpen-collapseFour .range-max');
    const minYearNumber = document.querySelector('#panelsStayOpen-collapseFour .input-min');
    const maxYearNumber = document.querySelector('#panelsStayOpen-collapseFour .input-max');

    minYearInput.value = 2000;
    maxYearInput.value = 2024;
    minYearNumber.value = 2000;
    maxYearNumber.value = 2024;
  } else if (text.includes('Số KM')) {
    const minKilometerInput = document.querySelector('#panelsStayOpen-collapseFive .range-min');
    const maxKilometerInput = document.querySelector('#panelsStayOpen-collapseFive .range-max');
    const minKilometerNumber = document.querySelector('#panelsStayOpen-collapseFive .input-min');
    const maxKilometerNumber = document.querySelector('#panelsStayOpen-collapseFive .input-max');

    minKilometerInput.value = 0;
    maxKilometerInput.value = 500000;
    minKilometerNumber.value = 0;
    maxKilometerNumber.value = 500000;
  }

  // Update UI after clearing filter
  searchPriceCar();
};



const updateProductList = (products) => {
  const productList = document.getElementById("show");
  productList.innerHTML = '';

  if (products.length === 0) {
    productList.innerHTML = '<p>No products found matching the criteria.</p>';
    return;
  }

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4');
    productDiv.innerHTML = `
      <div class="card">
        <img src="${product.ImageUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${product.Title}</h5>
          <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${product.Year}</p>
          <p class="card-text"><i class="bi bi-speedometer"></i> ${product.Kilometer} km</p>
          <p class="card-text"><i class="bi bi-fuel-pump"></i> ${product.Fuel}</p>
          <p class="card-text"><i class="bi bi-bezier2"></i> ${product.Transmission}</p>
        </div>
        <div class="card-footer">
          <p class="card-text" style="font-size:20px; color:red;">${product.Price}</p>
          <p class="card-text" style="font-size:12px;"><i class="bi bi-geo-alt"></i> ${product.Address.Province} - ${product.Address.Districts}</p>
        </div>
      </div>
    `;
    productList.appendChild(productDiv);
  });
};



// hàm phân trang 

const perPage = 9;
let currentPage = 1;
let filteredCars = [];



// Hàm xử lý khi chuyển trang
function handlePageNumber(num) {
  currentPage = num;
  const start = (currentPage - 1) * perPage;
  const end = currentPage * perPage;
  updateProductList(filteredCars.slice(start, end));
}

// Đảm bảo rằng hàm handlePageNumber có phạm vi toàn cầu
window.handlePageNumber = handlePageNumber;

// Hàm tạo ra các số trang và hiển thị chúng
function renderPageNumber() {
  const totalPage = Math.ceil(filteredCars.length / perPage);
  let paginationElement = "";
  for (let i = 1; i <= totalPage; i++) {
    paginationElement += `<li class="page-item ms-2 border border-2 rounded"><a class="page-link" href="#" onclick="handlePageNumber(${i})">${i}</a></li>`;
  }
  document.getElementById("pagination").innerHTML = `<ul class="pagination">${paginationElement}</ul>`;
}

// Hàm lấy dữ liệu xe từ API
async function fetchCarData() {
  try {
    const response = await fetch("http://localhost:5000/car");
    const data = await response.json();
    filteredCars = data;
    updateProductList(filteredCars.slice(0, perPage));
    renderPageNumber();
  } catch (error) {
    console.error("Error fetching car data:", error);
  }
}

// Khi trang web được tải hoàn chỉnh, gọi hàm fetchCarData để lấy dữ liệu xe
window.onload = fetchCarData;






const registerBtn = document.getElementById('registerBtn');
const overlay = document.getElementById('overlay');

registerBtn.addEventListener('click', function() {
  document.getElementById('register').style.display = 'block';
  overlay.style.display = 'block'; // Hiển thị lớp mờ
});

document.getElementById('exit').addEventListener('click', function() {
  document.getElementById('register').style.display = 'none';
  overlay.style.display = 'none'; // Ẩn lớp mờ
});


const checkInput = () => {
  const dataInput = document.getElementById("disabledTextInput");
  const btnSubmit = document.getElementById("btnSubmit");

  if (dataInput.value.length == 10) {
      btnSubmit.classList.remove("btn-secondary");
      btnSubmit.classList.add("btn-primary");
  } else {
      btnSubmit.classList.remove("btn-primary");
      btnSubmit.classList.add("btn-secondary");
  }
};


// checkbox Province
  const getProvinceApi = async () => {
    try {
      const response = await axios.get("http://localhost:5000/province", {
        headers: {
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });
      const provinces = response.data.data.data;

    
      const checkboxContainer = document.getElementById("checkboxProvince");

      const provincesArray = Array.isArray(provinces) ? provinces : [provinces];

      provincesArray.forEach(province => {
        const checkboxDiv = document.createElement("div"); 

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox-brand";
        checkbox.value = province.name;

        const textNode = document.createTextNode(province.name);

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(textNode);

        checkboxDiv.classList.add("checkbox-wrapper");

        checkboxContainer.appendChild(checkboxDiv);
      });

    } catch (error) {
      console.error('Có lỗi xảy ra:', error);
    }
  }

  getProvinceApi();


  

// chọn một checkbox ở hãng xe dòng xe sẽ hiển thị dưới thanh tìm kiếm
const searchInput = document.getElementById("search");

const checkboxContainer = document.getElementById("checkboxProvince");

checkboxContainer.addEventListener('change', function(event) {

    if (event.target.matches('.checkbox-brand')) {
        if (event.target.checked) {
          searchInput.value = event.target.value;
        } else {
          searchInput.value = "";
        }
    }
});


// reponsive
document.addEventListener('DOMContentLoaded', function() {
  const filterIcon = document.getElementById('filter-icon');
  const searchPanel = document.getElementById('search-panel');
  const closeButton = document.getElementById('close-btn');

  filterIcon.addEventListener('click', function() {
    searchPanel.classList.add('open');
  });

  closeButton.addEventListener('click', function() {
    searchPanel.classList.remove('open');
  });
});

// chat bot
document.addEventListener("DOMContentLoaded", function() {
  const chatInput = document.querySelector("#messageInput");
  const sendChatBtn = document.querySelector("#send-btn");
  const chatBox = document.querySelector("#chatbox");
  const chatbotToggler = document.querySelector("#chatbot-toggler");
  const chatbot = document.querySelector("#chatbot");
  const headerClose = document.querySelector(".header-close");

  const API_KEY = "AIzaSyByzkmMUL8wlE52MrxCMhL_eUrA6Lv2yFY";
  const API_URL = "https://generativelanguage.googleapis.com/v1beta2/models/gemini:generateText";

  let useMessage;

  // Function to create chat list item
  const createChatLi = (message, className) => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("d-flex", "chat", className);

      let chatContent = className === "outgoing" ?
          `<p class="mw-75 text-light rounded-4 p-2 fs-6" style="background: #724ae8;">${message}</p>` :
          `<span class="text-light text-center rounded align-self-end" style="background:#724ae8; line-height: 32px; width: 32px; height: 32px; margin: 0 10px 15px 0;"><i class="fa-solid fa-ghost"></i></span>
          <p class="mw-75 text-dark bg-light rounded-4 p-2 fs-6">${message}</p>`;

      chatLi.innerHTML = chatContent;
      return chatLi;
  };

  // Function to generate response from Gemini API
  const generateResponse = () => {
      const requestOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
              "prompt": {
                  "text": useMessage
              }
          })
      };

      fetch(API_URL, requestOptions)
      .then(res => {
          if (!res.ok) {
              throw new Error(`Error: ${res.status} ${res.statusText}`);
          }
          return res.json();
      })
      .then(data => {
          const responseMessage = data.candidates[0].text;
          chatBox.appendChild(createChatLi(responseMessage, "incoming"));
          chatBox.scrollTop = chatBox.scrollHeight;
      })
      .catch(error => {
          console.error(error);
      });
  };

  // Handle sending chat
  const handleChat = () => {
      useMessage = chatInput.value.trim();
      if (!useMessage) return;

      chatBox.appendChild(createChatLi(useMessage, "outgoing"));
      chatInput.value = ""; // Clear input after sending message
      chatBox.scrollTop = chatBox.scrollHeight;

      setTimeout(() => {
          chatBox.appendChild(createChatLi("Thinking ...", "incoming"));
          chatBox.scrollTop = chatBox.scrollHeight;
          generateResponse();
      }, 600);
  };

  // Event listeners
  sendChatBtn.addEventListener("click", handleChat);
  chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
          handleChat();
      }
  });

  chatbotToggler.addEventListener("click", () => {
      chatbot.classList.toggle("d-none");
  });

  headerClose.addEventListener("click", () => {
      chatbot.classList.add("d-none");
  });
});


// hàm load page giá xe gia đình thông qua hình ảnh
document.addEventListener('DOMContentLoaded', function () {
  let firstImage = document.querySelector('.slider-min img:first-child');
  let threeImage = document.querySelector('.slider-min img:nth-of-type(2)');
  firstImage.addEventListener('click', handleFirstImageClick);
  threeImage.addEventListener('click', handleThreeImageClick);
});

async function handleFirstImageClick() {
  try {
    const data = await getDataImageBanner();
    let filteredData = data.filter(product => product.Price >= 400000000 && product.Price <= 700000000);
    updateUI(filteredData, {minPrice: 400000000, maxPrice: 700000000});
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

async function handleThreeImageClick() {
  try {
    const data = await getDataImageBanner();
    let filteredData = data.filter(product => product.CarType === 'Toyota');
    updateUI(filteredData, {carType: 'Toyota'})
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

function updateUI(filteredData, filter) {

  let showSearch = document.getElementById('showSearch');
  showSearch.innerHTML = '';
  let li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.style.backgroundColor = 'rgba(45,144,229,0.30)';
  li.style.border = '1px solid #ddd';
  li.style.marginRight = '5px';
  li.style.boxSizing = 'border-box';

  if (filter.minPrice !== undefined && filter.maxPrice !== undefined) {
    document.querySelector('.range-min').value = filter.minPrice;
    document.querySelector('.range-max').value = filter.maxPrice;
    li.innerHTML = `Từ ${filter.minPrice} triệu đến ${filter.maxPrice} triệu
      <button class="btn border-0 btn-sm clear-filter">X</button>`;
  } else if (filter.carType !== undefined) {
    li.innerHTML = `${filter.carType}
      <button class="btn border-0 btn-sm clear-filter">X</button>`;
  }

  showSearch.appendChild(li);


  let showDetails = document.getElementById('show');
  showDetails.innerHTML = '';

  if (filteredData.length === 0) {
    showDetails.innerHTML = '<p>No products found matching the criteria.</p>';
    return;
  }

  filteredData.forEach(product => {
    const carDiv = document.createElement('div');
    carDiv.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4');
    carDiv.innerHTML = `
      <div class="card">
        <img src="${product.ImageUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${product.Title}</h5>
          <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${product.Year}</p>
          <p class="card-text"><i class="bi bi-speedometer"></i> ${product.Kilometer} km</p>
          <p class="card-text"><i class="bi bi-fuel-pump"></i> ${product.Fuel}</p>
          <p class="card-text"><i class="bi bi-bezier2"></i> ${product.Transmission}</p>
        </div>
        <div class="card-footer">
          <p class="card-text" style="font-size:20px; color:red;">${product.Price}</p>
          <p class="card-text" style="font-size:12px;"><i class="bi bi-geo-alt"></i> ${product.Address.Province} - ${product.Address.Districts}</p>
        </div>
      </div>
    `;
    showDetails.appendChild(carDiv);
  });

  // Thêm sự kiện cho nút X mới được tạo
  let clearFilterButtons = document.querySelectorAll('.clear-filter');
  clearFilterButtons.forEach(button => {
    button.addEventListener('click', function() {
      clearFilter(li);
    });
  });
}


async function clearFilter(liElement) {
  liElement.remove();
  try {
    const data = await getDataImageBanner(); 
    renderPageNumber();
    updateProductList(data);
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}


const getDataImageBanner = async () => {
  try {
    const response = await axios.get('http://localhost:5000/car');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
