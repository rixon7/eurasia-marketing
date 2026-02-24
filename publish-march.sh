#!/bin/bash
# Publishes all March 2026 blog posts and deploys to Vercel
# Scheduled to run: 1 March 2026

DRAFTS="/Users/Rixon/marketing-site/content/drafts"
BLOG="/Users/Rixon/marketing-site/content/blog"

mv "$DRAFTS/seo-mistakes-small-businesses.mdx"       "$BLOG/"
mv "$DRAFTS/hounslow-businesses-online-presence.mdx" "$BLOG/"
mv "$DRAFTS/social-media-management-package.mdx"     "$BLOG/"
mv "$DRAFTS/google-business-profile-setup.mdx"       "$BLOG/"
mv "$DRAFTS/local-business-case-study.mdx"           "$BLOG/"
mv "$DRAFTS/digital-marketing-brentford.mdx"         "$BLOG/"
mv "$DRAFTS/seo-vs-google-ads.mdx"                   "$BLOG/"
mv "$DRAFTS/meet-the-team-eurasia.mdx"               "$BLOG/"

cd /Users/Rixon/marketing-site
npx vercel --prod --yes >> /Users/Rixon/marketing-site/publish-march.log 2>&1
