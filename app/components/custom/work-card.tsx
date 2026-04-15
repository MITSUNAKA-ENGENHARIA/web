"use client";

import Carousel from "@/app/components/custom/carousel";

interface WorkCardProps {
  title: string;
  description: string;
  images: string[];
  index: number;
}

export default function WorkCard({ title, description, images, index }: WorkCardProps) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
      }}
    >
      <Carousel
        imagesPaths={images}
        imageDimensions={{ width: "100%", height: "520px" }}
      />

      <div style={{ padding: "1.1rem 1.25rem 1.4rem" }}>

        <h2
          style={{
            color: "#111827",
            fontSize: "1.05rem",
            fontWeight: 600,
            margin: "0.3rem 0 0.5rem",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}