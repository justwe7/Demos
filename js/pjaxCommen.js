$('#con p').click(function(event) {
    // alert(9)
});
$(document).on('click', function(event) {
    console.log(event.target.nodeName)
    if (event.target.nodeName.toLowerCase() == 'p') {
    alert(event.target.innerHTML)
    }
});