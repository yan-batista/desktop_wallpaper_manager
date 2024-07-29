interface MinusIconProps {
  action?: () => void
  disabled?: boolean
}

const FolderIcon: React.FC<MinusIconProps> = ({action = () => {}, disabled}: MinusIconProps) => {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="feather feather-minus"
      onClick={() => {
        if(!disabled) {
          action()
        }
      }}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )
}

export default FolderIcon;