// tin nổi bật

const hotNew = [{
    image: 'assets/img1.webp',
    text: ' Giá xe Mercedes-Benz GLA 2024: Giá lăn bánh, Thông số và Ưu đãi cập nhật mới tháng 03/2024 ',
    review: ' Khám phá bảng giá xe Mercedes GLA năm 2024 và đừng bỏ lỡ cơ hội tận hưởng những ưu đãi đặc biệt, độc quyền trong tháng 03/2024. Tìm hiểu về các chương trình khuyến mãi và giảm giá hấp dẫn, để có cơ hội sở hữu mẫu xe Mercedes GLA 2023 mà bạn luôn mong đợi! ',
    smalltext: 'Bảng giá xe ô tô',
    isObject: true
},{
    image: 'assets/img2.webp',
    text: ' Giá xe Mercedes A-Class 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    review: ' Khám phá danh sách giá xe Mercedes A Class 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Mercedes A Class với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. ',
    smalltext: 'Bảng giá xe ô tô',
},{
    image: 'assets/img3.webp',
    text: ' Giá xe BMW Z4 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    review: ' Khám phá danh sách giá xe BMW Z4 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe BMW Z4 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này ',
    smalltext: 'Bảng giá xe ô tô',
},{
    image: 'assets/img4.webp',
    text: ' Giá xe Volvo V60 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    review: ' Khám phá danh sách giá xe Volvo V60 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Volvo V60 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. ',
    smalltext: 'Bảng giá xe ô tô',
}];


let cardItem = '';
for(let i=0;i<hotNew.length;i++){
    if(hotNew[i].isObject){
        cardItem +=  `<div class="row">
        <div class="card mb-3 p-0 border-0" style="max-width: 100%; margin-left:12px">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${hotNew[i].image}" class="img-fluid rounded-start h-100" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:24px"><a href="" class="text-decoration-none text-dark">${hotNew[i].text}</a></h5>
            <p class="card-text" style="font-size:14px">${hotNew[i].review}</p>
            <p class="card-text" style="font-size:14px; color:#7c7c7c;"><a href="#" class="text-decoration-none text-dark">${hotNew[i].smalltext}</a></p>
            </div>
        </div>
        </div>
    </div>
        </div>`;
    }else{
        cardItem += `<div class="col-md-4">
        <div class="card mb-3 border-0" style="height: 500px;">
            <img src="${hotNew[i].image}" class="card-img-top" style="width: 100%; height: 250px;" alt="...">
            <div class="card-body pt-2 p-0">
                <h5 class="card-title fw-bold" style="font-size:16px"><a href="#" class="text-decoration-none text-dark">${hotNew[i].text}</a></h5>
                <p class="card-text" style="font-size:14px">${hotNew[i].review}</p>
                <p class="card-text" style="font-size:14px; color:#7c7c7c;"><a href="#" class="text-decoration-none text-dark">${hotNew[i].smalltext}</a></p>
            </div>
        </div>
    </div>
    `;
    }
}
document.getElementById("hotnewcar").innerHTML = cardItem;



