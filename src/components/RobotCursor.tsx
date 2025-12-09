import { useEffect, useRef, useState } from 'react';

export default function RobotCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    // Target position (mouse)
    const targetPos = useRef({ x: 0, y: 0 });
    // Current position (robot)
    const currentPos = useRef({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [direction, setDirection] = useState('right'); // 'left' or 'right'

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetPos.current = { x: e.clientX, y: e.clientY };

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            setIsHovering(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null
            );

            // Determine direction
            if (e.clientX < currentPos.current.x) {
                setDirection('left');
            } else {
                setDirection('right');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;

        const animate = () => {
            // Smooth lerp (Linear Interpolation)
            // Slower speed "like an ant" (0.02)
            const ease = 0.02;

            const dx = targetPos.current.x - currentPos.current.x;
            const dy = targetPos.current.y - currentPos.current.y;

            currentPos.current.x += dx * ease;
            currentPos.current.y += dy * ease;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div className="robot-container" ref={cursorRef}>
                <div className={`robot ${isHovering ? 'excited' : ''} ${direction}`}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C13.1046 2 14 2.89543 14 4V5H10V4C10 2.89543 10.8954 2 12 2Z" fill="#333" />
                        <rect x="5" y="5" width="14" height="10" rx="3" fill="#ffffff" stroke="#333" strokeWidth="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" fill="#333" />
                        <circle cx="15.5" cy="9.5" r="1.5" fill="#333" />
                        <path d="M9 12.5C9 12.5 10 13.5 12 13.5C14 13.5 15 12.5 15 12.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M4 8L2 7" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M20 8L22 7" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M7 15V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V15" fill="#fff" stroke="#333" strokeWidth="1.5" />
                        {/* Heart for excitement */}
                        {isHovering && <path d="M12 6.5C12 6.5 11 5.5 10 6.5C9 7.5 10.5 9 12 10C13.5 9 15 7.5 14 6.5C13 5.5 12 6.5 12 6.5Z" fill="#ff4d4d" className="heart" />}
                    </svg>
                </div>
            </div>
            <style jsx>{`
        .robot-container {
          position: fixed;
          top: -20px; /* Offset to center relative to mouse or sit above it */
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
        
        /* Hide on mobile */
        @media (max-width: 768px) {
            .robot-container {
                display: none;
            }
        }
      `}</style>
        </>
    );
}
