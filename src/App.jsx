import "./styles/variables.css";
import "./styles/deck.css";
import "./styles/components.css";
import "./styles/responsive.css";

import DeckContainer from "./components/DeckContainer";
import CoverSlide from "./slides/CoverSlide";
import TableOfContentsSlide from "./slides/TableOfContentsSlide";
import SectionCoverSlide from "./slides/SectionCoverSlide";
import CurrentRealitySlide from "./slides/CurrentRealitySlide";
import BrandGapSlide from "./slides/BrandGapSlide";
import MasonryGallerySlide from "./slides/MasonryGallerySlide";
import MasonryGallerySlide2 from "./slides/MasonryGallerySlide2";
import MasonryGallerySlide3 from "./slides/MasonryGallerySlide3";
import RoadmapSlide from "./slides/RoadmapSlide";
import SalesEngineSlide from "./slides/SalesEngineSlide";
import NarrativeSlide from "./slides/NarrativeSlide";
import PricingSlide from "./slides/PricingSlide";
import RevenueDashboardSlide from "./slides/RevenueDashboardSlide";
import ConclusionSlide from "./slides/ConclusionSlide";

function App() {
  return (
    <DeckContainer>
      <CoverSlide />
      <TableOfContentsSlide />

      <SectionCoverSlide
        num="01"
        title="The Current Reality"
        theme="dark"
        slideIndex={2}
      />
      <CurrentRealitySlide />

      <SectionCoverSlide
        num="02"
        title="The Brand Gap"
        theme="light"
        slideIndex={4}
      />
      <BrandGapSlide />

      <MasonryGallerySlide />
      <MasonryGallerySlide2 />
      <MasonryGallerySlide3 />

      <SectionCoverSlide
        num="03"
        title="90-Day Roadmap"
        theme="dark"
        slideIndex={9}
      />
      <RoadmapSlide />

      <SectionCoverSlide
        num="04"
        title="The Sales Engine"
        theme="light"
        slideIndex={11}
      />
      <SalesEngineSlide />

      <PricingSlide />
      <RevenueDashboardSlide />

      <SectionCoverSlide
        num="05"
        title="Digital Architecture"
        theme="dark"
        slideIndex={15}
      />
      <NarrativeSlide />

      <SectionCoverSlide
        num="06"
        title="Next Steps"
        theme="light"
        slideIndex={17}
      />
      <ConclusionSlide />
    </DeckContainer>
  );
}

export default App;
