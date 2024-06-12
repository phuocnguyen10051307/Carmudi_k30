const card = [{
    image: 'assets/img139.png',
    text: '   Hyundai SantaFe 2022 giảm giá gần 200 triệu đồng? Người mua đang quá hời   ',
    review: '    Nguồn cung Hyundai SantaFe bắt đầu dư dả nên khác với 2022 thì năm 2023, xe có nhiều chương trình khuyến mãi đến từ đại lý hơn. Giá xe bắt đầu giảm, đây là lúc nhiều người mua đợi chờ. Cùng Carmudi tìm hiểu nhé.  ',
    status: 'Thị trường'
},{
    image: 'assets/img140.png',
    text: '   Ford Territory gây ấn tượng trong bảng xếp hạng xe gầm cao cỡ C dù chỉ á quân   ',
    review: '    Là mẫu xe gia nhập muộn nhất phân khúc, Ford Territory chiếm chỗ Honda CR-V và Hyundai Tucson để đua ngôi đầu với Mazda CX-5. Đây là một điều khá ấn tượng trong bảng xếp hạng xe gầm cao cỡ C. Cùng Carmudi tìm hiểu nhé.    '
},{
    image: 'assets/img141.png',
    text: '   Top những xe cũ trong tầm giá 200-250 triệu  ',
    review: '   Việc mua một chiếc xe ô tô cũ với mức giá khoảng 200 triệu đồng là một quyết định quan trọng và có thể ảnh hưởng đến tài chính cá nhân của bạn trong một thời gian dài. Trước khi quyết định mua xe, bạn cần phải cân nhắc và tìm hiểu kỹ thông tin để đưa ra quyết định đúng đắn. Vậy 200 triệu nên mua xe ô tô cũ nào?    '
},{
    image: 'assets/img142.png',
    text: '    Toyota Camry sẽ bị trục xuất tại Nhật Bản sau 43 năm  ',
    review: '   Toyota Camry sẽ bị trục xuất tại Nhật Bản sau 43 năm    '
}];


let cardItem = '';
for(let i=0;i<card.length;i++){
    if(card[i].status){
        cardItem += `<div class="row">
        <div class="card mb-3 p-0" style="max-width: 100%; margin-left:12px">
        <div class="row g-0">
        <div class="col-md-7">
            <img src="${card[i].image}" class="img-fluid rounded-start h-100 w-100" alt="...">
        </div>
        <div class="col-md-5">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:24px;"><a href="#" class="text-decoration-none text-dark">${card[i].text}</a></h5>
            <p class="card-text" style="font-size:14px;">${card[i].review}</p>
            <p class="card-text" style="font-size:14px; color:#7c7c7c;">${card[i].status}</p>
            </div>
        </div>
        </div>
    </div>
        </div>`;
    }else{
        cardItem += `<div class="col-md-4">
        <div class="card mb-3" style="height: 300px;">
            <img src="${card[i].image}" class="card-img-top w-100" style="height: 130px"  alt="...">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title fw-bold" style="font-size:16px;"><a href="#" class="text-decoration-none text-dark">${card[i].text}</a></h5>
                <p class="card-text" style="margin:0; max-height: 3em; overflow:hidden; text-overflow:ellipsis; white-space: nowrap; font-size:14px;">${card[i].review}</p>
            </div>
        </div>
    </div>
    `;
    }
}
// console.log(cardItem);
document.getElementById("introduce").innerHTML = cardItem;





//listCar

