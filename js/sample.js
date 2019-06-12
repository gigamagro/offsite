$(".menu-icon").click(function() {
  // チェックされたとき
  if ($(".menu-icon__cheeckbox").prop("checked")) {
    $(".btn").css("animation", "none");
    $(".btn:hover").css({
      background: "#00a8a9",
      border: "solid 3px #007576"
    });

    const a1 = anime
      .timeline({
        targets: ".btn",
        duration: 100,
        easing: "linear"
      })
      .add({
        translateY: "-200px",
        borderRadius: ["50%", "0%"]
      })
      .add({
        width: "40%",
        height: "80%",
        bottom: "-200px",
        easing: "linear"
      })
      .add(
        {
          targets: ".chat",
          duration: 300,
          opacity: 1
        },
        "+=200"
      );

    // check off の時(初期状態へ戻す)
  } else {
    console.log("checked");
    $(".btn").css("animation", "pulsebtn 2s infinite");
    $(".btn:hover").css({
      background: "#00a8a9",
      border: "solid 3px #007576"
    });

    const a2 = anime
      .timeline({
        targets: ".btn",
        duration: 100,
        easing: "linear"
      })
      .add({
        targets: ".chat",
        opacity: 0
      })
      .add({
        width: "70px",
        height: "70px",
        bottom: "20px"
      })
      .add({
        translateY: "0px",
        easing: "linear",
        borderRadius: ["0%", "50%"]
      });
  }
});
