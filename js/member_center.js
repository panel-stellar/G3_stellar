//手風琴
$('.sec').on('click',function(){
    $(this).removeClass('sec_close');
    $(this).addClass('sec_open');
    $('.sec').not(this).removeClass('sec_open');
    $('.sec').not(this).addClass('sec_close');
});
//修改會員資料
$('#member_info_change_btn').on('click',function(){
    $('#member_info_box').removeClass('member_info_open');
    $('#member_info_box').addClass('member_info_close');
    $('#info_modify_box').removeClass('member_info_close');
    $('#info_modify_box').addClass('member_info_open');
})
$('#member_info_changeOK_btn').on('click',function(){
    $('#info_modify_box').removeClass('member_info_open');
    $('#info_modify_box').addClass('member_info_close');
    $('#member_info_box').removeClass('member_info_close');
    $('#member_info_box').addClass('member_info_open');
})
//揪團管理切換
$('#act_now_switch').on('click',function(){
    $(this).addClass('on_switch');
    $('#act_pass_switch').addClass('not_switch');
    $(this).removeClass('not_switch');
    $('#act_now_content').addClass('on_switch_content');
    $('#act_pass_content').addClass('not_switch_content');
    $('#act_now_content').removeClass('not_switch_content');
})
$('#act_pass_switch').on('click',function(){
    $(this).addClass('on_switch');
    $('#act_now_switch').addClass('not_switch');
    $(this).removeClass('not_switch');
    $('#act_pass_content').addClass('on_switch_content');
    $('#act_now_content').addClass('not_switch_content');
    $('#act_pass_content').removeClass('not_switch_content');
})
//報名管理
$('#join_now_switch').on('click',function(){
    $(this).addClass('on_switch');
    $('#join_pass_switch').addClass('not_switch');
    $(this).removeClass('not_switch');
    $('#join_now_content').addClass('on_switch_content');
    $('#join_pass_content').addClass('not_switch_content');
    $('#join_now_content').removeClass('not_switch_content');
})
$('#join_pass_switch').on('click',function(){
    $(this).addClass('on_switch');
    $('#join_now_switch').addClass('not_switch');
    $(this).removeClass('not_switch');
    $('#join_pass_content').addClass('on_switch_content');
    $('#join_now_content').addClass('not_switch_content');
    $('#join_pass_content').removeClass('not_switch_content');
})
//相簿文字限制
$(function(){
    var len = 30; // 超過30個字以"..."取代
    $(".album_text").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});