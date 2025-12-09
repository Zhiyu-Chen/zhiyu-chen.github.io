import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function RobotCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const targetPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const [isExcited, setIsExcited] = useState(false);
    const [direction, setDirection] = useState('right');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Initialize position off-screen or center
        if (typeof window !== 'undefined') {
            targetPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            currentPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        }

        const handleMouseMove = (e: MouseEvent) => {
            targetPos.current = { x: e.clientX, y: e.clientY };
            // Direction update immediately on mouse move for responsiveness
            if (e.clientX < currentPos.current.x) {
                setDirection('left');
            } else {
                setDirection('right');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;

        const animate = () => {
            // Speed: ~2cm/sec -> ~76px/sec -> ~1.2px/frame @ 60fps
            // User asked to double the previous speed (0.8)
            const speed = 1.6;

            const dx = targetPos.current.x - currentPos.current.x;
            const dy = targetPos.current.y - currentPos.current.y;

            // Distance check for "Excited" state (Heart)
            // If robot is very close to cursor (e.g. 50px)
            const absDist = Math.sqrt(dx * dx + dy * dy);
            // Use a ref or state for visual update. State causes re-render, optimize?
            // React state is fine for this frequency (toggle only)
            if (absDist < 40) { // 40px proximity
                setIsExcited(true);
            } else {
                setIsExcited(false);
            }

            // Manhattan logic: Choose axis
            let moveX = 0;
            let moveY = 0;

            if (Math.abs(dx) > Math.abs(dy)) {
                moveX = dx;
            } else {
                moveY = dy;
            }

            // Normalize and move by fixed speed if far enough
            const dist = Math.sqrt(moveX * moveX + moveY * moveY);

            if (dist > speed) {
                if (moveX !== 0) {
                    currentPos.current.x += (moveX / Math.abs(moveX)) * speed;
                }
                if (moveY !== 0) {
                    currentPos.current.y += (moveY / Math.abs(moveY)) * speed;
                }
            } else {
                // Snap if close
                if (moveX !== 0) currentPos.current.x += moveX;
                if (moveY !== 0) currentPos.current.y += moveY;
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

    // Use Portal to attach directly to body, avoiding parent transform/scroll issues
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
          position: fixed;
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
