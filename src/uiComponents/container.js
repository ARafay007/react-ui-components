import './container.css';

export const Container = ({children, width='100%', height='auto', styleProps={}}) => (
  <div className='container' style={{maxWidth: width, height: height, ...styleProps}}>
    {children}
  </div>
);