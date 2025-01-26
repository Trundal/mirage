import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'double_66x33_ref',
  title: 'Two Column: 66% x 33%',
  type: 'object',
  fields: [
    defineField({
      name: 'left66_ref',
      title: 'Left Column (66%)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the left column.',
    }),
    defineField({
      name: 'right33_ref',
      title: 'Right Column (33%)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the right column.',
    }),
  ],
})
