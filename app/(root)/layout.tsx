import React from 'react'

export default function NullLayout({
	children
}: {
	children: React.ReactNode
}) {
  return (
	<div>
		{ children }
	</div>
  )
}