// tin đề xuất
const suggestednew = [{
    image: 'assets/img9.webp',
    title: ' Giữ xe luôn trong trạng thái tốt nhất nhờ việc thay nhớt đúng chuẩn ',
    content: ' Khi nói đến bảo dưỡng xe hơi, việc thay nhớt thường được đề cập nhiều. Nhưng tại sao lại quan trọng đến vậy? Bài viết này sẽ đưa ra những thông tin cần thiết về tần suất thay nhớt cho ô tô và tại sao điều này lại mang ý nghĩa quan trọng đối với sức khỏe của động cơ của bạn. '
},{
    image: 'assets/img8.webp',
    title: ' Bảo vệ xe an toàn khỏi những biến cố bất ngờ trên đường đi ',
    content: ' Ô tô chết máy giữa đường là một tình huống rất khó chịu và có thể gây những tai nạn không mong muốn cho tài xế và những người đi đường. Nguyên nhân chính gây ra tình trạng này có thể xuất phát từ nhiều yếu tố khác nhau, và để khắc phục nó, bạn cần xác định được nguyên nhân cụ thể... '
},{
    image: 'assets/img11.webp',
    title: ' Dầu nhớt xe máy có sử dụng cho ô tô được không? ',
    content: ' Trong thời gian sử dụng xe, có một câu hỏi thường xuyên được đặt ra: liệu dầu nhớt cho xe máy có thể sử dụng cho ô tô không? '
},{
    image:'assets/img12.webp',
    title: ' Những dấu hiệu cho thấy nhớt đang cần "cấp cứu" ',
    content:' Cùng Carmudi khám phá sâu hơn về những dấu hiệu quan trọng mà chiếc xe của bạn có thể gửi để báo hiệu cần thay đổi dầu nhớt nhé! '
},{
    image:'assets/img1.webp',
    title:' Giá xe Mercedes-Benz GLA 2024: Giá lăn bánh, Thông số và Ưu đãi cập nhật mới tháng 03/2024 ',
    content:' Khám phá bảng giá xe Mercedes GLA năm 2024 và đừng bỏ lỡ cơ hội tận hưởng những ưu đãi đặc biệt, độc quyền trong tháng 03/2024. Tìm hiểu về các chương trình khuyến mãi và giảm giá hấp dẫn, để có cơ hội sở hữu mẫu xe Mercedes GLA 2023 mà bạn luôn mong đợi! '
},{
    image:'assets/img7.webp',
    title:' Giá xe Suzuki 2024: Giá lăn bánh, Thông số và Ưu đãi cập nhật mới các dòng xe Suzuki tháng 03/2024 ',
    content:' Khám phá bảng giá xe Suzuki năm 2024 và đừng bỏ lỡ cơ hội tận hưởng những ưu đãi đặc biệt, độc quyền trong tháng 03/2024. Tìm hiểu về các chương trình khuyến mãi và giảm giá hấp dẫn, để có cơ hội sở hữu mẫu xe Suzuki mà bạn luôn mong đợi! '
},{
    image:'assets/img2.webp',
    title:' Giá xe Mercedes A-Class 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    content:' Khám phá danh sách giá xe Mercedes A Class 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Mercedes A Class với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. '
},{
    image:'assets/img3.webp',
    title:' Giá xe BMW Z4 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    content:' Khám phá danh sách giá xe BMW Z4 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe BMW Z4 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này '
},{
    image:'assets/img4.webp',
    title:' Giá xe Volvo V60 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    content:' Khám phá danh sách giá xe Volvo V60 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Volvo V60 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. '
},{
    image:'assets/img5.webp',
    title:' Giá xe Wuling Hongguang Mini EV 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    content:' Khám phá Wuling HongGuang MiniEV - chiếc xe điện Mini đầu tiên tại Việt Nam, mang đến sự nhỏ gọn và tiết kiệm năng lượng. Tìm hiểu về tính năng độc đáo, hiệu suất vượt trội và khả năng di chuyển linh hoạt của xe này. Trải nghiệm tương lai xe hơi bền vững với Wuling HongGuang MiniEV! '
},{
    image:'assets/img6.webp',
    title:' Giá xe Nissan Kicks e-power 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    content:' Khám phá danh sách giá xe Nissan Kicks e-power 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Nissan Kicks e-power với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. '
},{
    image:'assets/img10.webp',
    title:' Giá xe Suzuki Ciaz 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    content:' Khám phá danh sách giá xe Suzuki Ciaz 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Suzuki Ciaz với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. '
}];


let cardCarousel = '';
for (let i = 0; i < suggestednew.length; i += 4) {
    cardCarousel += `<div class="carousel-item${i === 0 ? ' active' : ''}">
        <div class="row mb-md-4 mb-sm-3">`;

    for (let j = i; j < i + 4 && j < suggestednew.length; j++) {
        cardCarousel += `<div class="col-md-3">
            <div class="card" style="height: 300px; width: 250px;">
                <img src="${suggestednew[j].image}" class="card-img-top" style="width: 100%; height: 150px;" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold" style="font-size:16px"><a href="" class="text-decoration-none text-dark">${suggestednew[j].title}</a></h5>
                    <p class="card-text" style="overflow:hidden; text-overflow:ellipsis; white-space: nowrap; font-size:14px">${suggestednew[j].content}</p>
                </div>
            </div>
        </div>`;
    }

    cardCarousel += `</div></div>`;
}

