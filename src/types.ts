export type BgColor = "yellow" | "cyan" | "pink" | "white";

export interface Tile {
  bg: BgColor;
  icon: string; // fontawesome class e.g. "fa-solid fa-users"
  title: string;
  body: string; // supports simple <strong>/<em>/<code> via dangerouslySetInnerHTML
  code?: string; // optional code block
}

export interface BulletItem {
  icon: string;
  color: BgColor;
  html: string;
}

export type SlideLayout =
  | {
      kind: "title";
      accent?: string;
      title: string;
      subtitle?: string;
    }
  | {
      kind: "sectionTitle";
      badge: string;
      badgeColor?: BgColor;
      title: string;
      subtitle?: string;
    }
  | {
      kind: "tiles";
      title: string;
      tiles: Tile[];
    }
  | {
      kind: "twoColumnBullets";
      title: string;
      bullets: BulletItem[];
      image?: { src: string; round?: boolean; alt?: string };
      imageLeft?: boolean;
      heading?: string;
    }
  | {
      kind: "bleedImage";
      title: string;
      bg: BgColor;
      paragraphs: string[]; // html allowed
      subheading?: string;
      image: { src: string; alt?: string };
    }
  | {
      kind: "qa";
      title: string;
      body: string;
      note?: string;
      contact?: string;
    };

export interface SlideDef {
  id: string;
  title: string;
  section: string;
  layout: SlideLayout;
}

export interface Week {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  author: string;
  slides: SlideDef[];
}
