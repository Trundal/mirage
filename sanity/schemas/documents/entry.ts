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
      name: 'link',
      title: 'Link to exisiting project',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Link to a project page.',
    }),
    defineField({
      name: 'tags',
      title: 'Tag Selector',
      description: 'This tag is required for VP/VFX filtering in the blog.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'VP', value: 'vp' },
          { title: 'VFX', value: 'vfx' },
        ],
        layout: 'grid',
      },
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
