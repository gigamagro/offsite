// 自分が入力した値
var message =
  '<div class="bms_message bms_right"><div class="bms_message_box"><div class="bms_message_content"><div class="bms_message_text"></div></div></div></div><div class="bms_clear"></div>';

// サーバからの戻り値
var ksas_message =
  '<div class="bms_message bms_left"><div class="bms_message_box"><div class="bms_message_content"><div class="bms_message_text"></div></div></div></div><div class="bms_clear"></div>';

// loading中のメッセージ
var loading_message =
  '<div class="bms_message bms_left loading_message"><div class="bms_message_box"><div class="bms_message_content"><div class="bms_message_text"><p class="loading"><span>解</span><span>析</span><span>中</span></p></div></div></div></div>';

// スムーススクロール
var moveTo = new MoveTo({
  tolerance: 0,
  duration: 1000,
  easing: "easeOutQuart",
  container: $("#bms_messages")[0]
});

$("#bms_send_btn").click(function() {
  var url = "http://localhost:3000/getWords";

  var text = $("#bms_send_message").val();
  $("#bms_send_message").val("");

  // 文字がなかったら何もしない
  if (text === "") return;

  var JSONdata = {
    text: text
  };

  // 自分が入力した値を追加する
  var m = $(message);
  m.appendTo("#bms_messages");
  //   alert(JSON.stringify(JSONdata));
  m.find(".bms_message_text").text(text);

  moveTo.move($(".bms_message").last()[0]);

  // loading画面
  var loading = $(loading_message);
  loading.appendTo("#bms_messages");
  // ボタンを無効にする
  $("#bms_send_btn").prop("disabled", true);

  // サーバに送信する
  $.ajax({
    type: "post",
    url: url,
    data: JSON.stringify(JSONdata),
    contentType: "application/json",
    dataType: "JSON",
    scriptCharset: "utf-8",
    success: function(res) {
      // loading画面の削除
      $(".loading_message").remove();

      // レスポンスメッセージを追加
      var ksas_m = $(ksas_message);
      ksas_m.appendTo("#bms_messages");
      ksas_m.find(".bms_message_text").html(res.message);

      moveTo.move($(".bms_message").last()[0]);

      // 送信ボタンを有効にする
      $("#bms_send_btn").prop("disabled", false);
    },
    error: function(res) {
      // loading画面の削除
      $(".loading_message").remove();

      // エラーメッセージを追加
      var ksas_m = $(ksas_message);
      ksas_m.appendTo("#bms_messages");
      ksas_m
        .find(".bms_message_text")
        .html(
          "すみません、ご質問の答えが分かりません。</br>他の言い方でもう一度質問するか、</br>サービスデスクまでお問い合わせください。</br>KSASサービスデスク:0120-527-800"
        );

      moveTo.move($(".bms_message").last()[0]);

      // 送信ボタンを有効にする
      $("#bms_send_btn").prop("disabled", false);
    }
  });
});

// enterキーを押す
function enter() {
  if (window.event.keyCode == 13) {
    $("#bms_send_btn").click();
  }
}
