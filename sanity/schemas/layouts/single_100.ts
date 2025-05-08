import { defineField, defineType } from 'sanity'
import { mediaTypes, mediaValidation } from '../utils/utils'

export default defineType({
  name: 'single_100',
  title: 'One Column: 100%',
  type: 'object',
  fields: [
    defineField({
      name: 'singleColumn',
      title: 'Single Column',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the full-width column.',
      validation: mediaValidation,
    }),
  ],
})
