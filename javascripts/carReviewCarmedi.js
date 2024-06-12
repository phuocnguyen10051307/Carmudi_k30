// hot new
const hotnewcar = [{
    image: 'assets/img107.png',
    text: '  Audi RS6 2018 cũ - Có nên mua cũ không?  ',
    review: '   Audi RS6 là một dòng xe thể thao cao cấp của hãng xe Đức Audi. Phiên bản năm 2018 của RS6 là một trong những phiên bản được yêu thích và đánh giá cao nhất. Vậy có nên mua Audi RS6 cũ không, cùng Carmudi tìm hiểu nhé!  ',
    isObject: 'Đánh giá xe'
},{
    image: 'assets/img108.png',
    text: '  Ford Tourneo Courier: Công nghệ tương lai cùng với tính thực dụng hiện tại  ',
    review: '   Ford vừa tung ra phiên bản mới của minivan Tourneo Courier, được xây dựng dựa trên nền tảng của Ford Fiesta. Mẫu xe này mang đến một thiết kế hình hộp độc đáo và được tích hợp nhiều cải tiến về công nghệ và tính thực dụng. Cùng Carmudi tìm hiểu nhé.   '
},{
    image: 'assets/img109.png',
    text: '  Toyota Wigo 2023: Giá & Thông số  ',
    review: '  Toyota Wigo 2023 tiếp tục mang đến sự nhỏ gọn, linh hoạt và tiết kiệm nhiên liệu, là một lựa chọn phù hợp cho những người dùng tìm kiếm một chiếc xe nhỏ gọn cho di chuyển trong đô thị.   '
},{
    image: 'assets/img110.png',
    text: '   Peugeot 2008 GT Line 2023: Thông số, Hình ảnh & Giá bán mới nhất 04/2024  ',
    review: '   Nguyễn Thị Oanh, vận động viên điền kinh, vừa nhận được món quà đặc biệt từ THACO là chiếc Peugeot 2008 GT Line 2023. Vậy chiếc xe này có những thông số kỹ thuật và giá lăn bánh như thế nào? Cùng Carmudi tìm hiểu nhé.   '
}];


let cardItem = '';
for(let i=0;i<hotnewcar.length;i++){
    if(hotnewcar[i].isObject){
        cardItem +=  `<div class="row">
        <div class="card mb-3 p-0" style="max-width: 100%; margin-left:12px">
        <div class="row g-0">
        <div class="col-md-7" >
            <img src="${hotnewcar[i].image}" class="img-fluid rounded-start h-100 w-100"  alt="...">
        </div>
        <div class="col-md-5">
            <div class="card-body">
            <h5 class="card-title fw-bold" style="font-size:24px;"><a href="#" class="text-decoration-none text-dark">${hotnewcar[i].text}</a></h5>
            <p class="card-text" style="font-size:14px;">${hotnewcar[i].review}</p>
            <p class="card-text" style="font-size:14px;">${hotnewcar[i].isObject}</p>
            </div>
        </div>
        </div>
    </div>
        </div>`;
    }else{
        cardItem += `<div class="col-md-4">
        <div class="card mb-3" style="height: 350px;">
            <img src="${hotnewcar[i].image}" class="card-img-top w-100" style="height: 150px"  alt="...">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title fw-bold" style="font-size:16px;"><a href="#" class="text-decoration-none text-dark">${hotnewcar[i].text}</a></h5>
                <p class="card-text" style="margin:0; max-height: 3em; overflow:hidden; text-overflow:ellipsis; white-space: nowrap; font-size:14px;">${hotnewcar[i].review}</p>
            </div>
        </div>
    </div>
    `;
    }
}
// console.log(cardItem);
document.getElementById("hotnew").innerHTML = cardItem;





//listReview

