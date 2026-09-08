import { NextResponse } from 'next/server'
import { getScheduleData } from '@/src/lib/data'
import type { ApiResponse } from '@/types'

export async function GET() {
  try {
    const schedule = await getScheduleData()
    const response: ApiResponse = {
      success: true,
      data: schedule,
      timestamp: new Date().toISOString()
    }
    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to fetch schedule',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
