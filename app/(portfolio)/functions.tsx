import Divder from '@/components/layout/Tower/Blocks/Divider/Divider'
import Double33x66 from '@/components/layout/Tower/Blocks/Double/Double33x66'
import Double50x50 from '@/components/layout/Tower/Blocks/Double/Double50x50'
import Double66x33 from '@/components/layout/Tower/Blocks/Double/Double66x33'
import SingleColumn from '@/components/layout/Tower/Blocks/Single/Single'
import Triple33x33x33 from '@/components/layout/Tower/Blocks/Triple/Triple33x33x33'
import ImageObject from '@/components/sanity/media/ImageObject/ImageObject'
import TextObject from '@/components/sanity/media/TextObject/TextObject'

export const getComponent = (component: any) => {
  switch (component._type) {
    case 'single_100':
      return <SingleColumn key={component._key} {...component} />
    case 'double_33x66':
      return <Double33x66 key={component._key} {...component} />
    case 'double_50x50':
      return <Double50x50 key={component._key} {...component} />
    case 'double_66x33':
      return <Double66x33 key={component._key} {...component} />
    case 'triple_33x33x33':
      return <Triple33x33x33 key={component._key} {...component} />
    case 'divider':
      return <Divder key={component._key} {...component} />
    default:
      console.warn('Invalid component type:', component._type)
      return undefined
  }
}

export const getRefLayout = (layout: any) => {
  switch (layout._type) {
    case 'single_100_ref':
      return <SingleColumn key={layout._key} {...layout} />
    case 'double_33x66_ref':
      return <Double33x66 key={layout._key} {...layout} />
    case 'double_50x50_ref':
      return <Double50x50 key={layout._key} {...layout} />
    case 'double_66x33_ref':
      return <Double66x33 key={layout._key} {...layout} />
    case 'triple_33x33x33_ref':
      return <Triple33x33x33 key={layout._key} {...layout} />
    default:
      console.warn('Invalid component type:', layout._type)
      return undefined
  }
}

export const getMedia = (media: any) => {
  switch (media._type) {
    case 'imageObject':
      return <ImageObject key={media._key} {...media} />
    case 'freeText':
      return <TextObject key={media._key} {...media} />
    default:
      console.warn('Invalid media type:', media._type)
      return undefined
  }
}
