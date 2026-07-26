"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  photos: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({ photos, alt, index, onClose, onNavigate }: ImageLightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [index, photos.length, onClose, onNavigate]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Затвори"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + photos.length) % photos.length);
          }}
          aria-label="Предишна снимка"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      <div className="relative h-full max-h-[85vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Image src={photos[index]} alt={alt} fill className="object-contain" sizes="100vw" />
      </div>

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % photos.length);
          }}
          aria-label="Следваща снимка"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>,
    document.body
  );
}
