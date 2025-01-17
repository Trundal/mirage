import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'single_100',
  title: 'One Column: 100%',
  type: 'object',
  fields: [
    defineField({
      name: 'singleColumn',
      title: 'Single Column',
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
  ],
})
