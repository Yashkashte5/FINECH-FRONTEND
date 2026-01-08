import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
