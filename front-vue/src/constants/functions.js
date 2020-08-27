import jQuery from 'jquery';
window.$ = window.jQuery = jQuery

const formatterMsgErrorToHtmlList = (errors) => {
	var errorsFormated = '';
	var errorMessage = jQuery.map(errors, function(value) {
		var err = '';
		jQuery.map(value, function(v){
			err = v;
		});
		return [err];
	});	
	for (var i = 0; i < errorMessage.length; i++) {
		errorsFormated += '<b>' + (i + 1) + '. ' + errorMessage[i] + '</b><br/>';
	}
	return errorsFormated;
}

function number_format (number, decimals, decPoint, thousandsSep) {
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
	var n = !isFinite(+number) ? 0 : +number
	var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
	var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
	var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
	var s = ''

	var toFixedFix = function (n, prec) {
		if (('' + n).indexOf('e') === -1) {
			return +(Math.round(n + 'e+' + prec) + 'e-' + prec)
		} else {
			var arr = ('' + n).split('e')
			var sig = ''
			if (+arr[1] + prec > 0) {
				sig = '+'
			}
			return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec)
		}
	}

	// @todo: for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.')
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || ''
		s[1] += new Array(prec - s[1].length + 1).join('0')
	}

	return s.join(dec)
}

export {
	formatterMsgErrorToHtmlList,
	number_format,
}