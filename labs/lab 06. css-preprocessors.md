# Lab: CSS preprocessors

In this lab, we'll be using Sass to compile our `.scss` files to `.css` files.

We'll be using the [Node.js](https://nodejs.org/) platform and the [sass](https://www.npmjs.com/package/sass) npm package for accomplishing this task.

## Exercise 1: using Sass

1. First up, let's install Sass. Run this command in a terminal:
	```sh
	npm install --global sass
	```

   Once installed, to compile SCSS, run:
	```sh
	sass myfile.scss > myfile.css
	```
1. Next, take the solution from lab 4 and change the extension of all the `.css` files to `.scss`. Also change the directory name to `scss`. Create a new, empty folder `css`
1. Of all the CSS files, `common.scss` is the one with the most CSS and thus also the most applicable for applying SCSS.
   * Apply nested styling to the `nav` styling.
   ```scss
	nav {
		ol { }
		li { }
		a {
			&:hover { }
		}
	}
   ```
   * Use variables and operations with the `nav` hyperlinks.
   ```scss
   $base-color1: #63f453;
   a {
       background-color: $base-color1;
       &:hover {
           background-color: darken($base-color1, 20%);
       }
   }
   ```
   * Multiple selectors require a list to be reset of `margin`, `padding` and `list-style-type`. Use `@extend`.
   ```scss
   .resetList {
	    list-style-type: none;
	    margin: 0;
	    padding: 0;
   }
   ```
   ```scss
   #trips {
       @extend .resetList;
   }
   ```
   ```scss
   nav {
       ol {
           @extend .resetList;
	   }
   }
   ````
1. Compile all your stylesheets and see whether your page still works.
	```sh
	sass scss/common.scss > css/common.css
	sass scss/default.scss > css/default.css
	sass scss/mobile.scss > css/mobile.css
	```

If all went well, your page should still be working, but you should now see the benefits of a CSS preprocessor!