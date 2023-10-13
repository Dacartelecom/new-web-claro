import { EmblaOptionsType } from "embla-carousel-react";
import { CSSProperties } from "react";
import BannerDesktop3 from "../../assets/img/banner-desktop-3.webp";
import BannerDesktop4 from "../../assets/img/banner-desktop-4.webp";
import BannerDesktop5 from "../../assets/img/banner-desktop-5.webp";
import BannerDesktop6 from "../../assets/img/banner-desktop-6.webp";
import BannerDesktop8 from "../../assets/img/banner-desktop-8.webp";
import BannerDesktop9 from "../../assets/img/banner-desktop-9.webp";
import BannerDesktop10 from "../../assets/img/banner-desktop-10.webp";
import BannerMobile3 from "../../assets/img/banner-mobile-3.webp";
import BannerMobile4 from "../../assets/img/banner-mobile-4.webp";
import BannerMobile5 from "../../assets/img/banner-mobile-5.webp";
import BannerMobile6 from "../../assets/img/banner-mobile-6.webp";
import BannerMobile8 from "../../assets/img/banner-mobile-8.webp";
import BannerMobile9 from "../../assets/img/banner-mobile-9.webp";
import BannerMobile10 from "../../assets/img/banner-mobile-10.webp";
import InternetTelefonia from "../../assets/img/internet-telefonia.webp";
import InternetTelevision from "../../assets/img/internet-television.webp";
import InternetTelefoniaTv from "../../assets/img/internet-telefonia-tv.webp";
import Internet from "../../assets/img/internet.webp";
import LogoNetflix from "../../assets/img/logo-netflix.webp";
import Carousel from "../../components/Carousel/Carousel";
import Form from "../../components/Form/Form";
import Items from "../../components/Items/Items";
import { ItemsArray } from "../../interfaces/Items.props";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 7;
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {};
const STYLES_DESKTOP: CSSProperties = {};

const imagesMobile = [
  BannerMobile3,
  BannerMobile4,
  BannerMobile5,
  BannerMobile6,
  BannerMobile8,
  BannerMobile9,
  BannerMobile10,
];

const imagesDesktop= [
  BannerDesktop3,
  BannerDesktop4,
  BannerDesktop5,
  BannerDesktop6,
  BannerDesktop8,
  BannerDesktop9,
  BannerDesktop10,
];

