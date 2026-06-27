import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional().default(""),
  budget: z.string().trim().max(100).optional().default(""),
  project: z.string().trim().min(1, "Project is required").max(2000),
});

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdaIfrrfe_37jC9j2_nDz6CRoLvxoeMbEBaalquh-ByY6sGqg/formResponse";

const FIELD_MAP: Record<string, string> = {
  name: "entry.787549828",
  email: "entry.1556547072",
  company: "entry.1462695501",
  budget: "entry.1964170659",
  project: "entry.1657624370",
};

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const MAX_BYTES = 16 * 1024; // 16 KB
        let data: z.infer<typeof contactSchema>;
        try {
          const text = await request.text();
          if (text.length > MAX_BYTES) {
            return new Response("Payload too large", { status: 413 });
          }
          const raw = JSON.parse(text);
          const parsed = contactSchema.safeParse(raw);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ ok: false, errors: parsed.error.flatten().fieldErrors }),
              { status: 400, headers: { "content-type": "application/json" } },
            );
          }
          data = parsed.data;
        } catch {
          return new Response("Bad request", { status: 400 });
        }

        const params = new URLSearchParams();
        for (const [key, entryId] of Object.entries(FIELD_MAP)) {
          const value = (data as Record<string, string>)[key];
          if (value) params.append(entryId, value);
        }
        try {
          const res = await fetch(GOOGLE_FORM_ACTION, {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            body: params.toString(),
          });
          if (!res.ok && res.status !== 0) {
            console.error("[contact] google form non-ok", res.status);
          }
        } catch (e) {
          console.error("[contact] forward error", e);
          return new Response("Upstream error", { status: 502 });
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
