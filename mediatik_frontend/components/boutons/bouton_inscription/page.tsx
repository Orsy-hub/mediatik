
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";


interface BoutonInscriptionProps {
    label: string;
    onclick?: (e:FormEvent) => void;
    variant?: "default" | "outline" | "secondary"|"destructive"|"ghost"|"link";
    rounded?: string
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}
export default function BoutonInscriptionConnexion({
  label,
  onclick,
  variant = "default",
  rounded = "rounded-full",
  className = "",
  disabled = false,
  type = "button",
}: BoutonInscriptionProps) {
  return (
    <Button
      variant={variant}
      onClick={onclick}
      className={`w-full h-12 text-white text-base font-semibold bg-[#691a77] ${rounded} ${className}`}
      disabled={disabled}
      type={type}
    >
      {label}
    </Button>
  );
}