const listcar = [{
    image: 'assets/img143.png',
    title: '  Hyundai trình làng robot sạc xe điện  ',
    content: ' Phát minh tối ưu này có thể xóa tan nỗi e ngại khi sử dụng ô tô điện của nhiều người tiêu dùng. Và cùng khiến họ có một cách nhìn tích cực hơn đối với những chiếc xe điện của các thương hiệu!  '
},{
    image: 'assets/img144.png',
    title: '  Top 5 chiếc xe Sedan "ăn khách" nhất tháng 1/2023 ',
    content: ' Sedan là dòng xe 4 bánh được ưa chuộng nhất thế giới nhờ thiết kế nhỏ gọn và đa dụng. Thị trường xe hơi có biến động vào tháng 1/2023, hãy cùng Carmudi tìm hiểu Top 5 Sedan bán chạy nhất trong tháng đó.  '
},{
    image: 'assets/img145.png',
    title: '  “Vua giữ giá” Fortuner Legender lỗ nặng 30% sau 2 năm lăn bánh  ',
    content:'  Fortuner Legender từng thuộc top những chiếc SUV 7 chỗ bán chạy nhất trên thị trường. Một trong những đặc điểm mà người dùng yêu thích chiếc xe này vì khả năng giữ giá cao. Tuy nhiên, hiện nay, chỉ sau 2 năm lăn bánh, “vua giữ giá” Fortuner Legender lỗ tới 30%, món hời cho người mua lại?  '
},{
    image: 'assets/img146.png.webp',
    title: '  Top 5 mẫu xe SUV bán chạy tại Việt Nam 2022  ',
    content:'  Nhắc về xe SUV, khách hàng luôn nhớ về một chiếc xe có khả năng Off-road cao. Phù hợp với gia đình khi di chuyển xa, nội thất rộng rãi. Bài viết này sẽ giúp bạn có thể tham khảo top 5 loại xe SUV có lượt mua nhiều nhất.  '
},{
    image: 'assets/img147.png',
    title: '  Top 5 mẫu xe Sedan được khách Việt ưa chuộng ',
    content:'  Khi nhắc đến xe hơi, hình ảnh đầu tiên của nhiều người sẽ là dòng xe sedan. Đây là dòng xe 4 bánh phổ biến nhất thế giới. Sedan cũng là dòng xe được ưa chuộng, luôn dẫn đầu về doanh số bán hàng.  '
},{
    image: 'assets/img148.png',
    title: '  Công nghiệp ô tô hướng tới tương lai bền vững  ',
    content: '  Để đáp ứng xu hướng tương lai bền vững ngày càng phát triển, ngành công nghiệp ô tô đang thực hiện một số thay đổi lớn. Hãy cũng xem qua những chuyển biến về ngành trong tương lai!   '
},{
    image: 'assets/img149.png',
    title: '  Top thiết kế ô tô độc lạ có một không hai  ',
    content:'  Carmudi.vn đã tổng hợp danh sách thiết kế ô tô độc lạ có một không hai trị giá hàng triệu đô la không thể bỏ qua. Hãy cùng theo chân chúng tôi để khám phá những con xe thú vị sau đây nhé!  '
},{
    image: 'assets/img150.png',
    title: '  Thị trường siêu xe Việt Nam? Tổng hợp siêu xe ô tô và giá siêu xe 2022  ',
    content:'  Nhắc đến siêu xe là nói đến những cỗ máy hàng trăm mã lực trên tivi hoặc trong các đường đua. Tuy nhiên, thị trường siêu xe Việt Nam liên tục xuất hiện những mẫu xe hàng ô tô đầu thế giới thời gian qua, có cả những siêu xe chỉ giới hạn vài chục chiếc trên toàn cầu  '
},{
    image: 'assets/img151.png',
    title: '  Mỗi ngày, Việt Nam bán ra 1.300 ô tô  ',
    content:' Trong 9 tháng 2022, toàn thị trường ôtô Việt Nam tiêu thụ hơn 352.700 ôtô các loại, tương đương trung bình mỗi ngày khoảng 1.300 xe được bán ra. '
},{
    image: 'assets/img152.png',
    title: '  Xe bán tải tháng 9: Ford Ranger trở lại và lợi hại hơn xưa ',
    content:'  Sau khi thế hệ mới của Ford Ranger ra mắt, doanh số bán ra tăng được 876,7% so với tháng 8 trước đó, đè bẹp doanh số của 4 đối thủ còn lại.  '
},{
    image: 'assets/img153.png',
    title: '  Mazda Việt Nam tăng giá bán nhiều mẫu xe, có xe tăng 110 triệu đồng  ',
    content:' Chính sách giá mới và thay đổi các tùy chọn phiên bản xe Mazda được đại lý thông báo từ cuối tháng 9/2022, được áp dụng cho khách hàng mua xe từ tháng 10/2022.  '
},{
    image: 'assets/img154.png',
    title: '  Giá xăng tăng, người mua ô tô cũng tiếp tục tăng  ',
    content:'  Tính đến hết tháng 9, doanh số bán hàng của xe ô tô lắp ráp trong nước tăng 58% trong khi xe nhập khẩu tăng 55% so với cùng kì năm ngoái.  '
},{
    image: 'assets/img155.png',
    title: '  Lần đầu tiên, Toyota Veloz "vượt mặt" Mitsubishi Xpander   ',
    content:'  Kể từ khi ra mắt, đây là tháng đầu tiên trong năm nay Toyota Veloz có doanh số tốt nhất phân khúc, vượt lên trên mẫu xe đang giữ vị trí hot.  '
},{
    image: 'assets/img156.png',
    title: '  Hàng loạt ô tô điều chỉnh giá bán dịp cuối năm   ',
    content:'  Trong các tháng cuối năm, có nhiều mẫu xe dù rơi vào tình trạng khan hàng trầm trọng vẫn được hãng điều chỉnh tăng giá bán hàng chục triệu đồng.  '
},{
    image: 'assets/img157.png',
    title: '  Toyota Land Cruiser LC300 được điều chỉnh giá bán và vẫn "kèm lạc"  ',
    content:'  Từ 1/10/2022, Land Cruiser LC300 tăng giá bán thêm 96 triệu đồng, lên mức 4,196 tỉ đồng. Khách hàng muốn có suất giao xe ngay cần chi thêm “tiền lạc” hơn cả tỷ đồng.  '
},{
    image: 'assets/img158.png',
    title: 'Toyota Veloz chuẩn bị điều chỉnh giá bán, Mitsubishi Xpander không có xe để bán',
    content:'  Toyota Veloz có thể tăng 4-7 triệu đồng vào cuối năm, trong khi đối thủ Mitsubitshi Xpander không thay đổi giá dù đang khan hàng.  '
},{
    image: 'assets/img159.png',
    title: '  Loạt ô tô mới sẵn sàng ra mắt khách Việt trong tháng 10  ',
    content:'  Nhiều mẫu xe mới như Ford Territory, Hyundai Elantra hay KIA Carens,...đã sẵn sàng ra mắt và có thể đến tay khách Việt trong những ngày đầu tiên của tháng 10.  '
},{
    image: 'assets/img160.png',
    title: '  Volkswagen Passat dừng bán ở Việt Nam  ',
    content:'   Volkswagen Việt Nam xác nhận việc ngừng nhập khẩu Passat từ đầu năm 2022. Số ít các mẫu Passat còn tồn lại đang được các đại lý bán nốt.  '
},{
    image: 'assets/img161.png',
    title: '  MG HS tạm ngưng bán, hai mẫu xe còn lại tăng giá  ',
    content:'  Nhà phân phối MG Việt Nam thông báo ngưng bán HS do hết hàng, riêng ZS và MG5 tăng giá từ 9-14 triệu đồng.  '
},{
    image: 'assets/img162.png',
    title: '  Lý do MG HS ngừng bán tại Việt Nam ',
    content:' Nhà sản xuất ô tô Trung Quốc cho biết, MG HS vừa bị ngừng kinh doanh tại thị trường Việt Nam vì lý do không đủ nguồn cung.  '
},{
    image: 'assets/img163.png',
    title: '  Vios và Attrage được ưa chuộng nhất trong phân khúc sedan cỡ nhỏ  ',
    content:' Toyota Vios bán hơn 14.000 xe, áp đảo nhóm sedan cỡ B. Trong khi dó Mittsubishi Attrage được ưa chuộng nhất ở phân khúc B- với doanh số gần 5.000 xe.  '
},{
    image: 'assets/img164.png',
    title: '  Top 10 xe ô tô bán chậm nhất tháng 8: Suzuki tụt dốc mạnh  ',
    content:'  Trong tháng 8/2022, các thương hiệu Nhật như Honda, Suzuki, Isuzu có doanh số bán xe thấp, đều rơi vào các mẫu xe quen thuộc.  '
},{
    image: 'assets/img165.png',
    title: '  Phân khúc xe MPV tại Việt Nam ngày càng sôi động ',
    content:'   Mitsubishi Xpander vẫn nắm giữ ngôi đầu trong phân khúc MPV và trên toàn thị trường. Trong khi đó sự xuất hiện của các tân binh nhận được nhiều kỳ vọng từ cộng đồng.  '
},{
    image: 'assets/img166.png',
    title: '  Top 10 xe bán chạy tháng 8: Mitsubishi Xpander tiếp tục dẫn đầu, bỏ xa đối thủ  ',
    content:'  Mitsubishi Xpander vẫn tỏ ra là cái tên khó có thể đánh bại và dẫn đầu tuyệt đối trong danh sách 10 xe bán chạy tháng 8/2022.  '
}];

