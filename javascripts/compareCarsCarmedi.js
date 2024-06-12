// hot new
const hotnew = [{
    image: 'assets/img68.png',
    text: ' Mazda CX-30 vs Mazda CX-5: So sánh hai mẫu xe SUV của Mazda ',
    review: '  Mazda có lịch sử liên tục cập nhật và nâng cấp các mẫu xe của mình. Với sự tăng trưởng của phân khúc SUV trên toàn cầu, Mazda CX-30 và Mazda CX-5 có tiềm năng để tiếp tục cạnh tranh và ghi nhận thành công trong thị trường xe hơi. ',
    isObject: "So sánh xe"
},{
    image: 'assets/img69.png',
    text: ' So sánh Mazda CX-5 2023 với Toyota RAV4 2023 ',
    review: '  Mazda CX-5 2023 và Toyota RAV4 2023 là hai mẫu xe SUV phổ biến trong phân khúc, nhưng có những khác biệt đáng chú ý. Cùng Carmudi tìm hiểu thêm về sự so sánh chi tiết giữa Mazda CX-5 2023 và Toyota RAV4 2023 để quyết định xem xe nào phù hợp với bạn nhất.  '
},{
    image: 'assets/img70.png',
    text: '  Mazda 3 hatchback vs. Mazda 3 sedan: So sánh và lựa chọn phong cách xe  ',
    review: '  Mazda 3 hatchback và Mazda 3 sedan là hai phiên bản xe cùng thuộc dòng Mazda 3, tuy nhiên, chúng có những khác biệt về thiết kế và tính năng. Sau đây là một số điểm so sánh giữa Mazda 3 hatchback và Mazda 3 sedan.  '
},{
    image: 'assets/img71.png',
    text: '  Audi Q8 vs Audi Q7: Những điểm khác biệt và sự lựa chọn của bạn  ',
    review: '  Audi Q8 và Audi Q7 đều là những mẫu xe SUV đẳng cấp với những ưu điểm riêng của mình. Sự lựa chọn giữa hai mẫu xe này phụ thuộc vào nhu cầu và sở thích của từng khách hàng. Sau đây, Carmudi sẽ đưa ra những so sánh cho hai dòng xe này. Chúng ta hãy cùng nhau tìm hiểu nhé!  '
}];


let cardItem = '';
for(let i=0;i<hotnew.length;i++){
    if(hotnew[i].isObject){
        cardItem +=  `<div class="row">
        <div class="card mb-3 p-0" style="max-width: 100%; margin-left:12px">
        <div class="row g-0">
        <div class="col-md-7">
            <img  src="${hotnew[i].image}" class="img-fluid rounded-start h-100"  alt="...">
        </div>
        <div class="col-md-5">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:24px;"><a href="#" class="text-decoration-none text-dark">${hotnew[i].text}</a></h5>
            <p class="card-text"  style="font-size:14px;">${hotnew[i].review}</p>
            <p class="card-text"  style="font-size:14px; color:#7c7c7c;">${hotnew[i].isObject}</p>
            </div>
        </div>
        </div>
    </div>
        </div>`;
    }else{
        cardItem += `<div class="col-md-4">
        <div class="card mb-3" style="height: 300px;">
            <img src="${hotnew[i].image}" class="card-img-top w-100" style="height:150px" alt="...">
            <div class="card-body d-flex flex-column justify-content-center" style="margin:0px;">
                <h5 class="card-title fw-bold m-0" style="font-size:16px;"><a href="#" class="text-decoration-none text-dark">${hotnew[i].text}</a></h5>
                <p class="card-text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${hotnew[i].review}</p>
            </div>
        </div>
    </div>
    
    `;
    }
}
// console.log(cardItem);
document.getElementById("hotnew").innerHTML = cardItem;





//listCompare

