
var message = '<div class="bms_message bms_right"><div class="bms_message_box"><div class="bms_message_content"><div class="bms_message_text"></div></div></div></div><div class="bms_clear"></div>';

var ksas_message = '<div class="bms_message bms_left"><div class="bms_message_box"><div class="bms_message_content"><div class="bms_message_text"></div></div></div></div><div class="bms_clear"></div>';

$("#bms_send_btn").click( function(){
    var url = "http://localhost:3000/getWords";

    var text = $("#bms_send_message").val();
    $("#bms_send_message").val("");

    var JSONdata = {
        text: text   
    };

    var m = $(message);

    m.appendTo('#bms_messages');
    //   alert(JSON.stringify(JSONdata));

    m.find(".bms_message_text").text(text);    

    // 表示
    //$("#c").toggle();
    $(".wrapper").toggle();
//
    $.ajax({
        type : 'post',
        url : url,
        data : JSON.stringify(JSONdata),
        contentType: 'application/json',
        dataType : 'JSON',
        scriptCharset: 'utf-8',
        success : function(res) {

            // Success
            // alert("success");
            // alert(JSON.stringify(res));

            var ksas_m = $(ksas_message);
            ksas_m.appendTo('#bms_messages');
            ksas_m.find(".bms_message_text").html(res.message);
            // $("#response").html(JSON.stringify(data));
            $(".wrapper").toggle();
        },
        error : function(res) {

            // Error
            // alert("error");
            // alert(JSON.stringify(res));
            var ksas_m = $(ksas_message);
            ksas_m.appendTo('#bms_messages');
            ksas_m.find(".bms_message_text").html('すみません、ご質問の答えが分かりません。</br>他の言い方でもう一度質問するか、</br>サービスデスクまでお問い合わせください。</br>KSASサービスデスク:0120-527-800');
            // $("#response").html(JSON.stringify(data));
            $(".wrapper").toggle();
        }
    });
})

// enterキーを押す
function enter(){
   if( window.event.keyCode == 13 ){
      $("#bms_send_btn").click();
   }
}

