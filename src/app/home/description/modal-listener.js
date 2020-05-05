$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(".btn").on("click", function() {
  console.log("thats a try");
})