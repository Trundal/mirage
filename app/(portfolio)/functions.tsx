import Divder from '@/components/layout/Column/Divider/Divider'
import Double33x66 from '@/components/layout/Column/Double/Double33x66'
import Double50x50 from '@/components/layout/Column/Double/Double50x50'
import Double66x33 from '@/components/layout/Column/Double/Double66x33'
import SingleColumn from '@/components/layout/Column/Single/Single'
import Triple33x33x33 from '@/components/layout/Column/Triple/Triple33x33x33'
import ImageObject from '@/components/sanity/media/ImageObject/ImageObject'

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

export const getMedia = (media: any) => {
  switch (media._type) {
    case 'imageObject':
      return <ImageObject key={media._key} {...media} />
    default:
      console.warn('Invalid media type:', media._type)
      return undefined
  }
}
