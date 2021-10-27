document.getElementById("t_1").onclick = function () {
  document.getElementById('under_1').classList.add('carousel_clicked');
};
document.getElementById("t_2").onclick = function () {
  document.getElementById('under_2').classList.add('carousel_clicked');
};
document.getElementById("t_3").onclick = function () {
  document.getElementById('under_3').classList.add('carousel_clicked');
};
document.getElementById("t_4").onclick = function () {
  document.getElementById('under_4').classList.add('carousel_clicked');
};
document.getElementById("t_5").onclick = function () {
  document.getElementById('under_5').classList.add('carousel_clicked');
};
document.getElementById("t_6").onclick = function () {
  document.getElementById('under_6').classList.add('carousel_clicked');
};
document.getElementById("t_7").onclick = function () {
  document.getElementById('under_7').classList.add('carousel_clicked');
};
document.getElementById("t_8").onclick = function () {
  document.getElementById('under_8').classList.add('carousel_clicked');
};

document.getElementById("under_1").onclick = function () {
  document.getElementById('under_1').classList.remove('carousel_clicked');
};
document.getElementById("under_2").onclick = function () {
  document.getElementById('under_2').classList.remove('carousel_clicked');
};
document.getElementById("under_3").onclick = function () {
  document.getElementById('under_3').classList.remove('carousel_clicked');
};
document.getElementById("under_4").onclick = function () {
  document.getElementById('under_4').classList.remove('carousel_clicked');
};
document.getElementById("under_5").onclick = function () {
  document.getElementById('under_5').classList.remove('carousel_clicked');
};
document.getElementById("under_6").onclick = function () {
  document.getElementById('under_6').classList.remove('carousel_clicked');
};
document.getElementById("under_7").onclick = function () {
  document.getElementById('under_7').classList.remove('carousel_clicked');
};
document.getElementById("under_8").onclick = function () {
  document.getElementById('under_8').classList.remove('carousel_clicked');
};

//-----------------------------------------------------------------

const scrollElements_cards = document.querySelectorAll(".cards-box__card");
const elementInView_cards = (el_cards, dividend = 1) => {
  const elementTop_cards = el_cards.getBoundingClientRect().top;
  return (
    elementTop_cards <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const displayScrollElement_cards = (element_cards) => {
  element_cards.classList.add("cards-animation");
};
const handleScrollAnimation_cards = () => {
  scrollElements_cards.forEach((el_cards) => {
    if (elementInView_cards(el_cards, 1.5)) {
      displayScrollElement_cards(el_cards);
    }
  })
}
window.addEventListener("scroll", () => { 
  handleScrollAnimation_cards();
});

//-----------------------------------------------------------------

document.getElementById("banners-1").onclick = function () {
  document.getElementById('underBanners-1').classList.add('banners_clicked');
};
document.getElementById("banners-2").onclick = function () {
  document.getElementById('underBanners-2').classList.add('banners_clicked');
};
document.getElementById("banners-3").onclick = function () {
  document.getElementById('underBanners-3').classList.add('banners_clicked');
};
document.getElementById("banners-4").onclick = function () {
  document.getElementById('underBanners-4').classList.add('banners_clicked');
};
document.getElementById("banners-5").onclick = function () {
  document.getElementById('underBanners-5').classList.add('banners_clicked');
};
document.getElementById("banners-6").onclick = function () {
  document.getElementById('underBanners-6').classList.add('banners_clicked');
};

document.getElementById("underBanners-1").onclick = function () {
  document.getElementById('underBanners-1').classList.remove('banners_clicked');
};
document.getElementById("underBanners-2").onclick = function () {
  document.getElementById('underBanners-2').classList.remove('banners_clicked');
};
document.getElementById("underBanners-3").onclick = function () {
  document.getElementById('underBanners-3').classList.remove('banners_clicked');
};
document.getElementById("underBanners-4").onclick = function () {
  document.getElementById('underBanners-4').classList.remove('banners_clicked');
};
document.getElementById("underBanners-5").onclick = function () {
  document.getElementById('underBanners-5').classList.remove('banners_clicked');
};
document.getElementById("underBanners-6").onclick = function () {
  document.getElementById('underBanners-6').classList.remove('banners_clicked');
};

//-----------------------------------------------------------------

const scrollElements_banners = document.querySelectorAll(".banners-card");
const elementInView_banners = (el_banners, dividend = 1) => {
  const elementTop_banners = el_banners.getBoundingClientRect().top;
  return (
    elementTop_banners <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const displayScrollElement_banners = (element_banners) => {
  element_banners.classList.add("banners-animation");
};
const handleScrollAnimation_banners = () => {
  scrollElements_banners.forEach((el_banners) => {
    if (elementInView_banners(el_banners, 1.5)) {
      displayScrollElement_banners(el_banners);
    }
  })
}
window.addEventListener("scroll", () => { 
  handleScrollAnimation_banners();
});

//-----------------------------------------------------------------

const scrollElements_banner = document.querySelectorAll(".banner-box__card");
const elementInView_banner = (el_banner, dividend = 1) => {
  const elementTop_banner = el_banner.getBoundingClientRect().top;
  return (
    elementTop_banner <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const displayScrollElement_banner = (element_banner) => {
  element_banner.classList.add("banner-animation");
};
const handleScrollAnimation_banner = () => {
  scrollElements_banner.forEach((el_banner) => {
    if (elementInView_banner(el_banner, 1.5)) {
      displayScrollElement_banner(el_banner);
    }
  })
}
window.addEventListener("scroll", () => { 
  handleScrollAnimation_banner();
});

//-----------------------------------------------------------------