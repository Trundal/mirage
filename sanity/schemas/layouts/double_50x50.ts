import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'double_50x50',
  title: 'Two Column: 50% x 50%',
  type: 'object',
  fields: [
    defineField({
      name: 'left50',
      title: 'Left Column (50%)',
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
      name: 'right50',
      title: 'Right Column (50%)',
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
