/* Конвертатор основан на том, что мы вводим сумму покупки или продажи и выбираем ту валюту и то действие, которая интересует.
Например я хочу купить 100$. В поле я ввожу 100 и выбираю "Купить USD" и получаю в ответ сумму, 
сколько мне это будет стоить в грн по курсу Приватбанка. Так же стоимость в некоторых моментах я могу 
перевести в доллары.*/


var currency = $.ajax({
    method: 'GET',
    url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', //Открытый гет запрос,то чт омы видим в урле
    dataType: 'json' //Тот формат в котором мы хотим получить 
}).done(function result(res) { //Когда запрос прийдет, аджакс передаст  результат в эту функцию(res)
    console.log(res);
});
$('.rubBuy').click(function () {
    $(this).addClass('rubBuy active');
    $('.moneytext').text('Купить RUB');
    var summaa = $('#sum').val();
    var rublBuy = currency.responseJSON[1].sale;
    var res = summaa * rublBuy;
    $('.result p').remove();
    $('.result').append('<p>Cумма покупки составляет ' + res.toFixed(2) + ' грн</p>')
});
$('.rubSold').click(function () {
    $('.moneytext').text('Продать RUB');
    var summaa = $('#sum').val();
    var rublSold = currency.responseJSON[1].buy;
    var res = summaa * rublSold;
    $('.result p').remove();
    $('.result').append('<p>Cумма продажи составляет ' + res.toFixed(2) + ' грн</p>')
});
$('.eurBuy').click(function () {
    $('.moneytext').text('Купить EUR');
    var sumaa = $('#sum').val();
    var euroSale = currency.responseJSON[0].sale;
    var res = sumaa * euroSale;
    $('.result p').remove();
    $('.result').append('<p>Cумма покупки составляет ' + res.toFixed(2) + ' грн</p>');
    $('.get').css('visibility', 'visible');
    $('.get').attr('id','eurobuy');
    $('.get').val('Перевести в Доллар ');
});
$('.eurSold').click(function () {
    $('.moneytext').text('Продать EUR');
    var sumaa = $('#sum').val();
    var euroBuy = currency.responseJSON[0].buy;
    var res = sumaa * euroBuy;
    $('.result p').remove();
    $('.result').append('<p>Cумма продажи составляет ' + res.toFixed(2) + ' грн</p>')
    $('.get').css('visibility', 'visible');
    $('.get').attr('id','euro');
    $('.get').val('Перевести в Доллар ');
});
$('.usdBuy').click(function () {
    $('.moneytext').text('Купить USD');
    var sumaa = $('#sum').val();
    var dollarBuy = currency.responseJSON[2].sale;
    var res = sumaa * dollarBuy;
    $('.result p').remove();
    $('.result').append('<p>Cумма покупки составляет ' + res.toFixed(2) + ' грн</p>')
});
$('.usdSold').click(function () {
    $('.moneytext').text('Продать USD');
    var sumaa = $('#sum').val();
    var dollarSold = currency.responseJSON[2].buy;
    var res = sumaa * dollarSold;
    $('.result p').remove();
    $('.result').append('<p>Cумма продажи составляет ' + res.toFixed(2) + ' грн</p>')
    $('#getUSD').css('visibility', 'visible');
});
$('.btc').click(function z(b) {
    $('.moneytext').text('Купить BTC');
    var sumaa = $('#sum').val();
    var btcBuy = currency.responseJSON[3].sale;
    var res = sumaa * btcBuy;
    $('.result p').remove();
    $('.result').append('<p>Cумма покупки составляет ' + res.toFixed(2) + ' USD</p>');
    $('.get').css('visibility', 'visible');
    $('.get').attr('id','bitc')
});

$(document).on('click','#bitc',function () {
    var sumaa = $('#sum').val();
    var btcBuy = currency.responseJSON[3].sale;
    var grvnadolr = currency.responseJSON[2].sale;
    var res = sumaa * btcBuy * grvnadolr ;
    $('.result p').remove();
    $('.result').append('<p>Cумма покупки составляет ' + res.toFixed(2) + ' грн</p>');
    $('.get').css('visibility', 'hidden');
});
$(document).on('click','#euro',function () {
    var sumaa = $('#sum').val();
    var euroBuy = currency.responseJSON[0].buy;
    var dollar = currency.responseJSON[2].sale;
    var res = sumaa * euroBuy / dollar ;
    $('.result p').remove();
    $('.result').append('<p>Cумма продажи составляет ' + res.toFixed(2) + '\$ </p>');
   $('.get').css('visibility', 'hidden');
});
$(document).on('click','#eurobuy',function () {
    var sumaa = $('#sum').val();
    var euroBuy = currency.responseJSON[0].buy;
    var dollar = currency.responseJSON[2].buy;
    var res = sumaa * euroBuy / dollar ;
    $('.result p').remove();
    $('.result').append('<p>Cумма покупки составляет ' + res.toFixed(2) + '\$ </p>');
    $('.get').css('visibility', 'hidden');
});