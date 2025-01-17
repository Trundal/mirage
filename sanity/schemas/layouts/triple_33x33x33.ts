import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'triple_33x33x33',
  title: 'Three Column: 33% x 33% x 33%',
  type: 'object',
  fields: [
    defineField({
      name: 'left33',
      title: 'Left Column (33%)',
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
      name: 'center33',
      title: 'Center Column (33%)',
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
      name: 'right33',
      title: 'Right Column (33%)',
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
