$(document).ready(function(){

    /*$('.Registration').validate({
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
    });*/

    $("[data-modal=modal_close]").on('click', function(){
        $('.overlay,#Thanks').fadeOut();
    })

    /*$("#EButton").on("click",function(){
        alert("GETRHGERGH");
    })*/

    $('#EForm').on("submit", function(e){
        /*alert("GETRHGERGH");*/
        e.preventDefault();      //отменить стандарт.поведен браузера (после отправки формы
        $('.overlay, #Thanks').fadeIn();                            //перезагрузка страницы произвоиться не будет)
        $.ajax({
            type: "POST",
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            
            //$('RegistInput').trigger('reset');
        })
        return false;
    })
})
