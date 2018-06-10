

var addNewClothingItem = (name) => {
  var outfit = document.getElementById("outfit");

  var clothing = document.createElement("div");
  var img = document.createElement("img");
  img.src = `/lib/${name}.png`;
  img.alt = `${name}`;
  clothing.appendChild(img);
  clothing.innerHTML += name;

  outfit.appendChild(clothing);
};

var clothingReset = () => {
  var outfit = document.getElementById("outfit");
  outfit.innerHTML = "";
};
    
var getLocation = () => {
  var x = document.getElementById("address");
  x.value = "Waiting on GPS...";
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var showPosition = (position) => {
  var x = document.getElementById("address");
  x.value = parseFloat((position.coords.latitude).toFixed(4)) + 
  ", " + parseFloat((position.coords.longitude).toFixed(4)); 
}

var weatherRecommended = (temperature, precipitation, uvIndex) => {

  clothingReset();
  var recommended_summary = document.getElementById('recommended_summary');

  if (temperature >= 40) {
    recommended_summary.innerHTML = "It's not safe to go outside. Keep cool in the safety of your home";
    addNewClothingItem("vest-top");
    addNewClothingItem("shorts");
    addNewClothingItem("flip-flops");

  }else if (temperature >= 30) {
    recommended_summary.innerHTML = "It's a very hot day today";
    addNewClothingItem("vest-top");
    addNewClothingItem("shorts");
    addNewClothingItem("flip-flops");
  }else if (temperature >= 25) {
    recommended_summary.innerHTML = "It's a very warm day today";
    addNewClothingItem("vest-top");
    addNewClothingItem("shorts");
    addNewClothingItem("flip-flops");
  }else if (temperature >= 20) {
    recommended_summary.innerHTML = "It's a warm day";   
    addNewClothingItem("t-shirt");
    addNewClothingItem("jeans");
    addNewClothingItem("shoes");
  }else if (temperature >= 15) {
    recommended_summary.innerHTML = "It's quite warm, but may need something warm for the evening";
    addNewClothingItem("cardigan");
    addNewClothingItem("t-shirt");
    addNewClothingItem("jeans");
    addNewClothingItem("shoes");
  }else if (temperature >= 10) {
    recommended_summary.innerHTML = "It's a bit chilly, you may need something warm around you today";
    addNewClothingItem("hoodie");
    addNewClothingItem("t-shirt");
    addNewClothingItem("jeans");
    addNewClothingItem("shoes");
  }else if (temperature >= 5) {
    recommended_summary.innerHTML = "It's a quite cold, stay warm";
    addNewClothingItem("jacket");
    addNewClothingItem("hoodie");
    addNewClothingItem("t-shirt");
    addNewClothingItem("jeans");
    addNewClothingItem("boots");
  }else if (temperature >= 0) {
    recommended_summary.innerHTML = "It's cold, be prepared";
    addNewClothingItem("hat");
    addNewClothingItem("scarf");
    addNewClothingItem("jacket");
    addNewClothingItem("hoodie");
    addNewClothingItem("t-shirt");  
    addNewClothingItem("jeans");
    addNewClothingItem("boots");
  }else if (temperature >= -5) {
    recommended_summary.innerHTML = "It's very cold, be prepared, you need layers";
    addNewClothingItem("hat");
    addNewClothingItem("scarf");
    addNewClothingItem("jacket");
    addNewClothingItem("hoodie");
    addNewClothingItem("t-shirt");  
    addNewClothingItem("jeans");
    addNewClothingItem("boots");
  }else if (temperature < -20) {
    recommended_summary.innerHTML = "You are insane, you need specialised equipment";
    addNewClothingItem("hat");
    addNewClothingItem("scarf");
    addNewClothingItem("jacket");
    addNewClothingItem("hoodie");
    addNewClothingItem("t-shirt");  
    addNewClothingItem("jeans");
    addNewClothingItem("boots");
  }else{
    recommended_summary.innerHTML = "It's extremely cold, you may need to double up your layers";
    addNewClothingItem("jacket");
    addNewClothingItem("scarf");
    addNewClothingItem("hat");
    addNewClothingItem("hoodie");
    addNewClothingItem("t-shirt");
    addNewClothingItem("vest-top");
    addNewClothingItem("jeans");
    addNewClothingItem("boots");
  }
  if (temperature < 40) {
    if ((precipitation > 40) && (uvIndex > 3)) {
      recommended_summary.innerHTML += ". You might catch a rainbow today, but first you will need an umbrella and sunglasses";
      addNewClothingItem("umbrella");
    }else {
      if (precipitation > 80){
        recommended_summary.innerHTML += " but don't forget an umbrella for the heavy rain";
        addNewClothingItem("umbrella");
      }else if(precipitation > 40){
        recommended_summary.innerHTML += " but don't forget an umbrella for the rain";
        addNewClothingItem("umbrella");
      }else if (precipitation > 20){
        recommended_summary.innerHTML += ". It may rain, so you may need an umbrella";
        addNewClothingItem("umbrella");
      }
    }
    if (uvIndex >= 11){
      recommended_summary.innerHTML += ". Extreme risk of harm from unprotected sun exposure, take all precautions.";
      addNewClothingItem("sunglasses");
      addNewClothingItem("cap");
      addNewClothingItem("suncream");
    }else if (uvIndex >= 8){
      recommended_summary.innerHTML += ". Very High risk of harm from unprotected sun exposure, take extra precaution.";
      addNewClothingItem("sunglasses");
      addNewClothingItem("cap");
    }else if (uvIndex >= 6){
      recommended_summary.innerHTML += ". High risk of harm from unprotected sun exposure, sunglasses are needed.";
      addNewClothingItem("sunglasses");
    }else if (uvIndex >= 3){
      recommended_summary.innerHTML += ". Moderate risk of harm from unprotected sun exposure, remember sunglasses when bright.";
      addNewClothingItem("sunglasses");
    } else {
      recommended_summary.innerHTML += ".";
    }
  }
  
};