$(function () {
  /* 마우스 휠 이벤트 */
  $('.wrap section').on('wheel', function (e) {
    e.preventDefault();
    let nav;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      nav = $(this).prev();
    } else {
      nav = $(this).next();
    }

    if (nav.length) {
      let moveTop = nav.offset().top;
      // console.log(moveTop);
      $('html,body').stop().animate({
        scrollTop: moveTop,
      }, 1600);
    }
  });
  /* 마우스 휠 이벤트 끝 */


  /* 변수 ht에 브라우저 높이값을 저장 */
  let ht = $(window).height();

  //브라우저가 리사이즈 될 때마다 브라우저 높이값 재 저장
  $(window).on('resize', function () {
    ht = $(window).height();
  });



  /* 타이핑효과 */
  let typingTxt = $('.typing-txt').text().split('');//한글자씩 자름
  let typingIndex = 0;
  let typingInter;

  function typing() {
    if (typingIndex < typingTxt.length) {
      $('.typing').append(typingTxt[typingIndex]);
      typingIndex++;
    } else {
      clearInterval(typingInter);
      typingIndex = 0;
    }
  }



  /* 스크롤이벤트 시작 */
  let sc;
  let sectionI = $('.wrap section').length;
  $(window).scroll(function () {
    sc = $(window).scrollTop();
    for (let i = 0; i < sectionI; i++) {
      if (sc >= ht * i && sc < ht * (i + 1)) {
        $('.wrap section').eq(i).addClass('on').siblings().removeClass('on');
        $('.slide_nav_all .slide_nav').eq(i).addClass('on').siblings().removeClass('on');
        if (i == 2 || i == 3) {
          $('header').removeClass().addClass('on');
          $('header h1 img').attr('src', 'img/logo.png');
        } else if (i == 4) {
          $('header').removeClass().addClass('onbg');
          $('header h1 img').attr('src', 'img/logo.png');
        } else {
          $('header').removeClass()
          $('header h1 img').attr('src', 'img/logo_w.png');
        }
      }
    }

    if (sc == ht) {
      typingInter = setInterval(typing, 100);
    } else {
      clearInterval(typingInter);
      $('.typing').empty();
    }
  });
  /* 스크롤이벤트 끝 */


  $('.slide_nav_all .slide_nav').click(function () {
    let i = $(this).index();
    ht = $(window).height();
    $('html,body').stop().animate({
      scrollTop: i * ht,
    }, 1600);
  });

  $('.ham').click(function () {
    $('.all_menu').stop().slideToggle();
    $('.ham i').toggleClass('fa-bars-staggered').toggleClass('fa-xmark');
  });


  let slideI = 0;
  let slideTxt;
  let slideLen = $('.s3 ul.slide li').length;
  $('.slideNum em').text(slideLen);
  function txtF() {
    if ($(this).hasClass('prev')) {
      if (slideI != 0) {
        slideI--;
      }
    } else {
      if (slideI < slideLen - 1) {
        slideI++;
      }
    }

    console.log(slideI);
    $('.s3 ul.slide li').removeClass('on').eq(slideI).addClass('on');
    $('.slideNum b').text('0'+(slideI+1));
  }

  $('.prev_next >div').click(txtF);

});