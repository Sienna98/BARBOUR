/* fixmenu */
$( function () {

  var $win = $(window); //브라우저
  var $header = $('.bar'); //header
  var hh = $header.height(); //header의 높이
  var $gnb = $('#gnb'); //#gnb
/*   var $gu = $gnb.find('ul'); //#gnb 내부 ul */
  var uw = $gnb.width(); //#gnb 내부 ul의 너비
  var asc = 400; //추가 스크롤 값

  $win.scroll ( function () {

    if ( $win.scrollTop() > hh + asc ) {
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




/* quick menu */
$( function () {

  var $win = $(window); //브라우저
  var $qm = $('#nav'); //퀵메뉴 ul
  var $qma1 = $('#nav > #gnb > li > a'); //퀵메뉴 내부 a
  var $qma2 = $('.bt-wrap > .imgbt > li > a'); //퀵메뉴 내부 a

  //퀵메뉴 클릭시 페이지 이동
  $qma1.click( function () {

    var go = $(this).attr('href'); //내부링크 아이디
    var speed = 2000; //이동속도(ms)

    //페이지 이동 애니메이션
    $('html, body').animate( {
      scrollTop: $(go).offset().top
    }, speed);
    // offset().top --- document 기준(절대) top
    // position().top --- 부모 요소 기준(상대) top

    //퀵메뉴 클릭시 .on 추가/제거
     $($qma1).removeClass('on'); //이전 선택된 .on 제거
     $(this).addClass('on');
     return false;
   
  });


  $qma2.click( function () {

    var go = $(this).attr('href'); //내부링크 아이디
    var speed = 2000; //이동속도(ms)

    //페이지 이동 애니메이션
    $('html, body').animate( {
      scrollTop: $(go).offset().top
    }, speed);
    // offset().top --- document 기준(절대) top
    // position().top --- 부모 요소 기준(상대) top

    //퀵메뉴 클릭시 .on 추가/제거
     $($qma2).removeClass('on'); //이전 선택된 .on 제거
     $(this).addClass('on');
     return false;
   
  });
  // 스크롤 추적 - scrollspy
  function scrollSpy() {
    $('div.contents > div').each( function () {
      if( $(this).offset().top - $win.scrollTop() < 20) {
        $qma.removeClass('on');
        $qma.blur();
        $qm.find('[href=#'+ $(this).attr('id') + ']').addClass('on');
      }
    });
  }

    //브라우저 높이를 계산하여 #page1의 height 적용
    function fit () {
      var wh = $win.height();
      $('.header').css('height', wh);
    }
  //최초 로딩시 fit() 적용
  fit();

  //브라우저 크기 변경시 높이 적용
  $win.resize( function () { fit();});

});


  
/* top bt */
$(function () {

  var $win = $(window); //브라우저
  var $top = $('#top'); //TOP 버튼
  var tpos = 500; //스크롤 위치(px)
  var et = 600; //효과시간(ms)
  var at = 2000; //애니메이션 시간(ms)
  console.log($top);
  //TOP 버튼 숨기기
  $top.hide();

  //스크롤시 TOP 버튼 페이딩
  $win.scroll(function () {

    if ($(this).scrollTop() > tpos) {
      $top.fadeIn(et);
    } else {
      $top.fadeOut(et);
    }
  });


  //TOP 버튼 클릭시 scrollTop: 0으로
  $top.click(function () {

    $('html, body').animate({
      scrollTop: 0
    }, at);
    return false;
  });
});