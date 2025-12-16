import { motion } from "framer-motion";
import React from "react";

export interface MediaCardProps {
  index?: number;

  // IMAGE
  image: string;
  imageShape?: "square" | "circle";
  aspect?: string; 

  // BADGE
  badge?: {
    text: string;
    color?: string;
    textColor?: string;
  };

  // OVERLAY
  gradient?: boolean;
  blurOnHover?: boolean;

  // PLAY BUTTON
  playButton?: boolean;
  playSize?: number;

  // CONTENT
  title?: string;
  subtitle?: string;
  extra?: React.ReactNode;

  // HOVER
  hoverLift?: number;

  // CUSTOM CHILDREN (pour cas spéciaux)
  childrenTop?: React.ReactNode;
  childrenBottom?: React.ReactNode;
}

export const MediaCard = ({
  index = 0,
  image,
  imageShape = "square",
  aspect = "aspect-square",
  badge,
  gradient = true,
  playButton = true,
  playSize = 48,
  title,
  subtitle,
  extra,
  hoverLift = -8,
  childrenTop,
  childrenBottom
}: MediaCardProps) => {

  const [isHovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: hoverLift }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="cursor-pointer"
    >
      <div className={`relative overflow-hidden rounded-2xl ${aspect}`}>

        {/* IMAGE */}
        <img 
          src={image} 
          className={`w-full h-full object-cover ${
            imageShape === "circle" ? "rounded-full" : ""
          }`}
        />

        {/* BADGE */}
        {badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: badge.color ?? "rgba(255,255,255,0.9)",
              color: badge.textColor ?? "#1B1B1B"
            }}
          >
            {badge.text}
          </div>
        )}

        {/* PLAY BUTTON */}
        {playButton && (
          <motion.button
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            className="absolute bottom-3 right-3 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-xl"
            style={{
              width: playSize,
              height: playSize,
            }}
          >
            <svg 
              width="22" height="22" viewBox="0 0 24 24" 
              fill="#1B1B1B"
              style={{ marginLeft: 4 }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        )}

        {/* GRADIENT OVERLAY */}
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        )}

        {/* SLOTS POUR AJOUTER DES ÉLÉMENTS CUSTOM */}
        {childrenTop}
      </div>

      {/* TEXTE */}
      {(title || subtitle || extra || childrenBottom) && (
        <div className="mt-3">
          {title && <h3 className="font-semibold text-sm truncate">{title}</h3>}
          {subtitle && <p className="text-xs text-white/60 truncate">{subtitle}</p>}
          {extra}
          {childrenBottom}
        </div>
      )}
    </motion.div>
  );
};
