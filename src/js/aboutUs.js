import { LitElement, html } from 'lit'

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
    return html`
    <section
      class="my-36 padding_page flex flex-wrap-reverse justify-center items-center gap-12 sm:gap-8
      transition-all duration-1000 opacity-1 ${this._fade()}" id="AboutUs">
      <img src="/img/team.png" class="max-w-xs md:max-w-xl bg-gray-300 p-5 rounded-2xl" alt="">
      <div class="w-full xl:max-w-xl">
        <div class="flex justify-center mb-6 gap-6 items-center flex-wrap">
          <h2 class="font-serif text-4xl md:text-5xl grow text-center sm:text-left">Acerca de nosotros</h2>
          <iconify-icon icon="maki:arrow" width="42px" height="42px" class="cursor-pointer transition-all duration-1000 ${this._rotate()}" @click="${this._show}"></iconify-icon>
        </div>
        <p class="text-lg text-center sm:text-left font-roboto">En Facturas Facilitas, simplificamos la forma en que gestionas tus facturas. Somos una plataforma en línea dedicada a brindar soluciones rápidas, seguras y accesibles para la creación, envío y administración de facturas electrónicas.</p>
        <p class="text-lg text-center sm:text-left font-roboto">Con un equipo apasionado por la innovación, nos esforzamos por ofrecer un servicio intuitivo y confiable, adaptado a las necesidades de nuestros clientes.
         ¡Facilitar tus finanzas es nuestra prioridad!
        </p>
      </div>
    </section> 
    `
  }

  mission() {
    return html`
    <section 
    class="my-36 padding_page pt-6 flex flex-wrap-reverse gap-16 justify-center gap-12 sm:gap-8
    opacity-0 transition-all duration-1000 ${this._appear()}"
    id="Mission">
      <img src="/img/target.png" class="max-w-xs md:max-w-md" alt="">
      <div class="md:max-w-lg">
        <div class="flex justify-between mb-6 items-center">
         <h2 class="font-serif text-4xl md:text-5xl sm:grow text-center sm:text-left">Misión</h2>
         <iconify-icon icon="maki:arrow" width="42px" height="42px" class="cursor-pointer transition-all duration-1000  ${this._rotate()}"  @click="${this._show}"></iconify-icon>
        </div>
         <p class="text-lg md:text-left font-roboto">Nuestra misión es empoderar a emprendedores y empresas de todos los tamaños con herramientas tecnológicas que optimizan sus procesos administrativos, ahorrando tiempo y garantizando cumplimiento legal.</p>
      </div>
    </section> 
    `
  }

  _onClick() {
    this.count++
  }

}

window.customElements.define('info-container', InfoContainer);