document.getElementById("suggestnew").innerHTML = cardCarousel;



//tư vấn

const advisecar = [{
    image: 'assets/img14.webp',
    content: ' Tổng hợp thảm lót sàn ô tô 6D đẹp được ưa chuộng nhất thị trường hiện nay '
},{
    image:'assets/img15.webp',
    content: ' Bạn có biết: Yếu tố nào quyết định đến tuổi thọ dầu nhớt động cơ? '
},{
    image: 'assets/img16.webp',
    content: ' Cập nhật bảng tính chi phí mua xe cũ (2023) '
},{
    image:'assets/img17.webp',
    content:' Danh Sách Công Ty Bảo Hiểm Xe Ô Tô tại Hà Nội '
}];

let optionCard = "";

for (let i = 0; i < advisecar.length; i++) {
    optionCard += `<div class="card mb-3" style="max-width: 540px; height:100px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${advisecar[i].image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title fw-bold" style="font-size:16px"><a href="" class="text-decoration-none text-dark">${advisecar[i].content}</a></h5>
                </div>
            </div>
            </div>
        </div>`;
}
// console.log(optionCard);

document.getElementById("advisecar").innerHTML = optionCard;

// so sánh xe
const comparecar = [{
    image:'assets/img18.webp',
    title: ' Sự khác biệt của hệ thống giữa các dòng xe Audi và BMW, Mercedes Benz',
    content: 'Việc tìm hiểu sự khác biệt giữa các dòng xe của các hãng ô tô như Audi, BMW và Mercedes-Benz là rất quan trọng và cần thiết để giúp người tiêu dùng có thể lựa chọn được chiếc xe phù hợp với nhu cầu và sở thích của mình mà không phải đối mặt với những rủi ro không đáng có.'
},{
    image: 'assets/img20.webp',
    title: ' So sánh BMW 230i với Toyota GR Supra 2.0 2022 '
},{
    image: 'assets/img23.webp',
    title: ' So sánh sedan và hatchback? '
},{
    image: 'assets/img24.webp',
    title: ' Khách hàng sẽ chọn Vinfast Fadil 2021 an toàn, mạnh mẽ hay Kia Morning 2021 tiện nghi, thời trang? '
}];

let newCard1 =" ";

for(let i=0; i<comparecar.length;i++){

    if(comparecar[i].content){
        newCard1 += `<div class="col-md-12" >
            <div class="card mb-3" style="height:500px">
            <img src="${comparecar[i].image}" class="card-img-top" style = "with:100px; height:250px" alt="..." />
            <div class="card-body">
                <h5 class="card-title fw-bold" style="font-size:20px;"><a href="" class="text-decoration-none text-dark">${comparecar[i].title}</a></h5>
                <p class="card-text" style="font-size:14px;">${comparecar[i].content}
                </p>
            </div>
            </div>
        </div>`;
    }else{
        newCard1 += `<div class="card mb-3" style="max-width: 100%; height:100px">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${comparecar[i].image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title fw-bold" style="font-size:16px"><a href="" class="text-decoration-none text-dark">${comparecar[i].title}</a></h5>
                        </div>
                    </div>
                    </div>
                </div>`;
    }
    
}

document.getElementById("comparecar").innerHTML = newCard1;

// đánh giá xe

const reviewCar = [{
    image: 'assets/img19.webp',
    title: 'MG7 2024: Sedan hạng C ra mắt tại Trung Quốc - Thông số kỹ thuật, giá bán',
    content: 'MG7 đã thu hút rất nhiều người tiêu dùng trẻ với thiết kế crossover, sức mạnh vượt trội, nội thất công nghệ cùng những điểm mạnh khác của sản phẩm'
},{
    image: 'assets/img21.webp',
    title:' Audi Q2: Giá & Thông số kỹ thuật mới nhất 2023 '
},{
    image: 'assets/img22.webp',
    title:' Audi Q5: Giá & Thông số mới nhất 2023 '
},{
    image: 'assets/img25.webp',
    title: ' KIA Mohave 2023: Giá & Thông số mới nhất '
}];

let comment ='';

