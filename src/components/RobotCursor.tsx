import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function RobotCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const targetPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const lastClientPos = useRef({ x: 0, y: 0 }); // Track viewport coordinates
    const movingAxis = useRef<'x' | 'y' | null>(null); // Use ref for mutable state
    const [isExcited, setIsExcited] = useState(false);
    const [direction, setDirection] = useState('right');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Initialize position off-screen or center + scroll
        if (typeof window !== 'undefined') {
            const viewportX = window.innerWidth / 2;
            const viewportY = window.innerHeight / 2;
            const startX = viewportX + window.scrollX;
            const startY = viewportY + window.scrollY;

            targetPos.current = { x: startX, y: startY };
            currentPos.current = { x: startX, y: startY };
            lastClientPos.current = { x: viewportX, y: viewportY };
        }

        const handleMouseMove = (e: MouseEvent) => {
            // Track viewport coordinates instead of absolute page coordinates
            lastClientPos.current = { x: e.clientX, y: e.clientY };

            // Initial target update (will be overridden by animate loop but good for immediate feedback)
            targetPos.current = { x: e.pageX, y: e.pageY };

            // Direction update immediately on mouse move for responsiveness
            if (e.pageX < currentPos.current.x) {
                setDirection('left');
            } else {
                setDirection('right');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;

        const animate = () => {
            // Update target position based on current scroll + last known mouse position
            if (typeof window !== 'undefined') {
                targetPos.current = {
                    x: lastClientPos.current.x + window.scrollX,
                    y: lastClientPos.current.y + window.scrollY
                };
            }

            const dx = targetPos.current.x - currentPos.current.x;
            const dy = targetPos.current.y - currentPos.current.y;
            const absDist = Math.sqrt(dx * dx + dy * dy);

            // Speed: ~2cm/sec -> ~76px/sec -> ~1.2px/frame @ 60fps
            // Dynamic speed: faster if far away
            const baseSpeed = 1.6;
            const threshold = 750;
            // Increase speed by 0.05 (tuned) for every pixel beyond threshold
            const extraSpeed = Math.max(0, (absDist - threshold) * 0.05);
            const speed = baseSpeed + extraSpeed;

            // Distance check for "Excited" state (Heart)
            // If robot is very close to cursor (e.g. 50px)

            if (absDist < 40) { // 40px proximity
                setIsExcited(true);
            } else {
                setIsExcited(false);
            }

            // Stateful Axis Locking
            // 1. Check if we are done with current axis
            if (movingAxis.current === 'x') {
                if (Math.abs(dx) < speed) movingAxis.current = null;
            } else if (movingAxis.current === 'y') {
                if (Math.abs(dy) < speed) movingAxis.current = null;
            }

            // 2. Pick new axis if needed
            if (!movingAxis.current) {
                // Determine dominant distance
                if (Math.abs(dx) > Math.abs(dy)) {
                    movingAxis.current = 'x';
                } else if (Math.abs(dy) > 0) { // Only pick y if there is actual movement needed
                    movingAxis.current = 'y';
                }
            }

            // 3. Move along current axis
            if (movingAxis.current === 'x') {
                if (Math.abs(dx) > speed) {
                    currentPos.current.x += (dx / Math.abs(dx)) * speed;
                } else {
                    currentPos.current.x += dx; // Snap
                }
            } else if (movingAxis.current === 'y') {
                if (Math.abs(dy) > speed) {
                    currentPos.current.y += (dy / Math.abs(dy)) * speed;
                } else {
                    currentPos.current.y += dy; // Snap
                }
            }

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!mounted) return null;

    // Use Portal to attach directly to body
    return createPortal(
        <>
            <div className="robot-container" ref={cursorRef}>
                <div className={`robot ${isExcited ? 'excited' : ''} ${direction}`}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C13.1046 2 14 2.89543 14 4V5H10V4C10 2.89543 10.8954 2 12 2Z" fill="#333" />
                        <rect x="5" y="5" width="14" height="10" rx="3" fill="#ffffff" stroke="#333" strokeWidth="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" fill="#333" />
                        <circle cx="15.5" cy="9.5" r="1.5" fill="#333" />
                        <path d="M9 12.5C9 12.5 10 13.5 12 13.5C14 13.5 15 12.5 15 12.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M4 8L2 7" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M20 8L22 7" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M7 15V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V15" fill="#fff" stroke="#333" strokeWidth="1.5" />
                        {isExcited && <path d="M12 6.5C12 6.5 11 5.5 10 6.5C9 7.5 10.5 9 12 10C13.5 9 15 7.5 14 6.5C13 5.5 12 6.5 12 6.5Z" fill="#ff4d4d" className="heart" />}
                    </svg>
                </div>
            </div>
            <style jsx>{`
        .robot-container {
          position: absolute;
          top: -20px;
          left: -20px;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
        }
        .robot {
          transition: transform 0.2s ease;
        }
        .robot.left {
          transform: scaleX(-1);
        }
        .robot.excited {
          transform: scale(1.2) translateY(-5px);
        }
        .robot.excited.left {
            transform: scaleX(-1) scale(1.2) translateY(-5px);
        }
        .heart {
            animation: pulse 0.5s infinite alternate;
        }
        @keyframes pulse {
            from { transform: scale(1); }
            to { transform: scale(1.3); transform-origin: center; }
        }
        @media (max-width: 768px) {
            .robot-container {
                display: none;
            }
        }
      `}</style>
        </>,
        document.body
    );
}
