import { NextResponse } from 'next/server'
import { getCoursesData } from '@/src/lib/data'
import type { ApiResponse } from '@/types'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || undefined
    const search = searchParams.get('search') || undefined

    let courses = await getCoursesData(category)

    if (search) {
      const query = search.toLowerCase()
      courses = courses.filter(
        c => c.title.toLowerCase().includes(query) || c.description?.toLowerCase().includes(query)
      )
    }

    const response: ApiResponse = {
      success: true,
      data: courses,
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59'
      }
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to fetch courses',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
