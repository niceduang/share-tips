define(['jquery'], $ => {
	const show = str => {
		$('body').append(`<h6>${str}</h6>`);
	}
	return {
		show
	}
});