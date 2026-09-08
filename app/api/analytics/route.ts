import { NextResponse } from 'next/server'
import { getActivityData, getStatsData } from '@/src/lib/data'
import type { ApiResponse } from '@/types'

export async function GET() {
  try {
    const [activity, stats] = await Promise.all([getActivityData(), getStatsData()])

    const response: ApiResponse = {
      success: true,
      data: { activity, stats },
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to fetch analytics',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
