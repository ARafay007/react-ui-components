import './button.css';

export const Button = ({text, buttonProps = {}}) => {
  const {className, ...rest} = buttonProps;
  // className = className || 'btn';
  return <button className={`btn ${className}`} {...rest}>{text}</button>
};