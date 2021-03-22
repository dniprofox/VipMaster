$(function () {

//////////toTop
  
$(function(){
	$('#scroll_top').on("click", function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

  ////////menu
	$('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.mobail-menu__list').slideToggle(400);
  });

  AOS.init({    
    disable: 'phone',
    offset: 100, // offset (in px) from the original trigger point
  });
  
  $(".accordion-items__content").on("click", function() {
    $(this).parent().find("div.accordion-text").slideToggle('slow');
    $(this).find('.down').toggleClass('active');
  }); 

   /* filter*/
 
  //  var mixer = mixitup('.products__inner-box');

  // insta
  (function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'instagram', //Имя пользователя
            'container': "#instafeed", //Контейнер для изображений
            'display_profile': false, //Отображение профиля
            'display_biography': false, //Отображение биографии
            'display_gallery': true, //Отображение галереи
            'styling': true, //Стандартные стили библиотеки
            'items': 8, //Количество изображений в галереи
            'items_per_row': 4, //Количество изображений в ряд
            'margin': 0.5 //Отступ между изображениями
        });
    });
})


  
});
