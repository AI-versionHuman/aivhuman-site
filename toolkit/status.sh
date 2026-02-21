#!/bin/bash
# ============================================
# AI v.Human — Status Check
# Shows current state of the workspace
# Run from: C:\Dev\LIMN
# ============================================

PROJECT_ROOT="C:/Dev/LIMN"
cd "$PROJECT_ROOT"

echo "============================================"
echo "  AI v.Human — Workspace Status"
echo "============================================"
echo ""
echo "Working directory: $PROJECT_ROOT"
echo "Current branch: $(git branch --show-current)"
echo "Latest commit: $(git log --oneline -1)"
echo ""

echo "Git Status:"
echo "-----------"
git status --short
echo ""

echo "Deploy directory contents:"
echo "-------------------------"
ls -la deploy/ 2>/dev/null || echo "  deploy/ directory not found!"
echo ""

if [ -d "deploy/simulations" ]; then
    echo "Simulations:"
    echo "-----------"
    ls -la deploy/simulations/
    echo ""
fi

echo "Remote URL: $(git remote get-url origin 2>/dev/null || echo 'not set')"
echo ""
echo "Netlify site: https://aivhuman.netlify.app"
echo "============================================"
