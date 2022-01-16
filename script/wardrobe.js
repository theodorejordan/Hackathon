var clothes = [];
var hat = [
    {
        "id": 6,
        "cloth_name": "Cowboy Hat Beige",
        "cloth_type": "hat",
        "URL": "https://cdn.pixabay.com/photo/2017/09/30/09/29/cowboy-hat-2801582_960_720.png",
        "tags": ["country", "summer"]
    },
        {
            "id": 16,
            cloth_name: "Beige Chic Hat",
            cloth_type: "Hat",
            URL: "https://cdn.pixabay.com/photo/2016/08/28/11/07/hat-1625676_1280.png",
            tags: [
                "summer",
                "fancy",
                "flower",
                "beach"
            ]
        },
        {
            id: 17,
            cloth_name: "Red Cap",
            cloth_type: "Hat",
            URL: "https://cdn.pixabay.com/photo/2017/07/21/14/28/hat-2525910_1280.png",
            tags: [
                "urban",
                "warm colors",
                "running",
                "sport"
            ]
        },
        {
            id: 18,
            cloth_name: "Black Beret",
            cloth_type: "Hat",
            URL: "https://cdn.pixabay.com/photo/2020/04/20/08/08/beret-5066979_1280.png",
            tags: [
                "all black",
                "fancy",
                "black"
            ]
        }
    ];

var pants =  [
    {
        "id": 5,
        "cloth_name": "Cowboy Pants",
        "cloth_type": "Pants",
        "URL": "https://cdn.pixabay.com/photo/2017/10/30/19/06/leather-pants-2903225_1280.png",
        "tags": ["country"]
    },
    {
        id: 2,
        cloth_name: "Navy Pants",
        cloth_type: "Pants",
        URL: "https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231_1280.jpg",
        tags: [
            "navy",
            "fancy",
            "cold colors",
            "sober"
        ]
    },
    {
        id: 19,
        cloth_name: "Sober Skirt",
        cloth_type: "Pants",
        URL: "https://cdn.pixabay.com/photo/2020/04/16/20/38/skirt-5052288_1280.jpg",
        tags: [
            "fancy",
            "sober",
            "work",
            "neutral"
        ]
    },
    {
        id: 21,
        cloth_name: "Used Jeans",
        cloth_type: "Pants",
        URL: "https://cdn.pixabay.com/photo/2014/12/11/10/28/jeans-564089_1280.jpg",
        tags: [
            "urban",
            "navy",
            "comfy"
        ]
    },
    {
        id: 24,
        cloth_name: "Linen Yellow Pants",
        cloth_type: "Pants",
        URL: "https://cdn.pixabay.com/photo/2020/06/18/09/41/fashion-5312737_1280.jpg",
        tags: [
            "comfy",
            "summer",
            "flower",
            "warm colors"
        ]
    }
]

var topData = [
    {
        "id": 1,
        "cloth_name": " Red T-Shirt",
        "cloth_type": "Top",
        "URL": "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg",
        "tags": [
            "colorful"
        ]
    },
    {
        "id": 3,
        "cloth_name": "Black Pull",
        "cloth_type": "Top",
        "URL": "https://cdn.pixabay.com/photo/2017/09/05/09/55/men-wear-2716968_1280.png",
        "tags": [
            "all black",
            "cold colors",
            "neutral",
            "sober",
            "black"
        ]
    },
    {
        "id": 15,
        "cloth_name": "Spicy Sweatshirt",
        "cloth_type": "Top",
        "URL": "https://cdn.pixabay.com/photo/2019/02/13/19/23/t-shirt-3995093_960_720.png",
        "tags": [
            "colorful",
            "paint",
            "happy",
            "comfy"
        ]
    },
    {
        "id": 20,
        "cloth_name": "Red Polo",
        "cloth_type": "Top",
        "URL": "https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_960_720.png",
        "tags": [
            "polo",
            "red",
            "golf",
            "casual"
        ]
    },
    {
        "id": 22,
        "cloth_name": "Light Green T-Shirt",
        "cloth_type": "Top",
        "URL": "https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_1280.png",
        "tags": [
            "neutral",
            "sober",
            "cold colors",
            "sport"
        ]
    },
    {
        "id": 23,
        "cloth_name": "Sport Adidas Top",
        "cloth_type": "Top",
        "URL": "https://cdn.pixabay.com/photo/2017/06/19/18/44/t-shirt-2420558_1280.png",
        "tags": [
            "sport",
            "running",
            "neutral",
            "urban",
            "navy"
        ]
    }
];

var socks = [
    {
        "id": 7,
        "cloth_name": "Black Socks Blue Flower",
        "cloth_type": "Socks",
        "URL": "https://cdn.pixabay.com/photo/2012/02/23/12/16/socks-16112_960_720.jpg",
        "tags": [
            "flower",
            "summer",
            "fancy",
            "colorful"
        ]
    },
    {
        "id": 13,
        "cloth_name": "Black and White Striped Socks",
        "cloth_type": "Socks",
        "URL": "https://cdn.pixabay.com/photo/2016/07/04/04/32/sock-1495920_1280.jpg",
        "tags": [
            "black",
            "fancy",
            "sober"
        ]
    },
    {
        "id": 14,
        "cloth_name": "Red Socks",
        "cloth_type": "Socks",
        "URL": "https://cdn.pixabay.com/photo/2015/04/09/19/56/sock-715024_1280.jpg",
        "tags": [
            "warm colors",
            "comfy"
        ]
    }
];

