import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'divider',
      description: 'The "Below the Fold" divider text.',
      title: 'Divider',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'layoutBlocks',
      title: 'Layout Blocks (Rows)',
      description: 'Stack layout blocks to build rows of content',
      type: 'array',
      of: [
        { type: 'single_100' },
        { type: 'double_33x66' },
        { type: 'double_50x50' },
        { type: 'double_66x33' },
        { type: 'triple_33x33x33' },
      ],
    }),
    defineField({
      name: 'layoutBlocks_ref',
      title: 'Reference Blocks (Rows)',
      description:
        'Stack layout blocks to build rows of content - NOTE: These reference existing projects',
      type: 'array',
      of: [
        { type: 'single_100_ref' },
        { type: 'double_33x66_ref' },
        { type: 'double_50x50_ref' },
        { type: 'double_66x33_ref' },
        { type: 'triple_33x33x33_ref' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
