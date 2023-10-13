'use client'
import { PlanProps } from "../../interfaces/Items.props"
import { FC, useEffect, useState } from "react"
import Modal from "../Modal/Modal"
import Form from "../Form/Form"

const Plan: FC<PlanProps> = ({
  className,
  noHeader,
  mobileFooter,
  src,
  alt,
  width,
  height,
  dscto,
  promo,
  price,
  regular,
  plan,
  plan2,
  classNamePlan,
  extraPlan,
  data,
  details
}) => {

  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [activeModalDetails, setActiveModalDetails] = useState<boolean>(false);
  const [activeModalFull, setActiveModalFull] = useState<boolean>(false);
  const [activeModalForm, setActiveModalForm] = useState<boolean>(false);
  const [number, setNumber] = useState<{
    tel: string,
    num: string
  }>({
    tel: '016805993',
    num: '(01) 6805993'
  });
  const [TSource] = useState(params.get('T-source'));

  useEffect(() => {
    if (TSource) {
      let defaultNumber = {
        tel: '01 6805992',
        num: '(01) 6805992'
      };

      switch (pathname) {
        case '/planes-moviles':
          defaultNumber = {
            tel: '01 6805992',
            num: '(01) 6805992'
          };
          break;

        default:
          defaultNumber = {
            tel: '016805993',
            num: '(01) 6805993'
          };
          break;
      }

      switch (TSource) {
        case '01clarohogar':
          setNumber({
            tel: '016806301',
            num: '(01) 6806301'
          });
          break;

        case '02clarointernet':
          setNumber({
            tel: '016806302',
            num: '(01) 6806302'
          });
          break;

        case '03clarotv':
          setNumber({
            tel: '016806303',
            num: '(01) 6806303'
          });
          break;

        case '05claroperu':
          setNumber({
            tel: '016806545',
            num: '(01) 6806545'
          });
          break;

        case '06claromovil':
          setNumber({
            tel: '016805992',
            num: '(01) 6805992'
          });
          break;

        case 'rrss':
          switch (pathname) {
            case '/planes-moviles':
              setNumber({
                tel: '016806268',
                num: '(01) 6806268'
              });
              break;

            default:
              setNumber({
                tel: '016806269',
                num: '(01) 6806269'
              });
              break;
            }
          break;

        default:
          setNumber(defaultNumber);
          break;
      }
    } else {
      switch (pathname) {
        case '/planes-moviles':
          setNumber({
            tel: '01 6805992',
            num: '(01) 6805992'
          });
          break;

        default:
          setNumber({
            tel: '016805993',
            num: '(01) 6805993'
          });
          break;
      }
    }
  },[
    pathname,
    TSource
  ]);

  return (
    <>
      <div className={`relative flex flex-col rounded-2xl bg-white shadow-4xl max-w-[340px] mx-auto ${ className }`}>
        {
          dscto &&
          <div className="absolute top-[-10px] right-[-10px] w-[100px] h-[100px] overflow-hidden flex items-center justify-center z-[2] after:absolute after:w-[10px] after:h-[10px] after:bg-[#ad1325] after:bottom-2 after:right-[1px] after:z-[-1] before:absolute before:w-[10px] before:h-[10px] before:bg-[#ad1325] before:top-[-1px] before:left-[8px] before:z-[-1]">
            <span className="absolute w-[150%] h-10 bg-[#ee122c] rotate-45 translate-y-[-20px] translate-x-4 flex items-center justify-center text-white text-lg font-bold tracking-widest shadow-5xl">{ dscto }</span>
          </div>
        }
        {
          !noHeader &&
          <div className="flex my-6 px-4">
            <div className="flex flex-[1] items-center justify-center">
              <div className="max-w-[100px] max-h-[37px]">
                <img
                  src={ `${src}` }
                  alt={ alt }
                  width={ width }
                  height={ height }
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex flex-[1] flex-col items-start justify-center gap-1">
              <span className="text-xs text-black font-bold">{ promo }</span>
              <span className="text-3xl text-[#ee122c] font-bold">S/{ price }</span>
              { regular && <span className="text-xs text-black font-bold line-through">{ regular }</span> }
            </div>
          </div>
        }
        <div className={`flex flex-col items-center justify-center py-4 px-2 bg-[#f2f2f2] ${ noHeader ? 'rounded-tl-2xl rounded-tr-2xl' : '' }`}>
          <h6 className={ `text-[#ee122c] text-center font-bold uppercase ${ classNamePlan }` }>{ plan }</h6>
          <h6 className={ `text-[#7a7a7a] text-center  ${ classNamePlan }` }>{ plan2 }</h6>
          { extraPlan }
        </div>
        {
          noHeader &&
          <div className="w-full h-72 pt-6">
            <img
              src={ `${src}` }
              alt={ alt }
              width={ width }
              height={ height }
              className="w-full h-full object-contain"
            />
          </div>
        }
        <div className="flex flex-col pt-6 px-6">
          {
            data.map((item, index) => {
              const {
                description,
                strong
              } = item;

              return (
                <div
                  key={ index }
                  className="flex items-center justify-between gap-2 py-4 border-b border-gray-400"
                >
                  <span className="text-gray-600 font-bold flex-[2]">{ description }</span>
                  { strong && <span className="text-xl text-end font-bold flex-[1]">{ strong }</span> }
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center p-4">
          {
            mobileFooter ?
            <span className="text-xl text-[#0fbddf] font-bold cursor-pointer" onClick={ () => setActiveModalDetails(true) }>Conoce Más</span> :
            <>
              <span className="text-xl text-[#0fbddf] font-bold cursor-pointer" onClick={ () => setActiveModal(true) }>Ver Detalles</span>
              <span className="text-sm text-gray-500">
                *Conoce restricciones y beneficios en
                <strong className="text-[#0088cc] cursor-pointer" onClick={ () => setActiveModalFull(true) }> FullClaro</strong>
              </span>
            </>
          }
          <button className="text-sm text-white font-extrabold uppercase bg-[#ee122c] py-2 px-6 rounded-full" onClick={ () => setActiveModalForm(true) }>Solicitar Información</button>
        </div>
      </div>
      <Modal
        activeModal={ activeModal }
        setActiveModal={ setActiveModal }
        background="#fff"
        buttonEnd
      >
        {
          details ?
          details :
          <>
            <h6 className="text-3xl text-start font-bold w-full mb-4">Debes Saber</h6>
            <ul className="text-justify text-gray-500 [&>li]:mb-1">
              <li>-Todos los planes están sujeto a evaluación crediticia, facilidades técnicas y cobertura.</li>
              <li>-Aplica costo S/0 en tarifa de instalación.</li>
              <li>-Las velocidades desde 200 Mbps aplican solamente para algunas zonas de Lima.</li>
            </ul>
          </>
        }
      </Modal>
      <Modal
        activeModal={ activeModalDetails }
        setActiveModal={ setActiveModalDetails }
        background="#fff"
      >
        <div>
          <h6 className="text-[#0088cc] text-center text-xl font-bold mb-4">Detalle del { plan }</h6>
          { details }
        </div>
      </Modal>
      <Modal
        activeModal={ activeModalFull }
        setActiveModal={ setActiveModalFull }
        background="#fff"
        buttonEnd
      >
        <div className="w-full">
          <h6 className="text-3xl text-start font-bold mb-4">Quiero ser FullClaro ¿Qué hago?</h6>
          <p className="text-justify text-gray-500 mb-4">Si tienes Claro en casa y en tu celular, ¡ya eres Full Claro!</p>
          <p className="text-justify text-gray-500 mb-4">Recuerda que debes contar con un plan postpago Max desde S/ 29.90 e Internet fijo en 1Play desde S/59 al mes, o 2Play desde S/69 al mes, o 3 Play desde S/149 al mes. Aplica para planes con tecnología de Fibra Coaxial (HFC) y Fibra Óptica (FTTH).</p>
          <p className="text-justify text-gray-700 font-bold mb-4">Beneficios:</p>
          <ul className="text-justify text-gray-500 [&>li]:mb-2">
            <li><strong>-Full velocidad:</strong> Recibe el doble de velocidad en el internet de tu casa.</li>
            <li><strong>-Full descuentos:</strong> Renueva o contrata una línea Claro con full descuentos exclusivos.</li>
            <li><strong>-Full gigas:</strong> Disfruta de hasta 50% más gigas hasta en 5 líneas móviles.</li>
            <li><strong>-Full música:</strong> Disfruta de tu música favorita sin publicidad, totalmente GRATIS.</li>
          </ul>
        </div>
      </Modal>
      <Modal
        activeModal={ activeModalForm }
        setActiveModal={ setActiveModalForm }
        background="#fff"
      >
        <Form
          className="bg-[#ee122c]"
          textLabel=""
          classNameButton="bg-[#0fbddf] text-white rounded-full"
        >
          <span className="text-2xl text-white text-center font-bold mb-2">¡Buena Elección!</span>
          <span className="text-sm text-white text-center">Llámanos gratis al</span>
          <a href={ `tel:${ number.tel }` } className="text-3xl text-white text-center font-bold mb-4">{ number.num }</a>
          <span className="text-sm text-white text-center mb-8">O, si lo prefieres déjanos tus datos y te llamaremos inmediatamente...</span>
        </Form>
      </Modal>
    </>
  )
}

export default Plan