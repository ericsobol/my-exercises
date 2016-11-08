/*
При нажатии на кнопку "Добавить контакт" я получаю поп-ап, в который
ввожу имя,почтовый ящик и номер телефона.После добавления я получаю 
созданного пользователя. При нажатии на иконку "позвонить" совершается
вызов на указанный номер, по нажатию на "Отправить смс" я получаю поле ввода
текста и кнопку отправить, после нажатия которой смс отправляется на 
указанный номер. При нажатии на "Удалить пользователья" - контакт удаляется.
*/
var phoneapp = {
    phonebook: [],
    addcontact: function (name, email, tel) {
        this.phonebook.push({
            username: name,
            email: email,
            tel: tel
        });
    },
    getContacts: function () {
        return this.phonebook
    },
    delContact: function (id) {
        delete this.phonebook[id];
    },
};
var i = 0;
$('#addContact').click(function () {
    var username = $('#username').val();
    var email = $('#email').val();
    var tel = $('#tel').val();
    if (username != "" && email != "" && tel != "") {
        phoneapp.addcontact(username, email, tel);
        $('.contactList').append('<li>' + username + '(' + email + '):' + tel + '<span data-toggle="modal" data-target=".bs-phone-modal-sm" data-tel="' + tel + '" class="glyphicon glyphicon-earphone usercall" ></span> <span data-toggle="modal" data-target=".bs-message-modal-sm" data-tel="' + tel + '" class="glyphicon glyphicon-envelope usersms" ></span> <span data-id="' + i + '" class="glyphicon glyphicon-remove userdel" ></span> </li>')
    } else {
        $('.modal-content').append('<p class = "errorForm"> Введите данные </p>');
        if (username == "") {
            $('.usernameLabel .form-control').css({
                'border-color': 'red',
                'box-shadow': 'red'
            })
        } else {
            $('.usernameLabel .form-control').css('border', '1px solid #ccc')
        };
        if (email == "") {
            $('.emailLabel .form-control').css({
                'border-color': 'red',
                'box-shadow': 'red'
            })
        } else {
            $('.emailLabel .form-control').css('border', '1px solid #ccc')
        };
        if (tel == "") {
            $('.telLabel .form-control').css({
                'border-color': 'red',
                'box-shadow': 'red'
            })
        } else {
            $('.telLabel .form-control').css('border', '1px solid #ccc')
        }
    }; // Красные поля при неверном вводе 
    i++;
});
$(document).on('click', '.userdel', function () { //Удаляет наши динамические обьекты.Почитать об ON!!!
    var deleteQuestion = confirm('Действительно хотите удалить?');
    if (deleteQuestion == true) {
        phoneapp.delContact($(this).data('id')); //Почитать о ДАТА в джкв. Это удаляет наш контакт по нажатию
        $(this).parent().remove()
    };
});

// Начало МЕССЕНДЖЕРА
$(document).on('click','.usersms',function(){
    var tel = $(this).data('tel');
    $('.sendsms').data('tel',tel); // второй tel это переменная в которую мы записуем,1-ый - названия дат
    
});
$('.sendsms').click(function(){
    var mynumber = $(this).data('tel');
    $('.msg-status').html('Message sent on number ' + mynumber);
/* $.post(' http://api.atompark.com/members/sms/xml.php',{
     'XML': '<SMS><operations><operation>SEND</operation></operations><authentification><username>yariksobol1212@gmail.com</username><password>dnepropetrovsk</password></authentification><message><sender>EricSobol</sender><sentdate></sentdate><text>Hellow World</text></message><numbers><number>+380636537282</number></numbers></SMS>' 
 });*/
});
//Элемент звонка
$(document).on('click','.usercall',function(){
    $('.phone-status p').remove();
    $('.phone-status img').remove();
    $('.phone-status').append('<p>Выполняется вызов</p><img class="img-responsive center-block" src="phone.GIF">')
});