for (let i = 0; i < reviewCar.length; i++) {
    if(reviewCar[i].content){
        comment += `<div class="col-md-12"> 
            <div class="card mb-3" style="height:500px">
            <img src="${reviewCar[i].image}" class="card-img-top" style = "with:100px; height:250px" alt="..." />
            <div class="card-body">
                <h5 class="card-title fw-bold" style="font-size:20px;"><a href="" class="text-decoration-none text-dark">${reviewCar[i].title}</a></h5>
                <p class="card-text" style="font-size:14px">${reviewCar[i].content}
                </p>
            </div>
            </div>
        </div>`;
    }else{
        comment += `<div class="card mb-3" style="max-width: 100%; height:100px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${reviewCar[i].image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title fw-bold" style="font-size:16px"><a href="" class="text-decoration-none text-dark">${reviewCar[i].title}</a></h5>
                        </div>
                    </div>
                    </div>
                </div>`;
    }
    
}

document.getElementById("reviewcar").innerHTML = comment;


// top 10 xe bán chạy nhất

const listSellCar = [{
    image: 'assets/img26.webp',
    namecar: 'VinFast Fadil',
    price: '425 triệu ',
    sales: 'Doanh số: 1868'
},{
    image: 'assets/img27.webp',
    namecar: 'Toyota Vios',
    price: '478 triệu ',
    sales: 'Doanh số: 1789'
},{
    image: 'assets/img28.webp',
    namecar: 'Hyundai Accent',
    price: '426 triệu ',
    sales: 'Doanh số: 1620'
},{
    image: 'assets/img29.webp',
    namecar: 'Mitsubishi Xpander',
    price: '555 triệu ',
    sales: 'Doanh số: 1470'
},{
    image: 'assets/img30.webp',
    namecar: 'Hyundai Santa Fe',
    price: '1 tỷ 30 triệu ',
    sales:'Doanh số: 1288'
},{
    image: 'assets/img31.webp',
    namecar: 'Kia Seltos',
    price: '609 triệu ',
    sales:'Doanh số: 1080'
},{
    image: 'assets/img35.webp',
    namecar: 'Hyundai i10',
    price: '330 triệu ',
    sales:'Doanh số: 953'
},{
    image: 'assets/img32.webp',
    namecar: 'Kia Cerato',
    price: '559 triệu ',
    sales: 'Doanh số: 875'
},{
    image: 'assets/img33.webp',
    namecar: 'Ford Ranger',
    price: '616 triệu ',
    sales: 'Doanh số: 794'
},{
    image: 'assets/img34.webp',
    namecar: 'Toyota Corolla Cross',
    price: '720 triệu ',
    sales: 'Doanh số: 765'
}];

let viewcar2 = "";
for(let i=0;i<listSellCar.length;i++){
    viewcar2 += `<div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:16px;"><a href="" class="text-decoration-none text-dark">${listSellCar[i].namecar}</a></h5>
            <p class="card-text fw-bold" style="font-size:16px; color:#1d70b8;">
                ${listSellCar[i].price}
            </p>
            <p class="card-text">
                <small class="text-muted" style="font-size:14px; color:#7c7c7c;">${listSellCar[i].sales}</small>
            </p>
            </div>
        </div>
        <div class="col-md-4">
            <img src="${listSellCar[i].image}" class="img-fluid rounded-start" alt="..." />
        </div>
        </div>
    </div>`
}
// console.log(viewcar2);
document.getElementById("mostSale").innerHTML = viewcar2;

// video
const video = [{
    image: 'assets/img37.webp',
    content: ' Honda City giảm giá cạnh tranh Toyota Vios '
},{
    image: 'assets/img38.webp',
    content: ' [Điểm tin thị trường] - "Vua bán tải" Ford Ranger giảm giá ngay đầu năm 2018 '
},{
    image:'assets/img39.webp',
    content: ' [Video] - Đánh giá nhanh Peugeot 3008, đối thủ trực tiếp của Mazda CX-5 và Hyundai Tucson '
},{
    image:'assets/img40.webp',
    content:' [Điểm tin thị trường] - Những mẫu xe sớm chốt giá cho năm 2018 '
}];

