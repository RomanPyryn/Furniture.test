var swiper1 = new Swiper(".swiper", {
  navigation: {
    prevEl: ".controls__buttons__left",
    nextEl: ".controls__buttons__right",
  },
  // pagination: {
  // 	el: ".controls__counter",
  // 	type: "fraction",
  // 	renderFraction: function (currentClass, totalClass) {
  // 		return '<span class="' + currentClass  + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
  // 	},
  // },
});

var swiper2 = new Swiper(".advantages__list", {
	navigation: {
		prevEl: ".advantages__buttons__left",
		nextEl: ".advantages__buttons__right",
	},
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
