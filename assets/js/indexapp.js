$(function(){
// I love fun がクリックされたら
$('#trigger').click(function(){

// bodyにdiv#overを追加
$('body').append($('<div id="over">'));

// div#overにlightboxを追加する
$('#over').append($('<div class="lightbox">'));

$('.lightbox').html('<iframe width="1000" height="700" style="margin-top:50px;"src="https://www.youtube.com/embed/2NuYOH2b0ZI?start=436" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');


$('#over').click(function(){

 $('#over').remove();
});


});



    


});

