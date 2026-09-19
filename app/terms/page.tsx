import type { Metadata } from "next"
import { LegalPage, Pending } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service - Brocket",
  description: "The rules for using Brocket's web application, Google Sheets add-on and website.",
}

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="September 18, 2026">
      <p>
        These terms govern the use of Brocket&apos;s web application at app.brocket.xyz, the Google Sheets add-on
        &quot;Brocket for Sheets&quot; and this website (together, the &quot;Service&quot;). By using the Service you
        accept these terms and our <a href="/privacy">Privacy Policy</a>. If your company has a separate written
        agreement with Brocket, that agreement prevails where the two conflict.
      </p>

      <h2>Who provides the Service</h2>
      <p>
        The Service is operated by <Pending>legal entity or individual responsible, with address</Pending>
        (&quot;Brocket&quot;, &quot;we&quot;). Legal contact: <a href="mailto:legal@brocket.xyz">legal@brocket.xyz</a>.
        Support: <a href="mailto:support@brocket.xyz">support@brocket.xyz</a>.
      </p>

      <h2>Accounts</h2>
      <p>
        Access to Brocket is provided through a customer company. The company&apos;s administrator invites, suspends
        and removes users. You must be at least 18 years old and authorized by your company to use the Service. Keep
        your credentials confidential; you are responsible for the activity under your account.
      </p>

      <h2>Your company&apos;s data</h2>
      <p>
        Your company owns the data it connects and the results generated from it (tables, charts, documents). You
        grant Brocket the right to process that data only to provide the Service, as described in the Privacy Policy.
        Your company is responsible for having the right to connect each data source and for the accuracy of the
        data it provides.
      </p>

      <h2>AI-generated output</h2>
      <p>
        Brocket generates answers with artificial intelligence models. Output can be inaccurate, incomplete or out of
        date. Review results before relying on them. Brocket does not provide financial, legal, tax or accounting
        advice, and you remain responsible for the decisions you make.
      </p>

      <h2>Google Sheets add-on</h2>
      <p>
        The add-on requires a Brocket account and edit access to the spreadsheet. Changes to a spreadsheet are made
        at your request; before replacing existing data or formulas, the add-on shows you the range and asks you to
        confirm. You are responsible for reviewing the changes applied to your spreadsheets. You can disconnect the
        add-on at any time from its panel. Your use of Google Sheets remains subject to Google&apos;s terms.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree to use the Service lawfully and within the permissions your company has given you. You must not:</p>
      <ul>
        <li>Access data or sources you are not authorized to access.</li>
        <li>Interfere with the Service, probe or circumvent its security, or overload it.</li>
        <li>Reverse engineer the Service or systematically extract its content to build a competing product.</li>
        <li>Upload content you have no right to share, or content that is unlawful.</li>
      </ul>

      <h2>Fees</h2>
      <p>
        Fees are set out in the plan or order agreed between Brocket and your company. Brocket may limit or suspend
        the Service for an account whose fees remain unpaid after notice.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Brocket owns the Service, including its software, design and documentation. These terms do not grant you any
        right to it beyond using it as described here. If you send us feedback, we may use it without obligation.
      </p>

      <h2>Availability and changes</h2>
      <p>
        We work to keep the Service available but do not guarantee uninterrupted operation. We may change, suspend or
        discontinue features, and we may suspend the Service for maintenance or security. We will give notice where
        practical.
      </p>

      <h2>Confidentiality</h2>
      <p>
        We treat your company&apos;s data as confidential and disclose it only as described in the Privacy Policy or
        when the law requires it.
      </p>

      <h2>Disclaimer and limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, the Service is provided &quot;as is&quot;, without warranties of any
        kind, including as to availability or the accuracy of results. Brocket is not liable for indirect, incidental
        or consequential damages, nor for decisions made on the basis of results that were not verified. Brocket&apos;s
        total liability for any claim related to the Service is limited to{" "}
        <Pending>the fees paid by your company in the 12 months before the claim, or another cap</Pending>. Nothing in
        these terms excludes liability that cannot be excluded by law.
      </p>

      <h2>Termination</h2>
      <p>
        You can stop using the Service at any time. Your company can end its account under its agreement with
        Brocket. We may suspend or terminate access for a breach of these terms or of your company&apos;s
        permissions. After termination, data is handled as described in the Privacy Policy.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of <Pending>jurisdiction</Pending>. Any dispute will be submitted to the
        courts of <Pending>city and jurisdiction</Pending>.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. If a change is material we will give notice through the Service. Continuing to use
        the Service after the notice means you accept the updated terms.
      </p>
    </LegalPage>
  )
}
