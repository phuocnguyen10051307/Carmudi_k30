const introduce = [{
    image: 'assets/img1.webp',
    text: ' Giá xe Mercedes-Benz GLA 2024: Giá lăn bánh, Thông số và Ưu đãi cập nhật mới tháng 03/2024 ',
    review: ' Khám phá bảng giá xe Mercedes GLA năm 2024 và đừng bỏ lỡ cơ hội tận hưởng những ưu đãi đặc biệt, độc quyền trong tháng 03/2024. Tìm hiểu về các chương trình khuyến mãi và giảm giá hấp dẫn, để có cơ hội sở hữu mẫu xe Mercedes GLA 2023 mà bạn luôn mong đợi! ',
    status:'Bảng giá xe ô tô'
},{
    image: 'assets/img7.webp',
    text: ' Giá xe Mercedes A-Class 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    review: ' Khám phá danh sách giá xe Mercedes A Class 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Mercedes A Class với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. '
},{
    image: 'assets/img2.webp',
    text: ' Giá xe BMW Z4 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    review: ' Khám phá danh sách giá xe BMW Z4 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe BMW Z4 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này '
},{
    image: 'assets/img3.webp',
    text: ' Giá xe Volvo V60 2024: Ưu đãi đặc biệt tháng 03/2024 ',
    review: ' Khám phá danh sách giá xe Volvo V60 2024 và tận hưởng ưu đãi đặc biệt tháng 03/2024. Đừng bỏ lỡ cơ hội mua xe Volvo V60 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. '
}];


let cardItem = '';
for(let i=0;i<introduce.length;i++){
    if(introduce[i].status){
        cardItem +=  `<div class="row">
        <div class="card mb-3 p-0" style="max-width: 100%; margin-left:12px">
        <div class="row g-0">
        <div class="col-md-7">
            <img src="${introduce[i].image}" class="img-fluid rounded-start h-100 w-100" alt="...">
        </div>
        <div class="col-md-5">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:24px;"><a href="#" class="text-decoration-none text-dark">${introduce[i].text}</a></h5>
            <p class="card-text" style="font-size:14px;">${introduce[i].review}</p>
            <p class="card-text" style="font-size:14px; color:#7c7c7c;">${introduce[i].status}</p>
            </div>
        </div>
        </div>
    </div>
        </div>`;
    }else{
        cardItem += `<div class="col-md-4">
        <div class="card mb-3 " style="height: 300px;">
            <img src="${introduce[i].image}" class="card-img-top" style="width: 100%; height: 250px;" alt="...">
            <div class="card-body px-3 py-3">
                <h5 class="card-title fw-bold" style="font-size:16px;"><a href="#" class="text-decoration-none text-dark">${introduce[i].text}</a></h5>
                <p class="card-text" style="margin:0; max-height: 3em; overflow:hidden; text-overflow:ellipsis; white-space: nowrap; font-size:14px;">${introduce[i].review}</p>
            </div>
        </div>
    </div>
    `;
    }
}
// console.log(cardItem);
document.getElementById("introduce").innerHTML = cardItem;





//listCar

