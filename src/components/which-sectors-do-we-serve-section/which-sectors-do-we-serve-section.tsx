import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";
import SectorCard from "./sector-card";
import { sectorCardData } from "./sector-card-data";

const WhichSectorsDoWeServeSection = () => {
  return (
    <div className="space-y-12 lg:space-y-16">
      <SectionTitleAnimation text="Which Sectors Do We Serve?" />
      <FadeInWrapper className="grid gap-9 sm:grid-cols-2 lg:grid-cols-1 lg:justify-center lg:gap-8 xl:gap-13.5">
        {sectorCardData.map(sector => (
          <SectorCard
            key={sector.id}
            title={sector.title}
            bgIcon={sector.backgroundIcon}
            description={sector.description}
            icon={sector.icon}
            details={sector.details}
          />
        ))}
      </FadeInWrapper>
    </div>
  );
};

export default WhichSectorsDoWeServeSection;
