import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Access",
  description: "Content management system access for authorized contributors to the AI v.Human project.",
};

export default function AdminAccessPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Admin Access
          </h1>
          <p className="text-sm text-text-secondary">
            Content management system for authorized contributors.
          </p>
        </div>

        <div className="space-y-8">
          {/* CMS Access Card */}
          <div className="card-glow p-8 text-center">
            <div className="text-accent text-3xl mb-4">&#9881;</div>
            <h2 className="text-lg font-light tracking-wide mb-3">
              Decap CMS
            </h2>
            <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
              The content management system allows authorized contributors to create and edit thread posts, research publications, and page content through a visual editor.
            </p>
            <a
              href="/admin"
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-accent-warm text-white text-sm font-medium tracking-wider rounded-lg hover:opacity-90 transition-opacity"
            >
              OPEN CMS ADMIN
            </a>
            <p className="text-xs text-text-secondary/50 mt-4 font-mono">
              Requires Netlify Identity authentication
            </p>
          </div>

          {/* Info Section */}
          <div className="prose prose-sm max-w-none">
            <h2>What You Can Do</h2>
            <p>
              The CMS provides a visual interface for managing site content without needing to write code. Authorized contributors can:
            </p>
            <ul>
              <li><strong>Thread Posts</strong> — Create and edit entries in the Main Thread, the ongoing research log</li>
              <li><strong>Research Publications</strong> — Publish research applying the epistemological framework</li>
              <li><strong>Pages</strong> — Edit static page content including the About page</li>
              <li><strong>Media</strong> — Upload images and files for use in content</li>
            </ul>

            <h2>Access Requirements</h2>
            <p>
              Admin access requires authentication through Netlify Identity. If you are a contributor and need access, contact the project maintainers through the{" "}
              <a href="/contact">contact page</a>.
            </p>

            <h2>For Developers</h2>
            <p>
              The full source code is available on{" "}
              <a href="https://github.com/AI-versionHuman/aivhuman-site" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              . Contributions can also be made directly through pull requests. Content is stored in MDX format in the <code>src/content/</code> directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
