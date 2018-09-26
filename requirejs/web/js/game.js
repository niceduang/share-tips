define(['jquery'], $ => {
	const start = str => {
		$('body').append(`<h1>${str}</h1>`);
	}
	return {
		start
	}
});