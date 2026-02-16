#!/bin/bash
# ============================================
# AI v.Human — Commit & Push Script
# Commits all changes and pushes to GitHub
# Run from: C:\Dev\LIMN
# Usage: ./toolkit/commit-and-push.sh "Your commit message"
# ============================================

set -e

PROJECT_ROOT="C:/Dev/LIMN"
cd "$PROJECT_ROOT"

echo "============================================"
echo "  AI v.Human — Commit & Push"
echo "============================================"
echo ""

# Check for commit message
if [ -z "$1" ]; then
    echo "Usage: $0 \"Your commit message\""
    echo ""
    echo "Example: $0 \"Add privacy policy page\""
    exit 1
fi

# Show what will be committed
echo "Changes to be committed:"
echo "------------------------"
git status --short
echo ""

# Stage all changes in deploy/
git add deploy/

# Also stage netlify.toml if modified
git add netlify.toml 2>/dev/null || true

# Commit
git commit -m "$1"

# Push
echo ""
echo "Pushing to origin/main..."
git push origin main

echo ""
echo "============================================"
echo "  Committed and pushed!"
echo "  $(git log --oneline -1)"
echo "============================================"
