$( function () {

  var $win = $(window); //브라우저
  var $header = $('.header'); //header
  var hh = $header.height(); //header의 높이
  var $gnb = $('#gnb'); //#gnb
/*   var $gu = $gnb.find('ul'); //#gnb 내부 ul */
  var uw = $gnb.width(); //#gnb 내부 ul의 너비
  var asc = 300; //추가 스크롤 값

  $win.scroll ( function () {

    if ( $win.scrollTop() > hh - asc ) {
      $gnb.css( {
        position: 'fixed',
        width: 100 + '%',
        top: 0,
        left: 0,//'calc(50% - ' + uhw + 'px)',
        zIndex: 1000
      });
      $gnb.find('li').css('width', '25%');
      $gnb.find('li').last().css('display', 'none');
      $gnb.addClass('sticky');
    } else {
      $gnb.css ( {
        position: '',
        width:''
      });
      $gnb.find('li').css('width', '');
      $gnb.find('li').last().css('display', '');
      $gnb.removeClass('sticky');
    }
  });
});