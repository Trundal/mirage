import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'triple_33x33x33_ref',
  title: 'Three Column: 33% x 33% x 33%',
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
      name: 'center33_ref',
      title: 'Center Column (33%)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select a project for the center column.',
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
