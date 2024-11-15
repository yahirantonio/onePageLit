import { LitElement, css, html, unsafeCSS } from 'lit'

export class InfoContainer extends LitElement {

   createRenderRoot() {
      return this;
    }

   static get properties() {
      return {
         title: { type: String },
         body: { type: String },
         imageUrl: { type: String },
      }
   }

   constructor(title, body, imageUrl) {
      super()
      this.title = title;
      this.body = body;
      this.imageUrl = imageUrl;
   }

   render() {
      return this.section()
   }

   section(){
      return html`<section
      class="m-auto my-16 lg:px-20 md:px-10 px-5 pt-6 flex flex-wrap-reverse lg:flex-nowrap gap-9 md:gap-16 items-center justify-center w-full md:w-5/6 opacity-1"
      id="AboutUs">
      <img src="${this.imageUrl}" class="max-w-xs md:max-w-sm bg-gray-300 p-5 rounded-2xl" alt="">
      <div class="flex flex-wrap justify-center md:justify-between items-center gap-9">
        <h2 class="font-serif text-4xl md:text-5xl">${this.title}</h2>
        <iconify-icon icon="maki:arrow" width="42px" height="42px" class="ursor-pointer expand_js"></iconify-icon>
        <p class="text-center md:text-left">${this.body}
        </p>
      </div>
    </section> `
   }


   // _onClick() {
   //    this.count++
   // }

}

window.customElements.define('info-container', InfoContainer);