const listItem = [{
    image: 'assets/img4.webp',
    title: '   Giá xe Volvo V60 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content: '  Khám phá danh sách giá xe Volvo V60 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Volvo V60 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img5.webp',
    title: '   Giá xe Wuling Hongguang Mini EV 2024: Ưu đãi đặc biệt tháng 04/2024 ',
    content: '  Khám phá Wuling HongGuang MiniEV - chiếc xe điện Mini đầu tiên tại Việt Nam, mang đến sự nhỏ gọn và tiết kiệm năng lượng. Tìm hiểu về tính năng độc đáo, hiệu suất vượt trội và khả năng di chuyển linh hoạt của xe này. Trải nghiệm tương lai xe hơi bền vững với Wuling HongGuang MiniEV!   '
},{
    image: 'assets/img6.webp',
    title: '   Giá xe Nissan Kicks e-power 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'  Khám phá danh sách giá xe Nissan Kicks e-power 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Nissan Kicks e-power với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img10.webp',
    title: '   Giá xe Suzuki Ciaz 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:'   Khám phá danh sách giá xe Suzuki Ciaz 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Suzuki Ciaz với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img171.png',
    title: '   Giá xe Suzuki Ertiga Hybrid 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:'   Khám phá danh sách giá xe Suzuki Ertiga Hybrid 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Suzuki Ertiga Hybrid với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img172.png',
    title: '   Giá xe Mitsubishi Outlander 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content: '   Khám phá danh sách giá xe Mitsubishi Outlander 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Mitsubishi Outlander với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.    '
},{
    image: 'assets/img173.png',
    title: '   Giá xe Mitsubishi Attrage 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'   Khám phá danh sách giá xe Mitsubishi Attrage 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Mitsubishi Attrage với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này    '
},{
    image: 'assets/img174.png',
    title: '   Giá xe Mitsubishi 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:' Khám phá danh sách giá xe Mitsubishi 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Mitsubishi Class với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.  '
},{
    image: 'assets/img175.png',
    title: '   Giá xe Mercedes-Benz EQS 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:' Khám phá danh sách giá xe Mercedes-Benz EQS 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Mercedes-Benz EQS với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.  '
},{
    image: 'assets/img176.png',
    title: '  Giá xe Mercedes-Benz E-Class 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:'   Khám phá danh sách giá xe Mercedes-Benz E-Class 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Mercedes-Benz E-Class với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img177.png',
    title: '   Giá xe BMW 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'  Khám phá danh sách giá xe BMW 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe BMW với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img178.png',
    title: '   Giá xe Volvo S90 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:'   Khám phá danh sách giá xe Volvo S90 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Volvo S90 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img179.png',
    title: '   Giá xe Volvo S60 2024: Ưu đãi đặc biệt tháng 04/2024    ',
    content:'  Khám phá danh sách giá xe Volvo S60 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Volvo S60 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img180.png',
    title: '  Giá xe Volkswagen T-Cross 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:'   Volkswagen T-Cross 2024 đang là một trong những lựa chọn hàng đầu cho những ai muốn kết hợp giữa thiết kế đẳng cấp, công nghệ tiên tiến và hiệu suất vận hành ấn tượng. Cùng Carmudi tìm hiểu giá Volkswagen T-Cross [yyyy nhé!   '
},{
    image: 'assets/img181.png',
    title: '   Giá xe Volkswagen Polo 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'   Khám phá danh sách giá xe Volkswagen Polo 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Volkswagen Polo với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img182.png',
    title: ' Giá xe VinFast VF 5 2024: Ưu đãi đặc biệt tháng 04/2024 ',
    content:'  Khám phá danh sách giá xe VinFast VF 5 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Wuling VinFast VF 5 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img183.png',
    title: '  Giá xe VinFast VF 8 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'   Khám phá danh sách giá xe VinFast VF 8 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe VinFast VF 8 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này. .  '
},{
    image: 'assets/img184.png',
    title: '   Giá xe Nissan Almera 2024: Giá lăn bánh, Thông số và Ưu đãi cập nhật mới tháng 04/2024   ',
    content:'    Khám phá danh sách giá xe Nissan Almera 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Nissan Almera với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img185.png.webp',
    title: ' Giá xe Volkswagen Passat 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'  Khám phá danh sách giá xe Volkswagen Passat 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Volkswagen Passat với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.  '
},{
    image: 'assets/img186.png',
    title: '  Giá xe Volkswagen 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:' Khám phá danh sách giá xe Volkswagen 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Volkswagen với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img187.png',
    title: '   Giá xe Subaru Forester 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'  Khám phá danh sách giá xe Subaru Forester 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Subaru Forester với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.  '
},{
    image: 'assets/img188.png.png',
    title: '  Giá xe Subaru BRZ 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:'  Khám phá danh sách giá xe Subaru BRZ 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe Subaru BRZ với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img189.png',
    title: '   Giá xe BMW X7 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    content:'    Khám phá danh sách giá xe BMW X7 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe BMW X7 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.   '
},{
    image: 'assets/img190.png',
    title: '  Giá xe BMW X6 2024: Ưu đãi đặc biệt tháng 04/2024   ',
    content:'  Khám phá danh sách giá xe BMW X6 2024 và tận hưởng ưu đãi đặc biệt tháng 04/2024. Đừng bỏ lỡ cơ hội mua xe BMW X6 với các chương trình khuyến mãi hấp dẫn đang chờ bạn trong tháng này.  '
}];

let listCompa = "";
for (let i = 0; i < listItem.length; i++) {
    listCompa += `<div class="card mb-3 border-0" style="max-width: 100%;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${listItem[i].image}" class="img-fluid rounded-start w-100 h-100%" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body pt-0">
                            <h5 class="card-title fw-bold" style="font-size:18px;"><a href="#" class="text-decoration-none text-dark">${listItem[i].title}</a></h5>
                            <p class="card-text" style="font-size:14px;">${listItem[i].content}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr class="m-3">`    
}

document.getElementById("listCar").innerHTML = listCompa;



//bài viết xem nhiều nhất
const itemContentMost = [{
    image: 'assets/img191.png',
    id: '01',
    title: '   Giá xe Mercedes Benz EQE 500 4Matic SUV 2024: Ưu đãi đặc biệt tháng 04/2024  ',
    year:'5 tháng trước'
},{
    image: 'assets/img192.png',
    id:'02',
    title: '   Giá xe BMW X4 2024: Ưu đãi đặc biệt tháng 04/2024    ',
    year:'5 tháng trước'
},{
    image: 'assets/img193.png',
    id: '03',
    title: '    Giá xe Mercedes EQB 2024: Ưu đãi đặc biệt tháng 04/2024    ',
    year:'5 tháng trước'
},{
    image:'assets/img194.png',
    id:'04',
    title: '     Giá xe BMW X5 2024: Ưu đãi đặc biệt tháng 04/2024      ',
    year:'5 tháng trước'
}];

let readContentMost = "";

for(let i=0;i<itemContentMost.length;i++){

    readContentMost += `<div class="card mb-3 border-0" style="max-width: 540px">
                <div class="row g-0">
                <div class="col-md-1" style ="color:#7c7c7c">
                <p style="font-weight: bold">${itemContentMost[i].id}</p>
                </div>
                <div class="col-md-4">
                    <img
                    src="${itemContentMost[i].image}"
                    class="img-fluid rounded-start h-75 w-100"
                    alt="..."
                    />
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                    <h5 class="card-title fw-bold" style="font-size: 15px;"><a href="#" class="text-decoration-none text-dark">${itemContentMost[i].title}</a></h5>
                    <p class="card-text"><small class="text-muted" style="font-size: 13px;">${itemContentMost[i].year}</small></p>
                    </div>
                </div>
                </div>
                <hr class="m-0">
            </div> `;
    
}

document.getElementById("newInfor").innerHTML = readContentMost;

// Video
const video =[{
    image: 'assets/img100.png',
    title:'  Cường "Đô La" drift khét mù trên chiếc Porsche hơn 20 tỷ đồng  ',
    static: true
},{
    image: 'assets/img101.png',
    title: '  Ô tô chạy bằng 2 bánh khi đụng xe cùng chiều chuyển làn ẩu  '
},{
    image: 'assets/img102.png',
    title: '  Dừng xe kiểu "bố đời" gây phẫn nộ, nữ tài xế nhận phạt nguội  '
},{
    image: 'assets/img103.png',
    title: '  Ngắm bãi đỗ xe tốt nhất châu Âu  '
},{
    image: 'assets/img104.png',
    title: '  Chiếc nón bảo hiểm 2 lần cứu mạng người đi xe máy  '
},{
    image: 'assets/img105.png',
    title: '  Nhầm chân phanh và chân ga khi sang đường, ôtô đâm thẳng vào nhà  '
},{
    image:'assets/img106.png',
    title: ' Chạy song song với xe tải, xe con bị kéo lê hàng chục met  '
}];

let listPromotion ="";
for(let  i = 0; i<video.length;i++){
    if(video[i].static){
        listPromotion += `<div class="card mb-3 border-0">
        <img src="${video[i].image}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title fw-bold" style="font-size:15px;"><a href="#" class="text-decoration-none text-dark">${video[i].title}</a></h5>
        </div>
    </div>`;
    }else{
        listPromotion += `<div class="card mb-3 border-0" style="max-width: 540px">
        <div class="row g-0">
        <div class="col-md-4">
            <img
            src="${video[i].image}"
            class="img-fluid rounded-start"
            alt="..."
            />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:15px;"><a href="#" class="text-decoration-none text-dark">${video[i].title}</a></h5>
            </div>
        </div>
        </div>
    </div>`;
    }
}

document.getElementById("listVideo").innerHTML = listPromotion; 


// hãng xe
// toyota
const toyotaCarCompare = [{
    name: 'Xe Toyota Vios'
},{
    name: 'Xe Toyota Veloz'
},{
    name:'Xe Toyota Fortuner'
},{
    name: 'Xe Toyota Corolla Cross'
}];

let itemToyotaCarCompare = "";
for(let i=0;i<toyotaCarCompare.length;i++){
    itemToyotaCarCompare += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${toyotaCarCompare[i].name}</a></p>`;
}

document.getElementById("toyotaCompare").innerHTML = itemToyotaCarCompare;

// mazda
const mazdaCarCompare = [{
    name: 'Xe Mazda CX-5'
},{
    name: 'Xe Mazda CX-8'
},{
    name:'Xe Mazda 2'
},{
    name: 'Xe Mazda 3'
}];

let itemMazdaCarCompare = "";
for(let i=0;i<mazdaCarCompare.length;i++){
    itemMazdaCarCompare += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${mazdaCarCompare[i].name}</a></p>`;
}

document.getElementById("mazdaCompare").innerHTML = itemMazdaCarCompare;

// KIA
const kiaCarCompare = [{
    name: 'Xe Kia K3'
},{
    name: 'Xe Kia Seltos'
},{
    name:'Xe Kia Sorento'
},{
    name: 'Xe Kia Sonet'
}];

let itemKiaCarCompare = "";
for(let i=0;i<kiaCarCompare.length;i++){
    itemKiaCarCompare += `<p>${kiaCarCompare[i].name}</p>`;
}

document.getElementById("KIACompare").innerHTML = itemKiaCarCompare;

// Ford
const fordCarCompare = [{
    name: 'Xe Ford Everest'
},{
    name: 'Xe Ford Eco Sport'
},{
    name:'Xe Ford Territory'
},{
    name: 'Xe Ford Ranger'
}];

let itemFordCarCompany = "";
for(let i=0;i<fordCarCompare.length;i++){
    itemFordCarCompany += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${fordCarCompare[i].name}</a></p>`;
}

document.getElementById("FordCompare").innerHTML = itemFordCarCompany;

// Huyndai
const huyndaiCarCompare = [{
    name: 'Xe Hyundai Accent'
},{
    name: 'Xe Hyundai Santafe'
},{
    name:'Xe Hyundai i10'
},{
    name: 'Xe Hyundai Tucson'
}];

let itemHuyndaiCarCompare = "";
for(let i=0;i<huyndaiCarCompare.length;i++){
    itemHuyndaiCarCompare += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${huyndaiCarCompare[i].name}</a></p>`;
}

document.getElementById("huyndaiCompare").innerHTML = itemHuyndaiCarCompare;

// Mitsubishi

const mitsubishiCarCompare = [{
    name: 'Xe Mitsubishi Xpander'
},{
    name: 'Xe Mitsubishi Attage'
},{
    name:'Xe Mitsubishi Triton'
},{
    name: 'Xe Mitsubishi Outlander'
}];

let itemMitsubishiCarCompare = "";
for(let i=0;i<mitsubishiCarCompare.length;i++){
    itemMitsubishiCarCompare += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${mitsubishiCarCompare[i].name}</a></p>`;
}

document.getElementById("mitsubishiCompare").innerHTML = itemMitsubishiCarCompare;

// Honda
const hondaCarCompare = [{
    name: 'Xe Honda City'
},{
    name: 'Xe Honda Civic'
},{
    name:'Xe Honda CR-V'
},{
    name: 'Xe Honda HR-V'
}];

let itemHondaCarCompare = "";
for(let i=0;i<hondaCarCompare.length;i++){
    itemHondaCarCompare += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${hondaCarCompare[i].name}</a></p>`;
}

document.getElementById("hondaCompare").innerHTML = itemHondaCarCompare;

// BMW
const bmwCarCompare = [{
    name: 'Xe BMW i8'
},{
    name: 'Xe BMW X1'
},{
    name:'Xe BMW X5'
},{
    name: 'Xe BMW X6'
}];

let itemBMWCarCompare = "";
for(let i=0;i<bmwCarCompare.length;i++){
    itemBMWCarCompare += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${bmwCarCompare[i].name}</a></p>`;
}
console.log(itemBMWCarCompare);
document.getElementById("bmwCompare").innerHTML = itemBMWCarCompare;

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





