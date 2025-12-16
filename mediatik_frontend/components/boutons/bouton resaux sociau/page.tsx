import { Button } from "@/components/ui/button";

interface BoutonResauxSociauProps {
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function BoutonResauxSociau({
    label,
    icon,
    onClick,
    className = "",
}: BoutonResauxSociauProps) {
    return (
        <Button 
            onClick={onClick}
            className={`flex items-center justify-center gap-2 h-12 text-[#ffff] rounded-full bg-[#545454] hover:bg-gray-300 transition border-none ${className}`}>
            {icon} { label }
        </Button>
    );
}