const listItem = [{
    image: 'assets/img72.png',
    title: 'So sánh Subaru Forester 2023 và Honda CR-V 2023',
    content: 'Subaru Forester 2023 và Honda CR-V 2023 đều là những mẫu xe SUV gia đình phổ biến trên thị trường hiện nay. Với thiết kế hấp dẫn, tiện nghi và tính năng an toàn, cả hai mẫu xe này đều hướng đến những người tiêu dùng đang tìm kiếm một chiếc xe đáng tin cậy và giá hợp lý.'
},{
    image: 'assets/img73.png',
    title: 'Sự khác biệt của hệ thống giữa các dòng xe Audi và BMW, Mercedes Benz',
    content: 'Việc tìm hiểu sự khác biệt giữa các dòng xe của các hãng ô tô như Audi, BMW và Mercedes-Benz là rất quan trọng và cần thiết để giúp người tiêu dùng có thể lựa chọn được chiếc xe phù hợp với nhu cầu và sở thích của mình mà không phải đối mặt với những rủi ro không đáng có.'
},{
    image: 'assets/img74.png',
    title: 'Với hơn 3 tỷ đồng nên chọn Audi Q7 hay Volvo XC90 cho SUV 7 chỗ hạng sang',
    content:' Nếu bạn đang tìm kiếm một SUV 7 chỗ hạng sang với giá hơn 3 tỷ đồng, thì cả Audi Q7 và Volvo XC90 đều là những lựa chọn tốt. Tuy nhiên, phù thuộc vào nhu cầu của mỗi người mà lựa chọn dòng xe cho phù hợp. Hãy tham khảo thông tin dười đây sẽ giúp bạn đưa ra quyết định đúng đắn.'
},{
    image: 'assets/img75.png',
    title: 'So sánh Acura Integra Type S và Honda Civic Type R: Chiếc nào xứng đáng hơn ',
    content:' Cả Acura Integra Type S và Honda Civic Type R mới đều được trang bị động cơ tăng áp 2.0 lít và nhiều tính năng tương đồng. Dưới đây là một số so sánh để tìm ra chiếc xe mạnh mẽ và giá cả hợp lý nhất. Cùng Carmudi tìm hiểu nhé!'
},{
    image: 'assets/img76.png',
    title: 'Top 10 mẫu xe ô tô cũ đáng mua nhất năm 2023',
    content:'Xe ô tô cũ giá rẻ được khách hàng lựa chọn phổ biến như một khoản chi tiêu tiết kiệm cho mình khi có mức tài chính vừa đủ nhưng vẫn muốn mua. Bài viết hôm nay, Carmudi giới thiệu đến bạn đọc Top 10 mẫu xe ô tô cũ được nhiều người ưa chuộng nhất hiện nay. Cùng theo dõi nhé'
},{
    image: 'assets/img77.png',
    title: 'Hyundai Grand i10 hay Kia Morning nếu muốn xe nhỏ giá rẻ?',
    content: 'Nhờ sở hữu thiết kế nhỏ gọn cùng giá bán rẻ bèo, thiết kế trẻ trung hiện đại Hyundai Grand i10 và Kia Morning đang là hai mẫu xe cỡ nhỏ bán chạy nhất thị trường Việt Nam. Hãy cùng Carmudi tìm hiểu sự tương đồng và khác biệt của hai mẫu xe này: '
},{
    image: 'assets/img78.png',
    title: 'Honda City và Hyundai Accent: So sánh về nội thất',
    content:' Ở phân khúc sedan hạng B tại Việt nam, nếu như Toyota Vios khẳng định vị thế nhờ động cơ bền bỉ, thiết kế thực dụng cùng thương hiệu mạnh, thì Honda City và Hyundai Accent lại là hai mẫu xe lấy lợi thế về trang bị tiện nghi làm ưu thế cạnh tranh.'
},{
    image: 'assets/img79.png',
    title: 'Mitsubishi Xpander và Suzuki XL7 bản 2021: Chọn cái nào?',
    content:'Mitsubishi Xpander và Suzuki XL7 là hai mẫu xe có doanh số nổi bật trong phân khúc MPV 7 chỗ. Vậy sự khác biệt của chúng như thế nào mà chúng lại có thể có doanh số bán hàng nổi bật nhất phân khúc?'
},{
    image: 'assets/img80.png',
    title: 'Top 5 chiếc xe Toyota Corolla cũ đáng mua nhất 2023',
    content:'Toyota Corolla nằm trong số những chiếc xe đáng tin cậy và có giá phải chăng nhất. Nếu bạn dự định mua một chiếc Toyota Corolla cũ cho nhu cầu đi lại của mình, thì có nhiều mẫu năm sản xuất khác nhau dưới đây để bạn có thể cân nhắc.'
},{
    image: 'assets/img81.png',
    title: 'So sánh BMW 230i với Toyota GR Supra 2.0 2022',
    content:'Spotlight của chúng ta hôm nay sẽ là 2 ứng cử viên coupe cho cuộc chạm trán đáng mong đợi. Với hai bên chạm trán chính là BMW 230i 2022 và Toyota GR Supra 2.0 2022.'
},{
    image: 'assets/img82.png',
    title: 'Hyundai Elantra N Vs Subaru WRX Limited 2022',
    content:'Ngay khi Subaru WRX bắt đầu phát triển toàn diện, thì sự xuất hiện của Hyundai Elantra N phiên bản mới đầy trẻ trung trở thành một cuộc chạm trán thú vị giữa hai thương hiệu.'
},{
    image: 'assets/img83.png',
    title: 'So sánh sedan và hatchback?',
    content:'Xe sedan và hatchback là hai dòng xe được người dùng Việt Nam tin chọn, bởi cả hai đều có kích thước nhỏ gọn, di chuyển trong cung đường đô thị dễ dàng, linh hoạt.'
},{
    image: 'assets/img84.png',
    title: 'Hyundai Tucson dẫn đầu phân khúc, Ford Territory được kỳ vọng nhiều ',
    content:'Phân khúc SUV hạng C hiện đang có xáo trộn nhẹ trước khi cái tên Ford Territory được kỳ vọng sẽ tạo nên cú hích doanh số trong những tháng cuối năm.'
},{
    image: 'assets/img85.png',
    title: 'MPV 7 chỗ, mua Suzuki Ertiga Hybrid hay Toyota Veloz Cross ',
    content:'Suzuki Ertiga Hybrid đang tạo ra áp lực không nhỏ lên Toyota Veloz Cross ở phân khúc MPV 7 chỗ cỡ nhỏ nhờ bổ sung hàng loạt công nghệ mới.'
},{
    image: 'assets/img86.png',
    title: 'SUV 7 chỗ giá tầm 1 tỷ đồng, chọn Isuzu mu-X hay Toyota Fortuner',
    content:'Isuzu mu-X Prestige 1.9 AT 4x2 nhiều trang bị cùng mức giá bán dễ chịu. Trong khi đó, Toyota Fortuner Legender 2.4 AT 4x2 có hiệu suất động cơ tốt hơn.'
},{
    image: 'assets/img87.png',
    title: "Đánh giá xe Ford EcoSport",
    content:'Ford EcoSport hiện tại là cựu vương trong phân khúc SUV đô thị cỡ nhỏ tại Việt Nam, sau khi Hyundai Kona và Kia Seltos lần lượt ra mắt. Tuy nhiên, mẫu xe này vẫn có những ưu điểm vượt trội mà hai đối thủ trên cũng cần phải dè chừng'
},{
    image: 'assets/img88.png',
    title: 'Khách hàng sẽ chọn Vinfast Fadil 2021 an toàn, mạnh mẽ hay Kia Morning 2021 tiện nghi, thời trang?',
    content:' Theo các đánh giá của các chuyên gia trong ngành ô, VinFast Fadil 2020 và Kia Morning 2020 quả thực là những mẫu xe tiềm năng mang lại sức cạnh tranh khốc liệt trong phân khúc hạng A.'
},{
    image: 'assets/img89.png',
    title: 'Cuộc chạm trán giữa Mitsubishi Xpander 2020 và Kia Rondo 2020',
    content:' Điều gì đã giúp Mitsubishi Xpander nhanh chóng vươn lên dẫn đầu về doanh số ngay sau khi ra mắt và dồn Kia Rondo vào thế khó? Hãy cùng theo dõi bài viết dưới đây nhé!'
},{
    image: 'assets/img90.png',
    title: 'So sánh hai dòng xe MPV lai SUV mới Mitsubishi Xpander Cross 2020 và Suzuki XL7 2020',
    content:'Mitsubishi Xpander Cross 2020 và Suzuki XL7 2020 là hai đối thủ cạnh tranh trực tiếp trong dòng MPV lai SUV. Chính vì thế cuộc đua giữa hai mẫu xe này là khó dự đoán tại thị trường Việt Nam'
},{
    image: 'assets/img91.png',
    title: 'Ford Everest 2020 và Toyota Fortuner 2020: Lựa chọn nào tốt hơn?',
    content:'Cuộc chạm trán giữa Ford Everest 2020 và Toyota Fortuner 2020 vô cùng cân sức bởi mỗi xe đều có những lợi thế nhất định để thu hút người tiêu dùng.'
},{
    image: 'assets/img92.png',
    title: 'Đại chiến xe Nhật: Mazda 6 2020 và Honda Accord 2020',
    content:'Cả hai dòng xe Mazda 6 2020 và Honda Accord 2020 đều có thiết kế mới trẻ trung và công nghệ hiện đại ngập tràn thu hút. Cho nên, điều quyết định đến doanh số của hai dòng này tại Việt Nam chính là giá cả.'
},{
    image: 'assets/img93.png',
    title: 'Sự đối đầu của xe Nhật và Châu Âu: Toyota Fortuner 2020 và Peugeot 5008 2020',
    content:'Dù không cùng phân khúc, nhưng ở mức giá từ 1,3 - 1,5 tỷ đồng là cuộc cạnh tranh khá thú vị giữa Toyota Fortuner 2020 và Peugeot 5008 2020. Chúng ta cùng phân tích, đặt lên bàn cân 2 dòng xe thuộc phân khúc SUV 7 chỗ kkhá cạnh tranh này.'
},{
    image: 'assets/img94.png',
    title: 'Giữa Mazda 3 2020 và Kia Cerato 2020 đâu là chiếc xe thắng về doanh số?',
    content:' Mazda 3 2020 và Kia Cerato 2020 đều được các chuyên gia đánh giá cao trong phân khúc xe hạng C tại thị trường ô tô Việt Nam. Cả hai mẫu xe đều có nhiều điểm nổi bật, đáp ứng nhu cầu đa dạng của khách hàng. Đặc biệt đây là hai mẫu xe luôn cạnh tranh quyết liệt trên đường đua doanh số.'
},{
    image: 'assets/img95.png',
    title: 'Suzuki XL7 2020 và Suzuki Ertiga 2020 cùng được đặt lên bàn cân so sánh.',
    content:'Cả Suzuki XL7 2020 và Suzuki Ertiga 2020 đều sở hữu nhiều điểm thu hút nổi bật và một số nhược điểm khác nhau. Dưới đây là bài đánh giá so sánh về hai mẫu xe đén từ Nhật Bản này.'
}];

