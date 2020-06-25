// $('#circle').click(function() {
// 	alert('Clicked!');
// });

// $('#circle').hover(function() {
// 	$('p').html("We've changed the text!");
// });
$('#circle').hover(function() {
	$('img').attr('src','smiley_face.png');
})

$('.square').click(function() {
	$(this).css('background-color', 'Blue');
})

$('.square').hover(function() {
	$(this).css('width', '400px');
})

$(function() {
	$('#draggable').draggable();
})

$(function() {
	$('#resizable').resizable();
})

$(function() {
	$('#sortable').sortable();
})