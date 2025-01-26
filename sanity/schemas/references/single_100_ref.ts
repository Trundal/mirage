import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'single_100_ref',
  title: 'One Column: 100%',
  type: 'object',
  fields: [
    defineField({
      name: 'singleColumn_ref',
      title: 'Single Column',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the full-width column.',
    }),
  ],
})
