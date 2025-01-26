import { defineField, defineType } from 'sanity'
import { mediaTypes, mediaValidation } from '../utils/utils'

export default defineType({
  name: 'double_50x50',
  title: 'Two Column: 50% x 50%',
  type: 'object',
  fields: [
    defineField({
      name: 'left50',
      title: 'Left Column (50%)',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the left column.',
      validation: mediaValidation,
    }),
    defineField({
      name: 'right50',
      title: 'Right Column (50%)',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the right column.',
      validation: mediaValidation,
    }),
  ],
})
