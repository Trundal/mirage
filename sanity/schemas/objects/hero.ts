import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Component',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [
        defineArrayMember({ type: 'imageObject' }), // Import from image.ts
        defineArrayMember({ type: 'video' }), // Import from video.ts
      ],
      description: 'Add an image or video for the hero component.',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(1)
          .error('Select one media item (image or video).'),
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
