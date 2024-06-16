let price = document.querySelectorAll(".room_price");
let priceDecrementBtn = document.querySelectorAll(".decrement_btn");
const priceIncrementBtn = document.querySelectorAll(".increment_btn");
const roomNumber = document.querySelectorAll(".room_number");
const signUp = document.querySelectorAll(".signUp");
const afterSignup = document.querySelectorAll(".after-signup");

let basicPackagePrice = 199;
let basicRoomCounter = 1;

let proPackagePrice = 249;
let proRoomCounter = 1;

price[0].innerHTML = basicPackagePrice;
price[1].innerHTML = proPackagePrice;

roomNumber[0].innerHTML = basicRoomCounter;
roomNumber[1].innerHTML = proRoomCounter;

if (basicPackagePrice <= 199) {
  priceDecrementBtn[0].disabled = true;
}
if (proPackagePrice <= 249) {
  priceDecrementBtn[1].disabled = true;
}

priceDecrementBtn[0].addEventListener("click", () => {
  console.log("clicked");
  basicPackagePrice -= 199;
  basicRoomCounter -= 1;
  if (basicPackagePrice <= 199) {
    priceDecrementBtn[0].disabled = true;
  }
  price[0].innerHTML = basicPackagePrice;
  roomNumber[0].innerHTML = basicRoomCounter;
});

priceIncrementBtn[0].addEventListener("click", () => {
  basicPackagePrice += 199;
  basicRoomCounter += 1;
  //   if (basicPackagePrice >= 199) {
  //     priceDecrementBtn[0].disabled = true;
  //   }
  price[0].innerHTML = basicPackagePrice;
  roomNumber[0].innerHTML = basicRoomCounter;
});

priceDecrementBtn[1].addEventListener("click", () => {
  console.log("clicked");
  proPackagePrice -= 249;
  basicRoomCounter -= 1;
  if (basicPackagePrice <= 249) {
    priceDecrementBtn[0].disabled = true;
  }
  price[1].innerHTML = proPackagePrice;
  roomNumber[1].innerHTML = basicRoomCounter;
});

priceIncrementBtn[1].addEventListener("click", () => {
  basicPackagePrice += 249;
  basicRoomCounter += 1;
  //   if (basicPackagePrice >= 199) {
  //     priceDecrementBtn[0].disabled = true;
  //   }
  price[1].innerHTML = proPackagePrice;
  roomNumber[1].innerHTML = proRoomCounter;
});

signUp[0].addEventListener("click", () => {
  afterSignup[0].style.display = "flex";
  packageCard[0].style.height = "620px";
  afterSignup[0].innerHTML = `Thank you for choosing ${roomCounter1} room`;
});

signUp[1].addEventListener("click", () => {
  afterSignup[1].style.display = "flex";
  packageCard[1].style.height = "620px";
  afterSignup[1].innerHTML = `Thank you for choosing ${roomCounter2} room`;
});
