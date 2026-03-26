import React from 'react';
import { Check } from 'lucide-react';

const BADGES = [
  'ORDER MANAGEMENT',
  'INVENTORY VISIBILITY',
  'CLOUD BASED',
  'SINGLE NETWORK CONNECTION',
  'PARCEL',
  'SHIPMENT TRACKING',
  'WAREHOUSE OPTIMIZATION',
  'DATA ANALYTICS',
];

export default function ScrollingBadges() {
  return (
    <div className="w-full overflow-hidden py-10 border-t border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
      <div className="flex whitespace-nowrap animate-scroll hover:pause-on-hover">
        {[...BADGES, ...BADGES].map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-8 py-2 rounded-full border border-white/10 mx-4 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Check size={14} className="text-primary shrink-0" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-foreground/80">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
