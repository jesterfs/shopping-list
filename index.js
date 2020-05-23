$('#js-shopping-list-form').on('submit', function(event){
  let text = $('#shopping-list-entry').val();
  $('.shopping-list').append("<li> <span class = 'shopping-item' >" + text + "</span> <div class = 'shopping-item-controls' ><button class = 'shopping-item-toggle' > <span class = 'button-label' > check </span> </button> <button class = 'shopping-item-delete' ><span class = 'button-label' > delete </span> </button> </div> </li>");

  event.preventDefault();
});


// $(document).ready(function () {
  $('.shopping-item-toggle').click(function() {
    // let target = $(this).closest('li');
    if ($(this).closest('li').is(".shopping-item__checked")){
      $(this).closest('li').removeClass("shopping-item__checked");
    } else {
      $(this).closest('li').addClass("shopping-item__checked");
    }

  });
// });



$('.shopping-item-delete').click(function() {
  $(this).closest("li").remove();
});




      // "<li> <span class = 'shopping-item' >" + $(userTextElement) + "</span> <div class = 'shopping-item-controls' ><button class = 'shopping-item-toggle' ><span class = 'button-label' > check < /span> </button> <button class = 'shopping-item-delete' ><span class = 'button-label' > delete < /span> </button> </div> </li>"
