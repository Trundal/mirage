import { DocumentVideoIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Enter the URL of the video',
    }),
    defineField({
      name: 'overlayImage',
      title: 'Overlay Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'Upload an overlay image for the video (shown when the video is not playing)',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description:
            'Provide a short description of the image for accessibility.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
