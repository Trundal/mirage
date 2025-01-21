import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Header Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'portfolio',
            },
            {
              type: 'page',
            },
            {
              type: 'project',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'footerItems',
      title: 'Footer Item list',
      description: 'Links displayed on the footer of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'portfolio',
            },
            {
              type: 'page',
            },
            {
              type: 'project',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Footer Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
