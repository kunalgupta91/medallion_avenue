export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "site" | "construction" | "renders" | "drone";
  type: "image" | "video";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "site-garden-01",
    src: "/images/site/site-garden-01.jpg",
    alt: "Landscaped green lawns and walkways on site at Medallion Avenue",
    category: "site",
    type: "image",
  },
  {
    id: "site-garden-02",
    src: "/images/site/site-garden-02.jpg",
    alt: "Landscaped gardens and sales gazebo at Medallion Avenue",
    category: "site",
    type: "image",
  },
  {
    id: "site-garden-03",
    src: "/images/site/site-garden-03.jpg",
    alt: "Paved walkways through the green landscape at Medallion Avenue",
    category: "site",
    type: "image",
  },
  {
    id: "site-progress-video",
    src: "/videos/site-progress.mp4",
    alt: "Construction and site progress walkthrough at Medallion Avenue",
    category: "construction",
    type: "video",
  },
];

export const galleryFilters = [
  { key: "all", label: "All" },
  { key: "site", label: "On-Site" },
  { key: "construction", label: "Construction" },
  { key: "renders", label: "Renders" },
  { key: "drone", label: "Drone" },
] as const;
