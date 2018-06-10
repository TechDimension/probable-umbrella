
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
    
function getLocation() {
    var x = document.getElementById("address");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x = document.getElementById("address");
    x.value = parseFloat((position.coords.latitude).toFixed(4)) + 
    ", " + parseFloat((position.coords.longitude).toFixed(4)); 
}

var weatherRecommended = (temperature, precipitation, uvIndex) => {

  clothingReset();

  var recommended_summary = document.getElementById('recommended_summary');

  if (temperature > 20) {
    recommended_summary.innerHTML = "It's a nice warm day today";
    addNewClothingItem("t-shirt");
    addNewClothingItem("vest-top");
    addNewClothingItem("shorts");
    addNewClothingItem("flip-flops");
  }else if (temperature > 15) {
    recommended_summary.innerHTML = "It's quite warm, but may need a cardigan for the evening";
    addNewClothingItem("cardigan");
    addNewClothingItem("jeans");
    addNewClothingItem("t-shirt");
    addNewClothingItem("shoes");
  }else if (temperature > 10) {
    recommended_summary.innerHTML = "It's a bit chilly, take a jumper";
    addNewClothingItem("hoodie");
    addNewClothingItem("jeans");
    addNewClothingItem("t-shirt");
    addNewClothingItem("shoes");
  }else if (temperature > 5) {
    recommended_summary.innerHTML = "It's a quite cold, stay warm";

    addNewClothingItem("jacket");
    addNewClothingItem("hoodie");
    addNewClothingItem("jeans");
    addNewClothingItem("t-shirt");
  }else if (temperature > 0) {
    recommended_summary.innerHTML = "It's cold, be prepared";
    addNewClothingItem("jacket");
    addNewClothingItem("scarf");
    addNewClothingItem("hat");
    addNewClothingItem("hoodie");
    addNewClothingItem("jeans");
    addNewClothingItem("t-shirt");
  }else{
    recommended_summary.innerHTML = "It's extremely cold, be very prepared";
    addNewClothingItem("jacket");
    addNewClothingItem("scarf");
    addNewClothingItem("hat");
    addNewClothingItem("hoodie");
    addNewClothingItem("t-shirt");
    addNewClothingItem("vest-top");
    addNewClothingItem("jeans");
    addNewClothingItem("t-shirt");
  }

  if ((precipitation > 40) && (uvIndex > 3)) {
    recommended_summary.innerHTML += ". You might catch a rainbow today, but first you will need an umbrella and sunglasses";
  }
  if (precipitation > 80){
    recommended_summary.innerHTML += " but don't forget an umbrella for the heavy rain";
    addNewClothingItem("umbrella");
  }else if(precipitation > 40){
    recommended_summary.innerHTML += " but don't forget an umbrella for the rain";
    addNewClothingItem("umbrella");
  }else if (precipitation > 20){
    recommended_summary.innerHTML += ". It may rain, so you may need an umbrella";
    addNewClothingItem("umbrella");
  }else {
    recommended_summary.innerHTML += ". It looks like a clear sky.";
  }
  if (uvIndex >= 11){
    recommended_summary.innerHTML += ". Extreme risk of harm from unprotected sun exposure, take all precautions";
    addNewClothingItem("sunglasses");
    addNewClothingItem("hat");
    // addNewClothingItem("suncream");
    addNewClothingItem("trousers");
  }else if (uvIndex >= 8){
    recommended_summary.innerHTML += ". Very High risk of harm from unprotected sun exposure, take extra precaution";
    addNewClothingItem("sunglasses");
  }else if (uvIndex >= 6){
    recommended_summary.innerHTML += ". High risk of harm from unprotected sun exposure, sunglasses are needed";
    addNewClothingItem("sunglasses");
  }
  else if (uvIndex >= 3){
    recommended_summary.innerHTML += ". Moderate risk of harm from unprotected sun exposure, remember sunglasses when bright";
    addNewClothingItem("sunglasses");
  }else {
    recommended_summary.innerHTML += ". Low danger from sun exposure";
  }
  
};