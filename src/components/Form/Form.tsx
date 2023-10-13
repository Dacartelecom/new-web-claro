'use client'
import { FormProps } from "../../interfaces/Form.props";
import { useFormik } from "formik";
import { ChangeEvent, FC, useState } from "react";
import * as Yup from "yup";
const Form: FC<FormProps> = ({
  className,
  textLabel,
  classNameButton,
  children,
}) => {

  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const [loading, setLoading] = useState<boolean>(false);
  const [length, setLength] = useState<number>(0);
  const [response, setResponse] = useState<null | string>(null);
  const [TSource] = useState(params.get('T-source'));
  const [Gclid] = useState(params.get('gclid'));


  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    formik.setFieldValue("number", onlyNumber.slice(0, 9));
    setLength(value.length);
  };

  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .min(9)
      .matches(/^[0-9]{1,9}$/, 'Debe ser un número de hasta 9 dígitos')
      .required('Este campo es requerido'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      number: ''
    },
    validationSchema,
    onSubmit: async (formData:any, { resetForm }:any) => {
      setLoading(true);
      try {
        const url = "https://ws-dacar-ica.octopus-latam.com/?";
        const data = new URLSearchParams();
        let service = 'PeruHfcCallme'

        if(TSource === '01clarohogar'){
          data.append("service", "PeruHfc1");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc1"
        } else if(TSource === '02clarointernet'){
          data.append("service", "PeruHfc2");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc2"
        } else if(TSource === '03clarotv'){
          data.append("service", "PeruHfc3");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc3"
        } else if(TSource === '05claroperu'){
          data.append("service", "PeruHfc5");
          data.append("username", "dacar");
          data.append("password", "O8Sw36BwGurYZcFU9vsa");
          service = "PeruHfc5"
        } else if(TSource === '06claromovil'){
          data.append("service", "PeruMovilCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruMovilCallme"
        } else if(pathname.includes('planes-moviles') && TSource === 'rrss'){
          data.append("service", "PeruMovilRsCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruMovilRsCallme"
        }  else if(TSource === 'rrss'){
          data.append("service", "PeruHfcRsCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruHfcRsCallme"
        } else if(pathname.includes('planes-moviles')){
          data.append("service", "PeruMovilCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
          service = "PeruMovilCallme"
        } else {
          data.append("service", "PeruHfcCallme");
          data.append("username", "dacar");
          data.append("password", "StzsK46vs0a4nCJU55wD");
        }

        data.append("telephone", formData.number);

        if (TSource) {
          data.append("tsource", TSource);
        } else {
          data.append("tsource", "");
        }

        if (Gclid) {
          data.append("gclid", Gclid);
        } else {
          data.append("gclid", "");
        }

        data.append("ip", "127.0.0.1");

        const lead = url + data.toString();

        await fetch(lead);

        setResponse('¡Gracias por contactarnos! En breve, un asesor se pondrá en contacto contigo.');
        setLoading(false);
        resetForm();
        console.log(service);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }

      try {
        /*const res = await axios.post(
          'https://api-crm.gerardmatos.com/api/numbers-in-queues/create',
          {
            number: +formData.number,
            campId: 1,
            queue_name: "Peru-2"
          }
        );*/
      } catch (error) {
        console.log(error)
      }
    }
  });

  return (
    <form
      className={`flex flex-col p-4 m-4 shadow-3xl rounded-3xl max-w-[350px] ${ className }`}
      onSubmit={ formik.handleSubmit }
    >
      { children }
      <label
        className="text-black text-sm font-bold mb-2"
        htmlFor="number"
      >{ textLabel }</label>
      <input
        type="text"
        id="number"
        className="border border-black p-1 px-3 text-sm rounded-xl"
        placeholder="987654321"
        pattern="[0-9]{1,9}"
        maxLength={9}
        value={ formik.values.number }
        onChange={ changeNumber }
      />
      <label
        className="my-6 font-bold text-sm"
        htmlFor="number"
      >*Ingrese su número sin anteponer el (51)</label>
      <div className="flex items-center justify-center">
        <button
          className={`relative font-extrabold text-lg py-2 px-6 uppercase flex items-center justify-center gap-2 ${ length === 9 ? 'opacity-100' : 'opacity-50' } ${ loading ? 'opacity-50' : '' } ${ classNameButton }`}
          type="submit"
        >
          solicitar llamada
          { loading && <span className="loader"></span> }
        </button>
      </div>
      { response && <span className="text-[#46b450] text-sm text-center font-bold mt-4 w-[300px]">{ response }</span> }
    </form>
  )
}

export default Form