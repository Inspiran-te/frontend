import { BlockWrapper } from './styles'
import { IBlockProps } from './types'

export const Block: React.FC<IBlockProps> = ({ children, ...props }) => (
	<BlockWrapper {...props}>{children}</BlockWrapper>
)
  
