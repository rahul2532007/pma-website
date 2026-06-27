import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, ContactBlock } from "../components/site/LegalPage";

const UPDATED = "27 June 2026";
const URL = "https://pride-redesign-1.lovable.app/refund-policy";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Pride Digital" },
      {
        name: "description",
        content:
          "How cancellations, refunds, and chargebacks are handled for Pride Digital projects and retainers.",
      },
      { property: "og:title", content: "Refund & Cancellation Policy — Pride Digital" },
      { property: "og:description", content: "Cancellation and refund terms for Pride Digital." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Refund & Cancellation Policy — Pride Digital" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalPage
      marker="00"
      eyebrow="Legal"
      title="Refund & Cancellation Policy"
      lede="How we handle cancellations and refunds for custom digital services delivered to clients in India and abroad."
      updated={UPDATED}
      sections={[
        {
          id: "introduction",
          title: "Introduction",
          body: (
            <>
              <p>
                Pride Digital provides custom, made-to-order digital services including design,
                development, and software engineering. Because each engagement is bespoke and
                time-bound, our refund and cancellation terms reflect the nature of professional
                services rather than off-the-shelf goods.
              </p>
              <p>
                This policy supplements our <a href="/terms-and-conditions">Terms & Conditions</a>{" "}
                and any signed Statement of Work.
              </p>
            </>
          ),
        },
        {
          id: "cancellation",
          title: "Project Cancellation",
          body: (
            <>
              <h3>Before work begins</h3>
              <p>
                If you cancel before any work has commenced (for example, before kick-off), you are
                eligible for a refund of the advance, less a non-refundable administration fee of
                ten percent (10%) covering onboarding, planning, and payment processing costs.
              </p>
              <h3>During the design phase</h3>
              <p>
                If you cancel after design work has begun but before development, you remain liable
                for the design effort completed to date. Any remaining balance from the advance will
                be refunded.
              </p>
              <h3>During the development phase</h3>
              <p>
                Once development has commenced, the advance is non-refundable. You will be invoiced
                for any additional work completed beyond the advance, and you may receive the
                work-in-progress assets on payment of those amounts.
              </p>
              <h3>Completed projects</h3>
              <p>
                Projects that have been delivered and accepted (or deemed accepted under the terms
                of the SOW) are not eligible for a refund.
              </p>
            </>
          ),
        },
        {
          id: "eligibility",
          title: "Refund Eligibility",
          body: (
            <p>
              Refund requests are evaluated case-by-case against the work completed, the milestones
              invoiced, and the cause for cancellation. Approved refunds are processed to the
              original payment method within seven to fourteen (7–14) business days of approval.
              Bank processing times may add to this window.
            </p>
          ),
        },
        {
          id: "non-refundable",
          title: "Non-refundable Services",
          body: (
            <>
              <p>The following are non-refundable in all cases:</p>
              <ul>
                <li>
                  <strong>Custom development</strong> — Time spent on bespoke design or code, once
                  delivered.
                </li>
                <li>
                  <strong>Domain registration</strong> — Domain fees paid to registrars on your
                  behalf.
                </li>
                <li>
                  <strong>Hosting</strong> — Pre-paid hosting fees paid to third-party providers.
                </li>
                <li>
                  <strong>Third-party licences</strong> — Plugins, themes, fonts, stock media, and
                  SaaS subscriptions purchased on your behalf.
                </li>
                <li>
                  <strong>Consultation fees</strong> — Paid strategy or consulting sessions that
                  have been delivered.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "change-requests",
          title: "Change Requests",
          body: (
            <p>
              Approved change requests are billed in addition to the original SOW and are
              non-refundable once the corresponding work has been performed.
            </p>
          ),
        },
        {
          id: "delays",
          title: "Delivery Delays",
          body: (
            <p>
              Delays caused solely and demonstrably by Pride that materially affect the project's
              purpose may, at our discretion, entitle the client to service credits or a partial
              refund of fees attributable to the delayed work. Delays caused by the client,
              third-party providers, or events of force majeure are not eligible for a refund.
            </p>
          ),
        },
        {
          id: "exceptional",
          title: "Exceptional Circumstances",
          body: (
            <p>
              In the event of serious illness, bereavement, or comparable hardship affecting the
              client or our team, both parties will work in good faith to pause, restructure, or
              amicably close out the engagement.
            </p>
          ),
        },
        {
          id: "chargebacks",
          title: "Chargebacks",
          body: (
            <p>
              Please contact us before initiating a chargeback. Unjustified chargebacks waste time
              for both parties and may be contested with the payment processor using project
              records, written communications, and delivery evidence. We reserve the right to
              suspend services and recover associated costs.
            </p>
          ),
        },
        {
          id: "how-to-request",
          title: "How to Request a Cancellation",
          body: (
            <p>
              Cancellation and refund requests must be submitted in writing by email to{" "}
              <a href="mailto:contact@pridemarketing.co.in">contact@pridemarketing.co.in</a> with
              your project name, invoice references, and a brief reason. We will acknowledge within
              two (2) business days and respond with a decision within seven (7) business days.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact Information",
          body: (
            <>
              <p>For refund or cancellation questions, contact:</p>
              <ContactBlock />
            </>
          ),
        },
      ]}
    />
  );
}
