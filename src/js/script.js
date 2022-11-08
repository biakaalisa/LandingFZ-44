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
    

    $("#EButton").on('click', function(){
        $('.overlay,#Thanks').fadeIn();
    })
    $("[data-modal=modal_close]").on('click', function(){
        $('.overlay,#Thanks').fadeOut();
    })


    $("#ZaEButton").on('click', function(){
        $('.Eoverlay,#Regist').fadeIn();
    })
    $("#ZaeeEButton").on('click', function(){
        $('.Eoverlay,#Regist').fadeOut();
        $('.overlay,#Thanks').fadeIn();
    })




    /*$("#EButton").on('click', function(e){

        e.preventDefault();      //отменить стандарт.поведен браузера (после отправки формы
                                    //перезагрузка страницы произвоиться не будет)
        $.ajax({
            type: "POST",
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('.overlay, #Thanks').fadeIn();
            $('RegistInput').trigger('reset');
        })
        return false;
    })*/
})
