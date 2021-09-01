const blur = document.querySelectorAll("section");
// Nav
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const aTags = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

aTags.forEach((e) => {
  e.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
// End nav

// archi popup
const seeMoreAr = document.querySelector(".see_more_archi");
const arModal = document.querySelector(".archi_modal");
const olayAr = document.querySelector(".overlay_archi");
const arVid = document.querySelector(".archi_vid");
const closeArch = document.querySelector(".close_btn_archi");
const clickImgAr = document.querySelector(".arhi_click");
const arc = () => {
  arModal.classList.toggle("active_a");
  olayAr.classList.toggle("active_a");
  blur.forEach((s) => {
    s.classList.toggle("blur_active");
  });
};
seeMoreAr.addEventListener("click", () => {
  arc();
  arVid.play();
});
closeArch.addEventListener("click", () => {
  arc();
  arVid.pause();
});
olayAr.addEventListener("click", () => {
  arc();
  arVid.pause();
});
clickImgAr.addEventListener("click", () => {
  arc();
  arVid.play();
});
// End archi popup
// constru popup
const seeMoreConstru = document.querySelector(".see_more_constru");
const construModal = document.querySelector(".constru_modal");
const olayConstru = document.querySelector(".overlay_constru");
const construVid = document.querySelector(".constru_vid");
const closeConstru = document.querySelector(".close_btn_constru");
const clickImgConstru = document.querySelector(".constru_click");
const conOppener = () => {
  construModal.classList.toggle("active_a");
  olayConstru.classList.toggle("active_a");
  blur.forEach((s) => {
    s.classList.toggle("blur_active");
  });
};
seeMoreConstru.addEventListener("click", () => {
  conOppener();
  construVid.play();
});
closeConstru.addEventListener("click", () => {
  conOppener();
  construVid.pause();
});
olayConstru.addEventListener("click", () => {
  conOppener();
  construVid.pause();
});
clickImgConstru.addEventListener("click", () => {
  conOppener();
  construVid.play();
});
// End constru popup

//pj1 popup
const icpOne = document.querySelector(".icp_one");
const pj1Icon = document.querySelector(".pj1-icon");
const pj1CloseBtn = document.querySelector(".pj1_close_btn");
const pj1Olay = document.querySelector(".pj1_overlay");
const pj1Modal = document.querySelector(".pj1_modal");
const pj1Pop = () => {
  pj1Modal.classList.toggle("active_pj1");
  pj1Olay.classList.toggle("active_pj1");
  blur.forEach((s) => {
    s.classList.toggle("blur_active");
  });
};
icpOne.addEventListener("click", () => {
  pj1Pop();
});
pj1CloseBtn.addEventListener("click", () => {
  pj1Pop();
});
pj1Icon.addEventListener("click", () => {
  pj1Pop();
});
pj1Olay.addEventListener("click", () => {
  pj1Pop();
});
// end pj1 popup
// pj2 popUp
const icpTwo = document.querySelector(".icp_two");
const pj2Icon = document.querySelector(".pj2-icon");
const pj2CloseBtn = document.querySelector(".pj2_close_btn");
const pj2Olay = document.querySelector(".pj2_overlay");
const pj2Modal = document.querySelector(".pj2_modal");
const pj2Pop = () => {
  pj2Modal.classList.toggle("active_pj2");
  pj2Olay.classList.toggle("active_pj2");
  blur.forEach((s) => {
    s.classList.toggle("blur_active");
  });
};
icpTwo.addEventListener("click", () => {
  pj2Pop();
});
pj2CloseBtn.addEventListener("click", () => {
  pj2Pop();
});
pj2Icon.addEventListener("click", () => {
  pj2Pop();
});
pj2Olay.addEventListener("click", () => {
  pj2Pop();
});
// End pj2 popUp
// pj3_popup
const icpThree = document.querySelector(".icp_three");
const pj3Icon = document.querySelector(".pj3-icon");
const pj3CloseBtn = document.querySelector(".pj3_close_btn");
const pj3Olay = document.querySelector(".pj3_overlay");
const pj3Modal = document.querySelector(".pj3_modal");
const pj3Pop = () => {
  pj3Modal.classList.toggle("active_pj3");
  pj3Olay.classList.toggle("active_pj3");
  blur.forEach((s) => {
    s.classList.toggle("blur_active");
  });
};
icpThree.addEventListener("click", () => {
  pj3Pop();
});
pj3CloseBtn.addEventListener("click", () => {
  pj3Pop();
});
pj3Icon.addEventListener("click", () => {
  pj3Pop();
});
pj3Olay.addEventListener("click", () => {
  pj3Pop();
});
// End pj3_popup
