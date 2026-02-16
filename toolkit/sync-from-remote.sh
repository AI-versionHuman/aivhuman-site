#!/bin/bash
# ============================================
# AI v.Human — Sync from Remote
# Pulls latest changes from GitHub
# Run from: C:\Dev\LIMN
# ============================================

set -e

PROJECT_ROOT="C:/Dev/LIMN"
cd "$PROJECT_ROOT"

echo "============================================"
echo "  AI v.Human — Sync from Remote"
echo "============================================"
echo ""

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "WARNING: You have uncommitted changes."
    echo "Stashing them before pulling..."
    git stash
    STASHED=true
fi

# Pull latest
echo "Pulling latest from origin/main..."
git pull origin main --rebase

# Restore stashed changes if any
if [ "$STASHED" = true ]; then
    echo "Restoring stashed changes..."
    git stash pop
fi

echo ""
echo "Sync complete!"
echo "Current HEAD: $(git log --oneline -1)"
