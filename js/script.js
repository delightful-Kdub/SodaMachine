
$(".drank").on('click', function() {
    var cost = $(this).data('price'); //clicking soda holds price
    $('#cost').val(cost); //price appears in textbox ("#screen.#cost")


});

$('#submitPayment').on('click', function() {
    var moneyIn =  $('#paymentAmount').val(); //holds the amt put in machine
    if(moneyIn < cost){
      $('#cost').text('Please insert more ca$h.'); //if amt in isn't enough for the soda
    }

    if(moneyIn = cost){
      $('#cost').text('Enjoy your soda!'); //if the amt in is the same as the soda
    }

    var change = (moneyIn - cost); //math to determine user's change

    if(moneyIn > cost){
      $('#cost').text('Enjoy your soda and' + .val(change) + 'change!'; //if the user pays more than the cost
    }
});
