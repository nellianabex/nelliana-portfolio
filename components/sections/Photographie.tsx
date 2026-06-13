"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { src: "/assets/photos/photo-01.jpg",   alt: "Concert", artiste: "Nelliana BEX", event: "Live", date: "2024", ville: "France", width: 2956, height: 1970 },
  { src: "/assets/photos/photo-02.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-03.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-04.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-05.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-06.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-07.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2668 },
  { src: "/assets/photos/photo-08.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 1940, height: 2587 },
  { src: "/assets/photos/photo-09.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-10.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2001, height: 2667 },
  { src: "/assets/photos/photo-11.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-12.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2668 },
  { src: "/assets/photos/photo-13.jpg",   alt: "Concert", artiste: "Nelliana BEX", event: "Live", date: "2024", ville: "France", width: 3840, height: 2561 },
  { src: "/assets/photos/photo-14.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-15.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-16.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2668 },
  { src: "/assets/photos/photo-17.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-18.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2668 },
  { src: "/assets/photos/photo-19.jpg",   alt: "Concert", artiste: "Nelliana BEX", event: "Live", date: "2024", ville: "France", width: 3241, height: 2160 },
  { src: "/assets/photos/photo-20.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-21.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-22.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-23.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2668 },
  { src: "/assets/photos/photo-24.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 1993, height: 2667 },
  { src: "/assets/photos/photo-25.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2037, height: 2667 },
  { src: "/assets/photos/photo-26.jpg",   alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2024", date: "2024", ville: "France", width: 2000, height: 2667 },
  { src: "/assets/photos/photo-27.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2094 },
  { src: "/assets/photos/photo-28.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2039 },
  { src: "/assets/photos/photo-29.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2069 },
  { src: "/assets/photos/photo-30.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2034 },
  { src: "/assets/photos/photo-31.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2067 },
  { src: "/assets/photos/photo-32.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2060 },
  { src: "/assets/photos/photo-33.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2061 },
  { src: "/assets/photos/photo-34.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2110 },
  { src: "/assets/photos/photo-35.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2174 },
  { src: "/assets/photos/photo-36.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2058 },
  { src: "/assets/photos/photo-37.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2014 },
  { src: "/assets/photos/photo-38.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2034 },
  { src: "/assets/photos/photo-39.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2034 },
  { src: "/assets/photos/photo-40.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2064 },
  { src: "/assets/photos/photo-41.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2068 },
  { src: "/assets/photos/photo-42.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2095 },
  { src: "/assets/photos/photo-43.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2087 },
  { src: "/assets/photos/photo-44.jpeg",  alt: "Portrait", artiste: "Nelliana BEX", event: "Série 2025", date: "2025", ville: "France", width: 1200, height: 2057 },
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

function GalleryModal({
  photos,
  onClose,
}: {
  photos: Photo[];
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selected !== null) setSelected(null);
        else onClose();
      }
      if (e.key === "ArrowRight" && selected !== null)
        setSelected((s) => (s! + 1) % photos.length);
      if (e.key === "ArrowLeft" && selected !== null)
        setSelected((s) => (s! - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, onClose, photos.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-noir/95 flex flex-col"
      onClick={() => selected !== null ? setSelected(null) : onClose()}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07] flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#787878]">
          {photos.length} photos
        </span>
        <button
          onClick={onClose}
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#787878] hover:text-blanc-casse transition-colors"
        >
          Fermer ✕
        </button>
      </div>

      {/* Grid */}
      <div
        className="flex-1 overflow-y-auto p-4 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="break-inside-avoid overflow-hidden rounded-sm cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl px-4 py-2"
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s! - 1 + photos.length) % photos.length); }}
            >‹</button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl px-4 py-2"
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s! + 1) % photos.length); }}
            >›</button>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-widest text-white/40">
              {selected + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface PhotographieProps {
  photos?: Photo[];
}

export default function Photographie({ photos = placeholderPhotos }: PhotographieProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const openGallery = useCallback(() => setGalleryOpen(true), []);

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
    <>
    <AnimatePresence>
      {galleryOpen && (
        <GalleryModal photos={photos} onClose={() => setGalleryOpen(false)} />
      )}
    </AnimatePresence>
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
            <button
              onClick={openGallery}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-fluo text-noir font-body font-semibold text-sm rounded-full hover:scale-105 transition-transform duration-200"
            >
              Voir plus →
            </button>
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
        <button
          onClick={openGallery}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-fluo text-noir font-body font-semibold text-sm rounded-full"
        >
          Voir plus →
        </button>
      </div>
    </section>
    </>
  );
}
