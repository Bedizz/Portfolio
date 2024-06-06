import React from 'react'
type SectionHeadingProps = {
    children: React.ReactNode
    }
    // without this code, we cant use the children prop in the component because its typescript and we need to define the type of children
    //we need to write the type of children as React.ReactNode because it can be a string, a component, or an array of components

export default function SectionHeading({children}:SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-medium capitalize mb-8 justify-center items-center flex">{children}</h2>
    </div>
  )
}
