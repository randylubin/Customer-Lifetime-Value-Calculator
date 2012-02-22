$(document).ready(function() {  
  
  //Updates when new number is entered   
  $("#form input").keyup(function(event) {
    if (event.keyCode == 9) return; // 9 = tab
    fun_list()
    });

  //Functions to update on input change
  function fun_list() {
    get_values();
    nltv();
    result();
    return;
  }
   
  // updates values
   
  function get_values() {
      revenue = parse_currency($("#form input[name='revenue']").val());
      cost = parse_currency($("#form input[name='cost']").val());
      purchases = $("#form input[name='purchases']").val();
      aquisition = parse_currency($("#form input[name='aquisition']").val());
            
		};

    // Takes a string like "$123,456.789" and returns 123456.789 - from start-up death clock
  function parse_currency(str) {
      return parseFloat(str.replace(/\$|,/g, "")) || ""
  };
     
  function nltv() {
  	gltval = ((revenue - cost) * purchases);  
    if (gltval.toString() != "NaN") {
          $("#gltv").html("$" + gltval);
    }else{
      $("#gltv").html(error);
    };

    nltval = ((revenue - cost) * purchases) - aquisition;  
    if (nltval.toString() != "NaN") {
          $("#nltv").html("$" + nltval);
    }else{
      $("#nltv").html("error");
    };

    return;
  };

  function result() {
    if (purchases > 0) {
      if (nltval > 0){
        $("#result").html("Sweet Lifetime Value<br />You're doing something right!");
        $("#result_box").css("background-color", "green");
        return;
      }
      else if (nltval === 0){
        $("#result").html("Cutting it close...<br />Better boost your revenue");
        $("#result_box").css("background-color", "#FF4500");
        return;
      }
      else if (nltval < 0){
        $("#result").html("Please. Color has a better LTV!<br />Time to rethink the model?");
        $("#result_box").css("background-color", "red");
        return;
      };
    };
    return;
  };

}); 