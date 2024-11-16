import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
   static get properties() {
      return {
         docsHint: { type: String },
         count: { type: Number },
      }
   }

   constructor() {
      super()
      this.docsHint = 'Click on the Vite and Lit logos to learn more'
      this.count = 0
   }

   render() {
      return html``
   }

   _onClick() {
      this.count++
   }

   createRenderRoot() {
      return this;
   }
}

window.customElements.define('my-element', MyElement)
