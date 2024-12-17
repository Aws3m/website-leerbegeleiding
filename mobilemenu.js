
const openMenu = (status) => {
    $('.mobilemenu').slideToggle('fast');
    if(status === "closed"){
        $('#cross').css('display','none');
        $('#hamburgerblock').css('display','block');
    } else {
        $('#hamburgerblock').css('display','none');
        $('#cross').css('display','block');
    }
}
