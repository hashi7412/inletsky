import { createGlobalStyle } from "styled-components";
import variables, { desVariables, smVariables, tabVariables } from "./variable";
import { GV, declearStyleVariables } from "../utils/style.util";

const GlobalStyle = createGlobalStyle`

	/* @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'); */

	:root {
		${declearStyleVariables(variables)}
	}

	html {
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;

		@media (max-width: 1200px) {
			${declearStyleVariables(desVariables, "!important")}
		}
		
		@media (max-width: 992px) {
			${declearStyleVariables(tabVariables, "!important")}
		}
		
		@media (max-width: 768px) {
			${declearStyleVariables(smVariables, "!important")}
		}
	}
	body {
		box-sizing: border-box;
		margin: 0;
		background: ${GV('bg')};
		font-family: 'Chakra Petch', sans-serif;
		line-height: 150%;
		font-size: ${GV('font-size')};
		color: ${GV('color')};
		overflow-x: hidden;
	}
	*, *::before, *::after {
		box-sizing: inherit;
	}
	h1, h2, h3, h4, h5, h6 {
		margin: 0;
	}
	p {
		margin:0;
	}
	a {
		text-decoration:none; 
		color:inherit; 
		cursor:pointer;
	}
	button {
		background-color:transparent;
		color:inherit;
		border-width:0;
		padding:0;
		cursor:pointer;
	}
	input::-moz-focus-inner { 
		border:0;
		padding:0;
		margin:0;
	}
	input, textarea {
		outline: 0;
	}
	ul, ol, dd {
		margin:0;
		padding:0;
		list-style:none;
	}
	cite {
		font-style:normal;
	}
	fieldset{
		border-width:0;
		padding:0;
		margin:0;
	}
	figure{
		margin:0;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	menu,
	nav,
	section,
	summary {
		display: block;
		margin: 0;
		padding: 0;
	}

	audio,
	canvas,
	progress,
	video {
		display: inline-block;
		vertical-align: baseline;
	}

	audio:not([controls]) {
		display: none;
		height: 0;
	}

	[hidden], template {
		display: none;
	}

	a {
		background-color: transparent;
	}

	a:active,
	a:hover {
		outline: 0;
	}

	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	b,
	strong {
		font-weight: bold;
	}

	dfn {
		font-style: italic;
	}

	mark {
		background: #ff0;
		color: #000;
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sup {
		top: -0.5em;
	}

	sub {
		bottom: -0.25em;
	}

	img {
		border: 0;
		max-width: 100%;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	hr {
		box-sizing: content-box;
		height: 0;
	}

	pre {
		overflow: auto;
	}

	code,
	kbd,
	pre,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		color: inherit;
		font: inherit;
		margin: 0;
	}

	button {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	html input[type="button"],
	input[type="reset"],
	input[type="submit"] {
		-webkit-appearance: button;
		-moz-appearance: button;
		appearance: button;
		cursor: pointer;
	}

	button[disabled],
	html input[disabled] {
		cursor: default;
	}

	button::-moz-focus-inner,
	input::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	input {
		line-height: normal;
	}

	input[type="checkbox"],
	input[type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	input[type="search"] {
		-webkit-appearance: textfield;
		-moz-appearance: textfield;
		appearance: textfield;
		box-sizing: content-box;
	}

	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	fieldset {
		border: 1px solid #c0c0c0;
		margin: 0 2px;
		padding: 0.35em 0.625em 0.75em;
	}

	legend {
		border: 0;
		padding: 0;
	}

	textarea {
		overflow: auto;
	}

	optgroup {
		font-weight: bold;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
	}

	&::-webkit-scrollbar {
		position: absolute;
		width: 8px;
		height: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #eee;
		border-radius: 5px;
		box-shadow: #eee;
	}

	&::-webkit-scrollbar-thumb {
		background: #a6a7c7ac;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #a6a7c7;
	}
	.swiper {
		max-width: 100%;
		height: 100%;
	  }
	  .swiper-slide {
		text-align: center;
		font-size: 18px;
	  
		/* Center slide text vertically */
		display: flex;
		justify-content: center;
		align-items: center;
	  }
	  .swiper-button-prev, .swiper-button-next{
			color:#4CAF50;
	  }
	  .swiper-pagination-bullet-active {
		background:#4CAF50 !important;
	  }
`

export default GlobalStyle;
