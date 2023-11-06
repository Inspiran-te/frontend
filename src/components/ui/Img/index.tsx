import { FC } from 'react'
import { IImage } from './types'
import * as SC from './styles'

const Image: FC<IImage> = ({ src, alt, ...props }) => (
    <SC.ImageWrapper src={src} alt={alt} {...props}/>
  )

export default Image