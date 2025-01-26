import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
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
      name: 'hero',
      type: 'hero',
    }),
    defineField({
      name: 'layoutBlocks',
      title: 'Project Blocks (Rows)',
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
    defineField({
      name: 'dividerText',
      title: 'Section Divider',
      type: 'string',
      description:
        'Title block for section 2. Intended for the "Behind the Scenes" section',
    }),
    defineField({
      name: 'btsBlocks',
      title: 'BTS Blocks (Rows)',
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
