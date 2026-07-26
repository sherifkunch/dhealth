"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageLightbox } from "./image-lightbox";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const photos = [product.image, ...(product.gallery ?? [])];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8">
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Увеличи снимката на ${product.name}`}
        className="group relative aspect-[3/4] w-full overflow-hidden bg-muted"
      >
        <Image
          src={photos[activeIndex]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
          <ZoomIn className="h-8 w-8 text-white" />
        </span>
      </button>
      {photos.length > 1 && (
        <div className="flex gap-2 border-t border-border p-3">
          {photos.map((photo, i) => (
            <button
              key={photo}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setLightboxOpen(true);
              }}
              aria-label={`Снимка ${i + 1} на ${product.name}`}
              aria-pressed={activeIndex === i}
              className={cn(
                "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted ring-2 transition",
                activeIndex === i ? "ring-primary" : "ring-transparent hover:ring-primary/40"
              )}
            >
              <Image src={photo} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
      {lightboxOpen && (
        <ImageLightbox
          photos={photos}
          alt={product.name}
          index={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActiveIndex}
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium tracking-wide text-primary uppercase">
          {product.category}
        </span>
        <h3 className="mt-1.5 text-base font-semibold tracking-tight">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold">€{product.priceEUR}</span>
          <Button
            render={<Link href={`/produkti?product=${product.id}#poracha`} />}
          >
            <ShoppingBag />
            Купи
          </Button>
        </div>
      </div>
    </div>
  );
}
