import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
const fusionTheme = css`
	:root,
	:host,
	:host([theme-mode="light"]) {
		--background: rgb(243, 243, 243);
		--alt-background: 243, 243, 243;
		--surface-bf: brightness(100%);
		--hover-bf: brightness(97%);
		--card-bf: brightness(107%);
		--color: rgb(24, 24, 24);
		--alt-color: 24, 24, 24;
		--accentOpacity: 0.05;
		--surfaceTint: 0.05;
		--a-color: transparent;
		--outline: 0 0px 4px rgba(80,80,80, 0.08),
							 0 0px 4px 0px rgba(80,80,80, 0.08),
							 0 0px 0px 2px rgba(80,80,80, 0.08);
	}
	:host([theme-mode="dark"]) {
		--surface-bf: brightness(135%);
		--background: rgb(21, 21, 21);
		--alt-background: 21, 21, 21;
		--hover-bf: brightness(135%);
		--card-bf: brightness(135%);
		--color: rgb(215, 215, 215);
		--alt-color: 215, 215, 215;
		--accentOpacity: 0.015;
		--surfaceTint: 0.0125;
		--a-color: rgb(215, 215, 215);
	}
	@media (prefers-color-scheme: dark) {
		:host([theme-mode="auto"]) {
			--surface-bf: brightness(135%);
			--background: rgb(21, 21, 21);
			--alt-background: 21, 21, 21;
			--hover-bf: brightness(135%);
			--card-bf: brightness(135%);
			--color: rgb(215, 215, 215);
			--alt-color: 215, 215, 215;
			--accentOpacity: 0.015;
			--surfaceTint: 0.0125;
			--a-color: rgb(215, 215, 215);
		}
	}
`;

class FusionText extends LitElement {
	static get properties() {
		return {
			fontStyle: { type: String, attribute: 'appearance' },
		};
	}
	
	static get styles() {
		return css`
			:host {
				--sp: 0.0625rem;
				cursor: default;
			}
			.fusion-displayLarge {
				color: var(--color, black);
				letter-spacing: calc(-0.25px / 57px);
				line-height: calc(var(--sp) * 64);
				font-size: calc(var(--sp) * 57);
				font-weight: 400;
			}
			.fusion-display {
				color: var(--color, black);
				letter-spacing: calc(0px / 45px);
				line-height: calc(var(--sp) * 52);
				font-size: calc(var(--sp) * 45);
				font-weight: 400;
			}
			.fusion-displaySmall {
				color: var(--color, black);
				letter-spacing: calc(0px / 36px);
				line-height: calc(var(--sp) * 44);
				font-size: calc(var(--sp) * 36);
				font-weight: 400;
			}
			.fusion-headlineLarge {
				color: var(--color, black);
				letter-spacing: calc(0px / 32px);
				line-height: calc(var(--sp) * 40);
				font-size: calc(var(--sp) * 32);
				font-weight: 400;
			}
			.fusion-headline {
				color: var(--color, black);
				letter-spacing: calc(0px / 28px);
				line-height: calc(var(--sp) * 36);
				font-size: calc(var(--sp) * 28);
				font-weight: 400;
			}
			.fusion-headlineSmall {
				color: var(--color, black);
				letter-spacing: calc(0px / 24px);
				line-height: calc(var(--sp) * 32);
				font-size: calc(var(--sp) * 24);
				font-weight: 400;
			}
			.fusion-titleLarge {
				color: var(--color, black);
				letter-spacing: calc(0px / 22px);
				line-height: calc(var(--sp) * 28);
				font-size: calc(var(--sp) * 22);
				font-weight: 400;
			}
			.fusion-title {
				color: var(--color, black);
				letter-spacing: calc(0.15px / 16px);
				line-height: calc(var(--sp) * 24);
				font-size: calc(var(--sp) * 16);
				font-weight: 500;
			}
			.fusion-titleSmall {
				color: var(--color, black);
				letter-spacing: calc(0.1px / 14px);
				line-height: calc(var(--sp) * 20);
				font-size: calc(var(--sp) * 14);
				font-weight: 500;
			}
			.fusion-labelLarge {
				color: var(--color, black);
				letter-spacing: calc(0.1px / 14px);
				line-height: calc(var(--sp) * 20);
				font-size: calc(var(--sp) * 14);
				font-weight: 500;
			}
			.fusion-label {
				color: var(--color, black);
				letter-spacing: calc(0.5px / 12px);
				line-height: calc(var(--sp) * 16);
				font-size: calc(var(--sp) * 12);
				font-weight: 500;
			}
			.fusion-labelSmall {
				color: var(--color, black);
				letter-spacing: calc(0.5px / 11px);
				line-height: calc(var(--sp) * 16);
				font-size: calc(var(--sp) * 11);
				font-weight: 500;
			}
			.fusion-bodyLarge {
				color: var(--color, black);
				letter-spacing: calc(0.5px / 16px);
				line-height: calc(var(--sp) * 24);
				font-size: calc(var(--sp) * 16);
				font-weight: 400;
			}
			.fusion-body {
				color: var(--color, black);
				letter-spacing: calc(0.25px / 14px);
				line-height: calc(var(--sp) * 14);
				font-size: calc(var(--sp) * 14);
				font-weight: 400;
			}
			.fusion-bodySmall {
				color: var(--color, black);
				letter-spacing: calc(0.4px / 12px);
				line-height: calc(var(--sp) * 16);
				font-size: calc(var(--sp) * 12);
				font-weight: 400;
			}
		`;
	}

