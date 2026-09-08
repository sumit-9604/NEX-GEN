'use client'

import { useEffect } from 'react'
import { RefreshCw, AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F5F0] p-6">
      <div className="bg-white rounded-xl p-8 text-center max-w-md border border-[#E5E2D9] shadow-sm">
        <div className="w-12 h-12 rounded-lg bg-[#FDF6F3] border border-[#FBEBE5] text-[#C85A32] flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-[#1C1D1B] mb-2">
          Unable to Load Session
        </h2>

        <p className="font-sans text-xs text-[#5C6058] mb-6 leading-relaxed">
          {error.message || 'An unexpected error occurred while loading this page.'}
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1B3B2B] hover:bg-[#153023] text-white text-xs font-bold transition-all shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  )
}