import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    // For now, just log the email and return success
    // In production, you would save this to a database or email service
    console.log("Newsletter subscription:", email)

    // You could integrate with services like:
    // - Mailchimp API
    // - SendGrid API
    // - Supabase
    // - Firebase
    // - Or any other email marketing service

    return NextResponse.json({
      success: true,
      message: "Você foi inscrito com sucesso!",
    })
  } catch (error) {
    console.error("Newsletter API Error:", error)
    return NextResponse.json(
      { error: "Erro ao processar inscrição" },
      { status: 500 }
    )
  }
}
