import { useState, useRef, useEffect, useCallback } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface Realization {
  imageBefore: string;
  imageAfter: string;
  gallery?: string[];
  title: string;
  description: string;
  problematic: string;
  tasks: string[];
}

interface RealizationsProps {
  realizations: Realization[];
}

import { X, ChevronLeft as Left, ChevronRight as Right, Maximize2 } from 'lucide-react';

function Lightbox({ images, isOpen, onClose }: { images: string[]; isOpen: boolean; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, images.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
      >
        <X className="w-8 h-8" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-[110]"
      >
        <Left className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-5xl aspect-video px-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <ImageWithFallback
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        />
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button 
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-[110]"
      >
        <Right className="w-8 h-8" />
      </button>
    </div>
  );
}

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos((x / rect.width) * 100);
    }
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isResizing) handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isResizing) handleMove(e.touches[0].clientX);
    };
    const onEnd = () => setIsResizing(false);

    if (isResizing) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isResizing, handleMove]);

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg group select-none ${isResizing ? 'cursor-ew-resize' : 'cursor-pointer'}`}
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
    >
      {/* After Image (Background) */}
      <ImageWithFallback
        src={after}
        alt={`${title} - Après`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Before Image (Foreground with Clip) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <ImageWithFallback
          src={before}
          alt={`${title} - Avant`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Avant
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-brand-blue/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none">
        Après
      </div>

      {/* Slider Handle Bar */}
      <div 
        className={`absolute inset-y-0 w-1 bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none transition-opacity ${isResizing ? 'opacity-100' : 'group-hover:opacity-100'}`}
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle Button (Centered) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-white">
          <div className="flex items-center gap-0.5 text-brand-dark">
            <ChevronLeft className="w-4 h-4 -mr-1" />
            <ChevronRight className="w-4 h-4 -ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Realizations({ realizations }: RealizationsProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);

  return (
    <section className="py-16 md:py-24 bg-brand-dark-light/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Nos réalisations
          </h2>
          <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-brand-dark-muted max-w-3xl mx-auto">
            Découvrez la transformation de nos chantiers. Nous relevons des défis techniques complexes pour garantir la sécurité et la performance de vos installations.
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-24">
          {realizations.map((realization, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-3/5">
                <BeforeAfterSlider 
                  before={realization.imageBefore} 
                  after={realization.imageAfter} 
                  title={realization.title}
                />
              </div>
              
              <div className="w-full lg:w-2/5 space-y-6">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue-light text-brand-blue text-sm font-semibold mb-4">
                    Projet {index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                    {realization.title}
                  </h3>
                  <p className="text-brand-dark-muted text-lg leading-relaxed mb-6">
                    {realization.description}
                  </p>
                </div>

                <div className="bg-brand-dark-light border-l-4 border-brand-dark-muted p-5 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-brand-dark-muted shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">Problématique initiale</h4>
                      <p className="text-brand-dark-muted text-sm italic">
                        "{realization.problematic}"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-brand-dark flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    Travaux réalisés
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-3">
                    {realization.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-1.5 group">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                        <span className="text-brand-dark-muted text-sm leading-relaxed">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {realization.gallery && realization.gallery.length > 0 && (
                  <div className="pt-4 border-t border-brand-dark-light">
                    <h4 className="text-sm font-bold text-brand-dark-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                       Voir plus
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {realization.gallery.slice(0, 3).map((img, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedGallery(realization.gallery || []);
                            setIsLightboxOpen(true);
                          }}
                          className="relative w-16 h-16 rounded-lg overflow-hidden group/thumb border-2 border-transparent hover:border-brand-blue transition-all shadow-sm"
                        >
                          <ImageWithFallback
                            src={img}
                            alt="Thumbnail"
                            className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                          />
                          {i === 2 && realization.gallery.length > 3 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs font-bold">
                              +{realization.gallery.length - 3}
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 flex items-center justify-center transition-colors">
                            <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover/thumb:opacity-100 scale-50 group-hover/thumb:scale-100 transition-all" />
                          </div>
                        </button>
                      ))}
                      <button 
                        onClick={() => {
                          setSelectedGallery(realization.gallery || []);
                          setIsLightboxOpen(true);
                        }}
                        className="text-xs font-bold text-brand-blue hover:text-brand-blue/80 flex items-center gap-1 mt-auto pb-1"
                      >
                        Voir toute la galerie
                        <Right className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}

                <a 
                  href="#contact"
                  className="inline-block w-full sm:w-auto px-8 py-3 bg-brand-dark hover:bg-brand-gray text-white text-center font-bold rounded-lg transition-colors shadow-lg shadow-brand-dark/10"
                >
                  Besoin d'un projet similaire ?
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Lightbox 
        images={selectedGallery}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}

