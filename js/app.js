$(document).ready(function () {
	$('#add-button').click(function() {
	if( $('input#text-box').val().trim().length == 0) {
		$('#enter-info').show();
		$('input#text-box').val("");

} else {
	$('ul').append('<li class="not-done"><button class="add">Check</button>' + $("input#text-box").val() + '<button class="delete">Remove</button>' + '</li>')
	$('input#text-box').val("");
	$('#enter-info').hide();
};
});
	$('ul').on('click', '.add', function() {
		$(this).closest('li').toggleClass('check not-done');
		$(this).remove();
	});
	$('ul').on('click', '.delete', function() {
		$(this).closest('li').remove();
	});
});