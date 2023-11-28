//https://nextjs.org/docs/app/api-reference/functions/revalidatePath

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  revalidatePath("/", "layout");
  return Response.json({ revalidated: true, now: Date.now() });
}
