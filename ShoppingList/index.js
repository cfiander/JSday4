/*
enter items they need to purchase by entering text 
and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the "Check" button
permanently remove items from the list */

//enter items they need to purchase by entering text 
$('.shopping-list-entry button').on('click', element => {
    const clickedEl = $(element.target);
    console.log(clickedEl, "word");
});



