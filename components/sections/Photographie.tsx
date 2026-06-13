"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Ticker from "@/components/ui/Ticker";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface Photo {
  src: string;
  alt: string;
  artiste: string;
  event: string;
  date: string;
  ville: string;
  width: number;
  height: number;
}

const placeholderPhotos: Photo[] = [
  { src: "/assets/photos/photo-01.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2956, height: 1970 },
  { src: "/assets/photos/photo-02.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-03.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-04.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-05.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-06.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-07.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2668 },
  { src: "/assets/photos/photo-08.jpg", alt: "Photographie", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 1940, height: 2587 },
];

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex-shrink-0 h-[340px] md:h-[420px] overflow-hidden rounded-sm group cursor-pointer"
      style={{ width: `${Math.round((photo.width / photo.height) * 380)}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor
    >
      {/* Image réelle */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-400"
        style={{
          transform: isHovered ? "scale(1.04)" : "scale(1)",
          filter: isHovered ? "brightness(1.1)" : "brightness(0.85)",
          transition: "transform 0.4s ease, filter 0.4s ease",
        }}
        loading="lazy"
      />

      {/* Info overlay */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir/90 to-transparent"
      >
        <p className="font-body font-semibold text-blanc-casse text-sm">{photo.artiste}</p>
        <p className="font-body text-gris-sombre text-xs">{photo.event} · {photo.ville}</p>
      </motion.div>
    </motion.div>
  );
}

interface PhotographieProps {
  photos?: Photo[];
}

export default function Photographie({ photos = placeholderPhotos }: PhotographieProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - galleryRef.current.offsetLeft;
    scrollLeft.current = galleryRef.current.scrollLeft;
    galleryRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    galleryRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (galleryRef.current) galleryRef.current.style.cursor = "grab";
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!galleryRef.current) return;
    e.preventDefault();
    galleryRef.current.scrollLeft += e.deltaY * 2;
  };

  return (
    <section
      id="photographie"
      className="py-16 md:py-36 bg-surface overflow-hidden"
      aria-label="Galerie photographique de Nelliana BEX"
    >
      {/* Ticker */}
      <Ticker
        text="PHOTOGRAPHIE"
        speed="slow"
        className="py-4 text-4xl md:text-6xl font-display text-blanc-casse/10 tracking-wider mb-12"
        separator="✦"
      />

      <div className="px-5 md:px-12 mb-10">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-7xl text-blanc-casse tracking-wide">
              PHOTOGRAPHIE
            </h2>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-fluo text-noir font-body font-semibold text-sm rounded-full hover:scale-105 transition-transform duration-200"
              aria-label="Voir plus de photographies"
            >
              Voir plus →
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={galleryRef}
        className="flex gap-4 px-5 md:px-12 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
        style={{
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        role="list"
        aria-label="Galerie photos de concerts"
      >
        {photos.map((photo, i) => (
          <div key={i} role="listitem">
            <PhotoCard photo={photo} index={i} />
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 px-5 md:hidden">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-fluo text-noir font-body font-semibold text-sm rounded-full"
        >
          Voir plus →
        </a>
      </div>
    </section>
  );
}
