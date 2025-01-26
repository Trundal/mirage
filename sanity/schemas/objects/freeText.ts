import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'freeText',
  title: 'Free Text',
  type: 'object',
  fields: [
    defineField({
      name: 'textBlock',
      title: 'Project Description',
      type: 'blockContent',
    }),
  ],
})
