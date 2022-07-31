import { SelectInputFieldProps } from "@/lib/types";

export default function SelectInputField({
  name,
  formik,
  errorClass,
  labelName,
  children,
}: SelectInputFieldProps) {
  return (
    <div>
      <label className="sm:text-sm text-gray-600 px-1" htmlFor={name}>
        {labelName}
      </label>
      <select
        id={name}
        autoComplete="off"
        className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-500 placeholder-gray-500 shadow-sm focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm transition-[background-color] duration-[10000000s]"
        {...formik.getFieldProps(name)}
      >
        {children}
      </select>
      {formik.touched[name] && formik.errors[name] ? (
        <div
          className={
            errorClass ||
            "text-red-500 font-bold inline-block sm:text-sm pl-3 pt-2"
          }
        >
          {formik.errors[name]}
        </div>
      ) : null}
    </div>
  );
}
