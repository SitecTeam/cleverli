import { useMemo, useState } from "react";

type PodbeanEpisode = {
  id: string;
  title: string;
};

type PodbeanEpisodePlayerProps = {
  episodes: PodbeanEpisode[];
  buttonLabel?: string;
  className?: string;
};

const buildPodbeanEmbedUrl = (episodeId: string) => {
  const params = new URLSearchParams({
    from: "embed",
    i: episodeId,
    // square: "1",
    share: "1",
    download: "1",
    fonts: "Arial",
    // skin: "1",
    skin: "3267a3",
    "font-color": "auto",
    rtl: "0",
    logo_link: "episode_page",
    // "btn-skin": "7",
    // size: "300",
    // autoplay: "1",
    "btn-skin": "fb0584",
    size: "150",
  });

  return `https://www.podbean.com/player-v2/?${params.toString()}`;
};

const pickRandomEpisode = (
  episodes: PodbeanEpisode[],
  currentEpisodeId?: string
) => {
  if (episodes.length <= 1) {
    return episodes[0];
  }

  const filteredEpisodes = currentEpisodeId
    ? episodes.filter(episode => episode.id !== currentEpisodeId)
    : episodes;

  const sourceEpisodes =
    filteredEpisodes.length > 0 ? filteredEpisodes : episodes;
  const randomIndex = Math.floor(Math.random() * sourceEpisodes.length);
  return sourceEpisodes[randomIndex];
};

const PodbeanEpisodePlayer = ({
  episodes,
  buttonLabel = "Episode #24 Brittany Goris",
  className,
}: PodbeanEpisodePlayerProps) => {
  const [currentEpisode, setCurrentEpisode] = useState<PodbeanEpisode | null>(
    null
  );

  const hasEpisodes = episodes.length > 0;

  const iframeSrc = useMemo(() => {
    if (!currentEpisode) {
      return "";
    }

    return buildPodbeanEmbedUrl(currentEpisode.id);
  }, [currentEpisode]);

  const handlePlayRandom = () => {
    if (!hasEpisodes) {
      return;
    }

    const randomEpisode = pickRandomEpisode(episodes, currentEpisode?.id);
    setCurrentEpisode(randomEpisode);
  };

  return (
    <section className={className}>
      <button
        type="button"
        onClick={handlePlayRandom}
        disabled={!hasEpisodes}
        className="group flex h-24 w-full items-stretch overflow-hidden rounded-sm bg-[#E45CA8] text-left transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        aria-label="Play random podcast episode"
      >
        <span className="flex w-24 items-center justify-center border-r border-white/30 bg-[#DE5AA3]">
          <svg
            viewBox="0 0 28 28"
            aria-hidden="true"
            className="h-10 w-10 fill-white"
          >
            <path d="M8 5.5L22.5 14L8 22.5V5.5Z" />
          </svg>
        </span>

        <span className="flex flex-1 items-center px-6">
          <span className="text-2xl font-semibold text-white">
            {buttonLabel}
          </span>
        </span>
      </button>

      {currentEpisode && (
        <div className="mt-4 rounded-md bg-white p-2 shadow-box">
          <iframe
            title={currentEpisode.title}
            // height="500"
            height="150"
            width="100%"
            style={{
              border: "none",
              minWidth: "min(100%, 430px)",
              // height: 500,
              height: "150",
            }}
            scrolling="no"
            data-name="pb-iframe-player"
            src={iframeSrc}
            loading="lazy"
            // allowFullScreen={true}
          />
        </div>
      )}
    </section>
  );
};

export default PodbeanEpisodePlayer;
