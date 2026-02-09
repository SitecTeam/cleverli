import { Card, CardContent } from "../ui/card";
import Diploma from "../../svgs/different-section/diploma.svg?url";
import Results from "../../svgs/different-section/results.svg?url";
import News from "../../svgs/different-section/news.svg?url";
import Hat from "../../svgs/different-section/hat.svg?url";
import FadeInWrapper from "../fade-in-wrapper";

const data = [
  {
    id: 1,
    text: (
      <>
        We understand the learning process, <br className="hidden lg:block" />{" "}
        from pedagogy to platform.
      </>
    ),
    icon: Diploma,
  },
  {
    id: 2,
    text: (
      <>
        We think creatively, with strong <br className="hidden lg:block" />{" "}
        roots in design and storytelling.
      </>
    ),
    icon: Hat,
  },
  {
    id: 3,
    text: "We follow trends, from AI to interactive media, but always apply them with purpose.",
    icon: News,
  },
  {
    id: 4,
    text: "We care about results. Every project is unique, and every client’s audience matters.",
    icon: Results,
  },
];

const DifferentCards = () => {
  return (
    <FadeInWrapper className="mx-auto grid grid-cols-1 justify-items-center gap-x-7 gap-y-6 lg:max-w-270.75 lg:grid-cols-2 lg:gap-10 lg:px-0">
      {data.map(({ id, text, icon }) => (
        <Card
          key={id}
          className="relative flex h-27 w-full items-center border-none bg-white/20 py-2 sm:h-38 lg:max-w-130.5 lg:bg-white"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <CardContent className="flex h-full w-full items-center gap-12 pl-12 sm:gap-4 sm:pl-3">
            <div className="contents shrink-0 sm:flex sm:w-20">
              <img
                src={icon}
                className="absolute top-1 left-1 h-14.5 w-9 object-contain sm:relative sm:h-auto sm:w-auto"
                alt="detail-icon"
              />
            </div>
            <span className="text-center font-medium sm:text-start sm:text-xl lg:leading-relaxed">
              {text}
            </span>
          </CardContent>
        </Card>
      ))}
    </FadeInWrapper>
  );
};

export default DifferentCards;
