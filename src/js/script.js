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

    $('.OverlayRegistration').validate({
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

    $("#ZaEButton").on('click', function(){
        $('.Eoverlay,#Regist').fadeIn();
    })
    
    $("#ExitKrest").on('click', function(){
        $('.Eoverlay,#Regist').fadeOut();
    })

    $("#EForm").on("submit", function(e){
        e.preventDefault();      //отменить стандарт.поведен браузера (после отправки формы перезагрузка страницы произвоиться не будет)

        if (!$(this).valid()){
            retrun;
        }
        
        alert("click-clack")

        $.ajax({
            type: "POST",
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function(){
            alert('gde');
            $(this).find("input").val("");
            $('.overlay, #Thanks').fadeIn();
            $('RegistNameInput').trigger('reset');
            $('RegistEmailInput').trigger('reset');
        })
        return false;
    })

    $("#EOForm").on("submit", function(e){
        e.preventDefault();

        if (!$(this).valid()){
            retrun;
        }

        $.ajax({
            type: "POST",
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function(){
            $("#ZaeeEButton").on('click', function(){
                $('.Eoverlay,#Regist').fadeOut();

            $(this).find("input").val("");
            $('.overlay, #Thanks').fadeIn();
            $('OverlayInput').trigger('reset');
            })
        })
        return false;
    })
})