const listReview = [{
    image: 'assets/img111.png',
    title: ' VinFast VF9 - SUV hạng E - Giá & Thông số 2023 ',
    content: ' VinFast VF9 là một mẫu SUV cỡ lớn được sản xuất bởi hãng sản xuất ô tô VinFast của Việt Nam. Xe được trang bị động cơ xăng 2.0L hoặc 3.0L, hộp số tự động 8 cấp và hệ dẫn động 4 bánh toàn thời gian. VinFast VF9 có khả năng vận hành ổn định, đáp ứng tốt các yêu cầu sử dụng của một chiếc SUV cỡ lớn. '
},{
    image: 'assets/img112.png',
    title: ' Xe ô tô điện Vinfast - Tổng hợp 2023 ',
    content: ' VinFast sẽ tập trung vào xe điện sau khi ngừng sản xuất xe xăng. Tại Triển lãm Điện tử Tiêu dùng CES 2022 (Mỹ), VinFast đã trình làng 6 mẫu ô tô điện trong các phân khúc A - B - C - D - E, bao gồm VF e34, VF 5 Plus, VF 6, VF 7, VF 8 và VF 9. '
},{
    image: 'assets/img113.png',
    title: ' Rolls Royce Spectre - Xe điện hạng sang sắp ra mắt ',
    content:'  Rolls Royce đã chính thức giới thiệu dòng xe hoàn toàn điện đầu tiên của hãng mang tên Rolls Royce Spectre. Dòng xe này sẽ thay thế cho mẫu xe Rolls Royce Wraith trong danh mục sản phẩm của Rolls Royce. '
},{
    image: 'assets/img114.png',
    title: ' Rolls Royce của nước nào? Các dòng xe chính hãng tại Việt Nam  ',
    content:'  Rolls Royce được biết đến là một hãng xe có phân khúc khách hàng cao tại Việt Nam. Vậy hãng xe này đến từ quốc gia nào? Các dòng xe nào đã có mặt tại Việt Nam? Hãy cùng Carmudi tìm hiểu nhé. '
},{
    image: 'assets/img115.png',
    title: ' Rolls Royce Ghost EWB 2023: Giá bán, Hình ảnh & Thông số',
    content:' Rolls Royce Ghost EWB 2023 vừa qua đã có mặt tại Thái Lan. Đây là một mẫu xe hạng sang cao cấp với thiết kế sang trọng, nội thất rộng rãi, động cơ mạnh mẽ và các tính năng tiện nghi hiện đại. '
},{
    image: 'assets/img116.png',
    title: ' BMW 230i: Giá và Thông số mới nhất 2023 ',
    content: ' BMW 230i là một lựa chọn hấp dẫn trong phân khúc coupe và convertible, với thiết kế thể thao, hiệu suất mạnh mẽ và tiện nghi hiện đại. Điều này tạo nên trải nghiệm lái xe đáng kinh ngạc và đáp ứng mong đợi của một chiếc xe hạng sang BMW.  '
},{
    image: 'assets/img117.png',
    title: ' Đánh giá Volkswagen Polo GTI Edition 25: Phiên bản kỷ niệm 25 năm ',
    content:'  Volkswagen Polo GTI Edition 25 là một sự kết hợp hoàn hảo giữa phong cách, hiệu suất và tiện nghi, mang đến cho người lái một trải nghiệm lái xe đặc biệt và đáng nhớ. Đây là một phiên bản đặc biệt đáng chú ý trong lịch sử của dòng xe Polo GTI. '
},{
    image: 'assets/img118.png',
    title: ' BMW 3 Series: Giá và Thông số mới nhất 2023 ',
    content:' Khám phá BMW 3 Series - hình mẫu hoàn hảo của dòng xe sedan thể thao sang trọng. Với thiết kế tiên tiến, công nghệ hiện đại và khả năng lái vượt trội, BMW 3 Series khẳng định vị trí dẫn đầu trong phân khúc. Nhấn vào link để cập nhật thông tin mới nhất về dòng xe này nhé! '
},{
    image: 'assets/img119.png',
    title: ' Mazda CX 9: Giá & Thông số mới nhất 2023 ',
    content:' Mazda CX 9 là một dòng xe SUV cỡ lớn được sản xuất bởi hãng Mazda, một hãng ô tô của Nhật Bản. Xe được thiết kế để cung cấp không gian rộng rãi, tiện nghi và hiệu suất đáng chú ý. Sau đây, hãy cùng Carmudi tìm hiểu giá và thông số của dòng xe này nhé! '
},{
    image: 'assets/img120.png',
    title: ' Mazda CX 30: Giá & Thông số mới nhất 2023 ',
    content:' Mazda CX-30 là một mẫu xe crossover SUV nhỏ được sản xuất bởi hãng ô tô Mazda. Nó được giới thiệu lần đầu tại triển lãm ô tô Geneva năm 2019 và nhanh chóng trở thành một lựa chọn phổ biến trong phân khúc xe SUV nhỏ. '
},{
    image: 'assets/img121.png',
    title: ' Mazda6: Giá & Thông số mới nhất 2023 ',
    content:' Mazda6 là một dòng sedan hạng trung được sản xuất bởi hãng Mazda. Với thiết kế đẹp mắt, hiệu suất ấn tượng và sự tiện nghi, Mazda6 đứng vị trí cao trong phân khúc sedan hạng D. Tất cả những chi tiết này cùng nhau tạo nên một diện mạo đặc trưng và nổi bật cho đầu xe Mazda6. '
},{
    image: 'assets/img122.png',
    title: ' Mazda3: Giá & Thông số mới nhất 2023 ',
    content:' Mazda3 thu hút sự quan tâm của người tiêu dùng tại Việt Nam nhờ vào thiết kế hấp dẫn, trải nghiệm lái tuyệt vời và tiện nghi đa dạng. Với sự kết hợp tốt giữa tính thể thao và tính hữu ích, Mazda3 đã tạo nên một vị thế đáng chú ý trong thị trường xe hơi tại Việt Nam. '
},{
    image: 'assets/img123.png',
    title: ' Toyota Corolla Nightshade 2024: Thông số, Đánh giá & Giá bán mới nhất T5/2023  ',
    content:' Toyota Corolla Nightshade 2024 là một phiên bản đặc biệt của dòng xe Toyota Corolla với thiết kế thể thao và nhiều tính năng hiện đại. Xe được trang bị đầy đủ tính năng cải tiến và đáp ứng nhu cầu của người dùng. Dưới đây là một số hình ảnh, đánh giá và thông số chi tiết về Toyota Corolla Nightshade 2024. '
},{
    image: 'assets/img124.png',
    title: ' 5 chiếc SUV có tuổi thọ bền bỉ  ',
    content:' Những chiếc xe mang lại cảm giác thú vị cho người cầm lái nhờ trang bị động cơ lớn, hiệu suất cao, chạy đường dài và mang nhiều sức mạnh. Cũng Carmudi khám phá top 5 chiếc SUV bền bỉ nhất nhé! '
},{
    image: 'assets/img125.png',
    title: ' Liux Geko là chiếc xe EV siêu nhỏ với thân xe làm từ thực vật? ',
    content:' Chiếc xe điện hạng nhẹ này có bộ pin mô-đun cho phép quãng đường di chuyển ước tính là 93 dặm. Đây là chiếc xe điện bền vững được sáng tạo với nguyên tắc thân thiện với môi trường. Cùng Carmudi tìm hiểu về Liux Geko nhé! '
},{
    image: 'assets/img126.png',
    title: " MG7 2024: Sedan hạng C ra mắt tại Trung Quốc - Thông số kỹ thuật, giá bán ",
    content:' MG7 đã thu hút rất nhiều người tiêu dùng trẻ với thiết kế crossover, sức mạnh vượt trội, nội thất công nghệ cùng những điểm mạnh khác của sản phẩm '
},{
    image: 'assets/img127.png',
    title: ' Audi A8: Giá & Thông số mới nhất 2023 ',
    content:'  Audi A8 là một chiếc xe cao cấp với thiết kế nội thất sang trọng và đầy đủ tiện nghi, hiệu suất vận hành tốt và hệ thống an toàn tiên tiến. Tại Việt Nam, Audi A8 được phân phối thông qua đại lý của Audi Việt Nam. Hiện tại, Audi A8 có hai phiên bản là A8 L và A8 L Security. '
},{
    image: 'assets/img128.png',
    title: ' Đánh giá Chevroplet Trax 2024 - Giảm công suất nhưng cải tiến nội thất ',
    content:'  Mẫu xe nhập khẩu của Chevy, có giá bán dưới 22.000 đô la, có thể có công suất ít hơn so với trước đây, tuy nhiên nó lại được thiết kế hấp dẫn hơn và nội thất được cải tiến, đồng thời giá thành cũng thấp hơn và đem lại niềm tự hào cho khách hàng. '
},{
    image: 'assets/img129.png',
    title: ' Audi A7: Giá & Thông số mới nhất 2023 ',
    content:' Audi A7 là một chiếc xe sang trọng kích thước trung bình được sản xuất bởi hãng xe Đức Audi. Dòng xe này nổi tiếng với thiết kế mượt mà giống như dáng xe coupe, các tính năng công nghệ tiên tiến và khả năng vận hành cao cấp. '
},{
    image: 'assets/img130.png',
    title: ' Audi A6: Giá & Thông số mới nhất 2023 ',
    content:' Audi A6 - biểu tượng của sự sang trọng và đẳng cấp trong thế giới xe hạng sang. Với thiết kế đẹp mắt, động cơ mạnh mẽ, Audi A6 mang đến trải nghiệm lái xe tuyệt vời nhất. Khám phá ngay và trở thành chủ nhân của Audi A6. '
},{
    image: 'assets/img131.png',
    title: ' Audi A5: Giá & Thông số mới nhất 2023 ',
    content:' Audi A5 - sự kết hợp hoàn hảo giữa thiết kế thể thao và tính năng tiên tiến. Với động cơ mạnh mẽ và nội thất sang trọng, Audi A5 mang đến trải nghiệm lái tuyệt vời nhất. Khám phá ngay và cảm nhận sự khác biệt với Audi A5. '
},{
    image: 'assets/img132.png',
    title: ' Audi A3: Giá & Thông số mới nhất 2023 ',
    content:' Audi A3 là một chiếc xe hạng sang nhỏ được sản xuất bởi hãng ô tô Đức Audi từ năm 1996. A3 có sẵn dưới dạng sedan 4 cửa hoặc hatchback 5 cửa, và nổi tiếng với thiết kế thể thao, tính năng công nghệ tiên tiến và nội thất chất lượng cao. '
},{
    image: 'assets/img133.png',
    title: ' Audi A4: Giá & Thông số mới nhất 2023 ',
    content:'  Audi A4 được thiết kế để đáp ứng nhu cầu của những người muốn sở hữu một chiếc xe sang trọng, đẳng cấp và đầy phong cách. Với thiết kế đẹp mắt, hiện đại và sang trọng, A4 là một trong những mẫu xe bán chạy nhất của Audi trên toàn thế giới. '
},{
    image: 'assets/img134.png',
    title: ' VinFast VF7 2023: Thông số, Đánh giá & Giá bán (mới nhất 2023) ',
    content:' Sản phẩm VF7 là kết quả của sự kết hợp giữa VinFast và Torino Design - một thương hiệu thiết kế xe hơi danh tiếng trên toàn cầu. Với sự kết hợp này, VF7 mang đến cho khách hàng một trải nghiệm công nghệ tiên tiến cùng với phong cách ngoại hình đầy cá tính và tinh tế. Cùng Carmudi tìm hiểu VinFast VF7 nhé. '
}];

