"use client"
import { useEffect, useRef } from "react"

const AnimateBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Resize automatique optimisé
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        // Particules galaxie
        const numParticles = 120;
        const particles = Array.from({ length: numParticles }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
        }));

        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Glow / Blur global pour un effet néon
            ctx.filter = "blur(40px)";

            // Dégradé fluide + mouvement
            const gradient = ctx.createLinearGradient(
                Math.sin(time * 0.0005) * 300, 
                Math.cos(time * 0.0005) * 300,
                width,
                height
            );
            gradient.addColorStop(0, `hsl(${(time * 0.05) % 360}, 70%, 75%)`);
            gradient.addColorStop(0.5, `hsl(${(time * 0.03 + 120) % 360}, 70%, 75%)`);
            gradient.addColorStop(1, `hsl(${(time * 0.07 + 240) % 360}, 70%, 75%)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Réduction du blur pour dessiner les particules
            ctx.filter = "blur(0px)";

            // Particules galaxie
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                // Rebond léger
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Glow local sur chaque particule
                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,255,0.8)";
                ctx.shadowColor = "white";
                ctx.shadowBlur = 8;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            time += 1;
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
}
export default AnimateBackground;