	constructor() {
		super();
		this.fontStyle = 'bodyLarge';
	}

	render() {
		return html`
			<style>
				::slotted(a) {
					color: transparent;
					text-shadow: 0 0 .1px var(--a-color),
											 0 0 .1px ${document.getElementsByTagName('fusion-app')[0].getAttribute('data-accent-color') || 'blue'};
					box-shadow: 0 .5px var(--a-color),
											 0 .5px ${document.getElementsByTagName('fusion-app')[0].getAttribute('data-accent-color') || 'blue'};
				}
			</style>
			<slot class="fusion-${this.fontStyle}"></slot>
		`;
	}
}
customElements.define('fusion-text', FusionText);

class FusionApp extends LitElement {
	static get properties() {
		return {
			themeMode: { type: String, attribute: 'theme-mode' },
			accentColor: { type: String, attribute: 'accent-color' },
		};
	}
	
	constructor() {
		super();
		this.themeMode = 'light';
		this.accentColor = 'blue';
	}
	
	render() {
		const _style = document.createElement('style');
		_style.innerHTML = `* { accent-color: ${this.accentColor}; }`;
		document.head.appendChild(_style);
		return html`
			<style>
				${fusionTheme}
				:host {
					width: 100%;
					height: 100%;
					position: absolute;
					background-color: var(--background, pink);
				}
				.root {
					width: 100%;
					height: 100%;
					position: absolute;
					backdrop-filter: var(--surface-bf);
				}
				.root::before {
					content: '';
					width: 100%;
					height: 100%;
					opacity: var(--surfaceTint, 0.05);
					position: absolute;
					background-color: ${this.accentColor};
				}
			</style>
			<div class="root"><slot></slot></div>
		`;
	}

	firstUpdated() {
		document.documentElement.style.backgroundColor = this.accentColor;
	}
}
customElements.define('fusion-app', FusionApp);

class FusionRoute extends LitElement {
	static get properties() {
		return {
			routeName: { type: String, attribute: 'data-name' },
			routeType: { type: String, attribute: 'data-route' },
			transition: { type: String, attribute: 'data-transition' },
			activeState: { type: Boolean, attribute: 'data-active' },
			transitionType: { type: String, attribute: 'transition-type' },
		};
	}

