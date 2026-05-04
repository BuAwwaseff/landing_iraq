type MarketBackdropProps = {
  page: 'home' | 'partnership' | 'faq';
};

function BackdropLandmark() {
  return (
    <div aria-hidden="true" className="market-backdrop__landmark">
      <svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
        <rect fill="currentColor" height="20" width="900" x="0" y="500" />
        <rect fill="currentColor" height="30" width="420" x="240" y="470" />

        <polygon fill="currentColor" points="296,470 296,390 340,390 340,340 386,340 386,292 514,292 514,340 560,340 560,390 604,390 604,470" />
        <polygon fill="var(--color-bg)" points="360,470 360,362 394,362 394,324 506,324 506,362 540,362 540,470" />

        <path
          d="M392 470 V344 C392 300 417 274 450 274 C483 274 508 300 508 344 V470 Z"
          fill="currentColor"
        />
        <path
          d="M422 470 V352 C422 324 434 308 450 308 C466 308 478 324 478 352 V470 Z"
          fill="var(--color-bg-top)"
        />

        <rect fill="currentColor" height="178" width="42" x="182" y="292" />
        <rect fill="currentColor" height="204" width="42" x="676" y="266" />
        <polygon fill="currentColor" points="182,292 224,292 203,238" />
        <polygon fill="currentColor" points="676,266 718,266 697,212" />

        <rect fill="currentColor" height="120" opacity="0.88" width="22" x="126" y="350" />
        <rect fill="currentColor" height="108" opacity="0.88" width="22" x="752" y="362" />
        <rect fill="currentColor" height="54" opacity="0.76" width="64" x="116" y="416" />
        <rect fill="currentColor" height="54" opacity="0.76" width="64" x="720" y="416" />

        <polygon
          fill="currentColor"
          points="450,108 458,132 484,132 463,146 471,170 450,156 429,170 437,146 416,132 442,132"
        />

        <ellipse cx="202" cy="500" fill="currentColor" opacity="0.9" rx="194" ry="24" />
        <ellipse cx="698" cy="500" fill="currentColor" opacity="0.9" rx="194" ry="24" />
      </svg>
    </div>
  );
}

export function MarketBackdrop({ page }: MarketBackdropProps) {
  return (
    <div aria-hidden="true" className={`market-backdrop market-backdrop--${page}`}>
      <div className="market-backdrop__base" />
      <div className="market-backdrop__grid" />
      <div className="market-backdrop__veil market-backdrop__veil--top" />
      <div className="market-backdrop__veil market-backdrop__veil--mid" />
      <span className="market-backdrop__shaft market-backdrop__shaft--a" />
      <span className="market-backdrop__shaft market-backdrop__shaft--b" />
      <span className="market-backdrop__shaft market-backdrop__shaft--c" />
      <span className="market-backdrop__shaft market-backdrop__shaft--d" />
      <span className="market-backdrop__shaft market-backdrop__shaft--e" />
      <span className="market-backdrop__orb market-backdrop__orb--a" />
      <span className="market-backdrop__orb market-backdrop__orb--b" />
      <span className="market-backdrop__orb market-backdrop__orb--c" />
      <div className="market-backdrop__plane-wrap">
        <div className="market-backdrop__plane" />
      </div>
      <div className="market-backdrop__horizon" />
      <BackdropLandmark />
      <div className="market-backdrop__grain" />
      <div className="market-backdrop__vignette" />
    </div>
  );
}
