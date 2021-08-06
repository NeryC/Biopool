import React, { useContext, useEffect } from "react";
import Modal from 'react-modal';
import { Context } from '../../context/globalStore';
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
    backgroundColor: "#0b1c28",
    border:0,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const VideoModal = () => {
  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    Modal.setAppElement('#root');
  },[])
  useEffect(() => {
    if (state.VideoModalIsOpen) {
      noScroll.on()
    }else{
      noScroll.off()
    }
    return () => noScroll.off()
  },[state.VideoModalIsOpen])

  function closeModal() {
    dispatch({type:"SET_VIDEO_MODAL_STATE", 
      payload:{
        VideoModalIsOpen: false
      }
    })
  }

  return (
    <Modal
      isOpen={state.VideoModalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldFocusAfterRender={false}
      className={"p-5 md:p-10 lg:p-5 absolute rounded-xl w-11/12 h-1/3 md:h-1/2 lg:w-2/3 lg:h-2/3"}
    >
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/jZYpCXKGOro`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Modal>
  );
};

export default VideoModal;