let listCompa = "";
for (let i = 0; i < listReview.length; i++) {
    listCompa += `<div class="card mb-3 border-0" style="max-width: 100%;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${listReview[i].image}" class="img-fluid rounded-start w-100 h-100%" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title fw-bold" style="font-size:18px;"><a href="#" class="text-decoration-none text-dark">${listReview[i].title}</a></h5>
                            <p class="card-text" style="font-size:14px;">${listReview[i].content}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr class="m-3">`    
}

document.getElementById("listReview").innerHTML = listCompa;



//new and read
const itemContentMost = [{
    image: 'assets/img135.png',
    id: '01',
    title: '  Subaru Outback đạt kết quả tốt trong bài kiểm tra va chạm mới  ',
    year:'1 năm trước'
},{
    image: 'assets/img136.png',
    id:'02',
    title: '  Những mẫu xe bán tải sở hữu nội thất sang trọng  ',
    year:'1 năm trước'
},{
    image: 'assets/img137.png',
    id: '03',
    title: '   Lexus RC 350: Giá & Thông số 2023 mới nhất   ',
    year:'11 tháng trước'
},{
    image:'assets/img138.png',
    id:'04',
    title: '   Genesis GV80 Coupe Concept - Màu cam chói lọi của hãng xe Hàn Quốc   ',
    year:'1 năm trước'
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

document.getElementById("newandread").innerHTML = readContentMost;


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
        listPromotion += `<div class="card mb-3 border-0 border-bottom">
        <img src="${video[i].image}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title fw-bold" style="font-size:15px;"><a href="#" class="text-decoration-none text-dark">${video[i].title}</a></h5>
        </div>
    </div>`;
    }else{
        listPromotion += `<div class="card mb-3 border-0 border-bottom" style="max-width: 540px">
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
            <h5 class="card-title fw-bold"  style="font-size:15px;"><a href="#" class="text-decoration-none text-dark">${video[i].title}</a></h5>
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





