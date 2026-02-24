#!/bin/bash
# Usage: publish-post.sh <filename.mdx>
# Moves a single draft post to the blog folder, deploys, and updates domain aliases

DRAFTS="/Users/Rixon/marketing-site/content/drafts"
BLOG="/Users/Rixon/marketing-site/content/blog"
LOG="/Users/Rixon/marketing-site/publish.log"

mv "$DRAFTS/$1" "$BLOG/"
cd /Users/Rixon/marketing-site

DEPLOY_OUTPUT=$(npx vercel --prod --yes 2>&1)
echo "$DEPLOY_OUTPUT" >> "$LOG"

DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep "Production:" | grep -oE 'https://[^ ]+' | head -1)

if [ -n "$DEPLOY_URL" ]; then
  npx vercel alias set "$DEPLOY_URL" eurasiamarketing.com >> "$LOG" 2>&1
  npx vercel alias set "$DEPLOY_URL" www.eurasiamarketing.com >> "$LOG" 2>&1
  echo "$(date): Published $1 → $DEPLOY_URL" >> "$LOG"
else
  echo "$(date): ERROR — could not extract deployment URL for $1" >> "$LOG"
fi
