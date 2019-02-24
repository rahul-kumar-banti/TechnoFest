$(document).ready(function () {
   var gimage=['1.1..JPG',"1.1.1.2 (1).JPG","1.1.1.2.JPG",'1.1..JPG',"1.1.1.2 (1).JPG","1.1.1.2.JPG","41068542_10156647450598482_8346261864434368512_n.jpg","41058165_10156647450328482_3160924964387815424_n.jpg",
"2.1.JPG"
]; 
var currentImgid=0;
var htmtxt="";
for(i=0;i<gimage.length;i++){

    $(".gallery-thumb").append("<div class='col-md-2' data-toggle='modal' data-target='#myModal'><img class='img img-thumbnail ing-thumb' id="+i+" src='./assets/image/teachersday/"+gimage[i]+"'></div>");
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
$(".rightmove").click(function(){
    
    if(currentImgid<gimage.length){
        $("#popimg").attr("src","assets/image/teachersday/"+gimage[currentImgid]);
        
    }
    else{
        currentImgid=0;
        $("#popimg").attr("src","assets/image/teachersday/"+gimage[currentImgid]);
        
    }
    currentImgid++;
});
});