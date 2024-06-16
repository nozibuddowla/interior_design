document.addEventListener("DOMContentLoaded", (event) => {
  let price = document.querySelectorAll(".room_price");
  let priceDecrementBtn = document.querySelectorAll(".decrement_btn");
  let priceIncrementBtn = document.querySelectorAll(".increment_btn");
  let roomNumber = document.querySelectorAll(".room_number");
  let signUp = document.querySelectorAll(".signUp");
  let afterSignUp = document.querySelectorAll(".after-signup");

  const basicPackagePrice = 199;
  const proPackagePrice = 249;
  let basicRoomCounter = 1;
  let proRoomCounter = 1;

  price[0].textContent = basicPackagePrice;
  price[1].textContent = proPackagePrice;
  roomNumber[0].textContent = basicRoomCounter;
  roomNumber[1].textContent = proRoomCounter;

  const updatePriceAndRooms = (index, pricePerRoom, roomCounter) => {
    price[index].textContent = pricePerRoom * roomCounter;
    roomNumber[index].textContent = roomCounter;
    priceDecrementBtn[index].disabled = roomCounter <= 1;
  };

  priceDecrementBtn[0].addEventListener("click", () => {
    if (basicRoomCounter > 1) {
      basicRoomCounter -= 1;
      updatePriceAndRooms(0, basicPackagePrice, basicRoomCounter);
    }
  });

  priceIncrementBtn[0].addEventListener("click", () => {
    basicRoomCounter += 1;
    updatePriceAndRooms(0, basicPackagePrice, basicRoomCounter);
  });

  priceDecrementBtn[1].addEventListener("click", () => {
    if (proRoomCounter > 1) {
      proRoomCounter -= 1;
      updatePriceAndRooms(1, proPackagePrice, proRoomCounter);
    }
  });

  priceIncrementBtn[1].addEventListener("click", () => {
    proRoomCounter += 1;
    updatePriceAndRooms(1, proPackagePrice, proRoomCounter);
  });

  signUp[0].addEventListener("click", () => {
    afterSignUp[0].textContent = `Thank you for choosing ${basicRoomCounter} room${
      basicRoomCounter > 1 ? "s" : ""
    }`;
    afterSignUp[0].style.display = `block`;
  });

  signUp[1].addEventListener("click", () => {
    afterSignUp[1].textContent = `Thank you for choosing ${proRoomCounter} room${
      proRoomCounter > 1 ? "s" : ""
    }`;
    afterSignUp[1].style.display = `block`;
  });

  let contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (event) => {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email".value.trim());
    let message = document.getElementById("message".value.trim());

    if (!name || !email || !message) {
      event.preventDefault();
      alert("All fields are required!");
    }
  });
});
