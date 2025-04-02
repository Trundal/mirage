import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogEntry',
  title: 'Blog Entry',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'coverImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'header',
      description:
        'Alternate header for section 1. DO NOT USE unless you want to override Project & Client Name that is used as default',
      title: '(alt) Header',
      type: 'string',
    }),
    defineField({
      name: 'layoutBlocks',
      title: 'Content Blocks for Blog entries',
      description: 'Stack these blocks to build rows of content',
      type: 'array',
      of: [
        { type: 'single_100' },
        { type: 'double_33x66' },
        { type: 'double_50x50' },
        { type: 'double_66x33' },
        { type: 'triple_33x33x33' },
      ],
    }),
  ],
})
