import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the AI v.Human project. How we handle your data, what we collect, and your rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-text-secondary/60">
            Last updated: February 2026
          </p>
        </div>

        <article className="prose prose-sm max-w-none">
          <h2>Overview</h2>
          <p>
            AI v.Human is committed to transparency — in our epistemological framework and in how we handle your data. This policy explains what information we collect, how we use it, and your rights regarding that information.
          </p>

          <h2>What We Collect</h2>

          <h3>Contact Form Submissions</h3>
          <p>
            When you submit the contact form on our site, we collect your name, email address, and message content. This data is processed through Netlify Forms and is used solely to respond to your inquiry or facilitate collaboration.
          </p>

          <h3>Email Registration</h3>
          <p>
            If you register your email through the sidebar registration form, we collect your email address for the purpose of community updates related to the project. You can unsubscribe at any time by contacting us.
          </p>

          <h3>Analytics and Hosting</h3>
          <p>
            This site is hosted on Netlify. Netlify may collect standard server logs including IP addresses, browser type, and pages visited. We do not use additional third-party analytics or tracking scripts. We do not use cookies for tracking purposes.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to contact form submissions</li>
            <li>To send project updates to registered email addresses</li>
            <li>To maintain and improve the site</li>
          </ul>
          <p>
            We do not sell, trade, or share your personal information with third parties. We do not use your data for advertising or marketing beyond project-related communications you have opted into.
          </p>

          <h2>Data Storage and Security</h2>
          <p>
            Contact form submissions are stored securely through Netlify&apos;s form handling service. We implement standard security measures including HTTPS encryption, security headers (X-Frame-Options, X-Content-Type-Options), and strict referrer policies.
          </p>

          <h2>Open Source Commitment</h2>
          <p>
            All content on this site — the theory, the dialogue, the research, and the code — is open source. The source code is publicly available on{" "}
            <a href="https://github.com/AI-versionHuman/aivhuman-site" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            . You can verify exactly what code runs on this site at any time.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to any personal data we hold about you</li>
            <li>Request deletion of your personal data</li>
            <li>Unsubscribe from email communications</li>
            <li>Know what data is collected and how it is used</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>This site uses the following third-party services:</p>
          <ul>
            <li><strong>Netlify</strong> — Hosting and form processing (<a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">Netlify Privacy Policy</a>)</li>
            <li><strong>GitHub</strong> — Source code hosting and CMS backend (<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>)</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy as the project evolves. Changes will be reflected on this page with an updated date. As with everything in this project, transparency is the default.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy or want to exercise your data rights, reach out through our{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </article>
      </div>
    </div>
  );
}
