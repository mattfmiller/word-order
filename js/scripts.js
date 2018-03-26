$(function(){
  $("#wordForm").submit(function(event){
    var inputString = $("#sentence-input").val();

    function strToArray(string){
      return string.split(' ');
    }

    console.log(strToArray(inputString));

    event.preventDefault();
  });
});
