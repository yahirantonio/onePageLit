import { LitElement, html } from 'lit'

export class BenefitCard extends LitElement {
   
   createRenderRoot() { return this; }

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
         <div class="flex flex-col max-w-[210px]  text-center gap-3">
            <div class="bg-cover bg-center w-32 h-32 rounded-full bg-white m-auto" style="background-image: url(${this.imageUrl})"></div>
            <h3 class="text-2xl font-serif">${this.title}</h3>
            <p class="font-roboto text-lg">${this.text}</p>
         </div>
      `
   }

}

window.customElements.define('benefit-card', BenefitCard)