var shoes = [
    {
        "id": 9,
        "cloth_name": "White And Yellow Running Shoes",
        "cloth_type": "Shoes",
        "URL": "https://cdn.pixabay.com/photo/2020/09/17/06/28/sneakers-5578127_1280.jpg",
        "tags": [
            "running",
            "summer",
            "urban"
        ]
    },
    {
        "id": 10,
        "cloth_name": "Soccer Shoes",
        "cloth_type": "Shoes",
        "URL": "https://cdn.pixabay.com/photo/2017/06/12/01/50/soccer-2394121_1280.jpg",
        "tags": [
            "sport",
            "urban",
            "sober"
        ]
    },
    {
        "id": 11,
        "cloth_name": "Brown Business Shoes",
        "cloth_type": "Shoes",
        "URL": "https://cdn.pixabay.com/photo/2017/02/08/16/01/business-2049312_1280.jpg",
        "tags": [
            "fancy",
            "work"
        ]
    },
    {
        "id": 12,
        "cloth_name": "Beach Sandals",
        "cloth_type": "Shoes",
        "URL": "https://cdn.pixabay.com/photo/2020/04/28/04/41/flip-flops-5102747_960_720.png",
        "tags": [
            "flip flops",
            "summer",
            "beach",
            "colorful"
        ]
    },
    {
        "id": 25,
        "cloth_name": "Winter Shoes",
        "cloth_type": "Shoes",
        "URL": "https://cdn.pixabay.com/photo/2020/06/21/09/54/shoes-5324169_1280.jpg",
        "tags": [
            "comfy",
            "sober",
            "winter"
        ]
    }
];

let loadData = function (){
    fetch('../data/clothes.json')
        .then(response => response.json())
        .then(data => clothes.push(data));
}

let printData  = function (){
    for(let i = 0; i<=clothes.length;i++){
        console.log(clothes[i]);
    }
}

let getClothType = function(type){
    return clothes.filter(cloth => cloth.cloth_type == type);
}

let setImgUrlHat = function (eleId){
    var elements = document.getElementById(eleId).getElementsByTagName("img");
    for(var i=0;i<elements.length;i++){
        elements[i].setAttribute("src", hat[i].URL);
    }
}

let setImgUrlPants = function (eleId){
    var elements = document.getElementById(eleId).getElementsByTagName("img");
    for(var i=0;i<elements.length;i++){
        elements[i].setAttribute("src", pants[i].URL);
    }
}

let setImgUrlTop = function (eleId){
    var elements = document.getElementById(eleId).getElementsByTagName("img");
    for(var i=0;i<elements.length;i++){
        elements[i].setAttribute("src", topData[i].URL);
    }
}


let setImgUrlSocks = function (eleId){
    var elements = document.getElementById(eleId).getElementsByTagName("img");
    for(var i=0;i<elements.length;i++){
        elements[i].setAttribute("src", socks[i].URL);
    }
}

let setImgUrlShoes = function (eleId){
    var elements = document.getElementById(eleId).getElementsByTagName("img");
    console.log(elements);
    for(var i=0;i<elements.length;i++){
        console.log(i);
        console.log(elements.length);
        elements[i].setAttribute("src", shoes[i].URL);
    }
}

let refreshImg = function(){
    //load hat
    setImgUrlHat("carouselHatControls");
    //load top
    setImgUrlTop("carouselTopControls");
    //load pants
    setImgUrlPants("carouselBottomControls");
    //load socks
    setImgUrlSocks("carouselSocksControls");
    //load shoes
    setImgUrlShoes("carouselShoesControls");
}

// function changeImage(element, url) {
//     element.classList.add('#imgDispFadeIn');
//     element.src = url;
//     $img = $(element.src);
//     $img.fadeOut(1000, function() {
//         $img.attr('src', url)
//         $img.fadeIn(0);
//     });
// }

let onSelectScenarioHat = function(id){
    if (count == 1){
        refreshImg();
    }
    //reset all but hat
    setImgUrlTop("carouselTopControls");
    //load pants
    setImgUrlPants("carouselBottomControls");
    //load socks
    setImgUrlSocks("carouselSocksControls");
    //load shoes
    setImgUrlShoes("carouselShoesControls");

    //Choose top to set
    var topActive = document.getElementById("carouselTopControls")
        .getElementsByClassName("carousel-item active");
    topActive[0].getElementsByTagName("img")[0].setAttribute("src", topData[1].URL);
    // changeImage(topActive[0].getElementsByTagName("img")[0], topData[1].URL);
    //Choose top to set
    var botActive = document.getElementById("carouselBottomControls")
        .getElementsByClassName("carousel-item active");
    botActive[0].getElementsByTagName("img")[0].setAttribute("src", pants[0].URL);


    //Choose top to set
    var socksActive = document.getElementById("carouselSocksControls")
        .getElementsByClassName("carousel-item active");
    socksActive[0].getElementsByTagName("img")[0].setAttribute("src", socks[0].URL);

    //Choose top to set
    var shoesActive = document.getElementById("carouselShoesControls")
        .getElementsByClassName("carousel-item active");
    shoesActive[0].getElementsByTagName("img")[0].setAttribute("src", shoes[2].URL);
}

