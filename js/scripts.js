$(document).ready(function(){
  $("form#matchmaker").submit(function(event){

      var name = $("input#nameInput").val();
      var age = parseInt($("input#ageInput").val());
      var dob = parseInt($("input#dobInput").val());
      var gender = $("#genderInput").val();
      var sexuality = $("#sexualityInput").val();
      var zodiac = $("#zodiacInput").val();
      var color = $("input#colorInput").val());

      $(".name").append(name);
      $(".age").append(age);
      $(".dob").append(dob);
      $(".gender").append(gender);
      $(".sexuality").append(sexuality);
      $(".zodiac").append(zodiac);
      $(".color").append(color);

      $("#test").show();
      event.preventDefault();

  });

});
