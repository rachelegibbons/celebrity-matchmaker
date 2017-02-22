$(document).ready(function(){
  $("form#matchmaker").submit(function(event){
    event.preventDefault();
    var name = $("input#nameInput").val();
    var age = parseInt($("input#ageInput").val());
    var dob = $("input#dobInput").val();
    var gender = $("select#genderInput").val();
    var sexuality = $("select#sexualityInput").val();
    var zodiac = $("select#zodiacInput").val();
    var color = $("input#colorInput").val();

    $(".name").text(name);

    if (gender === "male" && sexuality === "gay") {
      $("form").hide();
      $("#neilPatrickHarris").show();
    } else if (gender === 'female' && sexuality === 'lesbian') {
        $("form").hide();
        $("#shane").show();
    } else if (gender === 'female' && sexuality === 'straight') {
        $("form").hide();
        $("#jeffGoldblum").show();
    } else if (gender === 'male' && sexuality === 'straight') {
        $("form").hide();
        $("#drewBarrymore").show();
    } else {
        $("form").hide();
        $("#noResult").show();
    }

    $("button#back").click(function(){
      $("form#matchmaker").show();
      $("#neilPatrickHarris").hide();
      $("#shane").hide();
      $("jeffGoldblum").hide();
      $("#drewBarrymore").hide();
    });

  });

});
