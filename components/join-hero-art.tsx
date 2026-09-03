// Isometric "corridor" illustration for the Join CUMT hero.
// Hand-authored flat polygons — coordinate space is the 1440x1091 hero box
// (page y minus the 129px navbar band), traced from the design reference.
//
// ponytail: the stepped surfaces in the reference are a fine perspective grid of
// tiles; reproduced here as a handful of banded parallelograms. Swap in the full
// grid only if someone actually notices at 1440px.

const NAVY = "#0D1938";
const NAVY_DEEP = "#14203F";
const SLATE = "#2C3C58";
const SLATE_WARM = "#2E3D58";
const WALL_BLUE = "#687DB3";

/** Vertical-sided parallelogram sheared down-right at 45deg (a facade window). */
function shearedWindow(x: number, y: number, d: number, h: number) {
  return `M${x},${y} L${x + d},${y + d} L${x + d},${y + d + h} L${x},${y + h} Z`;
}

/** Slim slot sheared down-left (the vents on the pink facade). */
function shearedSlot(x: number, y: number, w: number, h: number) {
  const slant = h * 0.12;
  return `M${x},${y} L${x + w},${y} L${x + w - slant},${y + h} L${x - slant},${y + h} Z`;
}

const FACADE_WINDOWS: ReadonlyArray<readonly [number, number, number, number, string]> = [
  [140, 27, 58, 46, SLATE],
  [232, 103, 42, 41, NAVY_DEEP],
  [300, 159, 32, 38, SLATE],
  [352, 203, 25, 33, SLATE],
  [392, 237, 21, 29, SLATE],
  [426, 265, 17, 27, SLATE],
  [454, 287, 14, 26, NAVY_DEEP],
  [332, 274, 28, 29, NAVY_DEEP],
  [403, 371, 19, 23, SLATE],
];

const FACADE_SLOTS: ReadonlyArray<readonly [number, number, number, number]> = [
  [1046, 1, 10, 50],
  [1018, 40, 9, 50],
  [994, 77, 8, 123],
  [974, 112, 7, 42],
];

/** Crosswalk bands on the right-hand walkway (near edge is longer). */
const RIGHT_BANDS: readonly string[] = [
  "782,744 940,740 940,747 782,751",
  "784,766 969,761 969,770 784,775",
  "790,798 1010,793 1010,805 790,810",
  "795,838 1041,833 1041,850 795,855",
  "804,894 1149,888 1149,913 804,919",
  "817,975 1182,968 1182,1004 817,1011",
];

/** Step treads cut into the left-hand walkway's shaded flank. */
const LEFT_TREADS: readonly string[] = [
  "383,700 438,749 363,800 317,731",
  "290,772 330,857 246,912 230,818",
  "197,845 220,964 128,1023 142,904",
  "110,914 121,1067 22,1091 66,986",
];

/** Highlight bands on the left-hand walkway's lit top face. */
const LEFT_HIGHLIGHTS: readonly string[] = [
  "475,760 592,760 582,775 457,775",
  "401,820 551,820 537,840 376,840",
  "321,885 507,885 490,910 290,910",
  "235,955 460,955 439,985 198,985",
];

export function JoinHeroArt() {
  return (
    <svg
      viewBox="0 0 1440 1091"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="jha-right-top" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#5E75B3" />
          <stop offset="1" stopColor="#556CA7" />
        </linearGradient>
        <linearGradient id="jha-left-top" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7A90C7" />
          <stop offset="0.45" stopColor="#6377AF" />
          <stop offset="1" stopColor="#566DA8" />
        </linearGradient>
        <linearGradient id="jha-pink-rail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9AFC5" />
          <stop offset="1" stopColor="#BE90A9" />
        </linearGradient>
        <linearGradient id="jha-pink-lip" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E9AFC5" />
          <stop offset="1" stopColor="#BC8FA8" />
        </linearGradient>
      </defs>

      <rect width="1440" height="1091" fill={NAVY} />

      {/* ---- left facade ---- */}
      <polygon points="0,2 217,2 530,315 530,515 0,477" fill={WALL_BLUE} />
      <polygon points="0,477 530,515 530,519 0,491" fill={SLATE} />
      {FACADE_WINDOWS.map(([x, y, d, h, fill]) => (
        <path key={`w-${x}-${y}`} d={shearedWindow(x, y, d, h)} fill={fill} />
      ))}

      {/* ---- right facade ---- */}
      <polygon points="1396,0 1440,0 1440,277 1276,374 938,374" fill={SLATE} />
      <polygon points="1047,0 1396,0 938,372 938,147" fill="#BF91AA" />
      {FACADE_SLOTS.map(([x, y, w, h]) => (
        <path key={`s-${x}-${y}`} d={shearedSlot(x, y, w, h)} fill={SLATE} />
      ))}

      {/* ---- left walkway ---- */}
      <polygon points="547,623 626,623 0,1044 0,879" fill={SLATE_WARM} />
      {LEFT_TREADS.map((points) => (
        <polygon key={`t-${points}`} points={points} fill={NAVY} />
      ))}
      <polygon
        points="626,623 655,623 650,728 477,1090 0,1090 0,1044"
        fill="url(#jha-left-top)"
      />
      {LEFT_HIGHLIGHTS.map((points) => (
        <polygon key={`h-${points}`} points={points} fill="#8398CD" opacity="0.55" />
      ))}

      {/* ---- right walkway ---- */}
      <polygon points="925,689 1016,689 1440,949 1440,1090 1371,1090" fill={SLATE} />
      <polygon points="758,689 925,689 1371,1090 784,1090" fill="url(#jha-right-top)" />
      {RIGHT_BANDS.map((points) => (
        <polygon key={`b-${points}`} points={points} fill={SLATE_WARM} />
      ))}
      <polygon points="750,689 758,689 784,1090 750,1090" fill="url(#jha-pink-rail)" />
      <polygon points="750,686 1016,686 1016,693 750,693" fill="url(#jha-pink-lip)" />
    </svg>
  );
}
