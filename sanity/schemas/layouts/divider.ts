import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'divider',
  title: 'Section Divider',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
