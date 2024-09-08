import { isEqual } from "lodash";
import { memo, useState } from "react";
import IconButton from "@/components/common/IconButton";
import clsx from "clsx";

interface TextFieldInputProps {
  errors?: string[];
  labelText: string;
  className?: string;
  name: string;
  type: string;
  id: string;
  value?: string;
  onChange: (name: string, value: any) => void;
  onBlur: (name: string) => void;
}

const TextField = ({
  errors,
  value,
  labelText,
  name,
  id,
  type,
  className,
  onChange,
  onBlur,
}: TextFieldInputProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  const handleInputOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    onBlur(name);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={clsx(["mb-3", type === "password" && "position-relative"])}>
      <input
        id={id}
        name={name}
        placeholder={labelText}
        type={isPasswordVisible ? "text" : type}
        value={value}
        className={clsx("form-control", className)}
        onChange={handleInputOnchange}
        onBlur={handleInputOnBlur}
      />
      {type === "password" && (
        <IconButton
          iconClass={clsx("cursor-pointer p-2 mb-4", {
            "fas fa-eye-slash": !isPasswordVisible,
            "fas fa-eye": isPasswordVisible,
          })}
          onClick={togglePasswordVisibility}
        />
      )}
      {errors?.map((error: string, index: number) => (
        <div key={index} className="custom-invalid-feedback">
          {error}
        </div>
      ))}
    </div>
  );
};

const propsAreEqual = (
  prevProps: TextFieldInputProps,
  nextProps: TextFieldInputProps,
) => {
  return (
    isEqual(prevProps.errors, nextProps.errors) &&
    prevProps.value === nextProps.value &&
    prevProps.name === nextProps.name
  );
};

export default memo(TextField, propsAreEqual);
