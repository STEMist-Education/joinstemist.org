import { MutableRefObject } from "react";

export interface InputFieldProps
  extends React.HTMLAttributes<HTMLInputElement> {
  labelName: string;
  name: string;
  type?: string;
  autoComplete?: string;
  className?: string;
  formik: any;
  errorClass?: string;
  as?: "input" | "textarea";
  secure?: boolean;
  value?: string;
  ref?: MutableRefObject<any>;
}
