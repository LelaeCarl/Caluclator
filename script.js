// Displays the typed number on the screen.
function insrt(num) {
  $(".calc-display").val($(".calc-display").val() + num);
}

// Equals function.
function eql() {
  $(".calc-display").val(eval($(".calc-display").val()));
}

// Clear "C" function
function c() {
  $(".calc-display").val("");
}

// Delete function
function del() {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
}
