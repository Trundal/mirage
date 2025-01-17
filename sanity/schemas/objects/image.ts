import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'imageObject',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      type: 'image',
      icon: ImageIcon,
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          media: 'asset',
          title: 'caption',
        },
      },
      fields: [
        defineField({
          title: 'Caption',
          name: 'caption',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screenreaders. Falls back on caption if not set',
        }),
        defineField({
          name: 'tint',
          title: 'Tint',
          type: 'number',
          description: 'Optional: Percentage of image tint from 0-100%',
          validation: (rule) => rule.min(0).max(100),
        }),
      ],
    }),
  ],
})
