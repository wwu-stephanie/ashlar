if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const background_color_template = document.createElement("template");
  background_color_template.innerHTML = `
  <div class="bg-wrapper standard-padding">
    <h1>H1 Heading <a href="#">and link</a></h1>
    <h2>H2 Heading <a href="#">and link</a></h2>
    <h3>H3 Heading <a href="#">and link</a></h3>
    <h4>H4 Heading <a href="#">and link</a></h4>
    <h5>H5 Heading <a href="#">and link</a></h5>

    <p class="tagline">Tagline Text</p>

    <p>Regular Text with <a href="#">a regular link</a> and a <a href="https://wwu.edu/">visited link</a></p>

    <blockquote>Blockquote</blockquote>

    <hr/>

    <blockquote class="dark-blue-bg">Blockquote</blockquote>

    <ul>
        <li><a href="#">Regular</a></li>
        <li><a href="#">list with this</a></li>
        <li>background, and a <a href="#">bunch of links</a></li>
    </ul>

    <div class="block--beyond-basics-block">
        <ul class="menu">
        <li><a href="#">List of links</a></li>
        <li><a href="#">with of links</a></li>
        <li><a href="#">.menu class of links</a></li>
        </ul>
    </div>

    <div class="ctas">
        <a class="cta" href="#">Call to Action</a>
        <a class="cta" href="https://wwu.edu/">Visited CTA</a>
    </div>

    <div class="buttons">
      <button>Button</button>
      <button class="alt">With .alt class</button>
      <button class="warning">With .warning class</button>
      <button disabled>Disabled Button</button>
    </div>

    <ul class="social-media-links">
      <li>    
        <a href="https://www.facebook.com/westernwashingtonuniversity" class="social-icon facebook">
          <span class="visually-hidden">Western on Facebook</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden="true">
            <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
          </svg>
        </a>    
      </li>
      <li>
        <a href="https://www.instagram.com/westernwashingtonuniversity/" class="social-icon instagram">
          <span class="visually-hidden">Western on Instagram</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden="true">
            <path
              d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
          </svg>
        </a>    
      </li>
      <li>
        <a href="https://www.youtube.com/wwu" class="social-icon youtube">
          <span class="visually-hidden">Western on YouTube</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden="true">
            <path
              d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
          </svg>
        </a>    
      </li>
      <li>
        <a href="https://www.flickr.com/photos/wwu" class="social-icon flickr">
          <span class="visually-hidden">Western on Flickr</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden="true">
            <path
              d="M6.7,16.4c-2.6,0-4.7-2.1-4.7-4.6c0-2.6,2.1-4.7,4.6-4.7c2.6,0,4.7,2.1,4.7,4.6c0,0,0,0,0,0C11.3,14.4,9.2,16.4,6.7,16.4z" />
            <path d="M17.3,16.4c-2.6,0-4.7-2.1-4.7-4.6c0-2.6,2.1-4.7,4.6-4.7c2.6,0,4.7,2.1,4.7,4.6c0,0,0,0,0,0C22,14.4,19.9,16.4,17.3,16.4
            C17.3,16.4,17.3,16.4,17.3,16.4z" />
          </svg>
        </a>    
      </li>
      <li>
        <a href="https://westerntoday.wwu.edu/" class="social-icon western-today">
          <span class="visually-hidden">Western Today</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden="true">
            <polygon points="11.8,17.5 9.4,9.5 7.1,17.5 5.2,17.5 2,6.4 4.1,6.4 6.2,14.1 8.5,6.4 10.4,6.4 12.7,14.1 14.9,6.4 16.9,6.4
            13.6,17.5 " />
            <path d="M21.8,17.4c-0.5,0.2-1,0.3-1.5,0.3c-2.1,0-2.2-1.4-2.2-2.6v-3.4h-1.5V9.9h1.5V8h1.8v1.9h2v1.7h-2v3.1c0,1,0.1,1.2,0.7,1.2
            c0.3,0,0.6-0.1,0.9-0.2l0.5-0.2l0,1.8L21.8,17.4z" />
          </svg>
        </a>    
      </li>
    </ul>

    <table class="light-blue auto-layout align-top">
      <caption>Custom classes applied to this table: light-blue fixed align-top</caption>
      <tr>
          <th id="t1-row-1-col-1" scope="col"><a>Row Group</a></th>
          <th id="t1-row-1-col-2" scope="col">Col Header</th>
          <th id="t1-row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
          <th id="t1-row-1-col-4" colspan="3" scope="col">Col Group</th>
      </tr>
      <tr>
          <th id="t1-row-2-col-1" rowspan="3" scope="row">Row Group</th>
          <th id="t1-row-2-col-2" scope="row">Row Header</th>
          <th id="t1-row-2-col-3" scope="col">Col Header</th>
          <th id="t1-row-2-col-4" scope="col">Col Header</th>
          <th id="t1-row-2-col-5" scope="col">Col Header</th>
          <th id="t1-row-2-col-6" scope="col">Col Header</th>
          <th id="t1-row-2-col-7" scope="col">Col Header</th>
      </tr>
      <tr>
          <th id="t1-row-3-col-2" scope="row">Row Header</th>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-3"><a href="#">Link</a></td>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-4"><a href="#">Link</a></td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-6">Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-7">Data</td>
      </tr>
      <tr>
          <th id="t1-row-4-col-2" scope="row">Row Header</th>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-3">More words taking up a single cell on table</td>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-4">Supercalifragilisticexpialidocious</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-5">Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-6">Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-7">Data</td>
      </tr>
    </table>
  </div>
  `;

  class WWUBackgroundColor extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      /* Create the custom element by appending the template */
      this.appendChild(background_color_template.content.cloneNode(true));
      this.querySelector(".bg-wrapper").classList.add(this.attributes.color.value + "-bg");
    }
  }

  window.customElements.define("wwu-background-color", WWUBackgroundColor);
}
