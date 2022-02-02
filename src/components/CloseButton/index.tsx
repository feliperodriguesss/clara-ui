/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { IconButton, IconButtonProps } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export interface CloseButtonProps extends IconButtonProps {
  children?: React.ReactNode
}

export const CloseButton = React.forwardRef(
  (props: CloseButtonProps, ref?: React.Ref<any>) => {
    const { children, ...rest } = props

    const baseStyle = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }

    return (
      <IconButton
        type="button"
        ref={ref}
        style={{ ...baseStyle }}
        aria-label="Close"
        {...rest}
      >
        {children || <CloseIcon width="1em" height="1em" />}
      </IconButton>
    )
  }
)
