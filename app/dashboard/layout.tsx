import Navbar from '@/components/navbar'
import React from 'react'

export default function AdminLayout({
	children
}: {
	children: React.ReactNode
}) {
  return (
	<div className='w-screen'>
		<Navbar />
		<main className='mx-20 p-10'>
			{children}
		</main>
	</div>
  )
}
