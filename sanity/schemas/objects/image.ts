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
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screenreaders. Falls back on project name if not set',
        }),
        defineField({
          name: 'projectReference',
          type: 'string',
          title: 'Project Reference',
          description:
            'Optional: This creates a link to an existing project. NOTE: This is the same value as "slug" on the project page.',
        }),
        defineField({
          title: 'Project Name',
          name: 'projectName',
          type: 'string',
          hidden: ({ parent }: { parent?: { projectReference?: string } }) =>
            !parent?.projectReference,
        }),
        defineField({
          title: 'Client Name',
          name: 'clientName',
          type: 'string',
          hidden: ({ parent }: { parent?: { projectReference?: string } }) =>
            !parent?.projectReference,
        }),
      ],
    }),
  ],
})
