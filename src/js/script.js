$(document).ready(function(){

    $('.Registration').validate({
        rules:{
            name: 'required',
            email:{
                required: true,
                email: true
            }
        },
        messages:{
            name: "Пожалуйста, введите Ваше ФИО",
            email: "Корейцы сперли Вашу собаку??"
        }
    });

    $("[data-modal=modal_close]").on('click', function(){
        $('.overlay,#Thanks').fadeOut();
    })

    $('RegistInput').submit(function(e){

        e.preventDefault();         //отменить стандарт.поведен браузера (после отправки формы
                                    //перезагрузка страницы произвоиться не будет)
        $.ajax({
            type: "POST",
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('.overlay, #Thanks').fadeIn();
            //$('RegistInput').trigger('reset');
        })
        return false;
    })
})
