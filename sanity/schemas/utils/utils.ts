import { defineArrayMember, Rule } from 'sanity'

export const mediaTypes = [
  defineArrayMember({ type: 'imageObject' }),
  defineArrayMember({ type: 'video' }),
  defineArrayMember({ type: 'freeText' }),
]

export const mediaValidation = (Rule: Rule) =>
  Rule.max(1).error('Select one media item (image or video).')
