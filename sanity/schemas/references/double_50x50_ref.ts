import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'double_50x50_ref',
  title: 'Two Column: 50% x 50%',
  type: 'object',
  fields: [
    defineField({
      name: 'left50_ref',
      title: 'Left Column (50%)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the left column.',
    }),
    defineField({
      name: 'right50_ref',
      title: 'Right Column (50%)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the right column.',
    }),
  ],
})