let listCompa = "";
for (let i = 0; i < listItem.length; i++) {
    listCompa += `<div class="card mb-3 border-0" style="max-width: 100%;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${listItem[i].image}" class="img-fluid rounded-start w-100 h-100%" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title"><a href="#" class="text-decoration-none text-dark">${listItem[i].title}</a></h5>
                            <p class="card-text">${listItem[i].content}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr class="m-3">`    
}

document.getElementById("listCompare").innerHTML = listCompa;



//new and read
const itemContentMost = [{
    image: 'assets/img96.png',
    id: '01',
    title: ' Chevrolet Trailblazer và Hyundai SantaFe: Xe nào nhiều công nghệ hơn? ',
    year:'5 năm trước'
},{
    image: 'assets/img97.png',
    id:'02',
    title: ' So sánh Honda Jazz 2018 và Toyota Yaris 2018: Kỳ phùng địch thủ ',
    year:'5 năm trước'
},{
    image: 'assets/img98.png',
    id: '03',
    title: '  So sánh Suzuki Vitara 2018 và Hyundai Kona 2018: Không thích Ford Ecosport thì chọn xe nào?  ',
    year:'5 năm trước'
},{
    image:'assets/img99.png',
    id:'04',
    title: '  So sánh Mazda CX-3 2018 và Huyndai i20 Active 2018: Chọn SUV đô thị nào?  ',
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
                    <h5 class="card-title"><a href="#" class="text-decoration-none text-dark fw-bold" style="font-size:15px;">${itemContentMost[i].title}</a></h5>
                    <p class="card-text"><small class="text-muted">${itemContentMost[i].year}</small></p>
                    </div>
                </div>
                </div>
                <hr class="m-0">
            </div> `;
    
}

document.getElementById("newInfor").innerHTML = readContentMost;

// Video
// promotion
const promotion =[{
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
for(let  i = 0; i<promotion.length;i++){
    if(promotion[i].static){
        listPromotion += `<div class="card mb-3 border-0">
        <img src="${promotion[i].image}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title"><a href="#" class="text-decoration-none text-dark fw-bold" style="font-size:15px;">${promotion[i].title}</a></h5>
        </div>
    </div>`;
    }else{
        listPromotion += `<div class="card mb-3 border-0" style="max-width: 540px">
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
            <h5 class="card-title"><a href="#" class="text-decoration-none text-dark fw-bold" style="font-size:15px;">${promotion[i].title}</a></h5>
            </div>
        </div>
        </div>
    </div>`;
    }
}

document.getElementById("listPromotion").innerHTML = listPromotion; 


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
    itemToyotaCarCompare += `<p style="font-size:14px"><a href="#" class="text-decoration-none text-dark">${toyotaCarCompare[i].name}</a></p>`;
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
    itemMazdaCarCompare += `<p style="font-size:14px"><a href="#" class="text-decoration-none text-dark">${mazdaCarCompare[i].name}</a></p>`;
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
    itemKiaCarCompare += `<p style="font-size:14px"> <a href="#" class="text-decoration-none text-dark">${kiaCarCompare[i].name}</a></p>`;
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
    itemFordCarCompany += `<p style="font-size:14px"> <a href="#" class="text-decoration-none text-dark">${fordCarCompare[i].name}</a></p>`;
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
    itemHuyndaiCarCompare += `<p style="font-size:14px"> <a href="#" class="text-decoration-none text-dark">${huyndaiCarCompare[i].name}</a></p>`;
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
    itemMitsubishiCarCompare += `<p style="font-size:14px"> <a href="#" class="text-decoration-none text-dark">${mitsubishiCarCompare[i].name}</a></p>`;
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
    itemHondaCarCompare += `<p style="font-size:14px"> <a href="#" class="text-decoration-none text-dark">${hondaCarCompare[i].name}</a></p>`;
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
    itemBMWCarCompare += `<p style="font-size:14px"> <a href="#" class="text-decoration-none text-dark">${bmwCarCompare[i].name}</a></p>`;
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





