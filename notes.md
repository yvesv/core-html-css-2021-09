# Notes

## Geschiedenis

HTML 1.0 - 1991
HTML+
HTML 2.0
HTML 3.0
HTML 4.0
HTML 4.01 - 1998

HTML5 - Living Standard

     SGML
HTML   -  XML

Standard Generalized Markup Language

<element attribute="value">

`background` vs `background-color`:

```css
body {
	background: black url('...') top right no-repeat fit; /* composite */
	background-color: black;
	background-image: ...;
	background-repeat: ...;
	background-position: ...;
}
```

## Doelgroepen van jouw webapplicatie

- "gewone" mens - visueel ziende mensen
- screen scrapers
- zoekmachines - google
- slechtzienden/blinden

a11y - accessibility
l10n - localizatin
i18n - internationaliizinfiatino
k8s - kubernetes



HTML
- structuur
- inhoud

CSS
- opmaak
- kleurtjes
- animaties

JS
- gedrag
- interactie
- DOM-manipulatie:  Document Object Model



verboden lijst van elementen:
- <center>
- <font>
- <blink>

minder toffe lijst van elementen:
- <b> <i> <u>

beter:
<strong> <em>


div - block element
span - inline element voor in een alinea aan tekst

om iets van opmaak mee te geven.

span is meer voor woordjes in een alinea
div is meer voor hele secties op je pagina - positionering

## JavaScript

voordelen van jQuery:
- hoop handige functies
- code werd korter
- AJAX-requests   - fetch()
- cross-browser c14y

<button id="btn"></button>


```js
let btn = document.querySelector('#btn');
if(btn.addEventListener) {
	btn.addEventListener('click', function() {

	});
}
else { // IE mode: 6 7 8
	btn.attachEvent('onclick', function() {

	});
}

// jQuery
$('#btn').click(function() {

});
```

## Layouts

Fixed layout: 800px breed contentvlak
- voordeel: zeer makkelijk te stylen
- Nadeel: brede schermen hebben een hoop leegte

  "screen estate"

Fluid layout/Elastic layout: 80%  80vw  80vh
- Nadeel: werkend krijgen


	Deze website is best bezocht met resolutie 1024x768

	"feature phone"



Responsive layout: capabilities van het medium querien

@media
<link media="">