let listCompa = "";
for (let i = 0; i < listcar.length; i++) {
    listCompa += `<div class="card mb-3 border-0" style="max-width: 100%;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${listcar[i].image}" class="img-fluid rounded-start w-100 h-100%" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title fw-bold" style="font-size:18px;"><a href="#" class="text-decoration-none text-dark">${listcar[i].title}</a></h5>
                            <p class="card-text" style="font-size:14px;">${listcar[i].content}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr class="m-3">`    
}

document.getElementById("listCar").innerHTML = listCompa;



//bài viết đọc nhiều nhất
const itemContentMost = [{
    image: 'assets/img167.png',
    id: '01',
    title: '  Khám phá giá ô tô Lexus tháng 05-2018 ',
    year:'5 năm trước'
},{
    image: 'assets/img168.png',
    id:'02',
    title: '  Dòng ô tô hybrid đang mất dần sức hút   ',
    year:'1 năm trước'
},{
    image: 'assets/img169.png.webp',
    id: '03',
    title: '    Lối đi nào cho phân khúc xe hạng A tại Việt Nam    ',
    year:'1 năm trước'
},{
    image:'assets/img170.png',
    id:'04',
    title: '     Doanh số giảm mạnh, Grand i10 nhường ngôi vương cho Vios?     ',
    year:'5 năm trước'
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
                    <h5 class="card-title fw-bold" style="font-size:15px;"><a href="#" class="text-decoration-none text-dark">${itemContentMost[i].title}</a></h5>
                    <p class="card-text"><small class="text-muted">${itemContentMost[i].year}</small></p>
                    </div>
                </div>
                </div>
                <hr class="m-0">
            </div> `;
    
}

document.getElementById("contentMost").innerHTML = readContentMost;

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
        <h5 class="card-title fw-bold" style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${video[i].title}</a></h5>
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
            <h5 class="card-title fw-bold" style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${video[i].title}</a></h5>
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
    itemKiaCarCompare += `<p style="font-size:14px;"><a href="#" class="text-decoration-none text-dark">${kiaCarCompare[i].name}</a></p>`;
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

// // Lắng nghe sự kiện cuộn trang
// window.addEventListener('scroll', function() {
//     // Lấy vị trí hiện tại của khối di chuyển và footer
//     var block = document.querySelector('.moving-block');
//     var footer = document.querySelector('footer');
//     var blockRect = block.getBoundingClientRect();
//     var footerRect = footer.getBoundingClientRect();

//     // Tính toán khoảng cách giữa đáy của khối di chuyển và đỉnh của footer
//     var distanceToFooter = footerRect.top - blockRect.bottom;

//     // Kiểm tra xem người dùng đã cuộn đủ khoảng cách không
//     if (distanceToFooter > 100) { // Đổi giá trị 100 thành khoảng cách mong muốn
//         block.style.top = window.scrollY + 100 + 'px'; // Di chuyển khối với khoảng cách 100px
//     } else {
//         block.style.top = ''; // Đặt lại vị trí cố định khi đến gần footer
//     }
// });