	static get styles() {
		return css`
			:host {
				opacity: 0;
				width: 100%;
				height: 100%;
				position: absolute;
				pointer-events: none;
			}



			:host([data-active="false"][data-transition="fade"]) {
				-webkit-animation: routeExitFade 200ms cubic-bezier(0.3, 0, 1, 1) forwards;
								animation: routeExitFade 200ms cubic-bezier(0.3, 0, 1, 1) forwards;
			}
			:host([data-active="true"][data-transition="fade"]) {
				pointer-events: all;
				-webkit-animation: routeEnterFade 250ms cubic-bezier(0, 0, 0, 1) forwards;
								animation: routeEnterFade 250ms cubic-bezier(0, 0, 0, 1) forwards;
			}
			@-webkit-keyframes routeExitFade {
				0% { opacity: 1; }
				100% { opacity: 0; }
			}
			@keyframes routeExitFade {
				0% { opacity: 1; }
				100% { opacity: 0; }
			}
			@-webkit-keyframes routeEnterFade {
				0% { opacity: 0; }
				100% { opacity: 1; }
			}
			@keyframes routeEnterFade {
				0% { opacity: 0; }
				100% { opacity: 1; }
			}
			:host([data-active="false"][data-transition="fadeAlt"]) {
				-webkit-animation: routeExitFade 300ms cubic-bezier(0.2, 0, 0, 1) forwards;
								animation: routeExitFade 30ms cubic-bezier(0.2, 0, 0, 1) forwards;
			}
			:host([data-active="true"][data-transition="fadeAlt"]) {
				pointer-events: all;
				-webkit-animation: routeEnterFade 300ms cubic-bezier(0.2, 0, 0, 1) forwards;
								animation: routeEnterFade 300ms cubic-bezier(0.2, 0, 0, 1) forwards;
			}
			@-webkit-keyframes routeExitFadeAlt {
				0% { opacity: 1; }
				100% { opacity: 0; }
			}
			@keyframes routeExitFadeAlt {
				0% { opacity: 1; }
				100% { opacity: 0; }
			}
			@-webkit-keyframes routeEnterFadeAlt {
				0% { opacity: 0; }
				100% { opacity: 1; }
			}
			@keyframes routeEnterFadeAlt {
				0% { opacity: 0; }
				100% { opacity: 1; }
			}



			:host([data-active="false"][data-transition="fadeThrough"]) {
				-webkit-animation: routeExitFadeThrough 200ms cubic-bezier(0.3, 0, 1, 1) forwards;
								animation: routeExitFadeThrough 200ms cubic-bezier(0.3, 0, 1, 1) forwards;
			}
			:host([data-active="false"][data-transition="fadeThroughBackwards"]) {
				-webkit-animation: routeExitFadeThroughBackwards 200ms cubic-bezier(0.3, 0, 1, 1) forwards;
								animation: routeExitFadeThroughBackwards 200ms cubic-bezier(0.3, 0, 1, 1) forwards;
			}
			:host([data-active="true"][data-transition="fadeThrough"]) {
				pointer-events: all;
				-webkit-animation: routeEnterFadeThrough 250ms cubic-bezier(0, 0, 0, 1) forwards;
								animation: routeEnterFadeThrough 250ms cubic-bezier(0, 0, 0, 1) forwards;
			}
			:host([data-active="true"][data-transition="fadeThroughBackwards"]) {
				pointer-events: all;
				-webkit-animation: routeEnterFadeThroughBackwards 250ms cubic-bezier(0, 0, 0, 1) forwards;
								animation: routeEnterFadeThroughBackwards 250ms cubic-bezier(0, 0, 0, 1) forwards;
			}
			@-webkit-keyframes routeExitFadeThrough {
				0% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
				100% {
					opacity: 0;
					-webkit-transform: scale(1.1);
									transform: scale(1.1);
				}
			}
			@keyframes routeExitFadeThrough {
				0% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
				100% {
					opacity: 0;
					-webkit-transform: scale(1.1);
									transform: scale(1.1);
				}
			}
			@-webkit-keyframes routeExitFadeThroughBackwards {
				0% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
				100% {
					opacity: 0;
					-webkit-transform: scale(.9);
									transform: scale(.9);
				}
			}
			@keyframes routeExitFadeThroughBackwards {
				0% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
				100% {
					opacity: 0;
					-webkit-transform: scale(.9);
									transform: scale(.9);
				}
			}
			@-webkit-keyframes routeEnterFadeThrough {
				0% {
					opacity: 0;
					-webkit-transform: scale(.9);
									transform: scale(.9);
				}
				100% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
			}
			@keyframes routeEnterFadeThrough {
				0% {
					opacity: 0;
					-webkit-transform: scale(.9);
									transform: scale(.9);
				}
				100% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
			}
			@-webkit-keyframes routeEnterFadeThroughBackwards {
				0% {
					opacity: 0;
					-webkit-transform: scale(1.1);
									transform: scale(1.1);
				}
				100% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
			}
			@keyframes routeEnterFadeThroughBackwards {
				0% {
					opacity: 0;
					-webkit-transform: scale(1.1);
									transform: scale(1.1);
				}
				100% {
					opacity: 1;
					-webkit-transform: scale(1);
									transform: scale(1);
				}
			}



			:host([data-active="false"][data-transition="slide"][data-route="main"]) {
				-webkit-animation: routeExitSlideBackwards 200ms cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
								animation: routeExitSlideBackwards 200ms cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
			}
			:host([data-active="false"][data-transition="slide"]:not([data-route="main"])) {
				-webkit-animation: routeExitSlide 200ms cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
								animation: routeExitSlide 200ms cubic-bezier(0.3, 0, 0.8, 0.15) forwards;
			}
			:host([data-active="true"][data-transition="slide"][data-route="main"]) {
				-webkit-animation: routeEnterSlideBackwards 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
								animation: routeEnterSlideBackwards 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
			}
			:host([data-active="true"][data-transition="slide"]:not([data-route="main"])) {
				opacity: 1;
				pointer-events: all;
				-webkit-transform: translateX(0%);
								transform: translateX(0%);
				-webkit-animation: routeEnterSlide 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
								animation: routeEnterSlide 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
			}
			@-webkit-keyframes routeExitSlide {
				0% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
				100% {
					opacity: 0;
					-webkit-transform: translateX(10%);
									transform: translateX(10%);
				}
			}
			@keyframes routeExitSlide {
				0% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
				100% {
					opacity: 0;
					-webkit-transform: translateX(10%);
									transform: translateX(10%);
				}
			}
			@-webkit-keyframes routeExitSlideBackwards {
				0% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
				100% {
					opacity: 0;
					-webkit-transform: translateX(-10%);
									transform: translateX(-10%);
				}
			}
			@keyframes routeExitSlideBackwards {
				0% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
				100% {
					opacity: 0;
					-webkit-transform: translateX(-10%);
									transform: translateX(-10%);
				}
			}
			@-webkit-keyframes routeEnterSlide {
				0% {
					opacity: 0;
					-webkit-transform: translateX(10%);
									transform: translateX(10%);
				}
				100% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
			}
			@keyframes routeEnterSlide {
				0% {
					opacity: 0;
					-webkit-transform: translateX(10%);
									transform: translateX(10%);
				}
				100% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
			}
			@-webkit-keyframes routeEnterSlideBackwards {
				0% {
					opacity: 0;
					-webkit-transform: translateX(-10%);
									transform: translateX(-10%);
				}
				100% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
			}
			@keyframes routeEnterSlideBackwards {
				0% {
					opacity: 0;
					-webkit-transform: translateX(-10%);
									transform: translateX(-10%);
				}
				100% {
					opacity: 1;
					-webkit-transform: translateX(0%);
									transform: translateX(0%);
				}
			}
		`;
	}

