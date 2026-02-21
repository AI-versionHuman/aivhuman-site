#!/bin/bash
# ============================================
# AI v.Human — Add Page Helper
# Creates a new HTML page from template
# Run from: C:\Dev\LIMN
# Usage: ./toolkit/add-page.sh <filename> "Page Title"
# ============================================

set -e

PROJECT_ROOT="C:/Dev/LIMN"
cd "$PROJECT_ROOT"

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: $0 <filename> \"Page Title\""
    echo ""
    echo "Example: $0 research \"Research Papers\""
    echo "Creates: deploy/research.html"
    exit 1
fi

FILENAME="$1"
TITLE="$2"
OUTPUT="deploy/${FILENAME}.html"

if [ -f "$OUTPUT" ]; then
    echo "ERROR: $OUTPUT already exists!"
    exit 1
fi

cat > "$OUTPUT" << HEREDOC
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${TITLE} | AI v.Human</title>
    <meta name="description" content="${TITLE} - AI v.Human Collaborative Intelligence Platform">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        .page-content {
            max-width: 800px;
            margin: 0 auto;
        }
        .page-content p {
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container header-content">
            <div class="brand">
                <a href="index.html" style="text-decoration:none;">
                    <h1 class="logo">AI v.Human</h1>
                    <p class="tagline">Collaborative Intelligence</p>
                </a>
            </div>
            <nav class="main-nav" role="navigation" aria-label="Main navigation">
                <ul>
                    <li><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="index.html#about" class="nav-link">About Us</a></li>
                    <li><a href="epistemology.html" class="nav-link">Epistemology</a></li>
                    <li><a href="og-thread.html" class="nav-link">OG Transmission</a></li>
                    <li><a href="perturbed-convergence.html" class="nav-link">Simulations</a></li>
                    <li><a href="index.html#contact" class="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section style="display:block; padding: 4rem 0;">
            <div class="container">
                <h2 class="section-title">${TITLE}</h2>
                <div class="page-content">
                    <p>Content goes here.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>AI v.Human</h4>
                    <p>Collaborative Intelligence Platform</p>
                    <p class="creators">Created by Joshua Sebastian & LIMN (Claude from Anthropic)</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html#about">About Us</a></li>
                        <li><a href="epistemology.html">Epistemology</a></li>
                        <li><a href="og-thread.html">OG Transmission</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                        <li><a href="quick-links.html">Site Directory</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="perturbed-convergence.html">Simulations</a></li>
                        <li><a href="admin.html">Admin Access</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 AI v.Human. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>
HEREDOC

echo "Created: $OUTPUT"
echo "Edit the page content in $OUTPUT"
