var promtValue = prompt("son kiriting");
var elResult = document.querySelector(".js-result");


if(promtValue % 3 == 0 && promtValue % 5 == 0){
    elResult.textContent = "FizzBuzz";
}else if(promtValue % 3 == 0){
    elResult.textContent = "Fizz";
}else if (promtValue % 5 == 0){
    elResult.textContent = "Buzz";
}else{
    elResult.textContent = " siz bergan raqam 3ga ham 5ga ham bo'linmaydi"
}