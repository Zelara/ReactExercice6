/**
 * Formater l'objet Date de JS.
 * @param {Date} d Objet Date JavaScript
 * @returns {String} Date formatée en français dans le format suivant : 
 *                      3 décembre 1987 à 05:53:08
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString}
 */
 export default function formaterDateEtHeure(d) {
	const dateFormatee = d.toLocaleDateString('fr-CA', {year: 'numeric', month: 'long', day: 'numeric'});
	const heureFormatee = d.toLocaleTimeString('en-CA', {hour12: false});
	return `${dateFormatee} à ${heureFormatee}`;
}