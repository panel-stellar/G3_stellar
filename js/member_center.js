//偵測是否為手機版Safari
$(function(){
    mobileSafari = (/iPhone/i.test(navigator.platform) || /iPod/i.test(navigator.platform) || /iPad/i.test(navigator.userAgent)) && !!navigator.appVersion.match(/(?:Version\/)([\w\._]+)/);
    console.log(mobileSafari);
    if (mobileSafari) {
        $('#album_manage_sec').addClass('margin_Safari');
    }
});
//手風琴
$('.sec_box').on('click',function(){
    $(this).addClass('sec_open');
    $(this).removeClass('sec_close');
    $('.sec_box').not(this).addClass('sec_close');
    $('.sec_box').not(this).removeClass('sec_open');
});
//修改會員資料
$('#info_change_btn').click(function(){
    $('#info_box').css("top","-100%");
    $('#info_box').css("opacity","0");
    $('#modify_box').css("top","-80%");
    $('#modify_box').css("opacity","1");
});
$('#return_info_page').click(function(){
    $('#modify_box').css("top","0");
    $('#modify_box').css("opacity","0");
    $('#info_box').css("top","0");
    $('#info_box').css("opacity","1");
});
// //揪團管理切換
$('#now_event_switch').click(function(){
    $(this).addClass('title_on_switch');
    $('#pass_event_switch').removeClass('title_on_switch');
    $('#now_event_box_content').addClass('content_on_switch');
    $('#now_event_box_content').removeClass('content_not_switch');
    $('#pass_event_box_content').removeClass('content_on_switch');
    $('#pass_event_box_content').addClass('content_not_switch');
});
$('#pass_event_switch').click(function(){
    $(this).addClass('title_on_switch');
    $('#now_event_switch').removeClass('title_on_switch');
    $('#pass_event_box_content').addClass('content_on_switch');
    $('#pass_event_box_content').removeClass('content_not_switch');
    $('#now_event_box_content').removeClass('content_on_switch');
    $('#now_event_box_content').addClass('content_not_switch');
});
//報名管理
$('#now_join_event_switch').click(function(){
    $(this).addClass('title_on_switch');
    $('#pass_join_event_switch').removeClass('title_on_switch');
    $('#now_join_event_box_content').addClass('content_on_switch');
    $('#now_join_event_box_content').removeClass('content_not_switch');
    $('#pass_join_event_box_content').removeClass('content_on_switch');
    $('#pass_join_event_box_content').addClass('content_not_switch');
});
$('#pass_join_event_switch').click(function(){
    $(this).addClass('title_on_switch');
    $('#now_join_event_switch').removeClass('title_on_switch');
    $('#pass_join_event_box_content').addClass('content_on_switch');
    $('#pass_join_event_box_content').removeClass('content_not_switch');
    $('#now_join_event_box_content').removeClass('content_on_switch');
    $('#now_join_event_box_content').addClass('content_not_switch');
});
//相簿文字限制
$(function(){
    var len = 30; // 超過30個字以"..."取代
    $(".album_text_box").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});