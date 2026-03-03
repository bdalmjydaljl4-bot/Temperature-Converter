const tempInput = document.getElementById("temperatureInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
const resultDiv = document.getElementById("result");

// زر التحويل
convertBtn.addEventListener("click", convertTemperature);

// دعم زر Enter
tempInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convertTemperature();
  }
});

// زر المسح
clearBtn.addEventListener("click", function () {
  tempInput.value = "";
  resultDiv.innerText = "";
  document.body.style.background =
    "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
});

// دالة التحويل
function convertTemperature() {
  let inputValue = tempInput.value.trim();

  if (inputValue === "") {
    resultDiv.innerText = "من فضلك أدخل قيمة أولاً";
    return;
  }

  if (isNaN(inputValue)) {
    resultDiv.innerText = "الرجاء إدخال رقم صالح فقط";
    return;
  }

  let temperature = parseFloat(inputValue);
  let result;

  if (unitSelect.value === "celsius") {
    result = (temperature * 9 / 5) + 32;
    resultDiv.innerText = `${temperature}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (temperature - 32) * 5 / 9;
    resultDiv.innerText = `${temperature}°F = ${result.toFixed(2)}°C`;
  }

  // تغيير الخلفية حسب الحرارة
  if (temperature <= 10) {
    document.body.style.background =
      "linear-gradient(135deg, #2193b0, #6dd5ed)";
  } else if (temperature <= 25) {
    document.body.style.background =
      "linear-gradient(135deg, #56ab2f, #a8e063)";
  } else {
    document.body.style.background =
      "linear-gradient(135deg, #ff512f, #dd2476)";
  }
}
