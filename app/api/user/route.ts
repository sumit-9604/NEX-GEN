import { NextResponse } from 'next/server'
import { getUserProfileData } from '@/src/lib/data'
import type { ApiResponse } from '@/types'

export async function GET() {
  try {
    const user = await getUserProfileData()
    const response: ApiResponse = {
      success: true,
      data: user,
      timestamp: new Date().toISOString()
    }
    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to fetch user profile',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
