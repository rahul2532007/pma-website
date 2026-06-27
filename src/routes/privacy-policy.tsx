import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, ContactBlock } from "../components/site/LegalPage";

const UPDATED = "27 June 2026";
const URL = "https://pride-redesign-1.lovable.app/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pride Digital" },
      { name: "description", content: "How Pride Digital collects, uses, and protects personal data under India's DPDP Act 2023 and international privacy standards." },
      { property: "og:title", content: "Privacy Policy — Pride Digital" },
      { property: "og:description", content: "How Pride Digital handles your personal data." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Privacy Policy — Pride Digital" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        name: "Privacy Policy",
        url: URL,
        dateModified: "2026-06-27",
        publisher: { "@type": "Organization", name: "Pride Digital", url: "https://pridemarketing.co.in" },
      }),
    }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      marker="00"
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How we collect, use, store, and protect the personal data you share with Pride Digital."
      updated={UPDATED}
      sections={[
        {
          id: "introduction",
          title: "Introduction",
          body: (
            <>
              <p>
                Pride Digital ("Pride", "we", "us", or "our") respects your privacy
                and is committed to protecting your personal data. This Privacy
                Policy explains what information we collect when you interact with
                our website, services, and consultations, and how that information
                is used, stored, and disclosed.
              </p>
              <p>
                This policy is written in line with the Digital Personal Data
                Protection Act, 2023 (DPDP Act) of India and is broadly aligned
                with international privacy frameworks including the EU GDPR and
                the UK GDPR for our international clients.
              </p>
            </>
          ),
        },
        {
          id: "information-we-collect",
          title: "Information We Collect",
          body: (
            <>
              <p>We collect the following categories of information:</p>
              <h3>Information you provide</h3>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project details, briefs, references, and attachments</li>
              </ul>
              <h3>Information collected automatically</h3>
              <ul>
                <li>Website usage data (pages viewed, time on page, referrers)</li>
                <li>Device and browser information</li>
                <li>Approximate location derived from IP address</li>
                <li>Cookies and similar technologies</li>
                <li>Analytics events</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use",
          title: "How We Use Your Information",
          body: (
            <>
              <ul>
                <li>To respond to enquiries and schedule consultations</li>
                <li>To prepare proposals, quotations, and statements of work</li>
                <li>To deliver, support, and improve the services you engage us for</li>
                <li>To send service-related communication and project updates</li>
                <li>To send occasional studio updates where you have opted in</li>
                <li>To comply with legal, tax, and accounting obligations</li>
                <li>To detect and prevent fraud, abuse, and security incidents</li>
              </ul>
            </>
          ),
        },
        {
          id: "legal-basis",
          title: "Legal Basis for Processing",
          body: (
            <>
              <p>
                We process personal data on one or more of the following legal
                bases: your consent, the performance of a contract with you,
                compliance with a legal obligation, and our legitimate interests
                in operating and improving the studio (where those interests are
                not overridden by your rights).
              </p>
            </>
          ),
        },
        {
          id: "retention",
          title: "Data Retention",
          body: (
            <>
              <p>
                We retain personal data only for as long as is necessary for the
                purposes for which it was collected, including to satisfy legal,
                accounting, or reporting requirements. Enquiry data is typically
                retained for up to 24 months after last contact. Engagement
                records and invoices are retained for the period required by
                Indian tax and corporate law.
              </p>
            </>
          ),
        },
        {
          id: "security",
          title: "Data Security",
          body: (
            <>
              <p>
                We use industry-standard technical and organisational measures to
                protect your data, including encryption in transit, access
                controls, principle-of-least-privilege for team members, and
                reputable hosting and infrastructure providers. No method of
                transmission over the internet is fully secure, and we cannot
                guarantee absolute security.
              </p>
            </>
          ),
        },
        {
          id: "third-parties",
          title: "Third-party Services",
          body: (
            <>
              <p>
                We share limited personal data with carefully selected service
                providers who process it on our behalf and under contract:
              </p>
              <h3>Google Analytics</h3>
              <p>
                We use Google Analytics to understand aggregated, anonymised
                website usage. IP anonymisation is enabled where supported.
              </p>
              <h3>Hosting providers</h3>
              <p>
                Our website and project infrastructure are hosted with
                reputable cloud providers operating data centres in India and
                abroad.
              </p>
              <h3>Contact forms</h3>
              <p>
                Form submissions are routed through our website backend and
                stored in our project management system to allow our team to
                respond.
              </p>
              <h3>Email communication</h3>
              <p>
                We use established email providers to send and receive
                transactional and project-related email.
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "Cookies Policy",
          body: (
            <>
              <p>
                We use a small number of cookies and similar technologies to
                operate the website (essential cookies), remember preferences,
                and measure aggregate traffic (analytics cookies). You can
                control cookies through your browser settings; disabling certain
                cookies may affect site functionality.
              </p>
            </>
          ),
        },
        {
          id: "rights",
          title: "Your Rights under the DPDP Act",
          body: (
            <>
              <p>Subject to applicable law, you have the right to:</p>
              <ul>
                <li>Access a summary of personal data we hold about you</li>
                <li>Correct inaccurate or incomplete personal data</li>
                <li>Erase personal data where it is no longer needed</li>
                <li>Withdraw consent previously given</li>
                <li>Nominate another person to exercise your rights in the event of incapacity or death</li>
                <li>Grieve and seek redressal through our Grievance Officer</li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details at
                the end of this policy. We will respond within the timelines
                prescribed by law.
              </p>
            </>
          ),
        },
        {
          id: "international",
          title: "International Clients",
          body: (
            <>
              <p>
                We work with clients in the United States, United Kingdom, UAE,
                Canada, France, Singapore, and elsewhere. Where we process the
                personal data of individuals outside India, we apply protections
                consistent with applicable local law, including the EU GDPR and
                the UK GDPR where relevant, and use appropriate cross-border
                transfer safeguards.
              </p>
            </>
          ),
        },
        {
          id: "children",
          title: "Children's Privacy",
          body: (
            <>
              <p>
                Our services are intended for businesses and adult professionals.
                We do not knowingly collect personal data from children. If you
                believe a child has provided us with personal data, please
                contact us and we will delete it.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          title: "Changes to this Policy",
          body: (
            <>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in law, technology, or our practices. Material changes
                will be highlighted on this page with an updated "Last updated"
                date.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          title: "Contact Information",
          body: (
            <>
              <p>
                For any questions, requests, or grievances regarding this Privacy
                Policy or your personal data, please contact our Grievance
                Officer:
              </p>
              <ContactBlock />
            </>
          ),
        },
      ]}
    />
  );
}
