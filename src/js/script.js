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

    $("#Prize").on('click',function(){
        window.open('https://t.me/FZ44LandingBot');
    });
    
    $("[data-modal=modal_close]").on('click', function(){
        $('.overlay,#Thanks').fadeOut();
    });

    $("#ZaEButton").on('click', function(){         
        $('.overlay, #Thanks').fadeIn();        //$('.Eoverlay,#Regist').fadeIn();
    });
    
    $("#ExitKrest").on('click', function(){
        $('.Eoverlay,#Regist').fadeOut();
    });

    $("#EForm").on("submit", function(e){
        e.preventDefault();      //отменить стандарт.поведен браузера (после отправки формы перезагрузка страницы произвоиться не будет)

        if (!$(this).valid()){
            retrun;
        }

        $.ajax({
            type: "POST",
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('.overlay, #Thanks').fadeIn();
            $('#RNI').val('');
            $('#REI').val('');
        })
        return false;
    });

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
            $('.Eoverlay,#Regist').fadeOut();
            $(this).find("input").val("");
            $('.overlay, #Thanks').fadeIn();
            $('#OverlayInputName').val('');
            $('#OverlayInputEmail').val('');
        })
        return false;
    });
})