let videoItem ="";
for(let i=0;i<video.length;i++){
    videoItem += `<div class="card mb-3" style="max-width: 540px; background-color: #051625">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${video[i].image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title" style="color:#a5b7c6; font-size:16px"><a href="" class="text-decoration-none text-dark">${video[i].content}</a></h5>
                </div>
            </div>
            </div>
        </div>`;
}

document.getElementById("item").innerHTML = videoItem;

//new and read
const newRead = [{
    image: 'assets/img41.webp',
    id: '01',
    title: 'Giá xe Honda BR-V 2024: Ưu đãi đặc biệt tháng 03/2024',
    static: true
},{
    image: 'assets/img42.webp',
    id:'02',
    title: ' Giá xe Mazda CX-5 2024: Ưu đãi đặc biệt tháng 03/2024 ',
},{
    image: 'assets/img9.webp',
    id: '03',
    title: ' 05 Yếu tố quyết định tuổi thọ dầu nhớt động cơ '
},{
    image:'assets/img43.webp',
    id:'04',
    title: ' Honda e:Ny1: Crossover điện đầy tiềm năng từ Honda '
},{
    image: 'assets/img44.webp',
    id: '05',
    title:' Lái xe lâu, bạn đã biết ABS là gì chưa? '
}];

let contentNew = "";

for(let i=0;i<newRead.length;i++){
    if(newRead[i].static){
        contentNew += `<div class="card mb-3">
                <img src="${newRead[i].image}" class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title fw-bold" style="font-size:15px;"><span style="margin-right: 10px; color:#7c7c7c">${newRead[i].id}</span><a href="" class="text-decoration-none text-dark">${newRead[i].title}</a></h5>
                </div>
            </div>`;
    }else{
        contentNew += `<div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0">
                    <div class="col-md-1" style ="color:#7c7c7c">
                        <p style="font-weight: bold">${newRead[i].id}</p>
                    </div>
                    <div class="col-md-4">
                        <img
                        src="${newRead[i].image}"
                        class="img-fluid rounded-start"
                        alt="..."
                        />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                        <h5 class="card-title fw-bold" style="font-size:14px"><a href="" class="text-decoration-none text-dark">${newRead[i].title}</a></h5>
                        </div>
                    </div>
                    </div>
                </div>`;
    }
}

document.getElementById("newread").innerHTML = contentNew;

// tin tức  
const car = [{
    image:'assets/img45.webp',
    title: ' Mazda MX-5 Kizuna 2023 trình làng Anh Quốc với mui xe đặc biệt ',
},{
    image: 'assets/img46.webp',
    title: ' Gần 500 chiếc xe Mercedes GLE bị triệu hồi tại Việt Nam '
},{
    image:'assets/img47.webp',
    title:' 5 điểm nổi bật của Honda City 2023 '
},{
    image:'assets/img48.webp',
    title: ' Review siêu phẩm SUV Ferrari Purosangue 2023 '
}];

let itemCar ="";
for(let i =0;i<car.length;i++){
    itemCar+=`<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${car[i].image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title fw-bold" style="font-size:16px;"><a href="" class="text-decoration-none text-dark">${car[i].title}</a></h5>
                    </div>
                </div>
                </div>
            </div>`;
}

document.getElementById("newcar").innerHTML = itemCar;

// promotion
const promotion =[{
    image: 'assets/img49.webp',
    title:' Tránh mua ô tô vào những thời điểm nào ',
    static: true
},{
    image: 'assets/img50.webp',
    title: ' Honda CR-V giảm giá sốc lên đến 160 triệu đồng '
},{
    image: 'assets/img51.webp',
    title: ' Mitsubishi tung thêm ưu đãi tặng bộ lọc không khí cho khách hàng mua xe trong tháng 6 '
},{
    image: 'assets/img52.webp',
    title: ' Loạt xe ưu đãi hấp dẫn trên hàng trăm triệu đồng '
},{
    image: 'assets/img53.webp',
    title: ' Chi tiết bảng giá và ưu đãi của Mitsubishi trong tháng 3/2021 '
},{
    image: 'assets/img54.webp',
    title: ' Cơ hội nhận ưu đãi mua ô tô sau Tết lên đến 50 triệu đồng '
},{
    image:'assets/img55.webp',
    title: ' Suzuki tung ưu đãi đầu năm dành cho Ertiga Sport '
}];

