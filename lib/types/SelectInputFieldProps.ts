export interface SelectInputFieldProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  labelName: string;
  name: string;
  children: React.ReactNode;
  formik: any;
  errorClass?: string;
}
