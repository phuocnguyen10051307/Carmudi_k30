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
    itemToyotaCarCompare += `<p style="font-size:14px">${toyotaCarCompare[i].name}</p>`;
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
    itemMazdaCarCompare += `<p style="font-size:14px">${mazdaCarCompare[i].name}</p>`;
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
    itemKiaCarCompare += `<p style="font-size:14px">${kiaCarCompare[i].name}</p>`;
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
    itemFordCarCompany += `<p style="font-size:14px">${fordCarCompare[i].name}</p>`;
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
    itemHuyndaiCarCompare += `<p style="font-size:14px">${huyndaiCarCompare[i].name}</p>`;
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
    itemMitsubishiCarCompare += `<p style="font-size:14px">${mitsubishiCarCompare[i].name}</p>`;
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
    itemHondaCarCompare += `<p style="font-size:14px">${hondaCarCompare[i].name}</p>`;
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
    itemBMWCarCompare += `<p style="font-size:14px">${bmwCarCompare[i].name}</p>`;
}
console.log(itemBMWCarCompare);
document.getElementById("bmwCompare").innerHTML = itemBMWCarCompare;