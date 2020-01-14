const addClothingItem = (name, state) => {
    return state.clothes.push(name);
};

const addDescription = (description, state) => {
    return state.description += description;
};

var calculateClothes = ({temperature, precipitation, uvIndex}) => {

    const clothingState = {
        description: "",
        clothes: []
    };

    if (temperature >= 40) {
        addDescription("It's not safe to go outside. Keep cool in the safety of your home", clothingState);
        addClothingItem("vest-top", clothingState);
        addClothingItem("shorts", clothingState);
        addClothingItem("flip-flops", clothingState);

    }else if (temperature >= 30) {
        addDescription("It's a very hot day today",clothingState);
        addClothingItem("vest-top", clothingState);
        addClothingItem("shorts", clothingState);
        addClothingItem("flip-flops", clothingState);
    }else if (temperature >= 25) {
        addDescription("It's a very warm day today",clothingState);
        addClothingItem("vest-top", clothingState);
        addClothingItem("shorts", clothingState);
        addClothingItem("flip-flops", clothingState);
    }else if (temperature >= 20) {
        addDescription("It's a warm day",clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("shoes", clothingState);
    }else if (temperature >= 15) {
        addDescription("It's quite warm, but may need something warm for the evening",clothingState);
        addClothingItem("cardigan", clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("shoes", clothingState);
    }else if (temperature >= 10) {
        addDescription("It's a bit chilly, you may need something warm around you today",clothingState);
        addClothingItem("hoodie", clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("shoes", clothingState);
    }else if (temperature >= 5) {
        addDescription("It's a quite cold, stay warm",clothingState);
        addClothingItem("jacket", clothingState);
        addClothingItem("hoodie", clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("boots", clothingState);
    }else if (temperature >= 0) {
        addDescription("It's cold, be prepared",clothingState);
        addClothingItem("hat", clothingState);
        addClothingItem("scarf", clothingState);
        addClothingItem("jacket", clothingState);
        addClothingItem("hoodie", clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("boots", clothingState);
    }else if (temperature >= -5) {
        addDescription("It's very cold, be prepared, you need layers",clothingState);
        addClothingItem("hat", clothingState);
        addClothingItem("scarf", clothingState);
        addClothingItem("jacket", clothingState);
        addClothingItem("hoodie", clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("boots", clothingState);
    }else if (temperature < -20) {
        addDescription("You are insane, you need specialised equipment",clothingState);
        addClothingItem("hat", clothingState);
        addClothingItem("scarf", clothingState);
        addClothingItem("jacket", clothingState);
        addClothingItem("hoodie", clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("boots", clothingState);
    }else{
        addDescription("It's extremely cold, you may need to double up your layers",clothingState);
        addClothingItem("jacket", clothingState);
        addClothingItem("scarf", clothingState);
        addClothingItem("hat", clothingState);
        addClothingItem("hoodie", clothingState);
        addClothingItem("tShirt", clothingState);
        addClothingItem("vestTop", clothingState);
        addClothingItem("jeans", clothingState);
        addClothingItem("boots", clothingState);
    }
    if (temperature < 40) {
        if ((precipitation > 40) && (uvIndex > 3)) {
            addDescription(". You might catch a rainbow today, but first you will need an umbrella and sunglasses",clothingState);
            addClothingItem("umbrella", clothingState);
        }else {
            if (precipitation > 80){
                addDescription(" but don't forget an umbrella for the heavy rain",clothingState);
                addClothingItem("umbrella", clothingState);
            }else if(precipitation > 40){
                addDescription(" but don't forget an umbrella for the rain",clothingState);
                addClothingItem("umbrella", clothingState);
            }else if (precipitation > 20){
                addDescription(". It may rain, so you may need an umbrella",clothingState);
                addClothingItem("umbrella", clothingState);
            }
        }
        if (uvIndex >= 11){
            addDescription(". Extreme risk of harm from unprotected sun exposure, take all precautions.",clothingState);
            addClothingItem("sunglasses", clothingState);
            addClothingItem("cap", clothingState);
            addClothingItem("suncream", clothingState);
        }else if (uvIndex >= 8){
            addDescription(". Very High risk of harm from unprotected sun exposure, take extra precaution.",clothingState);
            addClothingItem("sunglasses", clothingState);
            addClothingItem("cap", clothingState);
        }else if (uvIndex >= 6){
            addDescription(". High risk of harm from unprotected sun exposure, sunglasses are needed.",clothingState);
            addClothingItem("sunglasses", clothingState);
        }else if (uvIndex >= 3){
            addDescription(". Moderate risk of harm from unprotected sun exposure, remember sunglasses when bright.",clothingState);
            addClothingItem("sunglasses", clothingState);
        } else {
            addDescription(".",clothingState);
        }
    }
    return clothingState;
};

module.exports = {
    calculateClothes
};
