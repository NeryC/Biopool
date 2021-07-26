import React, { useContext, useEffect, useState } from "react";
import Modal from 'react-modal';
import { Context } from '../../context/globalStore';
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noScroll from 'no-scroll';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(17, 43, 56, 0.75)'
  },
  content: {
    inset: '50% auto auto 50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "white",
    border:0,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const BusinessModal = () => {
  const {state, dispatch} = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    submited:false
  });
  const [values, setValues] = useState({
    empresa: '',
    representante: '',
    email: '',
    movil: '+',
    espacio: 1,
  });

  useEffect(() => {
    if (state.modalIsOpen) {
      noScroll.on()
    }else{
      noScroll.off()
    }
  },[state.modalIsOpen])

  function closeModal() {
    dispatch({type:"SET_MODAL_STATE", 
      payload:{
        modalIsOpen: false
      }
    })
  }

  function submit(e) {
    e.preventDefault()
    setLoading(true);
    fetch(`https://us-central1-basic-zenith-312516.cloudfunctions.net/registerEmpresa`, {
      method: 'POST',
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    }).then(function(response) {
      setLoading(false)
      const tipSpanModal = document.getElementById('tipSpanModal');
      if(tipSpanModal){
        if(response.ok) {
          tipSpanModal.classList.remove("text-green5");
          tipSpanModal.classList.remove("text-red-600");
          if(response.status == 201){
            tipSpanModal.classList.remove("hidden");
            tipSpanModal.classList.add("text-green5");
            tipSpanModal.innerText = 'Sus datos se enviaron correctamente';
            setStatus({
              submited:true
            })
          } else{
            tipSpanModal.classList.remove("hidden");
            tipSpanModal.classList.add("text-red-600");
            tipSpanModal.innerText = 'Este email ya esta suscrito';
            setStatus({
              submited:true
            })
          }
        } else {
          tipSpanModal.classList.remove("hidden");
          tipSpanModal.classList.add("text-red-600");
          tipSpanModal.innerText = 'Ocurrio un error';
          setStatus({
            submited:true
          })
        }
      }
    })
    .catch(function(error) {
      setLoading(false)
      const tipSpanModal = document.getElementById('tipSpanModal');
      if(tipSpanModal){
        tipSpanModal.classList.remove("hidden");
        tipSpanModal.classList.add("text-red-600");
        tipSpanModal.innerText = 'Ocurrio un error';
        setStatus({
          submited:true
        })
      }
    });
  }

  function handleInputChange(e) {
    const tipSpanModal = document.getElementById('tipSpanModal')
    tipSpanModal && !tipSpanModal.classList.contains("hidden") && tipSpanModal.classList.add("hidden");
    setStatus({
      submited:false
    })
    e.persist();
    
    switch (e.target.name) {
      case 'movil':
        if (e.target.value  == ""){
          e.target.value = "+";
        }
        e.target.value = e.target.value.replace(/[^+\d]/g,"");
        break;
      default:
        break;
    }
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <Modal
      isOpen={state.modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldFocusAfterRender={false}
      className={"p-5 md:p-10 lg:p-5 absolute rounded-xl w-11/12 md:w-8/12 lg:w-1/2"}
    >
      <div className="m-5 font-gibson2">
        <div className="flex justify-between font-gibson-semiBold text-2xl md:text-3xl lg:text-2xl pb-6">
          <div>Plan Empresarial</div>
          <button onClick={closeModal} 
            type="button" 
            className="bg-lime1 rounded-md p-2 inline-flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-green5"
            />
          </button>
        </div>
        <form onSubmit={submit} className="text-lg md:text-xl lg:text-base">
          <div className="pb-6">
            <div className="flex flex-col mb-3 pb-1">
              <label htmlFor="Business">Empresa</label>
              <input 
                type="text" id="Business" value={values.empresa} name="empresa" onChange={handleInputChange}
                className="px-3 py-2 rounded-md border border-gray-900 focus:border-lime1 focus:outline-none text-green5"
                autoComplete="off" required maxLength={40}
              />
            </div>
            <div className="flex flex-col mb-3 pb-1">
              <label htmlFor="Representative">Representante Legal</label>
              <input 
                type="text" id="Representative" value={values.representante} name="representante" onChange={handleInputChange}
                className="px-3 py-2 rounded-md border border-gray-900 focus:border-lime1 focus:outline-none text-green5"
                autoComplete="off" required maxLength={40}
              />
            </div>
            <div className="flex flex-col mb-3 pb-1">
              <label htmlFor="Email">Correo</label>
              <input 
                type="email" id="Email" value={values.email} name="email" onChange={handleInputChange}
                className="px-3 py-2 rounded-md border border-gray-900 focus:border-lime1 focus:outline-none  text-green5"
                autoComplete="off" required maxLength={30}
              />
            </div>
            <div className="flex flex-col mb-3 pb-1">
              <label htmlFor="Phone">Número móvil</label>
              <input 
                type="text" id="Phone" value={values.movil} name="movil" onChange={handleInputChange}
                className="px-3 py-2 rounded-md border border-gray-900 focus:border-lime1 focus:outline-none text-green5"
                autoComplete="off" required maxLength={17}
              />
            </div>
            <div className="flex flex-col mb-3 pb-1">
              <label htmlFor="Space">Espacio total de farmeo (por encima de 1 PB)</label>
              <input 
                type="number" id="Space" value={values.espacio} name="espacio" onChange={handleInputChange}
                className="px-3 py-2 rounded-md border border-gray-900 focus:border-lime1 focus:outline-none text-green5"
                autoComplete="off" min="1" required
              />
            </div>
            
          </div>
          <div className="w-full">
            <span id="tipSpanModal" className="hidden"></span>
            <button type="submit" disabled={status.submited} className="w-full rounded-lg bg-lime1 text-white px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-lime1 text-xl cursor-pointer">
              {
                loading ? 
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className={`mx-1 text-white fa-spin`}
                  />
                :
                  status.submited ?
                    'Enviado':
                    'Enviar'
              }
              
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default BusinessModal;
