import { defineField, defineType } from 'sanity'
import { mediaTypes, mediaValidation } from '../utils/utils'

export default defineType({
  name: 'double_66x33',
  title: 'Two Column: 66% x 33%',
  type: 'object',
  fields: [
    defineField({
      name: 'left66',
      title: 'Left Column (66%)',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the left column.',
      validation: mediaValidation,
    }),
    defineField({
      name: 'right33',
      title: 'Right Column (33%)',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the right column.',
      validation: mediaValidation,
    }),
  ],
})
