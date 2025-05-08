import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'double_33x66_ref',
  title: 'Two Column: 33% x 66%',
  type: 'object',
  fields: [
    defineField({
      name: 'left33_ref',
      title: 'Left Column (33%)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the left column.',
    }),
    defineField({
      name: 'right66_ref',
      title: 'Right Column (66%)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the right column.',
    }),
  ],
})
