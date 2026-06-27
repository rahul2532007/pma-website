import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, ContactBlock } from "../components/site/LegalPage";

const UPDATED = "27 June 2026";
const URL = "https://pride-redesign-1.lovable.app/terms-and-conditions";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Pride Digital" },
      { name: "description", content: "The terms that govern engagements, deliverables, payment, and ownership for projects with Pride Digital." },
      { property: "og:title", content: "Terms & Conditions — Pride Digital" },
      { property: "og:description", content: "Engagement terms for Pride Digital projects." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms & Conditions — Pride Digital" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      marker="00"
      eyebrow="Legal"
      title="Terms & Conditions"
      lede="The terms that govern your engagement with Pride Digital — covering scope, payment, ownership, and liability."
      updated={UPDATED}
      sections={[
        {
          id: "acceptance",
          title: "Acceptance of Terms",
          body: (
            <p>
              By engaging Pride Digital ("Pride", "we", "us") for any service, or
              by using this website, you agree to be bound by these Terms &
              Conditions. If you do not agree, please do not use our services.
              These terms operate alongside any signed Statement of Work (SOW)
              or proposal; where a signed document conflicts with these terms,
              the signed document prevails.
            </p>
          ),
        },
        {
          id: "services",
          title: "Services",
          body: (
            <>
              <p>Pride Digital offers, among other things:</p>
              <ul>
                <li>Website Development</li>
                <li>Portfolio Websites</li>
                <li>Landing Pages</li>
                <li>E-commerce Development</li>
                <li>Web Applications</li>
                <li>Custom Software Development</li>
                <li>UI/UX Design</li>
                <li>Maintenance and support retainers</li>
              </ul>
              <p>
                Specific deliverables, milestones, and acceptance criteria are
                defined in the proposal or SOW for each engagement.
              </p>
            </>
          ),
        },
        {
          id: "quotations",
          title: "Quotations",
          body: (
            <p>
              Quotations are valid for thirty (30) days from the date of issue
              unless otherwise stated. Pricing is based on the scope described
              in the proposal; changes to scope may result in revised pricing,
              communicated in writing before additional work is performed.
            </p>
          ),
        },
        {
          id: "timelines",
          title: "Project Timelines",
          body: (
            <p>
              Estimated timelines are provided in good faith and depend on
              timely receipt of content, feedback, and approvals from the
              client. Delays caused by the client or by third parties may
              extend timelines proportionally without penalty to Pride.
            </p>
          ),
        },
        {
          id: "client-responsibilities",
          title: "Client Responsibilities",
          body: (
            <>
              <p>The client agrees to:</p>
              <ul>
                <li>Provide accurate briefs, content, brand assets, and access credentials</li>
                <li>Nominate a single point of contact with authority to approve work</li>
                <li>Review and respond to feedback requests within agreed turnaround windows</li>
                <li>Ensure all content supplied is lawful and properly licensed</li>
              </ul>
            </>
          ),
        },
        {
          id: "intellectual-property",
          title: "Intellectual Property",
          body: (
            <>
              <h3>Website and content ownership</h3>
              <p>
                On full payment of all invoices for an engagement, ownership of
                the final delivered website, design files, source code, and
                content created specifically for the client transfers to the
                client, unless otherwise agreed in writing.
              </p>
              <p>
                Pride retains ownership of pre-existing tools, libraries,
                frameworks, internal utilities, and design systems used during
                the engagement, and grants the client a perpetual, non-exclusive
                licence to use them as embedded in the deliverables. Pride
                reserves the right to display non-confidential work in its
                portfolio and marketing materials.
              </p>
            </>
          ),
        },
        {
          id: "revisions",
          title: "Revisions",
          body: (
            <p>
              Each project includes the number of revision rounds specified in
              the proposal. Additional revisions, or changes that materially
              alter the agreed direction, will be quoted separately as a change
              request.
            </p>
          ),
        },
        {
          id: "payment-terms",
          title: "Payment Terms",
          body: (
            <p>
              Unless otherwise agreed, projects require an advance of fifty
              percent (50%) on commencement, with the balance payable on or
              before final delivery. Larger engagements may be milestone-billed.
              Invoices are payable within seven (7) days of issue. Indian
              clients are billed in INR and applicable GST will be added;
              international clients are billed in USD or another agreed
              currency.
            </p>
          ),
        },
        {
          id: "delayed-payments",
          title: "Delayed Payments",
          body: (
            <p>
              Overdue invoices may attract interest at one and a half percent
              (1.5%) per month or the maximum permitted by law, whichever is
              lower, calculated from the original due date.
            </p>
          ),
        },
        {
          id: "suspension",
          title: "Suspension of Services",
          body: (
            <p>
              Pride reserves the right to pause work, withhold deliverables,
              and suspend access to staging environments if invoices remain
              unpaid beyond fifteen (15) days from the due date. Suspension
              does not waive amounts owed and may extend project timelines.
            </p>
          ),
        },
        {
          id: "confidentiality",
          title: "Confidentiality",
          body: (
            <p>
              Both parties agree to keep confidential any non-public business,
              technical, or commercial information disclosed during the
              engagement, and to use it only for the purpose of performing
              under these terms. On request after project completion, each
              party will return or destroy the other's confidential materials.
            </p>
          ),
        },
        {
          id: "third-party",
          title: "Third-party Integrations",
          body: (
            <p>
              Projects often rely on third-party platforms, APIs, plugins, and
              services (for example payment gateways, analytics, email
              providers, CMS platforms). Pride is not responsible for the
              availability, accuracy, security, or pricing changes of such
              third parties, but will exercise reasonable care in selecting
              and integrating them.
            </p>
          ),
        },
        {
          id: "liability",
          title: "Limitation of Liability",
          body: (
            <p>
              To the maximum extent permitted by law, Pride's aggregate
              liability arising out of or relating to any engagement shall not
              exceed the total fees paid by the client to Pride under the
              specific engagement giving rise to the claim. Pride shall not be
              liable for any indirect, incidental, consequential, special, or
              exemplary damages, including lost profits, lost revenue, or loss
              of goodwill.
            </p>
          ),
        },
        {
          id: "indemnification",
          title: "Indemnification",
          body: (
            <p>
              The client agrees to indemnify and hold harmless Pride Digital,
              its directors, employees, and contractors from any claims,
              damages, or expenses arising out of content supplied by the
              client, the client's use of the deliverables, or the client's
              breach of these terms.
            </p>
          ),
        },
        {
          id: "governing-law",
          title: "Governing Law",
          body: (
            <p>
              These terms are governed by the laws of India. The courts at
              Jabalpur, Madhya Pradesh shall have exclusive jurisdiction over
              any dispute arising out of or in connection with these terms,
              subject to any binding arbitration agreement entered into between
              the parties.
            </p>
          ),
        },
        {
          id: "termination",
          title: "Termination",
          body: (
            <p>
              Either party may terminate an engagement for material breach with
              fifteen (15) days' written notice if the breach is not cured. On
              termination, the client shall pay for all work performed up to
              the date of termination, including time and out-of-pocket
              expenses. Deliverables for which payment has not been received
              remain the property of Pride.
            </p>
          ),
        },
        {
          id: "force-majeure",
          title: "Force Majeure",
          body: (
            <p>
              Neither party is liable for delay or failure to perform caused by
              events beyond reasonable control, including acts of God,
              government action, war, civil unrest, internet or
              telecommunication failures, pandemics, or natural disasters.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact Information",
          body: (
            <>
              <p>For any questions about these Terms & Conditions, contact:</p>
              <ContactBlock />
            </>
          ),
        },
      ]}
    />
  );
}
