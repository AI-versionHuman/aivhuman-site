#!/bin/bash
# ============================================
# AI v.Human — Deploy Script
# Deploys the deploy/ directory to Netlify
# Run from: C:\Dev\LIMN
# ============================================

set -e

SITE_ID="5e349e84-499a-417f-a7a2-bceb969aab71"
DEPLOY_DIR="deploy"
PROJECT_ROOT="C:/Dev/LIMN"

cd "$PROJECT_ROOT"

echo "============================================"
echo "  AI v.Human — Netlify Deploy"
echo "============================================"
echo ""

# Verify deploy directory exists
if [ ! -d "$DEPLOY_DIR" ]; then
    echo "ERROR: deploy/ directory not found!"
    echo "Make sure you're running from $PROJECT_ROOT"
    exit 1
fi

# Count files
FILE_COUNT=$(find "$DEPLOY_DIR" -type f | wc -l)
echo "Files to deploy: $FILE_COUNT"
echo "Deploy directory: $DEPLOY_DIR/"
echo ""

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "WARNING: You have uncommitted changes."
    echo "Consider committing before deploying."
    echo ""
fi

# Deploy
echo "Deploying to Netlify (production)..."
echo ""
npx netlify-cli deploy --prod --dir="$DEPLOY_DIR" --site="$SITE_ID" --no-build

echo ""
echo "============================================"
echo "  Deploy Complete!"
echo "  Site: https://aivhuman.netlify.app"
echo "============================================"
