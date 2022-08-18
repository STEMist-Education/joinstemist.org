import { InputFieldProps } from "@/lib/types";

export default function InputField({
  secure = true,
  labelName,
  name,
  type = "text",
  autoComplete,
  className,
  formik,
  errorClass,
  as: Elem = "input",
  value,
  ...rest
}: InputFieldProps) {
  return (
    <div className="w-full relative">
      <Elem
        id={name}
        name={name}
        type={type}
        className={`${className} relative block w-full appearance-none rounded-none px-3 py-2 text-black focus:z-10 focus:border-gray-600 bg-white focus:outline-none focus:ring-black sm:text-sm peer placeholder-transparent transition-[background-color] duration-[10000000s] border-2 border-opacity-10 border-black`}
        placeholder={labelName}
        autoComplete="off"
        {...formik.getFieldProps(name)}
        {...rest}
        value={value}
      />
      <label
        htmlFor={name}
        className="absolute left-2 -top-3 text-black text-sm transition-all peer-placeholder-shown:left-3.5 peer-placeholder-shown:sm:text-sm peer-placeholder-shown:text-black peer-placeholder-shown:top-[9px] peer-focus:-top-3 peer-focus:left-1 peer-focus:text-black z-20 bg-white peer-focus:px-1 peer-focus:text-sm cursor-text"
      >
        {labelName}
      </label>
      {formik.touched[name] && formik.errors[name] ? (
        <div
          className={
            errorClass ||
            "text-red-600 font-bold sm:text-sm pl-3 pt-2 text-left mb-2"
          }
        >
          {formik.errors[name]}
        </div>
      ) : null}
    </div>
  );
}
