import { SquareParking } from "lucide-react";

// Friendly sign-off before the footer, on the same yellow treatment as the
// new-patient card.
export default function ParkingNote() {
  return (
    <section data-testid="parking-note" className="pb-14 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative mx-auto max-w-3xl rounded-[32px] bg-gradient-to-br from-[#FDD663] via-[#F4C20D] to-[#E8A800] text-[#0A192F] overflow-hidden shadow-[0_35px_80px_-30px_rgba(232,168,0,0.65)] px-8 py-10 md:px-14 md:py-12 text-center">
          {/* Ambient light */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-16 w-[300px] h-[300px] rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-28 -right-16 w-[320px] h-[320px] rounded-full bg-[#B06000]/25 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mx-auto w-13 h-13 md:w-14 md:h-14 rounded-2xl bg-white text-[#0F9D58] shadow-[0_14px_30px_-10px_rgba(122,80,0,0.45)] flex items-center justify-center">
              <SquareParking className="w-7 h-7" strokeWidth={2} />
            </div>
            <div className="mt-5 text-[24px] md:text-[30px] font-semibold uppercase tracking-wide">
              Free parking, right outside
            </div>
            <p className="mt-2.5 text-[14.5px] md:text-[15px] text-[#0A192F]/75 max-w-md mx-auto font-medium">
              Free surface parking and elevator access at 10220 Derry Rd. No meters, no validation, no circling the block.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
