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
      $(".popcfooter").show();
      $(".popctitle").show();
      $(".rightmove").hide();
      $(".leftmove").hide();
       $(".popupcheader").html(eventItem[clickedevent-1].eventheader);
      $(".popctitle").html("<span class='badge badge-success'>Register now &#8594;</span>"+eventItem[clickedevent-1].eventtitle);
      $(".popupctext").html(eventItem[clickedevent-1].eventdetail);
      
    $(".popupwindow").show();
  

  })
  
});