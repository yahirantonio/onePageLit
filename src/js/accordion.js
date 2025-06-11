import { LitElement, css, html } from 'lit'

export class Accordion extends LitElement {

   createRenderRoot() { return this; }

   static get properties() {
      return {
         question: { type: String },
         text: { type: String },
         rotate: { type: Boolean }
      }
   }

   constructor(question, text) {
      super()
      this.question = question;
      this.text = text;
      this.rotate = false;
   }

   _animation() {
      this.rotate = !this.rotate;
      this._showAccordion()
   }

   _rotate() {
      return this.rotate ? 'rotate' : '';
   }

   _showAccordion() {
      let accordion = this.querySelector('#text_accordion');
      
      if (this.rotate) {
         let height = accordion.scrollHeight + 20;
         accordion.style.height = `${height}px`;
         accordion.style.opacity = '1';
      }
      else {
         accordion.style.height = `${0}px`
         accordion.style.opacity = '0';
      }

      return '';
   }

   render() {
      return html
         `
         <div class="shadow-xl rounded-2xl mb-9" id="accordion">
          <div class="flex flex-row flex-nowrap justify-between items-center cursor-pointer" @click="${this._animation}">
            <p class="font-roboto m-5">${this.question}</p>
            <iconify-icon icon="oui:arrow-down" width="27px" height="27px" class="transition-all duration-1000 m-3 ${this._rotate()}"></iconify-icon>
          </div>
          <p class="opacity-0 transition-all duration-1000 h-0 px-6 font-roboto" id="text_accordion">${this.text}</p>
        </div>
      `
   }
}

window.customElements.define('custom-accordion', Accordion)
