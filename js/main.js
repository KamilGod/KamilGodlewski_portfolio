$(".cross").click(function () {
    console.log("hello");
    $("nav, .cross,header,main").toggleClass("active");
        // if ($(".cross").hasClass(active)){
        //     $("header,main").removeClass("mainUp")
        // }
});
 $(".arrowDown").click(function () {
     console.log("hello");
     $("header").toggleClass("mainUp");
     $("main").toggleClass("mainUp");
        
 });
 $(".arrowTop").click(function () {
    console.log("hello");
    $("header").toggleClass("mainUp");
    $("main").toggleClass("mainUp");
       
});
$(".arrowRight").click(function () {
    console.log("hello");
    $("header").toggleClass("mainRight");
    $(".aboutMe").toggleClass("active");
       
});

$(".arrowAboutMe").click(function () {
    console.log("hello");
    $("header").toggleClass("mainRight");
    $(".aboutMe").toggleClass("active");
       
});

