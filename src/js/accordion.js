import { LitElement, css, html } from 'lit'

export class Accordion extends LitElement {

   createRenderRoot() { return this; }

   static get properties() {
      return {
         question: { type: String },
         text: { type: String },
         rotate: {type: Boolean}
      }
   }

   constructor( question, text) {
      super()
      this.question = question;
      this.text = text;
      this.rotate = false;
   }

   _animation(){
      this.rotate = !this.rotate;
   }

   _rotate(){
      return this.rotate ? 'rotate' : '';
   }

   _showAccordion(){
      return this.rotate ? 'show_accordion' : '';

   }

   render() {
      return html 
      `
         <div class="shadow-xl rounded-2xl max-w-4xl mb-9" id="accordion">
          <div class="flex flex-row flex-nowrap justify-between items-center cursor-pointer" @click="${this._animation}">
            <p class="font-roboto m-5 font-roboto">¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet ex nunc.?</p>
            <iconify-icon icon="oui:arrow-down" width="27px" height="27px" class="transition-all duration-1000 m-3 ${this._rotate()}"></iconify-icon>
          </div>
          <p class="opacity-0 transition-all duration-1000 h-0 font-roboto ${this._showAccordion()}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet ex nunc. Donec laoreet vitae erat
            vel interdum. Suspendisse potenti. Fusce tincidunt tincidunt ex nec finibus. Praesent eget ullamcorper
            massa, nec posuere erat. Phasellus vitae dui fermentum, vestibulum erat at, condimentum nibh. Curabitur
            convallis gravida tempor. Donec consectetur viverra quam ut blandit.</p>
        </div>
      `
   }
}

window.customElements.define('custom-accordion', Accordion)
