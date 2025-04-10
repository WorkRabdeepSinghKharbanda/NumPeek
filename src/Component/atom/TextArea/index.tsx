/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";

interface TEXTFIELD_TYPE {
  label: string;
  placeholder?: string;
  value: any;
  onTextAreaChange: any;
  className?: string;
  outerClassName?: string;
  isValid?: boolean;
  errorText?: string;
  labelClassName?: string;
  rows?: number;
  column?: number;
}
const TextArea = ({
  label = "",
  placeholder = "",
  value,
  onTextAreaChange,
  className = "",
  outerClassName = "",
  labelClassName = "",
  isValid,
  errorText = "Enter Valid Text",
  rows,
  column,
}: TEXTFIELD_TYPE) => {
  const textareaFieldId = useId();
  return (
    <div className={outerClassName}>
      <label className={labelClassName} htmlFor={textareaFieldId}>
        {label}
      </label>
      <textarea
        rows={rows}
        cols={column}
        id={textareaFieldId}
        placeholder={placeholder}
        onChange={(e) => onTextAreaChange(e)}
        className={className}
        value={value}
      />
      {isValid && <span className="text-danger"> {errorText} </span>}
    </div>
  );
};
export default TextArea;
