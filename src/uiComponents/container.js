import './container.css';

export const Container = ({children, width='100%', height='auto'}) => (
  <div className='container' style={{maxWidth: width, height: height}}>
    {children}
  </div>
);