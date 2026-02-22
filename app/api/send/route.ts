import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/email.template";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

const resendApiKey =
  process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getRecipients() {
  const raw =
    process.env.CONTACT_TO_EMAIL ??
    process.env.RESEND_TO_EMAIL ??
    process.env.CONTACT_RECIPIENTS ??
    "delivered@resend.dev";

  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Resend no está configurado. Define RESEND_API_KEY en variables de entorno.",
      },
      { status: 500 }
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Payload inválido." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Nombre, correo y mensaje son obligatorios." },
      { status: 400 }
    );
  }

  if (name.length > 120) {
    return NextResponse.json(
      { ok: false, message: "El nombre es demasiado largo." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "El correo electrónico no es válido." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { ok: false, message: "El mensaje es demasiado corto." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { ok: false, message: "El mensaje es demasiado largo." },
      { status: 400 }
    );
  }

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";
  const to = getRecipients();

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Nuevo mensaje de ${name} (${email})`,
      replyTo: email,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        {
          ok: false,
          message: "No se pudo enviar el correo.",
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Mensaje enviado correctamente.",
      id: data?.id ?? null,
    });
  } catch (error) {
    console.error("Contact send route error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Error interno al enviar el correo.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
