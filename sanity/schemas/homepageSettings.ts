import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homepageSettings',
  title: 'Homepage Settings',
  type: 'document',
  // Singleton — managed via the Structure Builder; only one document created
  fields: [
    // Hero
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlight (coloured word/phrase)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    }),
    // Featured services
    defineField({
      name: 'featuredServices',
      title: 'Featured Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon (emoji)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'href', title: 'Link URL', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'title', icon: 'icon' },
            prepare({ title, icon }) {
              return { title: `${icon} ${title}` };
            },
          },
        },
      ],
    }),
    // Why choose us features
    defineField({
      name: 'features',
      title: 'Features (Why choose us)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon (emoji)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'title', icon: 'icon' },
            prepare({ title, icon }) {
              return { title: `${icon} ${title}` };
            },
          },
        },
      ],
    }),
    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
            { name: 'initials', title: 'Initials', type: 'string' },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role / Company', type: 'string' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'role' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Homepage Settings' };
    },
  },
});
