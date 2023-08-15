// "use client";

// import Loader from '@/components/ui/loader/loader';
// import { getAuthCredentials } from '@/utils/auth-utils';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function SetupPage({
// 	children
// }: {
// 	children: React.ReactNode
// }) {
// 	const router = useRouter();
// 	const { token } = getAuthCredentials();
// 	const isUser = !!token;
	
// 	useEffect(() => {
// 		if (!isUser) router.push('/login'); // If not authenticated, force login
// 	}, [isUser, router]);

// 	if (isUser) {
// 		return router.push('/dashboard/home');
// 	}



//   return <Loader showText={false}/>
// }
import React from 'react'

export default function page() {
  return (
	<div>page</div>
  )
}
