import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'jyb5wkgy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skAebQP8SFgYOyxkg13aNbt4IdC11jVXGgj0qyqk8QLqizkIVmeOEC2lQuPbpF5wQAefMD0cz1GugY0NDThgMzyHJYPY42IbwfXeuE61R4IQftWyVeE8IwqrU7F1bVq8mXCmDqbvBNV6ndP1WEWXkJqahchEyrCZHH5swdcDyoWFNQsm1NRk',
  useCdn: false,
});

function removeHounslow(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/ in Hounslow/g, '')
    .replace(/ for Hounslow businesses/g, ' for businesses')
    .replace(/ for Hounslow business/g, ' for business')
    .replace(/Hounslow businesses/g, 'businesses')
    .replace(/Hounslow business/g, 'business')
    .replace(/For most Hounslow /g, 'For most ')
    .replace(/Hounslow /g, '');
}

const services = await client.fetch(`*[_type == "service"]`);

console.log(`Found ${services.length} service documents\n`);

for (const service of services) {
  const patch = {};
  let changed = false;

  // intro
  const newIntro = removeHounslow(service.intro);
  if (newIntro !== service.intro) {
    patch.intro = newIntro;
    changed = true;
    console.log(`[${service.slug?.current}] intro updated`);
  }

  // description (meta)
  const newDesc = removeHounslow(service.description);
  if (newDesc !== service.description) {
    patch.description = newDesc;
    changed = true;
    console.log(`[${service.slug?.current}] description updated`);
  }

  // tagline
  const newTagline = removeHounslow(service.tagline);
  if (newTagline !== service.tagline) {
    patch.tagline = newTagline;
    changed = true;
    console.log(`[${service.slug?.current}] tagline updated`);
  }

  // features
  if (Array.isArray(service.features)) {
    const newFeatures = service.features.map(f => ({
      ...f,
      title: removeHounslow(f.title),
      description: removeHounslow(f.description),
    }));
    const featuresChanged = JSON.stringify(newFeatures) !== JSON.stringify(service.features);
    if (featuresChanged) {
      patch.features = newFeatures;
      changed = true;
      console.log(`[${service.slug?.current}] features updated`);
    }
  }

  // faqs
  if (Array.isArray(service.faqs)) {
    const newFaqs = service.faqs.map(faq => ({
      ...faq,
      q: removeHounslow(faq.q),
      a: removeHounslow(faq.a),
    }));
    const faqsChanged = JSON.stringify(newFaqs) !== JSON.stringify(service.faqs);
    if (faqsChanged) {
      patch.faqs = newFaqs;
      changed = true;
      console.log(`[${service.slug?.current}] faqs updated`);
    }
  }

  if (changed) {
    await client.patch(service._id).set(patch).commit();
    console.log(`[${service.slug?.current}] ✅ saved\n`);
  } else {
    console.log(`[${service.slug?.current}] — no changes\n`);
  }
}

console.log('Done.');
