let clothes = {}

const addClothingItem = (body, item) => {
    if (!clothes[body]){
        clothes[body] = []
    }
    clothes[body].push( item );
};

const Accessories= 'accessories'
const Head = 'head'
const Torso = 'torso'
const Legs = 'legs'
const Feet = 'feet'

const calculateClothes = ({temperature, precipitation, uvIndex}) => {
    clothes = {}

    console.log(temperature)
    console.log(precipitation)
    console.log(uvIndex)

    if (temperature >= 40) {
        addClothingItem(Torso, "vestTop");
        addClothingItem(Legs, "shorts",);
        addClothingItem(Feet, "flipFlops",);

    }else if (temperature >= 30) {
        addClothingItem(Torso, "vestTop");
        addClothingItem(Legs, "shorts");
        addClothingItem(Feet,"flipFlops");
    }else if (temperature >= 25) {
        addClothingItem(Torso, "vestTop");
        addClothingItem(Legs, "shorts");
        addClothingItem(Feet,"flipFlops");
    }else if (temperature >= 20) {
        addClothingItem(Torso, "tShirt");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet, "shoes");
    }else if (temperature >= 15) {
        addClothingItem(Torso, "cardigan");
        addClothingItem(Torso, "tShirt");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet, "shoes");
    }else if (temperature >= 10) {
        addClothingItem(Torso, "hoodie");
        addClothingItem(Torso, "tShirt");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet,"shoes");
    }else if (temperature >= 5) {
        addClothingItem(Torso, "jacket");
        addClothingItem(Torso, "hoodie");
        addClothingItem(Torso, "tShirt");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet, "boots");
    }else if (temperature >= 0) {
        console.log('mrmrmrmr')
        addClothingItem(Accessories, "scarf");
        addClothingItem(Head, "hat");
        addClothingItem(Torso, "jacket");
        addClothingItem(Torso, "hoodie");
        addClothingItem(Torso, "tShirt");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet, "boots");
    }else if (temperature >= -5) {
        addClothingItem(Accessories, "scarf");
        addClothingItem(Head, "hat");
        addClothingItem(Torso, "jacket");
        addClothingItem(Torso, "hoodie");
        addClothingItem(Torso, "tShirt");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet, "boots");
    }else if (temperature < -20) {
        addClothingItem(Accessories, "scarf");
        addClothingItem(Head, "hat");
        addClothingItem(Torso, "jacket");
        addClothingItem(Torso, "hoodie");
        addClothingItem(Torso, "tShirt");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet, "boots");
    }else{
        addClothingItem(Accessories, "scarf");
        addClothingItem(Head, "hat");
        addClothingItem(Torso, "jacket");
        addClothingItem(Torso, "hoodie");
        addClothingItem(Torso, "tShirt");
        addClothingItem(Torso, "vestTop");
        addClothingItem(Legs, "jeans");
        addClothingItem(Feet, "boots");
    }

    console.log('yooo')
    console.log(clothes )
    if (temperature < 40) {
        if ((precipitation > 40) && (uvIndex > 3)) {
            addClothingItem(Accessories, "umbrella",);
        }else {
            if (precipitation > 80){
                addClothingItem(Accessories, "umbrella",);
            }else if(precipitation > 40){
                addClothingItem(Accessories, "umbrella",);
            }else if (precipitation > 20){
                addClothingItem(Accessories, "umbrella",);
            }
        }
        if (uvIndex >= 11){
            addClothingItem(Accessories, "sunglasses",);
            addClothingItem(Head, "cap",);
            addClothingItem(Accessories, "suncream",);
        }else if (uvIndex >= 8){
            addClothingItem(Accessories, "sunglasses",);
            addClothingItem(Head, "cap",);
        }else if (uvIndex >= 6){
            addClothingItem(Accessories, "sunglasses",);
        }else if (uvIndex >= 3){
            addClothingItem(Accessories, "sunglasses",);
        } else {
        }
    }
    return clothes;
};

module.exports = {
    calculateClothes
};
