import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'double_33x66',
  title: 'Two Column: 33% x 66%',
  type: 'object',
  fields: [
    defineField({
      name: 'left33',
      title: 'Left Column (33%)',
      type: 'array',
      of: [
        defineArrayMember({ type: 'imageObject' }),
        defineArrayMember({ type: 'video' }),
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
      description: 'Add an image or video for the hero component.',
      validation: (Rule) =>
        Rule.max(1).error('Select one media item (image or video).'),
    }),
    defineField({
      name: 'right66',
      title: 'Right Column (66%)',
      type: 'array',
      of: [
        defineArrayMember({ type: 'imageObject' }),
        defineArrayMember({ type: 'video' }),
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
      description: 'Add an image or video for the hero component.',
      validation: (Rule) =>
        Rule.max(1).error('Select one media item (image or video).'),
    }),
  ],
})
