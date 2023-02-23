import "./style.css";
import usa from "../../assets/images/icons/usa-flag.svg";
import brazil from "../../assets/images/icons/brazil-flag.svg";
const CountrBox = ({ isUsa, price, text, props }) => {
  return (
    <>
      <div className="box-country" style={{ ...props }}>
        <div className="flag">
          <img src={isUsa ? usa : brazil} alt="" />
        </div>
        <p className="text-[2.8rem]">{price}</p>
        <span className="text-[2rem] font-[500]">{text}</span>
      </div>
    </>
  );
};
export default CountrBox;
