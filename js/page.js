$(document).ready(function(){
    navToggle($("div div:first-child nav div"));
    newspage();
    trafTab();
    backBtn($(".backBtn"));
});

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
    $('.trafCBContainer div:nth-child(2) ul li').click(function(){
      $('.trafCBContainer div:nth-child(2) ul li').removeClass('active');
      $(this).addClass('active');
      $('.trafCBContainer div:nth-child(2) div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }

  function backBtn(button){
    $(button).click(function(){
      history.go(-1);
    });
  }