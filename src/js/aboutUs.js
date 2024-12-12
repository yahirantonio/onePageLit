import { LitElement, css, html, unsafeCSS } from 'lit'

export class InfoContainer extends LitElement {

   createRenderRoot() {
      return this;
   }

   static get properties() {
      return {
         isVisible: { type: Boolean },
         sections: { type: Boolean },
         missionVisible: { type: Boolean },
         rotate: { type: Boolean }
      }
   }

   constructor() {
      super()
      this.isVisible = true;
      this.sections = true;
      this.missionVisible = true;
      this.rotate = true;
   }

   render() {
      return this.sections ? this.aboutUs() : this.mission();
   }

   _show() {

      this.rotate = !this.rotate;

      if (this.missionVisible) {
         this.isVisible = !this.isVisible;
      } else {
         setTimeout(() => {
            this.isVisible = !this.isVisible;
         }, 1200)
      }

      setTimeout(() => {
         this.sections = !this.sections;
      }, 1100)

      if (this.isVisible == true) {
         this.missionVisible = !this.missionVisible;
      } else if (this.isVisible == false && this.missionVisible == false) {
         this.missionVisible = !this.missionVisible
      } else {
         setTimeout(() => {
            this.missionVisible = !this.missionVisible;
         }, 1200)
      }

   }

   _fade() {
      return this.isVisible ? "visible" : "fade"
   }

   _appear() {
      return this.missionVisible ? "fade" : "visible"
   }

   _rotate() {
      return this.rotate ? "" : "rotate";
   }

   aboutUs() {
      return html`<section
      class="m-auto my-16 lg:px-20 md:px-10 px-5 pt-6 flex flex-wrap-reverse lg:flex-nowrap gap-9 md:gap-24 items-center justify-center w-full md:w-5/6 
      transition-all duration-1000 opacity-1 ${this._fade()}" id="AboutUs">
      <img src="/img/team.png" class="max-w-xs md:max-w-sm bg-gray-300 p-5 rounded-2xl" alt="">
      <div class="flex flex-wrap justify-center md:justify-between items-center gap-9">
        <h2 class="font-serif text-4xl md:text-5xl">Acerca de nosotros</h2>
        <iconify-icon icon="maki:arrow" width="42px" height="42px" class="cursor-pointer transition-all duration-1000 ${this._rotate()}" @click="${this._show}"></iconify-icon>
        <p class="text-center md:text-left font-roboto">En Facturas Facilitas, simplificamos la forma en que gestionas tus facturas. Somos una plataforma en línea dedicada a brindar soluciones rápidas, seguras y accesibles para la creación, envío y administración de facturas electrónicas.
        <br><br>Con un equipo apasionado por la innovación, nos esforzamos por ofrecer un servicio intuitivo y confiable, adaptado a las necesidades de nuestros clientes.
         ¡Facilitar tus finanzas es nuestra prioridad!
        </p>
      </div>
    </section> `
   }

   mission() {
      return html`<section
      class="m-auto my-16 lg:px-20 md:px-10 px-5 pt-6 flex flex-wrap-reverse lg:flex-nowrap gap-9 md:gap-16 items-center justify-center lg:justify-between w-full md:w-5/6 
      opacity-0 transition-all duration-1000 ${this._appear()}"
      id="Mission">
      <img src="/img/target.png" class="w-64 h-64 m-auto" alt="">
      <div class="flex flex-wrap justify-center md:justify-between items-center gap-9 lg:w-2/4 flex-col md:flex-row">
        <h2 class="font-serif text-4xl md:text-5xl">Misión</h2>
        <iconify-icon icon="maki:arrow" width="42px" height="42px" class="cursor-pointer transition-all duration-1000  ${this._rotate()}"  @click="${this._show}"></iconify-icon>
        <p class="text-center md:text-left font-roboto">Nuestra misión es empoderar a emprendedores y empresas de todos los tamaños con herramientas tecnológicas que optimizan sus procesos administrativos, ahorrando tiempo y garantizando cumplimiento legal.
        </p>
      </div>
    </section> `
   }

   _onClick() {
      this.count++
   }

}

window.customElements.define('info-container', InfoContainer);