	constructor() {
		super();
		this.routeType = 'pop';
		this.routeName = 'main';
		this.transition = 'FadeThrough';
		this.transitionType = 'FadeThrough-through';
		
		this.params = new URLSearchParams(window.location.search);
	}

	render() {
		return html`<slot></slot>`;
	}

	firstUpdated() {
		if (this.params.has('r') && this.params.get('r') == this.routeName) {
			this.routeType = 'main';
		}
	}
}
customElements.define('fusion-route', FusionRoute);

class FusionScaffold extends LitElement {
	static get properties() {
		return {
			drawerState: { type: String, attribute: 'data-drawer' },
			hasDrawer: { type: String, attribute: 'has-drawer' },
			params: { attribute: false, },
		};
	}

	static get styles() {
		return css`
			:host {
				display: grid;
				grid-template-columns: auto 1fr;
				grid-template-rows: auto 1fr;
				grid-column-gap: 0px;
				grid-row-gap: 0px;
				height: 100%;
				width: 100%;
				position: absolute;
			}
			.appbar { grid-area: 1 / 1 / 2 / 3; }
			::slotted([slot="appbar"]) { display: flex; flex-direction: row; gap: 21px; padding: 8px 24px; }

			.drawer { grid-area: 2 / 1 / 3 / 2; width: 0px; }
			::slotted([slot="drawer"]) { display: block; height: 100%; }
			.drawer[drawer-state="open"] { width: auto; }

			.body { grid-area: 2 / 2 / 3 / 3; background-color: var(--background); display: block; position: relative; }
		`;
	}

