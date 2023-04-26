import Button from '@mui/material/Button';


const BaseButton = ({ children, color, disabled, size, variant,sx }) => {

  const clickHandler = () => {
		console.log('clicked');
	}

  return (
      <Button
        color={color}
        disabled={disabled}
        size={size}
        variant={variant}
        sx={sx}
      >
        { children }
      </Button>
  )
}

export default BaseButton
