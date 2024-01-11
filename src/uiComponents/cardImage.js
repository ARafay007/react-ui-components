import './cardImage.css';

export const CardImage = ({src='/empty.jpg', width='100%', height='200px', cardImageProps}) => (
  <div style={{width, height}} className='card_img' >
    <img src={src || '/empty.jpg'} width='100%' height='100%' {...cardImageProps} />
  </div>
);