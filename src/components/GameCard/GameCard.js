const GameCard = (props) => {
  // user methods
  const onCardClicked = () => {
    // update store to keep track of clicked images
  };

  // render
  return (
    <div className='gamecard' onClick={onCardClicked}>
      <div className='gamecard-body'>
        <img className='gamecard-body-front' src={props.data.imageUrl} />
        <div className='gamecard-body-back'></div>
      </div>
    </div>
  );
};

export default GameCard;
