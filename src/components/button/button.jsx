import './button.css'
const ShowLabel = (label) => {
  alert(label);
};

const Button = ({ label }) => {
  const onButtonClick = () => {
    ShowLabel(label);
  };

  return <button className="button" onClick={onButtonClick}>{label}</button>;
};

Button.defaultProps = {
  label: "Exibir alerta" ,
};

export default Button;