let listPromotion ="";
for(let  i = 0; i<promotion.length;i++){
    if(promotion[i].static){
        listPromotion += `<div class="card mb-3">
        <img src="${promotion[i].image}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title fw-bold" style="font-size:15px;"><a href="" class="text-decoration-none text-dark">${promotion[i].title}</a></h5>
        </div>
    </div>`;
    }else{
        listPromotion += `<div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
        <div class="col-md-4">
            <img
            src="${promotion[i].image}"
            class="img-fluid rounded-start"
            alt="..."
            />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:14px;"><a href="" class="text-decoration-none text-dark">${promotion[i].title}</a></h5>
            </div>
        </div>
        </div>
    </div>`;
    }
}

document.getElementById("listPromotion").innerHTML = listPromotion;

// sale cars

const saleCar = [{
    image: 'assets/img56.webp',
    name: 'Honda CR-V 1.5 L 2021',
    trip: '60,000 km',
    price: '885 triệu'
},{
    image: 'assets/img57.webp',
    name: 'Toyota Fortuner 2.7V xe nhập bản full xăng ĐK 2017',
    trip: '66,000 km',
    price: '715 triệu'
},{
    image: 'assets/img58.webp',
    name: 'Xe gia đình Mg 5 2022 lux lên Merc nên bán lại',
    trip: '10,000 km',
    price: '469 triệu'
},{
    image: 'assets/img59.webp',
    name: 'Kia K5 2022 2.0 Premium',
    trip:'21,000 km',
    price: '750 triệu'
},{
    image: 'assets/img60.webp',
    name: 'Suzuki XL7 1.5 AT, bản GLX Đỏ 2021 - Đỏ',
    trip:'74,325 km',
    price:'490 triệu'
},{
    image: 'assets/img61.webp',
    name: 'bán xe chevrolet spark 2011',
    trip: '158,632 km',
    price: '150 triệu'
},{
    image: 'assets/img62.webp',
    name: 'Mazda 3 2019 Sport 1.5L Deluxe',
    trip: '36,000 km',
    price:'545 triệu'
},{
    image: 'assets/img63.webp',
    name:'Toyota Innova G 2009',
    trip:'0 km',
    price: '150 triệu'
},{
    image: 'assets/img64.webp',
    name: 'Kia Morning 2023 Đỏ Tự động',
    trip:'1,000 km',
    price:'120 triệu'
},{
    image:'assets/img65.webp',
    name: 'Bán cx5 2019 fom 2020 sieu mới',
    trip: '58,000 km',
    price: '680 triệu'
},{
    image: 'assets/img66.webp',
    name: 'Fadil giá rẻ có cho vay',
    trip:'48,000 km',
    price: '292 triệu'
},{
    image: 'assets/img67.webp',
    name: 'Toyota Innova 2.0E 2017 số tự động',
    trip: '109,634 km',
    price: '569 triệu'
}];

let listCarsale = "";
for(let i=0;i<saleCar.length;i++){
    listCarsale += `
    <div class="card mb-3 d-flex" style="flex-basis: calc(33.33% - 20px); flex-direction: column; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <img src="${saleCar[i].image}" class="card-img-top" alt="..." style="width: 100%; height: 170px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
        <div class="card-body" style="padding: 15px;">
            <h5 class="card-title fs-6"><a href="" class="text-decoration-none text-dark">${saleCar[i].name}</a></h5>
            <p class="card-text"><small class="text-muted fs-6">${saleCar[i].trip}</small></p>
            <p class="card-text fs-6" style="color:red; font-weight: bold;">${saleCar[i].price}</p>
        </div>
    </div>`;

}

document.getElementById("listSaleCars").innerHTML = listCarsale;

// hãng xe
// toyota
const toyotaCar = [{
    name: 'Xe Toyota Vios'
},{
    name: 'Xe Toyota Veloz'
},{
    name:'Xe Toyota Fortuner'
},{
    name: 'Xe Toyota Corolla Cross'
}];

