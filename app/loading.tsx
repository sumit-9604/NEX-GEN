import { GraduationCap } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F5F0] p-6">
      <div className="flex flex-col items-center gap-4">
        {/* Academic Brand Badge Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-[#D9E3DC] border-t-[#1B3B2B] rounded-full animate-spin" />
          <div className="absolute p-2.5 rounded-lg bg-[#1B3B2B] text-white shadow-sm">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-serif text-lg font-bold text-[#1C1D1B]">
            NexLearn
          </h3>
          <p className="font-sans text-xs text-[#5C6058] mt-0.5">
            Loading academic workspace...
          </p>
        </div>
      </div>
    </div>
  )
}