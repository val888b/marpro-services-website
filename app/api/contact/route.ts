import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  const data: ContactPayload = await request.json();

  if (!data.name || !data.phone || !data.email || !data.service) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("New proposal request:", data);

  return NextResponse.json({ ok: true });
}
