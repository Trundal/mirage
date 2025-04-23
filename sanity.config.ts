'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { muxInput } from 'sanity-plugin-mux-input'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import entry from '@/sanity/schemas/documents/entry'
import page from '@/sanity/schemas/documents/page'
import project from '@/sanity/schemas/documents/project'
import divider from '@/sanity/schemas/layouts/divider'
import double_33x66 from '@/sanity/schemas/layouts/double_33x66'
import double_50x50 from '@/sanity/schemas/layouts/double_50x50'
import double_66x33 from '@/sanity/schemas/layouts/double_66x33'
import single_100 from '@/sanity/schemas/layouts/single_100'
import triple_33x33x33 from '@/sanity/schemas/layouts/triple_33x33x33'
import blockContent from '@/sanity/schemas/objects/blockContent'
import coverImage from '@/sanity/schemas/objects/coverImage'
import duration from '@/sanity/schemas/objects/duration'
import freeText from '@/sanity/schemas/objects/freeText'
import hero from '@/sanity/schemas/objects/hero'
import image from '@/sanity/schemas/objects/image'
import milestone from '@/sanity/schemas/objects/milestone'
import timeline from '@/sanity/schemas/objects/timeline'
import video from '@/sanity/schemas/objects/video'
import double_33x66_ref from '@/sanity/schemas/references/double_33x66_ref'
import double_50x50_ref from '@/sanity/schemas/references/double_50x50_ref'
import double_66x33_ref from '@/sanity/schemas/references/double_66x33_ref'
import single_100_ref from '@/sanity/schemas/references/single_100_ref'
import triple_33x33x33_ref from '@/sanity/schemas/references/triple_33x33x33_ref'
import blog from '@/sanity/schemas/singletons/blog'
import home from '@/sanity/schemas/singletons/home'
import portfolio from '@/sanity/schemas/singletons/portfolio'
import settings from '@/sanity/schemas/singletons/settings'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Next.js Personal Website with Sanity.io'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      blog,
      settings,
      portfolio,
      // Documents
      duration,
      entry,
      page,
      project,
      // Layouts
      divider,
      single_100,
      double_33x66,
      double_50x50,
      double_66x33,
      triple_33x33x33,
      // References
      single_100_ref,
      double_33x66_ref,
      double_50x50_ref,
      double_66x33_ref,
      triple_33x33x33_ref,
      // Objects
      milestone,
      timeline,
      hero,
      image,
      video,
      freeText,
      coverImage,
      blockContent,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings, portfolio, blog]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name, blog.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    muxInput(),
  ],
})
