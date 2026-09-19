import type { Metadata } from "next"
import { LegalPage, Pending } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy - Brocket",
  description: "What information Brocket processes, why, who we share it with, and the choices you have.",
}

const USER_DATA_POLICY = "https://developers.google.com/terms/api-services-user-data-policy"

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="September 18, 2026">
      <p>
        Brocket (&quot;Brocket&quot;, &quot;we&quot;) provides an AI analyst for finance teams: the web application at
        app.brocket.xyz, the Google Sheets add-on &quot;Brocket for Sheets&quot;, and this website. This policy explains
        what information we process, why, who we share it with, and the choices you have. It applies to visitors of
        brocket.xyz and to the people who use Brocket through a customer company.
      </p>

      <h2>Who is responsible</h2>
      <p>
        Brocket is operated by <Pending>legal entity or individual responsible, with address</Pending>. For any question
        about privacy, or to exercise your rights, write to <a href="mailto:privacy@brocket.xyz">privacy@brocket.xyz</a>.
      </p>
      <p>
        Brocket is a business service. Your company decides which data sources to connect and who can access them.
        Brocket processes that business data on your company&apos;s behalf and under its instructions, and your company
        remains responsible for it.
      </p>

      <h2>Information we process</h2>
      <h3>Your account</h3>
      <p>
        Name, email address, job title, role and company. Passwords are managed by AWS Cognito; Brocket never sees
        them. Verification and multi-factor codes are sent to your email address.
      </p>
      <h3>Business data your company connects</h3>
      <p>
        Files (CSV), Google Sheets shared with Brocket&apos;s service account (we download periodic snapshots),
        databases (PostgreSQL, SQL Server, BigQuery), and supplier invoices from a connected invoice processor.
        Brocket runs queries on those sources to answer questions, and stores the copies, snapshots and query results
        needed to do so. Connection credentials are stored encrypted and are never shown again after they are saved.
      </p>
      <h3>Conversations and results</h3>
      <p>
        Your messages, the files you attach (CSV, PDF, images), the analyst&apos;s answers, and the tables, charts,
        exports, dashboards and presentations you create. We also keep the analyst&apos;s working record for each
        conversation (which tools it ran and what they returned) so it can pick up where it left off.
      </p>
      <h3>Knowledge documents</h3>
      <p>
        Descriptions of each data source (what it contains, its structure, business rules) written by your
        company&apos;s administrators with the help of Brocket&apos;s editor.
      </p>
      <h3>Product usage</h3>
      <p>
        Inside the application we use PostHog to record which screens you open and which actions you take, linked to
        your user (name, email, job title, company and role), and can record how you move through the screens
        (session replays) with all text and inputs masked. This tells us which features are used and where people
        get stuck. On this website we use Vercel Analytics, which reports aggregate visits without cookies.
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
        <li>To provide the service: answer your questions, run analyses, and write to your spreadsheets when you ask.</li>
        <li>To keep your history and results available to you and to the people you share them with.</li>
        <li>To secure the service, verify permissions and prevent abuse.</li>
        <li>To diagnose and fix errors.</li>
        <li>To understand how the product is used and improve it.</li>
        <li>To communicate with you: invitations, alerts (for example when a data source stops syncing) and support.</li>
      </ul>
      <p>We do not use your information for advertising and we do not sell it.</p>

      <h2>Who we share it with</h2>
      <p>We rely on providers that process data on our behalf, only to the extent needed to provide the service:</p>
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
            <td>Google (Gemini), Anthropic (Claude), OpenAI</td>
            <td>
              AI models that generate the analyst&apos;s answers. They receive the conversation context needed to
              answer, which can include data from your sources and spreadsheets.{" "}
              <Pending>confirm that each production API key is on terms that exclude training on customer data</Pending>
            </td>
          </tr>
          <tr>
            <td>LangSmith (LangChain)</td>
            <td>
              Execution traces of the analyst, used to diagnose failures. Traces can include questions, answers and
              data returned by tools.{" "}
              <Pending>decide whether tracing stays on for the Sheets add-on, and under which conditions the team reads traces</Pending>
            </td>
          </tr>
          <tr>
            <td>PostHog</td>
            <td>Product usage analytics for the application.</td>
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
        We may also disclose information when the law requires it, and to a successor if Brocket is acquired or
        merged, in which case we will tell you beforehand.
      </p>

      <h2>Google user data and the Sheets add-on</h2>
      <p>
        Brocket for Sheets connects a Google Sheets spreadsheet with your Brocket account. When you connect it, we
        link your Google account (identifier and email) to your Brocket user and company, and we check that the Google
        account authorizing the spreadsheet is the one using the panel.
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
        interruption. The Google credentials for your connection are stored encrypted on Brocket&apos;s backend; they
        are never written to cells or given to the AI model.
      </p>
      <p>
        We use the data we receive from Google only to provide and improve the add-on features you see and ask for.
        We do not use it for advertising, we do not sell it, and we do not use it to train general-purpose AI models.
        Transfers to the providers listed above are limited to what is necessary to provide those features.
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
      <p>
        We keep your information while your company&apos;s account is active. Deleting a conversation in Brocket
        removes it from the product and its working files immediately; the underlying database records, backups and
        diagnostic traces can persist for a further period before they are permanently deleted.{" "}
        <Pending>retention period for backups and traces</Pending>
      </p>
      <p>
        When a company&apos;s account ends, we delete its data <Pending>period after termination</Pending>. You can
        ask us to delete your personal data at any time by writing to privacy@brocket.xyz; we will verify your identity
        and the scope of the request before acting on it.
      </p>

      <h2>Security</h2>
      <ul>
        <li>All traffic between your browser, the add-on, Brocket and Google uses HTTPS.</li>
        <li>Credentials for your data sources and for Google are stored encrypted in AWS and are never exposed again.</li>
        <li>Access is limited by user, role and company. Brocket staff access customer data only when needed to operate the service or resolve an issue.</li>
        <li>Our infrastructure runs on AWS with regular backups.</li>
      </ul>

      <h2>Where your data is stored</h2>
      <p>
        Brocket runs on Amazon Web Services in the United States. The providers listed above may also process data in
        the United States.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        The application stores your session and preferences in your browser and uses PostHog cookies and local storage
        for usage analytics. This website does not use tracking cookies.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete your personal data, or object to how we use it, by writing to{" "}
        <a href="mailto:privacy@brocket.xyz">privacy@brocket.xyz</a>. If your data was provided through your company,
        we may refer your request to it.
      </p>
      <p>
        <Pending>
          confirm jurisdiction; if Argentina, add the notice required by the AAIP: the Agencia de Acceso a la
          Información Pública, as the supervisory authority of Law 25.326, handles complaints about non-compliance
          with data protection rules
        </Pending>
      </p>

      <h2>Children</h2>
      <p>Brocket is a business tool and is not directed to anyone under 18.</p>

      <h2>Changes to this policy</h2>
      <p>
        We will post any changes on this page. If we materially change how we use data received from Google, we will
        update this policy and ask for your consent where required before applying the change.
      </p>
    </LegalPage>
  )
}
