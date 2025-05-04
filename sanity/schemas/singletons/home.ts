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
      name: 'projectsTitle',
      description: 'The header text for selected projects.',
      title: 'Selected Projects',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projects_ref',
      title: 'Reference Blocks for Selected Project',
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
      name: 'vpHeader',
      description: 'Header Text for Virtual Production Blog link',
      title: 'Virtual Production - Header',
      type: 'string',
    }),
    defineField({
      name: 'vpMedia',
      description: 'Media for Virtual Production banner',
      title: 'Virtual Production - Media',
      type: 'single_100',
    }),
    defineField({
      name: 'vpText',
      description:
        'Alternate header for section 1. DO NOT USE unless you want to override Project & Client Name that is used as default',
      title: 'Virtual Production - Text',
      type: 'double_50x50',
    }),
    defineField({
      name: 'vfxHeader',
      description: 'Header Text for Visual Effects Blog link',
      title: 'Visual Effects - Header',
      type: 'string',
    }),
    defineField({
      name: 'vfxMedia',
      description: 'Media for Visual Effects banner',
      title: 'Visual Effects - Media',
      type: 'single_100',
    }),
    defineField({
      name: 'vfxText',
      description:
        'Alternate header for section 1. DO NOT USE unless you want to override Project & Client Name that is used as default',
      title: 'Visual Effects - Text',
      type: 'double_50x50',
    }),
    defineField({
      name: 'aboutUsHeader',
      description:
        'Alternate header for section 1. DO NOT USE unless you want to override Project & Client Name that is used as default',
      title: 'About Us - Header',
      type: 'string',
    }),
    defineField({
      name: 'aboutUsLayout',
      title: 'Project Blocks, for About Us section',
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
