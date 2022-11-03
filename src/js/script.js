$(document).ready(function(){
    $('[data-modal=Thanks]').on('click', function(){
        $('.overlay, #Thanks').fadeIn();
    })
    $("[data-modal=modal_close]").on('click', function(){
        $('.overlay,#Thanks').fadeOut();
    })

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

    $('form').submit(function(e){

        e.preventDefault();         //отменить стандарт.поведен браузера (после отправки формы
        if(!(this).valid()){        //перезагрузка страницы произвоиться не будет)
            return;
        }

        $.ajax({
            type: "POST",
            url: 'https://discord.gg/mNw8wdWz',
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");

            $('form').trigger('reset');
        })
        
        return false;
    })
})
