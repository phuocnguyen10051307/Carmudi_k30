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