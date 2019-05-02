/*
enter items they need to purchase by entering text 
and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the "Check" button
permanently remove items from the list */

//enter items they need to purchase by entering text 
//$('.shopping-list-entry button').on('click', element => {
//    const clickedEl = $(element.target);
//    console.log(clickedEl, "word");
//});

function takeSubmit(){
    console.log("takeSubmit");
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let entry = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        $('.shopping-list').append(`
         <li>
            <span class="shopping-item">${entry}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                 </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
      </li>
        `
      );
})};

function checkFood(){
    $('ul').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        });
    }
    
function deleteFood() {
    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').find('.shopping-item').remove();
    });
}
$(takeSubmit)
$(checkFood);
$(deleteFood);
