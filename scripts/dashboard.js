$(document).ready(function () {
  $(".dash-sub-links").hide();
  $(".dashboard .dash-heading").show();
  $(".dashboard .dash-close").show();
  $(".dash-link").click(function (e) {
    $(".dash-sub-links").hide(200);
    var link = $(this).next();
    link.show(200);
    link.children().removeClass("sub-li-active");
    link.children().first().addClass("sub-li-active");
    $(".dash-link").removeClass("li-active");
    $(this).addClass("li-active");
  });
  $(".dash-sub-links li").click(function () {
    $(".dash-sub-links li").removeClass("sub-li-active");
    $(this).addClass("sub-li-active");
  });
  $(".dash-close").click(function () {
    $(".dashboard").addClass("dash-collapse");
    $(".dashboard .dash-heading").hide();
    $(".dashboard .dash-close").hide();
  });
  $(".dash-open").click(function () {
    $(".dashboard").removeClass("dash-collapse");
    $(".dashboard .dash-heading").show();
    $(".dashboard .dash-close").show();
  });
});
