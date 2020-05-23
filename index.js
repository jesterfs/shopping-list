$('#js-shopping-list-form').on('submit', function(event){
  let text = $('#shopping-list-entry').val();
  $('.shopping-list').append("<li> <span class = 'shopping-item' >" + text + "</span> <div class = 'shopping-item-controls' ><button class = 'shopping-item-toggle' > <span class = 'button-label' > check </span> </button> <button class = 'shopping-item-delete' ><span class = 'button-label' > delete </span> </button> </div> </li>");
  // $('#shopping-list-entry').val();
  // $('#shopping-list-entry').val('');
  event.preventDefault();
});


// $(document).ready(function () {
  $('ul').on('click', '.shopping-item-toggle' , function(event) {
    const target = $(this).closest('li').find('.shopping-item')
    if ($(target).is(".shopping-item__checked")){
      $(target).removeClass("shopping-item__checked");
    } else {
      $(target).addClass("shopping-item__checked");
    }

  });
// });



$('ul').on('click', '.shopping-item-delete' , function(event) {
  $(this).closest("li").remove();
});




      // "<li> <span class = 'shopping-item' >" + $(userTextElement) + "</span> <div class = 'shopping-item-controls' ><button class = 'shopping-item-toggle' ><span class = 'button-label' > check < /span> </button> <button class = 'shopping-item-delete' ><span class = 'button-label' > delete < /span> </button> </div> </li>"
