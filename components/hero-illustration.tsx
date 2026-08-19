/**
 * Hero artwork for the homepage, hand-authored from the design reference:
 * a night skyline with a pink staircase/arrow and figures helping each other climb.
 * Pure inline SVG — nothing here imports or renders the original design file.
 *
 * Coordinate space: 1440 x 1247, ground line at y = GROUND.
 */

const GROUND = 1247;

const SKYLINE_BACK = "#9BA5C3";
const BUILDING_PINK = "#F5D0DF";
const BUILDING_LIGHT = "#E0E0E1";
const BUILDING_SLATE = "#404658";
const BUILDING_DARK = "#2C2C42";
const BUILDING_DARKEST = "#1A2038";
const WINDOW_STEEL = "#5B7186";
const WINDOW_LIGHT = "#F7F7FA";
const WINDOW_DARK = "#3A4055";
const PINK = "#FFB6D7";
const PINK_DEEP = "#F096BE";

interface WindowGrid {
  cols: number;
  rows: number;
  fill: string;
  /** inset from the building edges */
  pad?: number;
  /** window cell size */
  size?: number;
}

interface Building {
  x: number;
  w: number;
  top: number;
  fill: string;
  win?: WindowGrid;
}

/** Buildings drawn behind the front row — flat periwinkle silhouettes. */
const BACKDROP: Building[] = [
  { x: 28, w: 142, top: 717, fill: SKYLINE_BACK },
  { x: 228, w: 106, top: 672, fill: SKYLINE_BACK },
  { x: 470, w: 60, top: 640, fill: SKYLINE_BACK },
  { x: 520, w: 122, top: 672, fill: SKYLINE_BACK },
  { x: 1018, w: 104, top: 787, fill: SKYLINE_BACK },
  { x: 1150, w: 96, top: 700, fill: SKYLINE_BACK },
  { x: 1238, w: 98, top: 807, fill: SKYLINE_BACK },
];

/** Front row of the skyline, left to right. */
const SKYLINE: Building[] = [
  {
    x: 0,
    w: 86,
    top: 957,
    fill: BUILDING_DARK,
    win: { cols: 4, rows: 1, fill: WINDOW_LIGHT, pad: 10, size: 12 },
  },
  {
    x: 88,
    w: 162,
    top: 847,
    fill: BUILDING_PINK,
    win: { cols: 4, rows: 8, fill: WINDOW_STEEL, pad: 16, size: 22 },
  },
  {
    x: 258,
    w: 82,
    top: 932,
    fill: BUILDING_PINK,
    win: { cols: 3, rows: 7, fill: PINK_DEEP, pad: 10, size: 12 },
  },
  {
    x: 355,
    w: 155,
    top: 762,
    fill: BUILDING_SLATE,
    win: { cols: 4, rows: 9, fill: WINDOW_LIGHT, pad: 14, size: 22 },
  },
  {
    x: 515,
    w: 122,
    top: 797,
    fill: BUILDING_LIGHT,
    win: { cols: 4, rows: 10, fill: WINDOW_DARK, pad: 12, size: 16 },
  },
  {
    x: 628,
    w: 182,
    top: 1067,
    fill: BUILDING_DARKEST,
    win: { cols: 7, rows: 4, fill: WINDOW_LIGHT, pad: 12, size: 16 },
  },
  {
    x: 818,
    w: 70,
    top: 957,
    fill: BUILDING_PINK,
    win: { cols: 3, rows: 8, fill: PINK_DEEP, pad: 9, size: 11 },
  },
  {
    x: 900,
    w: 112,
    top: 682,
    fill: BUILDING_DARKEST,
    win: { cols: 4, rows: 13, fill: WINDOW_LIGHT, pad: 12, size: 16 },
  },
  {
    x: 1090,
    w: 200,
    top: 907,
    fill: BUILDING_PINK,
    win: { cols: 5, rows: 8, fill: WINDOW_STEEL, pad: 16, size: 22 },
  },
  {
    x: 1330,
    w: 110,
    top: 777,
    fill: BUILDING_LIGHT,
    win: { cols: 3, rows: 12, fill: WINDOW_DARK, pad: 12, size: 16 },
  },
];

function Windows({ building }: { building: Building }) {
  const { x, w, top, win } = building;
  if (!win) return null;

  const { cols, rows, fill, pad = 12, size = 16 } = win;
  const innerW = w - pad * 2;
  const innerH = GROUND - top - pad * 2;
  const stepX = cols > 1 ? (innerW - size) / (cols - 1) : 0;
  const stepY = rows > 1 ? (innerH - size) / (rows - 1) : 0;

  const cells: Array<{ cx: number; cy: number }> = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      cells.push({
        cx: x + pad + col * stepX,
        cy: top + pad + row * stepY,
      });
    }
  }

  return (
    <g fill={fill}>
      {cells.map((cell) => (
        <rect
          key={`${cell.cx}-${cell.cy}`}
          x={cell.cx}
          y={cell.cy}
          width={size}
          height={size}
        />
      ))}
    </g>
  );
}

function Block({ building }: { building: Building }) {
  return (
    <>
      <rect
        x={building.x}
        y={building.top}
        width={building.w}
        height={GROUND - building.top}
        fill={building.fill}
      />
      <Windows building={building} />
    </>
  );
}

