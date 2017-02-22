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
        $("#shane").show();
    } else if (gender === 'female' && sexuality === 'straight') {
      $("#jeffGoldblum").show();
    } else if (gender === 'male' && sexuality === 'straight') {
      $("#drewBarrymore").show();
    } else {
      $("#noResult").show();
    }

  });

});
