import './styles/variables.css';
import './styles/deck.css';
import './styles/components.css';
import './styles/responsive.css';

import DeckContainer from './components/DeckContainer';
import CoverSlide from './slides/CoverSlide';
import TableOfContentsSlide from './slides/TableOfContentsSlide';
import Section1CoverSlide from './slides/Section1CoverSlide';
import CurrentRealitySlide from './slides/CurrentRealitySlide';
import BrandGapSlide from './slides/BrandGapSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import SalesEngineSlide from './slides/SalesEngineSlide';
import NarrativeSlide from './slides/NarrativeSlide';
import ConclusionSlide from './slides/ConclusionSlide';

function App() {
    return (
        <DeckContainer>
            <CoverSlide />
            <TableOfContentsSlide />
            <Section1CoverSlide />
            <CurrentRealitySlide />
            <BrandGapSlide />
            <RoadmapSlide />
            <SalesEngineSlide />
            <NarrativeSlide />
            <ConclusionSlide />
        </DeckContainer>
    );
}

export default App;
