$(document).ready(function(){
    
    (function($) {
        "use strict";

    jQuery.validator.addMethod("valueNotEquals", function(value, element, arg){
        console.log(element);
        console.log(element.value);
        return arg != element.value; 
    }, "Value must not equal arg.");

    jQuery.validator.addMethod("validGhiChu", function(value, element, arg){
        if( $('#label')[0].value=='report' ) // chá»‰ check khi value label vĂ  report
            return $('#note')[0].value != ""
        else
            return true
    }, "HĂ£y Ä‘iá»n ID báº¡n cáº§n bĂ¡o cĂ¡o vĂ o má»¥c nĂ y");
    
    $('#label').on("change", function(){
        if(this.value=='report'){
            alert('HĂ£y Ä‘iá»n ID báº¡n cáº§n bĂ¡o cĂ¡o vĂ o má»¥c ghi chĂº nhĂ©!');
        }
        else if(this.value!='default'){
            $('#label-error')[0].style.display = 'none';
        }
    });

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            ignore: ":hidden:not(.labelpicker)",
            rules: {
                message: {
                    required: true,
                    minlength: 20
                },
                label: {
                    valueNotEquals: "default"
                },
                note: {
                    validGhiChu : true
                }
            },
            messages: {
                message: {
                    required: "HĂ£y Ä‘iá»n ná»™i dung",
                    minlength: "Ná»™i dung báº¡n Ä‘iá»n quĂ¡ ngáº¯n!",
                },
                label: {
                    valueNotEquals: "&nbsp; HĂ£y chá»n nhĂ£n pháº£n há»“i"
                },
                note: {
                    validGhiChu: "HĂ£y Ä‘iá»n ID báº¡n cáº§n bĂ¡o cĂ¡o vĂ o má»¥c nĂ y"
                }
            },
            submitHandler: function(form) {
                $('#preloader-active')[0].style.display = null;
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function(response) {
                        response = JSON.parse(response);
                        $('#preloader-active')[0].style.display = 'none';
                        if(response.success)
                            toastr.success(response.msg);
                        else
                            toastr.error(response.msg);
                    },
                    error: function() {
                        $('#preloader-active')[0].style.display = 'none';
                        toastr.error('CĂ³ lá»—i! HĂ£y thá»­ láº¡i nhĂ©!');
                    }
                });
            }
        })
    })
        
 })(jQuery)
})