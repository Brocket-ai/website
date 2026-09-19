import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy - Brocket",
  description: "What information Brocket processes, why, who we share it with, and the choices you have.",
}

const USER_DATA_POLICY = "https://developers.google.com/terms/api-services-user-data-policy"

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="September 19, 2026">
      <p>
        Brocket (&quot;Brocket&quot;, &quot;we&quot;, &quot;us&quot;) provides an AI analyst for finance teams: the web
        application at app.brocket.xyz, the Google Sheets add-on &quot;Brocket for Sheets&quot; and the website
        brocket.xyz (together, the &quot;Service&quot;). This policy explains what information we process, why, who we
        share it with and the choices you have. It applies to visitors of brocket.xyz and to the people who use
        Brocket through a customer organization.
      </p>
      <p>
        Questions about this policy, or requests about your information, go to{" "}
        <a href="mailto:privacy@brocket.xyz">privacy@brocket.xyz</a>.
      </p>
      <p>
        Brocket is a business-to-business service. Your organization decides which data sources to connect and who
        may access them. We process that business data on your organization&apos;s behalf and under its instructions;
        your organization remains responsible for that data and for having the right to share it with us.
      </p>

      <h2>Information we process</h2>
      <h3>Account information</h3>
      <p>
        Name, work email address, job title, role and organization. Sign-in is handled by AWS Cognito; we never see
        your password. Verification and multi-factor codes are sent to your email address.
      </p>
      <h3>Business data your organization connects</h3>
      <p>
        Files (CSV), Google Sheets shared with Brocket&apos;s service account (we download periodic snapshots) and
        databases (PostgreSQL, SQL Server, BigQuery), which Brocket accesses in read-only mode. We run queries on those
        sources to answer questions and keep the copies, snapshots and query results needed to do so. Connection
        credentials are stored encrypted and are never displayed again once saved.
      </p>
      <h3>Conversations and results</h3>
      <p>
        Your messages, the files you attach (CSV, PDF, images), the analyst&apos;s answers, and the tables, charts,
        exports, dashboards and presentations you create. We also keep the analyst&apos;s working record for each
        conversation (which tools it ran and what they returned) so it can continue where it left off.
      </p>
      <h3>Knowledge documents</h3>
      <p>
        Descriptions of each connected data source (what it contains, its structure, business rules) written by your
        organization&apos;s administrators with the help of Brocket&apos;s editor.
      </p>
      <h3>Product usage</h3>
      <p>
        Inside the application we use PostHog to record which screens you open and which actions you take, linked to
        your user, and to replay how you move through the screens with all text and inputs masked. This tells us
        which features are used and where people get stuck. On this website we use Vercel Analytics, which reports
        aggregate visits without cookies.
      </p>
      <h3>Contact form</h3>
      <p>
        If you book a demo we receive your name, email, company and message by email. Your IP address is used only to
        limit abuse of the form.
      </p>
      <h3>Google Sheets add-on</h3>
      <p>See the dedicated section below.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To provide the Service: answer your questions, run analyses and write to your spreadsheets when you ask.</li>
        <li>To keep your history and results available to you and to the people you share them with.</li>
        <li>To secure the Service, verify permissions and prevent abuse.</li>
        <li>To diagnose and fix errors.</li>
        <li>To understand how the product is used and improve it.</li>
        <li>To communicate with you: invitations, alerts (for example when a data source stops syncing) and support.</li>
      </ul>
      <p>We do not sell personal information and we do not use it for advertising.</p>

      <h2>Who we share it with</h2>
      <p>
        We rely on service providers that process information on our behalf, under agreements that limit them to
        providing their service to us:
      </p>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>What for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon Web Services (United States)</td>
            <td>Hosting, databases, file storage, encrypted secrets, sign-in and email delivery.</td>
          </tr>
          <tr>
            <td>AI model providers (currently Anthropic and Google)</td>
            <td>
              Generate the analyst&apos;s answers. They receive the conversation context needed to answer, which can
              include data from your sources and spreadsheets. Our agreements with these providers prohibit them from
              using your data to train their models, and we enable zero data retention where the provider offers it.
            </td>
          </tr>
          <tr>
            <td>PostHog</td>
            <td>Product usage analytics for the application.</td>
          </tr>
          <tr>
            <td>Monitoring tools</td>
            <td>Traces of the analyst&apos;s requests, used to diagnose failures and kept for 30 days.</td>
          </tr>
          <tr>
            <td>Vercel</td>
            <td>Hosting and aggregate analytics for this website.</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>Sheets, Drive, Apps Script and sign-in for the Google Sheets add-on.</td>
          </tr>
        </tbody>
      </table>
      <p>
        We may also disclose information when the law requires it, to protect the rights and safety of Brocket, our
        customers or others, and to a successor if Brocket is acquired or merged, in which case we will tell you
        beforehand.
      </p>

      <h2>Google user data and the Sheets add-on</h2>
      <p>
        Brocket for Sheets connects a Google Sheets spreadsheet with your Brocket account. When you connect it, we
        link your Google account (identifier and email) to your Brocket user and organization, and we check that the
        Google account authorizing the spreadsheet is the one using the panel.
      </p>
      <p>
        The add-on reads the identifier and name of the spreadsheet that is open and your current selection. To answer
        your requests it can read the ranges you authorize (values, formulas, formats) and write tables, formulas,
        formats and native charts. Brocket&apos;s access is limited to the spreadsheets you explicitly authorize
        through the Google file picker; we do not request access to your whole Drive.
      </p>
      <p>
        We keep a record of the changes the add-on makes (range, content written and previous values) to verify that
        a change was applied, detect conflicts with simultaneous edits and avoid repeating a change after an
        interruption. The Google credentials for your connection are stored encrypted on Brocket&apos;s servers; they
        are never written to cells or given to the AI model.
      </p>
      <p>
        We use the data we receive from Google only to provide and improve the add-on features you see and ask for.
        We do not use it for advertising, we do not sell it, and we do not use it to train AI models. Transfers to the
        providers listed above are limited to what is necessary to provide those features. Our staff do not read your
        Google user data except with your permission (for example, when you ask us for support), for security
        purposes, or where the law requires it.
      </p>
      <p>
        Brocket&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
        <a href={USER_DATA_POLICY} target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>,
        including the Limited Use requirements.
      </p>
      <p>
        <strong>Disconnect Brocket</strong> (More options in the panel) revokes the add-on&apos;s authorization for
        your Google account and deletes the credentials of that connection. It does not delete results already written
        to your spreadsheet or your conversation history. You can also review or revoke access from{" "}
        <a href="https://myaccount.google.com/connections" target="_blank" rel="noopener noreferrer">your Google account connections</a>.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>
          Account and business data: while your organization&apos;s account is active, plus 30 days for recovery
          after it ends, unless the law requires a longer period or you ask us to delete it sooner.
        </li>
        <li>Deleting a conversation removes it from the product and its working files immediately.</li>
        <li>Monitoring traces and application logs: 30 days.</li>
        <li>Backups are encrypted and expire within 30 days.</li>
      </ul>
      <p>
        You can ask us to delete your personal data, or your organization can ask us to delete all of its data, at any
        time by writing to privacy@brocket.xyz. We verify the request, complete it within 30 days and confirm when it
        is done.
      </p>

      <h2>Security</h2>
      <ul>
        <li>All traffic between your browser, the add-on, Brocket and Google is encrypted in transit (TLS).</li>
        <li>Databases, file storage and backups are encrypted at rest with keys managed in AWS.</li>
        <li>Credentials for your data sources and for Google are stored encrypted and are never exposed again.</li>
        <li>Access is limited by user, role and organization. Internal systems require multi-factor authentication.</li>
        <li>Brocket staff access customer data only when needed to operate the Service or resolve an issue.</li>
        <li>We maintain an incident response process and will notify affected customers without undue delay if their data is compromised.</li>
      </ul>

      <h2>Where your information is stored</h2>
      <p>
        Brocket runs on Amazon Web Services in the United States (Ohio region). The providers listed above may also
        process information in the United States. If you use the Service from another country, your information is
        transferred there and protected as described in this policy.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        The application stores your session and preferences in your browser and uses PostHog cookies and local storage
        for usage analytics. This website does not use tracking cookies.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct, delete or restrict the use of your personal data by writing to{" "}
        <a href="mailto:privacy@brocket.xyz">privacy@brocket.xyz</a>. We answer within 30 days. If your information
        was provided through your organization, we may refer your request to it. The Agencia de Acceso a la
        Información Pública (Argentina), as the supervisory authority under Law No. 25,326, receives complaints about
        breaches of personal data protection rules.
      </p>

      <h2>Children</h2>
      <p>Brocket is a business tool and is not directed to anyone under 18.</p>

      <h2>Changes to this policy</h2>
      <p>
        We will post any changes on this page and update the date above. If we materially change how we use data
        received from Google, we will update this policy and ask for your consent where required before applying the
        change.
      </p>
    </LegalPage>
  )
}
