import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'coverImage',
  title: 'Cover Image',
  description:
    'This image is used for reference links, such as links in the home and portfolio pages',
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
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screenreaders. Falls back on project name if not set',
        }),
      ],
    }),
  ],
})
