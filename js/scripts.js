$(document).ready(function() {


  $("button#button1").click(function() {
    $("form#school").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=school]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=amuse]:checked").val());
      var scoreFour = parseInt($("input:radio[name=color]:checked").val());
      var scoreFive = parseInt($("input:radio[name=seinfeld]:checked").val());
      $("form#school").slideToggle();
      $("form#show").slideToggle();
      event.preventDefault();
    });
  });
  $("button#button2").click(function() {
    $("form#show").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=school]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=amuse]:checked").val());
      var scoreFour = parseInt($("input:radio[name=color]:checked").val());
      var scoreFive = parseInt($("input:radio[name=seinfeld]:checked").val());
      $("form#show").slideToggle();
      $("form#amuse").slideToggle();
      event.preventDefault();
    });
  });
  $("button#button3").click(function() {
    $("form#amuse").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=school]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=amuse]:checked").val());
      var scoreFour = parseInt($("input:radio[name=color]:checked").val());
      var scoreFive = parseInt($("input:radio[name=seinfeld]:checked").val());
      $("form#amuse").slideToggle();
      $("form#color").slideToggle();
      event.preventDefault();
    });
  });
  $("button#button4").click(function() {
    $("form#color").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=school]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=amuse]:checked").val());
      var scoreFour = parseInt($("input:radio[name=color]:checked").val());
      var scoreFive = parseInt($("input:radio[name=seinfeld]:checked").val());
      $("form#color").slideToggle();
      $("form#seinfeld").slideToggle();
      event.preventDefault();
    });
  });
  $("button#button5").click(function() {
    $("form#seinfeld").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=school]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=amuse]:checked").val());
      var scoreFour = parseInt($("input:radio[name=color]:checked").val());
      var scoreFive = parseInt($("input:radio[name=seinfeld]:checked").val());
      $("form#seinfeld").slideToggle();
      $("form#results").slideToggle();
      $("#quiz").slideToggle();
      $("#lang").slideToggle();
      event.preventDefault();
      var finalScore = scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive;
      if (finalScore === 5) {
        var output = "CSS"
        $("#css").show();
        $("#output").text(output);
      } else if (finalScore >=6 && finalScore <= 10) {
        var output = "HTML"
        $("#html").show();
        $("#output").text(output);
      } else if (finalScore >=11 && finalScore <= 15) {
        var output = "PHP"
        $("#php").show();
        $("#output").text(output);
      } else {
        var output = "Ruby"
        $("#ruby").show();
        $("#output").text(output);
      }
    });
  });



});
