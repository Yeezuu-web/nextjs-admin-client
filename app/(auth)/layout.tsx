import React from 'react'

export default function NullLayout({
	children
}: {
	children: React.ReactNode
}) {
  return (
	<div className='flex justify-center items-center h-screen'>
		{ children }
	</div>
  )
}
