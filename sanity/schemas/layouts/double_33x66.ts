import { defineField, defineType } from 'sanity'
import { mediaTypes, mediaValidation } from '../utils/utils'

export default defineType({
  name: 'double_33x66',
  title: 'Two Column: 33% x 66%',
  type: 'object',
  fields: [
    defineField({
      name: 'left33',
      title: 'Left Column (33%)',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the left column.',
      validation: mediaValidation,
    }),
    defineField({
      name: 'right66',
      title: 'Right Column (66%)',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the left column.',
      validation: mediaValidation,
    }),
  ],
})
