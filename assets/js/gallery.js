$(document).ready(function () {
  
var currentImgid=0;
var htmtxt="";
for(i=0;i<gimage.length;i++){

    $(".gallery-thumb").append("<div class='col-md-2 imgdiv imgzoom' ><img class='img img-thumbnail ing-thumb' id="+i+" src='./assets/image/gallery/"+gimage[i]+"'></div>");
}
$(".ing-thumb").click(function(){
    var im=$(this).attr("src");
    currentImgid=$(this).attr("id");
    $(".popupcheader").html("gallery");
      $(".popctitle").hide();
      $(".rightmove").hide();
      $(".leftmove").hide();
      $(".popupctext").html("<img src='"+im+"'class='img img-fluid' id='popimg'>");
      $(".popcfooter").hide();
       $(".popupwindow").show();

});
$(".leftmove").click(function(){
  
    if(currentImgid>gimage.length){
        $("#popimg").attr("src",gimage[currentImgid]);
        
    }
    else{
        currentImgid=0;
        $("#popimg").attr("src",gimage[currentImgid]);
        
    }
    currentImgid--;
   
});

});