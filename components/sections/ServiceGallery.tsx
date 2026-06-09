'use client';

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceGalleryItem } from "@/data/services";

interface ServiceGalleryProps {
  sectionTitle: string;
  sectionSubtitle: string;
  // Expects exactly 5 items: [left-top, left-bottom, center-tall, right-top, right-bottom]
  items: ServiceGalleryItem[];
}

export function ServiceGallery({ sectionTitle, sectionSubtitle, items }: ServiceGalleryProps) {
  const reduced = useReducedMotion();

  if (items.length < 5) return null;
  const [leftTop, leftBottom, center, rightTop, rightBottom] = items;

  return (
    <section aria-labelledby="gallery-heading" className="section-padding bg-white">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>
        {/* Section header */}
        <motion.div
          className="flex flex-col items-start text-left gap-5 mb-[65px]"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            id="gallery-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            {sectionTitle}
          </h2>
          <p
            className="font-normal"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "680px",
            }}
          >
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Mosaic grid — desktop */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Mobile: 2-1-2 mosaic (matches desktop focal point) */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <GalleryCell item={leftTop} className="h-[180px]" />
            <GalleryCell item={leftBottom} className="h-[180px]" />
            <GalleryCell item={center} className="h-[180px] col-span-2" />
            <GalleryCell item={rightTop} className="h-[180px]" />
            <GalleryCell item={rightBottom} className="h-[180px]" />
          </div>

          {/* Tablet/Desktop: mosaic */}
          <div
            className="hidden md:grid gap-3 lg:gap-[14px]"
            style={{
              gridTemplateColumns: "1fr 1.3fr 1fr",
              gridTemplateRows: "1fr 1fr",
              height: "clamp(400px, 50vw, 604px)",
            }}
          >
            {/* Left-top: Bedroom */}
            <GalleryCell
              item={leftTop}
              style={{ gridRow: 1, gridColumn: 1, borderRadius: "10px 0 0 0" }}
            />
            {/* Left-bottom: Outdoor Deck */}
            <GalleryCell
              item={leftBottom}
              style={{ gridRow: 2, gridColumn: 1, borderRadius: "0 0 0 10px" }}
            />
            {/* Center: Living Room — spans both rows */}
            <GalleryCell
              item={center}
              style={{ gridRow: "1 / span 2", gridColumn: 2, borderRadius: "0" }}
            />
            {/* Right-top: Kitchen & Dining */}
            <GalleryCell
              item={rightTop}
              style={{ gridRow: 1, gridColumn: 3, borderRadius: "0 10px 0 0" }}
            />
            {/* Right-bottom: Bathroom */}
            <GalleryCell
              item={rightBottom}
              style={{ gridRow: 2, gridColumn: 3, borderRadius: "0 0 10px 0" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCell({
  item,
  className = "",
  style = {},
}: {
  item: ServiceGalleryItem;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`group relative overflow-hidden cursor-pointer ${className}`}
      style={{ borderRadius: "10px", ...style }}
    >
      {/* Image with zoom on hover — scaled slightly to clip any residual letterboxing */}
      <Image
        src={item.image}
        alt={item.label}
        fill
        className="object-cover scale-[1.12] transition-transform duration-500 ease-out group-hover:scale-[1.2]"
        style={{ objectFit: "cover" }}
        loading="lazy"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 30vw"
      />

      {/* Hover overlay — fades in a dark gradient from the bottom */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(1,24,47,0.55) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Room label badge */}
      <div
        className="absolute bottom-[10px] left-[10px] md:bottom-[10px] md:left-[15px] flex items-center justify-center px-[8.571px] py-[7.143px] rounded-[7px] bg-[rgba(1,24,47,0.55)] transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-[var(--color-primary)]"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <span
          className="font-medium uppercase whitespace-nowrap tracking-wide"
          style={{ fontSize: "var(--text-body-5)", color: "white" }}
        >
          {item.label}
        </span>
      </div>
    </div>
  );
}
