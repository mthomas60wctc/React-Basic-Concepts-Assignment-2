import { useState } from "react";

function Country(props) {
  const [text] = useState(props.country.name);
  const [value, setValue] = useState(props.country.gold);

  const incrementMedal = () => {
    setValue( value + 1 );
  };

  return (
  <div className="country"
      style={{ display: 'flex', gap: '16px' }}
  >
    <span>{text}</span>
    <span
        style={{width: "2em"}}
    >{value}</span>
    <button onClick={incrementMedal}>Add Medal</button>
    <button onClick={() => props.onDelete(props.country.id)}>Remove</button>
  </div>)
}
export default Country;