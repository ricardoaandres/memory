const Modal = (props) => {
  // render methods
  const renderTitle = () => {
    if (props.title) {
      return <div className='memory-modal-title'>{ props.title }</div>;
    }

    return null;
  };

  // render
  const title = renderTitle();

  return (
    <div className='memory-modal'>
      <div className='memory-modal-lightbox'></div>
      <div className='memory-modal-body'>
        { title }
        { props.children }
      </div>
    </div>
  );
};

export default Modal;
