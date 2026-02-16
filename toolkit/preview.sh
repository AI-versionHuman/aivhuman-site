#!/bin/bash
# ============================================
# AI v.Human — Preview Deploy Script
# Creates a preview deploy (NOT production)
# Run from: C:\Dev\LIMN
# ============================================

set -e

SITE_ID="5e349e84-499a-417f-a7a2-bceb969aab71"
DEPLOY_DIR="deploy"
PROJECT_ROOT="C:/Dev/LIMN"

cd "$PROJECT_ROOT"

echo "============================================"
echo "  AI v.Human — Preview Deploy"
echo "============================================"
echo ""

# Verify deploy directory exists
if [ ! -d "$DEPLOY_DIR" ]; then
    echo "ERROR: deploy/ directory not found!"
    exit 1
fi

FILE_COUNT=$(find "$DEPLOY_DIR" -type f | wc -l)
echo "Files to preview: $FILE_COUNT"
echo ""

# Deploy as preview (NOT production)
echo "Creating preview deploy..."
echo ""
npx netlify-cli deploy --dir="$DEPLOY_DIR" --site="$SITE_ID" --no-build

echo ""
echo "============================================"
echo "  Preview Deploy Complete!"
echo "  Check the preview URL above."
echo "  To publish to production, run deploy.sh"
echo "============================================"
