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

## npm tools

buildtools:
- grunt (configureren - JSON)
- gulp  (programmeren)

specifieke build tools, zogeheten module bundlers:
- Rollup
- Parcel (zero config just works)
- (heeeel nieuw) Rome
- webpack (configureren)

Testtools: karma protractor jasmine mocha chai sinon jest

## Opmaakachtige zaken in HTML

```html
// buttons waren prima
<button class="btn btn-primary">

// grid system begon ok
<div class="col-12">

// maar werd toen dit
<div class="col-xs-12 col-sm-8 col-lg-4 col-xl-4">
```

Functional CSS

## CSS frameworks

Handig om snel iets leuks smoelend neer te zetten, vooral voor:

- intranet
- proof of concepts
- afstudeer-/priveprojectjes

## Content Delivery Network

voordelen?
- hoge availability
- snelheid

nadelen?
- wat als het offline is?
- ze kunnen het aanpassen/verwijderen
- security: over het algemeen zal een bank/verzekeraar/... een CDN niet zomaar gebruiken.
  => misschien met een contract?
  => misschien een private CDN

cdn.nn.nl



```html
<link rel="stylesheet" href="default.css">
...nog 20 <link>s...
<link rel="stylesheet" href="default.css">
<script src="script.js"></script>
...nog 80 scripts...
<script src="script.js"></script>
```

komt nogal DDoS'erig over als deze allemaal in dezelfde milliseconde worden opgevraagd.

browser stuurt ~6-10 requests naar dezelfde hostname

s22.facebook.com

## Sass: Syntactically Awesome StyleSheets

SCSS: Super Cascading StyleSheets


```sass
body {
	font-size: 1rem;
	color: black;
}
td
	padding: 7px
```

Less
```less
body {
	font-size: 1rem;
	color: black;
}
td {
	padding: 7px;
}
```

sass CLI
vermijden for life: node gyp  pregyp



























