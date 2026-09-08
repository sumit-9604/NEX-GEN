import { NextResponse } from 'next/server'
import { getMessagesData } from '@/src/lib/data'
import type { ApiResponse } from '@/types'

export async function GET() {
  try {
    const messages = await getMessagesData()
    const response: ApiResponse = {
      success: true,
      data: messages,
      timestamp: new Date().toISOString()
    }
    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to fetch messages',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