let itemToyotaCar = "";
for(let i=0;i<toyotaCar.length;i++){
    itemToyotaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${toyotaCar[i].name}</a></p>`;
}

document.getElementById("toyota").innerHTML = itemToyotaCar;

// mazda
const mazdaCar = [{
    name: 'Xe Mazda CX-5'
},{
    name: 'Xe Mazda CX-8'
},{
    name:'Xe Mazda 2'
},{
    name: 'Xe Mazda 3'
}];

let itemMazdaCar = "";
for(let i=0;i<toyotaCar.length;i++){
    itemMazdaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${mazdaCar[i].name}</a></p>`;
}

document.getElementById("mazda").innerHTML = itemMazdaCar;

// KIA
const kiaCar = [{
    name: 'Xe Kia K3'
},{
    name: 'Xe Kia Seltos'
},{
    name:'Xe Kia Sorento'
},{
    name: 'Xe Kia Sonet'
}];

let itemKiaCar = "";
for(let i=0;i<kiaCar.length;i++){
    itemKiaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${kiaCar[i].name}</a></p>`;
}

document.getElementById("KIA").innerHTML = itemKiaCar;

// Ford
const fordCar = [{
    name: 'Xe Ford Everest'
},{
    name: 'Xe Ford Eco Sport'
},{
    name:'Xe Ford Territory'
},{
    name: 'Xe Ford Ranger'
}];

let itemFordCar = "";
for(let i=0;i<fordCar.length;i++){
    itemFordCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${fordCar[i].name}</a></p>`;
}

document.getElementById("Ford").innerHTML = itemFordCar;

// Huyndai
const huyndaiCar = [{
    name: 'Xe Hyundai Accent'
},{
    name: 'Xe Hyundai Santafe'
},{
    name:'Xe Hyundai i10'
},{
    name: 'Xe Hyundai Tucson'
}];

let itemHuyndaiCar = "";
for(let i=0;i<huyndaiCar.length;i++){
    itemHuyndaiCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${huyndaiCar[i].name}</a></p>`;
}

document.getElementById("huyndai").innerHTML = itemHuyndaiCar;

// Mitsubishi

const mitsubishiCar = [{
    name: 'Xe Mitsubishi Xpander'
},{
    name: 'Xe Mitsubishi Attage'
},{
    name:'Xe Mitsubishi Triton'
},{
    name: 'Xe Mitsubishi Outlander'
}];

let itemMitsubishiCar = "";
for(let i=0;i<mitsubishiCar.length;i++){
    itemMitsubishiCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${mitsubishiCar[i].name}</a></p>`;
}

document.getElementById("mitsubishi").innerHTML = itemMitsubishiCar;

// Honda
const hondaCar = [{
    name: 'Xe Honda City'
},{
    name: 'Xe Honda Civic'
},{
    name:'Xe Honda CR-V'
},{
    name: 'Xe Honda HR-V'
}];

let itemHondaCar = "";
for(let i=0;i<hondaCar.length;i++){
    itemHondaCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${hondaCar[i].name}</a></p>`;
}

document.getElementById("honda").innerHTML = itemHondaCar;

// BMW
const bmwCar = [{
    name: 'Xe BMW i8'
},{
    name: 'Xe BMW X1'
},{
    name:'Xe BMW X5'
},{
    name: 'Xe BMW X6'
}];

let itemBMWCar = "";
for(let i=0;i<bmwCar.length;i++){
    itemBMWCar += `<p><a href="#" class="text-decoration-none text-dark" style="font-size:14px;">${bmwCar[i].name}</a></p>`;
}

document.getElementById("bmw").innerHTML = itemBMWCar;

// backtotop
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTop.classList.remove('hidden');
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
        backToTop.classList.add('hidden');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// form bán xe


let selectElement = document.getElementById("address");
let values = ['Chọn thành phố', 'TP Hồ Chí Minh', 'Đà Nẵng', 'Hà Nội'];
values.forEach(function(value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    selectElement.appendChild(option);
});


const inforSaleCar = () =>{
    let name = document.getElementById("name").value;
    let telephone = document.getElementById("telephone").value;
    let address = document.getElementById("address").value;
    
    let output = 'Họ tên: ' + name + '\n' + 'Số điện thoại: ' + telephone + '\n' + 'Địa chỉ: ' + address;
    
    alert(output);
    
    document.getElementById("name").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("address").selectedIndex = 0;
}





