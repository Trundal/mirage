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
      name: 'projects',
      description: 'The header text for selected projects.',
      title: 'Selected Projects',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'layoutBlocks_ref_0',
      title: 'Reference Blocks, Section 0',
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
    defineField({
      name: 'header1',
      description: 'The header text for section 1.',
      title: 'Header 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'layoutBlocks_ref_1',
      title: 'Reference Blocks, Section 1 (Virtual Production)',
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
    defineField({
      name: 'header2',
      description: 'The header text for section 2 (VFX)',
      title: 'Header 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'layoutBlocks_ref_2',
      title: 'Reference Blocks, Section 2 (Visual Effects)',
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
