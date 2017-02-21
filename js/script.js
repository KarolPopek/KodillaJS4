
var  value;
	  
var a = prompt('Podaj a: ');
var b= prompt('Podaj b: ');

value = ( a * a ) + ( 2 * a * b) - ( b * b);

alert( '( a * a ) + ( 2 * a * b) - ( b * b) = ' + value);	  
	  
console.log( '( a * a ) + ( 2 * a * b) - ( b * b) = ' + value);	


if ( value == 0) {
	alert('Wynik jest równy zero!');
	console.log('Wynik jest równy zero');
}

else if (value > 0) {
	alert('Wynik jest dodatni!');
	console.log('Wynik jest dodatni');
}

else if (value < 0) {
	alert('Wynik jest ujemny!');
	console.log('Wynik jest ujemny');
}




		