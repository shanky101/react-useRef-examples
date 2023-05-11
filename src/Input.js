import { forwardRef } from "react";

function Input({ value, onChange, id, name }, ref) {
  return (
    <input value={value} onChange={onChange} id={id} name={name} ref={ref} />
  );
}

export default forwardRef(Input);
