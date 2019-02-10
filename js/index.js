$('.collection-item').hover(btnDown, btnUp);
    
function btnDown(event) {
    const target = $(event.target);
    const btn = $(target).parent().parent().find('.collection-text');

    $(btn).slideDown('slow');
}

function btnUp(event){
    const target = $(event.target);
    const btn = $(target).parent().parent().find('.collection-text');
    
    $(btn).slideUp('slow');
}
