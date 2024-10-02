
const openMenu = (status) => {
    $('.hamburgerblock').slideToggle('fast');
    if(status === "open"){
        $('#hamburger').css('display', 'none');
        $('#cross').css('display', 'block');
    } else {
        $('#cross').css('display', 'none');
        $('#hamburger').css('display', 'flex');
    }
}
