$(document).ready(function() {
    $('#edit-button').click(function() {
        $('#title, #title-input').toggle(100);
        if($(this).html()==='Update') {
            $(this).html('Edit Title');
        } else {
            $(this).html('Update');
        }
    });
    $('.preview-button').click(function() {
        $('.preview-menu').toggle(100);
    })
}) 