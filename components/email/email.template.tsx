import * as React from "react";

export type ContactEmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

function formatSubmittedAt(date: Date) {
  try {
    return new Intl.DateTimeFormat("es-ES", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  } catch {
    return date.toISOString();
  }
}

export function EmailTemplate({
  name,
  email,
  message,
}: ContactEmailTemplateProps) {
  const submittedAt = formatSubmittedAt(new Date());

  return (
    <div
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#060a16",
        color: "#e8eefc",
        padding: "28px 16px",
      }}
    >
      <span
        style={{
          display: "none",
          overflow: "hidden",
          lineHeight: 0,
          opacity: 0,
          maxHeight: 0,
          maxWidth: 0,
        }}
      >
        Nuevo mensaje de {name} desde el formulario de contacto de Wilfredo Dev.
      </span>

      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          backgroundColor: "#081028",
          border: "1px solid rgba(148, 163, 184, 0.18)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 18px 48px rgba(3, 8, 26, 0.45)",
        }}
      >
        <div
          style={{
            height: "4px",
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.9), rgba(147,197,253,0.95), rgba(59,130,246,0.15))",
          }}
        />

        <div style={{ padding: "24px" }}>
          <div style={{ marginBottom: "18px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 10px",
                borderRadius: "999px",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(191,219,254,0.95)",
                backgroundColor: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(96,165,250,0.25)",
              }}
            >
              Nuevo contacto desde el portfolio
            </div>

            <h1
              style={{
                margin: "14px 0 6px",
                fontSize: "24px",
                lineHeight: 1.2,
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
              {name}
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "rgba(226,232,240,0.86)",
              }}
            >
              Contacto recibido desde <strong>wilfredodev.com</strong>
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(148,163,184,0.16)",
              backgroundColor: "rgba(255,255,255,0.02)",
              borderRadius: "14px",
              padding: "14px",
              marginBottom: "16px",
            }}
          >
            <table
              role="presentation"
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse" }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "0 0 10px",
                      fontSize: "12px",
                      color: "rgba(148,163,184,0.9)",
                      width: "96px",
                      verticalAlign: "top",
                    }}
                  >
                    Email
                  </td>
                  <td style={{ padding: "0 0 10px", fontSize: "14px" }}>
                    <a
                      href={`mailto:${email}`}
                      style={{ color: "#93c5fd", textDecoration: "none" }}
                    >
                      {email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "0 0 10px",
                      fontSize: "12px",
                      color: "rgba(148,163,184,0.9)",
                      width: "96px",
                      verticalAlign: "top",
                    }}
                  >
                    Recibido
                  </td>
                  <td
                    style={{
                      padding: "0 0 10px",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {submittedAt}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 0,
                      fontSize: "12px",
                      color: "rgba(148,163,184,0.9)",
                      width: "96px",
                      verticalAlign: "top",
                    }}
                  >
                    Responder
                  </td>
                  <td style={{ padding: 0 }}>
                    <a
                      href={`mailto:${email}`}
                      style={{
                        display: "inline-block",
                        padding: "9px 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#ffffff",
                        backgroundColor: "rgba(29,78,216,0.9)",
                        textDecoration: "none",
                        border: "1px solid rgba(147,197,253,0.35)",
                      }}
                    >
                      Responder a {name}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
              padding: "16px",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(191,219,254,0.8)",
              }}
            >
              Mensaje
            </p>

            <div
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.94)",
                fontSize: "14px",
                margin: 0,
              }}
            >
              {message}
            </div>
          </div>

          <div
            style={{
              marginTop: "18px",
              paddingTop: "14px",
              borderTop: "1px solid rgba(148,163,184,0.12)",
              fontSize: "12px",
              color: "rgba(148,163,184,0.88)",
              lineHeight: 1.5,
            }}
          >
            Este correo fue enviado automáticamente desde el formulario de
            contacto de <strong style={{ color: "#e2e8f0" }}>Wilfredo Dev</strong>.
            Puedes responder directamente a este email para contactar al remitente.
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "640px",
          margin: "12px auto 0",
          textAlign: "center",
          fontSize: "11px",
          color: "rgba(148,163,184,0.75)",
        }}
      >
        Wilfredo Dev · Portfolio Contact
      </div>
    </div>
  );
}
