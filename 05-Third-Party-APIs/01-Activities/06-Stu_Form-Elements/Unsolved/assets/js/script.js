var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

var itemList = []

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

//submission
function handleFormSubmit(event) {
    // prevent the default behavior of the form
    event.preventDefault();
    // grab shopping list item
    var item = $('#shopping-input').val()
    // append to array
    itemList.push(item)
    // append li to shopping list ul
    shoppingListEl.append('<li>' + item + '</li>')
    // clear input field after every entry
    $('#shopping-input').val('')
    
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

// grab btn class
$('.btn').on('click', handleFormSubmit);