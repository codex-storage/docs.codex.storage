import React from 'react'

export type BadgeProps = {
  href: string
  imgSrc: string
  imgAlt?: string
  target?: string
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  href,
  imgSrc,
  imgAlt = href,
  target = '_blank',
  children,
  ...props
}) => {
  return (
    <a {...props}>
      <img src={imgSrc} alt={imgAlt} />
    </a>
  )
}
