class BrowserChar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  get styles() {
    return `@import "./components/BrowserChar.css";`;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="globe">OH NO!</div>
        <div class="browser">
          <div class="tabs">
            <div class="tab tab1"></div>
            <div class="tab tab2"></div>
            <div class="tab tab3"></div>
          </div>
          <div class="page">
            <div class="mouth"></div>
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
              <title>Internet Explorer icon</title>
              <path
                d="M22.8 7.381c1.125-2.7 1.2-4.95-.15-6.3-1.5-1.499-5.1-1.05-8.924.75h-.45c-2.7 0-5.324.976-7.274 2.7-1.65 1.5-2.85 3.45-3.375 5.625.375-.45 2.475-2.925 4.875-4.275.075 0 .675-.375.675-.375-.075 0-1.2 1.125-1.425 1.35-5.25 5.4-8.324 13.574-5.924 15.973 1.574 1.575 4.424 1.2 7.724-.6 1.425.675 3 .975 4.724.975 2.25 0 4.35-.6 6.15-1.8 1.874-1.2 3.224-3.074 4.05-5.249h-5.85c-.75 1.425-2.475 2.4-4.275 2.4-2.55 0-4.65-2.1-4.724-4.5V13.83h15.298v-.225c0-.375.075-.825.075-1.124 0-1.8-.45-3.525-1.2-5.1zM2.477 22.38c-1.2-1.2-.824-3.524.6-6.299.675 1.875 1.8 3.525 3.225 4.725.45.375.975.75 1.5 1.05-2.4 1.274-4.35 1.5-5.325.524zm15.374-11.398H8.702v-.075c.15-2.325 2.324-4.35 4.874-4.35 2.4 0 4.35 1.875 4.5 4.35v.075zm4.574-4.2c-.45-.75-1.05-1.5-1.725-2.1a11.213 11.213 0 0 0-3.6-2.25c2.4-1.124 4.425-1.274 5.475-.224.825.975.75 2.624-.15 4.574 0 .075 0 .075 0 0 0 .075 0 .075 0 0z" />
            </svg>
            <div class="tear-container">
              <div class="tear"></div>
            </div>
          </div>
        </div>
        <div class="legs">
          <div class="left leg">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="170" viewBox="0 0 20.314 44.977">
              <path
                style="fill: none; stroke: #000; stroke-width: 4; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-dasharray: none; stroke-opacity: 1;"
                d="M16.19 1.477s-4.338 12.548-1.604 22.51c4.563 16.616 5.53 16.126 3.556 18.46-2.474 2.923-16.968.199-16.968.199"
                transform="translate(-.804 -.824)" />
            </svg>
          </div>
          <div class="right leg">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="170" viewBox="0 0 20.314 44.977">
              <path
                style="fill: none; stroke: #000; stroke-width: 4; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-dasharray: none; stroke-opacity: 1;"
                d="M16.19 1.477s-4.338 12.548-1.604 22.51c4.563 16.616 5.53 16.126 3.556 18.46-2.474 2.923-16.968.199-16.968.199"
                transform="translate(-.804 -.824)" />
            </svg>
          </div>
        </div>
    `;
  }
}

customElements.define("browser-char", BrowserChar);
