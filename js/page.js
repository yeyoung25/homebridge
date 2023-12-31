$(document).ready(function(){
    main_popup();
    navToggle($("div div:first-child nav div"));
    newspage();
    trafTab();
    backBtn($(".backBtn"));
});

function main_popup(){
  $('.main_popup_in').fadeIn(1000);
  $('.main_popup_bg').fadeIn(1000);
  
  $('.main_popup button').click(function(){
      $('.main_popup_in').fadeOut();
      $('.main_popup_bg').fadeOut();
  });
}

function navToggle(button){
    $(button).click(function(){
        $(this).toggleClass("active");
    });
}

function newspage(){
    $(".lastP").click(function(e){
        alert("This is the last page.");
    });
  };

  function trafTab(){
    $('.trafHBContainer div:nth-child(2) ul.la9_20 li').click(function(){
      $('.trafHBContainer div:nth-child(2) ul li').removeClass('active');
      $(this).addClass('active');
      $('.trafHBContainer div:nth-child(2) div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }

  function backBtn(button){
    $(button).click(function(){
      history.go(-1);
    });
  }