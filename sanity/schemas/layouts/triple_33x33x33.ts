import { defineField, defineType } from 'sanity'
import { mediaTypes, mediaValidation } from '../utils/utils'

export default defineType({
  name: 'triple_33x33x33',
  title: 'Three Column: 33% x 33% x 33%',
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
      name: 'center33',
      title: 'Center Column (33%)',
      type: 'array',
      of: mediaTypes,
      description: 'Add an image or video for the center column.',
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