/** One climbing figure: head, torso, two arms, two legs — flat vector style. */
interface FigureProps {
  x: number;
  y: number;
  scale?: number;
  flip?: boolean;
  hair: string;
  shirt: string;
  pants: string;
  skin?: string;
}

function Figure({
  x,
  y,
  scale = 1,
  flip = false,
  hair,
  shirt,
  pants,
  skin = "#FBDCC8",
}: FigureProps) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}
    >
      {/* back leg */}
      <path
        d="M8 62 L2 104 L-6 132"
        stroke={pants}
        strokeWidth={19}
        strokeLinecap="round"
        fill="none"
      />
      {/* front leg */}
      <path
        d="M22 62 L34 100 L52 122"
        stroke={pants}
        strokeWidth={19}
        strokeLinecap="round"
        fill="none"
      />
      {/* shoes */}
      <ellipse cx={-9} cy={136} rx={13} ry={7} fill="#0D1938" />
      <ellipse cx={57} cy={126} rx={13} ry={7} fill="#0D1938" />
      {/* torso */}
      <path d="M4 16 Q16 8 28 16 L34 60 Q16 68 -2 60 Z" fill={shirt} />
      {/* back arm */}
      <path
        d="M2 24 L-16 50 L-24 72"
        stroke={shirt}
        strokeWidth={15}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={-25} cy={75} r={7} fill={skin} />
      {/* front arm reaching up */}
      <path
        d="M28 22 L52 4 L74 -12"
        stroke={shirt}
        strokeWidth={15}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={76} cy={-14} r={7} fill={skin} />
      {/* neck + head */}
      <rect x={11} y={4} width={10} height={12} fill={skin} />
      <circle cx={16} cy={-6} r={15} fill={skin} />
      <path
        d="M1 -8 Q2 -26 16 -26 Q31 -26 31 -10 Q24 -18 14 -16 Q6 -15 1 -8 Z"
        fill={hair}
      />
    </g>
  );
}

interface HeroIllustrationProps {
  className?: string;
}

export default function HeroIllustration({
  className = "",
}: HeroIllustrationProps) {
  return (
    <svg
      viewBox={`0 0 1440 ${GROUND}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1938" />
          <stop offset="55%" stopColor="#16224A" />
          <stop offset="100%" stopColor="#22315C" />
        </linearGradient>
      </defs>

      <rect width={1440} height={GROUND} fill="url(#hero-sky)" />

      {/* ---- pink staircase the figures climb ---- */}
      <g>
        <path d="M770 620 L1030 620 L1030 660 L770 660 Z" fill={PINK} />
        <path d="M770 660 L640 700 L640 660 L770 620 Z" fill={PINK_DEEP} />
        <path d="M1030 420 L1030 660 L1080 660 L1080 420 Z" fill={PINK_DEEP} />
        <path d="M1030 420 L1290 420 L1290 460 L1030 460 Z" fill={PINK} />
        <path d="M1250 250 L1250 460 L1300 460 L1300 250 Z" fill={PINK_DEEP} />
        <path
          d="M1218 300 L1330 188 L1330 244 L1400 174 L1400 300 L1330 300 L1330 356 Z"
          fill={PINK}
        />
      </g>

      {/* ---- skyline ---- */}
      <g opacity={0.85}>
        {BACKDROP.map((building) => (
          <rect
            key={`bg-${building.x}`}
            x={building.x}
            y={building.top}
            width={building.w}
            height={GROUND - building.top}
            fill={building.fill}
          />
        ))}
        <path
          d="M726 640 L742 560 L758 640 L764 1247 L720 1247 Z"
          fill={SKYLINE_BACK}
        />
        <rect x={739} y={512} width={6} height={52} fill={SKYLINE_BACK} />
        <circle cx={742} cy={508} r={9} fill={SKYLINE_BACK} />
      </g>

      {SKYLINE.map((building) => (
        <Block key={`fg-${building.x}`} building={building} />
      ))}

      {/* antennae + roof caps */}
      <rect x={40} y={900} width={6} height={60} fill={BUILDING_DARK} />
      <rect x={296} y={890} width={5} height={46} fill={BUILDING_PINK} />
      <circle cx={298} cy={886} r={9} fill={BUILDING_DARK} />
      <rect x={850} y={915} width={5} height={46} fill={BUILDING_PINK} />
      <circle cx={852} cy={911} r={9} fill={BUILDING_DARK} />
      <rect x={430} y={717} width={46} height={50} fill={BUILDING_SLATE} />
      <rect x={926} y={640} width={60} height={46} fill={BUILDING_DARKEST} />

      {/* ---- figures ---- */}
      <Figure
        x={1120}
        y={330}
        scale={1.15}
        hair="#E897A3"
        shirt="#DFEBFF"
        pants="#5C7FD6"
      />
      <Figure
        x={930}
        y={455}
        scale={1.1}
        hair="#3A2A25"
        shirt="#FFF2F5"
        pants="#4C3A40"
      />
      <Figure
        x={1160}
        y={585}
        scale={1.05}
        hair="#3A2A25"
        shirt="#F9F7FF"
        pants="#A480A9"
      />
      <Figure
        x={1390}
        y={585}
        scale={1.05}
        flip
        hair="#E897A3"
        shirt="#DFEBFF"
        pants="#5C7FD6"
      />
    </svg>
  );
}
