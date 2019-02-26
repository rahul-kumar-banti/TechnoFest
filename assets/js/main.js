$(document).ready(function () {
  $(".fa-hand-o-right").animate({color:"#6ab04c"},1000);
    $(".popupwindow").hide();
  $(".closePopUp").click(function (e) { 
      e.preventDefault();
      $(".popupwindow").hide();
      
  }); 
  $(".popupwindow").dblclick(function (e) { 
    e.preventDefault();
    $(".popupwindow").hide();
    
});  

 
  $(".list-item").click(function(){
      var clickedevent=$(this).attr("id");
      if(clickedevent=='12a'){
        clickedevent=1;
      }
      $(".popcfooter").show();
      $(".popctitle").show();
      $(".rightmove").hide();
      $(".leftmove").hide();
       $(".popupcheader").html(eventItem[clickedevent-1].eventheader);
      $(".popctitle").html("<a href='#register'><span class='badge badge-primary btn btn-sm '>Register now</span></a>"+eventItem[clickedevent-1].eventtitle);
      $(".popupctext").html(eventItem[clickedevent-1].eventdetail);
      
    $(".popupwindow").show();
  

  });
  $(".text-left-l").append("<i class='fa fa-plus plus'aria-hidden='true'></i>");
  $(".text-right-t").append("<i class='fa fa-plus plus'aria-hidden='true'></i>");

  $(".register").click(function(){
    // window.location.href="https://google.co.in";
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5YY2XB4mA44dUOB5VK5mZ86uuCrD4KKKjY9vpSB5g3CE2Hw/viewform","__blank");
  })
});