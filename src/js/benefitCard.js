import { LitElement, css, html } from 'lit'

export class BenefitCard extends LitElement {
   static get properties() {
      return {
         imageUrl: { type: String },
         title: { type: String },
         text: { type: String },
      }
   }

   constructor(imageUrl, title, text) {
      super()
      this.imageUrl = imageUrl;
      this.title = title;
      this.text = text;
   }

   render() {
      return html`
         <div class="flex flex-col card max-w-64 text-center gap-9">
            <div class="bg-cover bg-center w-32 h-32 rounded-full bg-white m-auto" style="background-image: url(${this.imageUrl})"></div>
            <h3 class="text-2xl font-serif">${this.title}</h3>
            <p class="font-roboto">${this.text}</p>
         </div>
      `
   }

   createRenderRoot() {
      return this;
   }
}

window.customElements.define('benefit-card', BenefitCard)
