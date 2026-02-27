import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(process.cwd(), '.env.local');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8').split('\n')
    .filter(l => l && !l.startsWith('#') && l.includes('='))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);
Object.assign(process.env, env);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

for (const id of ['service-web-design', 'service-content-marketing']) {
  try {
    await client.delete(id);
    console.log('✅ Deleted:', id);
  } catch (e) {
    console.log('⚠️  Not found (skipping):', id);
  }
}
