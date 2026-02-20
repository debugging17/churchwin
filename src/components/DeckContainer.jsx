import { useDeck } from '../hooks/useDeck';
import Particles from './Particles';
const TOTAL_SLIDES = 14;

export default function DeckContainer({ children }) {
    const {
        containerRef,
        progressRef,
        pageNumRef,
        bgTextRef,
    } = useDeck(TOTAL_SLIDES);

    return (
        <>
            {/* Floating Particles */}
            <Particles />

            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Background Watermark */}
            <div className="bg-text" ref={bgTextRef}>IMPACT</div>

            {/* Main Deck */}
            <main className="deck-container" ref={containerRef}>
                {children}
            </main>

            {/* UI Elements */}
            <div className="progress-bar">
                <div className="progress-fill" ref={progressRef} />
            </div>
            <div className="page-indicator">
                <span className="current-page" ref={pageNumRef}>01</span> / {TOTAL_SLIDES.toString().padStart(2, '0')}
            </div>
        </>
    );
}
