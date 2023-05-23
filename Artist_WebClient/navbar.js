import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class Navbar extends LitElement {
  static styles = css`
    .navbar-nav.ml-auto {
      margin-left: auto;
    }
  `;

  toggleNavbar() {
    const navbar = this.shadowRoot.querySelector('.navbar-collapse');
    navbar.classList.toggle('show');
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Artist Navbar</a>
        <button class="navbar-toggler" type="button" @click="${this.toggleNavbar}">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="filterindex.html">Artists</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="songfilter.html">Songs</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('my-navbar', Navbar);
