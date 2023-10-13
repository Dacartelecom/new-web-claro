'use client'
import ClaroLogoWhite from "../../assets/img/logo-claro-blanco.webp";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";


export const Nav = () => {

  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia('(max-width: 768px)').matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('40px');
  const [top, setTop] = useState<string>('50%');
  const [visibility, setVisibility] = useState<'visible' | 'hidden' | 'collapse'>('hidden');
  const [TSource] = useState(params.get('T-source'));
  const [param, setParam] = useState<string>('');
  const [messageButton, setMessageButton] = useState<string>('SI YA ERES CLIENTE CLARO HAZ CLICK AQUÍ');

  const active = () => setActiveModal(true);

  const activeMenu = () => {
    setHeight('100vh');
    setTop('0px');
    setVisibility('visible');
  };

  const closeMenu = () => {
    setHeight('0px');
    setTop('50%');
    setVisibility('hidden');
  };

  useEffect(() => {
    if (TSource) {
      setParam(`?T-source=${ TSource }`);
    } else {
      setParam('');
    }
  },[TSource]);

  useEffect(() => {
    if (pathname.includes('planes-moviles')) {
      setMessageButton('SI YA ERES CLIENTE CLARO HAZ CLICK AQUÍ')
    } else {
      setMessageButton('ATENCIÓN AL CLIENTE Y/O RECLAMOS, HAZ CLIC AQUÍ')
    }
  },[pathname]);

  useEffect(() => {
    const mheight = isMobile ? '0px':'40px';
    const mTop = isMobile ? '0%':'0%';

    setHeight(mheight)
    setTop(mTop)
  },[isMobile])

  return (
    <>
      <div className="sticky top-0 w-full bg-[#ee122c] flex items-center justify-between py-3 px-6 z-10">
        <div className="w-32 h-11">
          <a
            href={ `/${ param }` }
            className="w-full h-auto"
          >
            <img
              src={ ClaroLogoWhite }
              alt={ 'Logo Claro' }
              width={ 2560 }
              height={ 925 }
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
        <nav
          className=" bg-[#ee122c] overflow-hidden z-50 flex items-center justify-center gap-4  transition-all duration-500 max-lg:fixed max-lg:left-0 max-lg:w-full max-lg:flex-col lg:h-auto"
          style={{
            height,
            top
          }}
        >
          <i
            onClick={ closeMenu }
            className="fa-solid fa-xmark absolute top-5 right-5 text-3xl text-white cursor-pointer transition-all duration-200"
            style={{
              visibility
            }}
          ></i>
          <a
            href={ `/${ param }` }
            onClick={ closeMenu }
            className="relative text-2xl text-white font-bold uppercase flex items-center gap-3 lg:text-xl after:absolute after:left-1/2 after:bottom-[-5px] after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full "
          >
            <i className="fa-solid fa-house"></i>
            Planes Hogar 
          </a>
          <a
            href={ `/planes-moviles${ param }` }
            onClick={ closeMenu }
            className="relative text-2xl text-white font-bold uppercase flex items-center gap-3 lg:text-xl after:absolute after:left-1/2 after:bottom-[-5px] after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <i className="fa-solid fa-mobile-screen-button"></i>
            Planes Móviles
          </a>
          <button
            className="bg-[#ff3a2d] flex items-center gap-2 py-2 px-4 rounded-full border-2 border-white text-white text-xs font-bold uppercase transition-all duration-300 hover:bg-white hover:text-[#ff3a2d] max-lg:hidden"
            onClick={ active }
          >
            <i className="fa-solid fa-hand-point-right"></i>
            "{ messageButton }"
          </button>
        </nav>
        <div
          onClick={ activeMenu }
          className="bg-[#222] py-1 px-3 rounded-lg cursor-pointer text-xl text-white text-center lg:hidden"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <Modal
        activeModal={ activeModal }
        setActiveModal={ setActiveModal }
        background="#fff"
      >
        <h4 className="text-center text-lg font-bold tracking-tighter">Teléfonos solo para atención al cliente y reclamos</h4>
        <div className="w-full h-1 bg-[#ee122c] rounded-full my-4"></div>
        <p className="text-center text-sm text-[#777] font-bold">Llamar desde un móvil Claro</p>
        <a
          href="tel:123"
          className="text-base flex gap-2 items-center bg-[#ee122c] py-2 px-6 rounded-full my-6 text-white"
        >
          <i className="fa-solid fa-phone-volume"></i>
          123
        </a>
        <p className="text-center text-sm text-[#777] font-bold">Llamar desde un teléfono fijo y desde otras operadoras</p>
        <a
          href="tel:080000123"
          className="text-base flex gap-2 items-center bg-[#ee122c] py-2 px-6 rounded-full my-6 text-white"
        >
          <i className="fa-solid fa-phone-volume"></i>
          0800 00123
        </a>
      </Modal>
    </>
  )
}