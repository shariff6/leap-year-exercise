var leapyear= function(year){
  if (year%4 === 0 || year%100===0 && year % 400 ===0 ){
    $(".output").text(year + " is a leap year")
  }else {
      $(".output").text(year + " is not a leap year")
  }
}

$(document).ready(function() {
  $("form#leapYear").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#Number").val());
    leapyear(number)
  });
});