const ItemsPlanes: ItemsArray = [
  /*{
    title: 'internet hfc / ftth',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        promo: 'Precio',
        price: '59',
        plan: '1play 50  mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 50 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '50mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '100mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        dscto: '-S/10',
        promo: 'Precio por 6 Meses',
        price: '69',
        regular: 'Precio Regular S/79',
        plan: '1play 100 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 100 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        dscto: '-S/10',
        promo: 'Precio por 6 Meses',
        price: '79',
        regular: 'Precio Regular S/89',
        plan: '1play 200 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 200 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '200mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '400mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        dscto: '-S/30',
        promo: 'Precio por 6 Meses',
        price: '99',
        regular: 'Precio Regular S/129',
        plan: '1play 300 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 300 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '300mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '600mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        promo: 'Precio',
        price: '199',
        plan: '1play 500 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 500 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '500mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '100mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        promo: 'Precio',
        price: '399',
        plan: '1play 1000 mbps',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000mbps'
          },
        ]
      },
    ]
  },*/


  {
    title: 'internet + telefonía',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        promo: 'Precio',
        price: '69',
        plan: '2play 50 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 50 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '50 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '100 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/10',
        promo: 'Precio por 6 Meses',
        price: '79',
        regular: 'Precio Regular S/89',
        plan: '2play 100 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 100 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional​​',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/10',
        promo: 'Precio por 6 Meses',
        price: '89',
        regular: 'Precio Regular S/99',
        plan: '2play 200 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 200 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '200 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '400 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional​​',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/10',
        promo: 'Precio por 6 Meses',
        price: '129',
        regular: 'Precio Regular S/139',
        plan: '2play 300 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 300 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '300 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '600 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional​​',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/10',
        promo: 'Precio por 6 Meses',
        price: '199',
        regular: 'Precio Regular S/209',
        plan: '2play 500 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 500 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '500 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional​​',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/10',
        promo: 'Precio por 6 Meses',
        price: '399',
        regular: 'Precio Regular S/409',
        plan: '2play 1000 mbps',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional',
          },
        ]
      },
    ]
  },
  {
    title: 'internet + televisión',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio',
        price: '139',
        plan: '2play 50 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 50 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '50 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '100 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        dscto: '-S/20',
        promo: 'Precio por 6 Meses',
        price: '139',
        regular: 'Precio Regular S/159',
        plan: '2play 100 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 100 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        dscto: '-S/20',
        promo: 'Precio por 6 Meses',
        price: '149',
        regular: 'Precio Regular S/169',
        plan: '2play 200 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 200 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '200 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '400 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        dscto: '-S/30',
        promo: 'Precio por 6 Meses',
        price: '179',
        regular: 'Precio Regular S/209',
        plan: '2play 300 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 300 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '300 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '600 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        dscto: '-S/30',
        promo: 'Precio por 6 Meses',
        price: '249',
        regular: 'Precio Regular S/279',
        plan: '2play 500 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 500 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '500 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        dscto: '-S/30',
        promo: 'Precio por 6 Meses',
        price: '449',
        regular: 'Precio Regular S/479',
        plan: '2play 1000 mbps',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
    ]
  },
  {
    title: 'internet + telefonía + tv',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        promo: 'Precio',
        price: '149',
        plan: '3play 50 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 50 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '50 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '100 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        dscto: '-S/20',
        promo: 'Precio por 6 Meses',
        price: '149',
        regular: 'Precio Regular S/169',
        plan: '3play 100 Mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 100 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        dscto: '-S/20',
        promo: 'Precio por 6 Meses',
        price: '154',
        regular: 'Precio Regular S/174',
        plan: '3play 200 Mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 200 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '200 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '400 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        dscto: '-S/30',
        promo: 'Precio por 6 Meses',
        price: '184',
        regular: 'Precio Regular S/214',
        plan: '3play 300 Mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 300 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '300 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '600 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        dscto: '-S/30',
        promo: 'Precio por 6 Meses',
        price: '254',
        regular: 'Precio Regular S/284',
        plan: '3play 500 mbps',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-xl font-bold uppercase">+ 500 mbps</span>
          <span className="text-gray-500 text-xs font-medium">(x 6 meses)</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '500 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        dscto: '-S/30',
        promo: 'Precio por 6 Meses',
        price: '454',
        regular: 'Precio Regular S/484',
        plan: '3play 1000 Mbps',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
    ]
  },
  {
    title: 'claro hogar + netflix',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    ifGrid: true,
    gridCols: 2,
    planes: [
      {
        className: 'lg:basis-1/2',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '75.10',
        regular: 'Precio Regular S/110',
        plan: '2play 100 Mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ LogoNetflix }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 80 min nivel nacional.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        className: 'lg:basis-1/2',
        src: InternetTelefonia,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '95.10',
        regular: 'Precio Regular S/130',
        plan: '2play 180 mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ LogoNetflix }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '180 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '360 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 80 min nivel nacional.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        className: 'lg:basis-1/2',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '180.10',
        regular: 'Precio Regular S/215',
        plan: '3play 180 mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ LogoNetflix }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '180 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '360 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        className: 'lg:basis-1/2',
        src: InternetTelefoniaTv,
        alt: "Internet + Telefonía + TV",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '220.10',
        regular: 'Precio Regular S/255',
        plan: '3play 280 Mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ LogoNetflix }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '280 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '560 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
    ]
  },
  {
    title: 'internet fijo inalambrico',
    message: {
      strong: '',
      text: ''
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: Internet,
        alt: "Internet",
        width: 88,
        height: 74,
        dscto: '-50%',
        promo: 'Precio por 2 Meses',
        price: '42.50',
        regular: 'Precio Regular S/85',
        plan: 'internet ifi-100gb',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Gigas en Alta Velocidad',
            strong: '100GB'
          },
          {
            description: 'Una vez consumidos los 100 GB, podrás adquirir un paquete adicional para seguir navegando.',
          },
          {
            description: 'Paquete IFI 25GB',
            strong: 'Precio S/5.00'
          },
          {
            description: 'Modelo Equipo',
            strong: 'ZTE MF286'
          },
          {
            description: 'Pago Único del Equipo (Incluye chip)',
            strong: 'S/ 399'
          },
          {
            description: 'Conéctalo, hasta en 5 dispositivos en simultáneo',
          },
          {
            description: 'Incluye',
            strong: 'Claroclub'
          },
          {
            description: 'Beneficios del Equipo',
            strong: <ul>
              <li>No Necesita Instalacion</li>
              <li>Inluye WIFI</li>
              <li>Tecnología Inalambrica</li>
              <li>Equipo de Calidad</li>
              <li>Servicio Postventa</li>
            </ul>
          },
        ]
      },
    ]
  },
];

export default function HomeFija() {
  return (
    <section className="relative flex flex-col items-center gap-2">
      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesMobile }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_MOBILE }
        className="mobile"
        interval={ 5000 }
      />
      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesDesktop }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_DESKTOP }
        className="desktop"
        interval={ 5000 }
      />
      <Form
        className="bg-white lg:absolute lg:right-20 xl:top-20"
        textLabel="Déjanos tu número y te llamaremos"
        classNameButton="bg-[#ee122c] text-white rounded-full"
      >
        <span className="text-sm text-[#ee122c] text-center font-semibold mb-2 xl:text-base">Seguimos Conectando Hogares</span>
        <h2 className="text-lg text-[#ee122c] text-center font-extrabold mb-4 xl:text-xl xl:font-bold">Contáctanos y conoce nuestros<br/>descuentos exclusivos</h2>
      </Form>
      <h1 className="text-3xl text-center text-[#ee122c] font-bold uppercase my-8">conoce nuestros planes hogar</h1>
      <h3 className="text-sm text-center text-gray-500 font-bold">Todas las Ofertas y Promociones vigentes hasta el 15/10/2023 </h3>
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <i className="fa-solid fa-house text-3xl text-[#ee1222]"></i>
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      <Items
        arrayItems={ ItemsPlanes }
      />
    </section>
  )
}