	constructor() {
		super();
		this.hasDrawer = 'false';
		this.drawerState = 'closed';
		this.params = new URLSearchParams(window.location.search);
	}

	render() {
		return html`
			<div class="appbar title">
				<slot name="appbar"></slot>
			</div>
			<div class="drawer" drawer-state="${this.drawerState}">
				<slot name="drawer"></slot>
			</div>
			<div class="body">
				<slot name="body">
					<fusion-text>Body content</fusion-text>
				</slot>
			</div>
		`;
	}
	
	firstUpdated() {
		const bodies = this.renderRoot.querySelector('.body').children[0].assignedNodes();
		const drawer = this.renderRoot.querySelector('.drawer').children[0].assignedNodes()[0];
		if (this.hasDrawer == 'true') {
			if (drawer && drawer.tagName === 'Fusion-DRAWER') {
				const destinations = drawer.getAttribute('data-destinations').split(', ');
				if (bodies.length == destinations.length) {
					for (let i = 0; i < bodies.length; i++) {
						if (this.params.get('n') == destinations[i]) {
							bodies[i].setAttribute('data-active', true);
						}
					}
					window.addEventListener('popstate', (e) => {
						console.log(e.state);
					});
				} else {
					throw Error(`The amount of bodies (${bodies.length}), does not match the amount of destinations (${destinations.length}).`)
				}
			} else {
				throw Error(`'has-drawer' is set to 'true', but no 'fusion-drawer' was found.`);
			}
		}
	}
}
customElements.define('fusion-scaffold', FusionScaffold);

class FusionDrawer extends LitElement {
	static get properties() {
		return {
			drawerName: { type: String, attribute: 'data-name' },
			destinations: { type: String, attribute: 'data-destinations' },
			selectionColor: { type: String, attribute: 'data-selection-color' },
			params: { attribute: false, },
		};
	}

	constructor() {
		super();
		this.drawerName = 'fusionDrawer';
		this.destinations = 'Dest 1, Dest 2';
		this.selectionColor = 'blue';
		
		this.params = new URLSearchParams(window.location.search);
	}

