/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse request body
    const response = await axios.post(`${process.env.BACKEND_ENDPOINT_API_KEY}`, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${process.env.BACKEND_ENDPOINT_AUTHORIZATION_KEY}`,
 
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error("Error in proxy:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: error.response?.status || 500 });
  }
}