	render() {
		return html`
			<style>
				:host {
					overflow-y: auto;
				}
		
				nav ul {
					background-color: var(--background);
					flex-direction: column;
					padding: 0;
					list-style: none;
					display: flex;
					margin: 8px;
					gap: 8px;
					width: auto;
					min-width: 300px;
					max-width: 90%;
					position: relative;
				}
				nav ul::before {
					content: '';
					background-color: ${document.getElementsByTagName('fusion-app')[0].getAttribute('data-accent-color') || 'blue'};
					width: 100%;
					height: 100%;
					position: absolute;
					opacity: var(--accentOpacity);
				}
		
				nav ul input {
					display: none;
				}
		
				nav ul label {
					-webkit-backdrop-filter: brightness(100%);
									backdrop-filter: brightness(100%);
					padding: 8px 24px 8px 16px;
					border-radius: 4px;
				}
				nav ul label {
					transition: -webkit-backdrop-filter 200ms cubic-bezier(0.2, 0, 0, 1),
															backdrop-filter 200ms cubic-bezier(0.2, 0, 0, 1);
				}
				nav ul label::before {
					content: '';
					height: 0%;
					transition: height 200ms cubic-bezier(0.2, 0, 0, 1);
				}
		
				nav ul label:hover {
					-webkit-backdrop-filter: var(--hover-bf);
									backdrop-filter: var(--hover-bf);
				}
				nav ul input:checked + label {
					-webkit-backdrop-filter: var(--hover-bf);
									backdrop-filter: var(--hover-bf);
				}
				nav ul input:checked + label::before {
					content: '';
					width: 3px;
					height: calc(0.0625rem * 24);
					box-shadow: rgba(215, 215, 215, .5) 3px 0,
											${this.selectionColor} 3px 0;
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					margin: auto;
					border-radius: 10px;
				}
			</style>
			<nav>
				<ul>
					${this.destinations.split(', ').map((dest) => html`
						<input type="radio" name="${this.drawerName}" id="${dest}" />
						<label for="${dest}" @click="${this._navigate}">
							<fusion-text data-type="labelLarge">${dest}</fusion-text>
						</label>
					`)}
				</ul>
			</nav>
		`;
	}

	firstUpdated() {
		const radios = this.renderRoot.querySelectorAll('input');
		if (this.params.has(this.drawerName)) {
			radios.forEach((radio) => {
				if (this.params.get(this.drawerName) == radio.id) {
					radio.setAttribute('checked', true);
					this._navigate(radio.id);
				}
			});
		} else {
			radios[0].setAttribute('checked', true);
			this._navigate(radios[0].id);
		}
		window.onpopstate = () => {
			this.params = new URLSearchParams(window.location.search);
			const radios = this.renderRoot.querySelectorAll('input');
			if (this.params.has(this.drawerName)) {
				radios.forEach((radio) => {
					if (this.params.get(this.drawerName) == radio.id) {
						radio.click();
						this._navigateHistory(radio.id);
					}
				});
			} else {
				radios[0].click();
				this._navigateHistory(radios[0].id);
			}
		};
	}

	_navigateHistory(e) {
		let dest = typeof e === 'string' ? e : (e.target.getAttribute('for') || e.target.parentElement.getAttribute('for'));
		const radios = this.renderRoot.querySelectorAll('input');
		const bodies = document.getElementsByTagName('fusion-scaffold')[0].querySelectorAll('[slot="body"]');
		for (let i = 0; i < radios.length; i++) {
			if (radios[i].id == dest) {
				bodies[i].setAttribute('data-active', true);
			} else {
				bodies[i].setAttribute('data-active', false);
			}
		}
	}

	_navigate(e) {
		let dest = typeof e === 'string' ? e : (e.target.getAttribute('for') || e.target.parentElement.getAttribute('for'));
		this.params.set(this.drawerName, dest);
		const newUrl = window.location.origin + window.location.pathname + '?' + this.params.toString();
		window.history.pushState({}, `${document.head.querySelector('title').innerText} - ${dest}`, newUrl);
		
		const radios = this.renderRoot.querySelectorAll('input');
		const bodies = document.getElementsByTagName('fusion-scaffold')[0].querySelectorAll('[slot="body"]');
		for (let i = 0; i < radios.length; i++) {
			if (radios[i].id == dest) {
				bodies[i].setAttribute('data-active', true);
			} else {
				bodies[i].setAttribute('data-active', false);
			}
		}
	}
}
customElements.define('fusion-drawer', FusionDrawer);

class FusionCard extends LitElement {
	static get properties() {
		return {};
	};

	static get styles() {
		return css`
			:host {
				background-color: var(--background);
				border-radius: 16px;
				position: relative;
			}
			.card {
				backdrop-filter: var(--card-bf);
				flex-direction: column;
				border-radius: inherit;
				padding: 16px;
				display: flex;
				box-shadow: var(--outline);
			}
		`;
	}

	constructor() {
		super();
	}

	render() {
		return html`
			<div class="card">
				<slot><slot>
			<div>
		`;
	}
}
customElements.define('fusion-card', FusionCard);