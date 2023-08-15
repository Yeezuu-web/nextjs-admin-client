import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import LoginForm from '@/app/(auth)/(routes)/login/(routes)/components/login-form'

const LoginCard = () => {
  return (
	<Card className='w-3/12'>
		<CardHeader>
			<CardTitle>Login</CardTitle>
			<CardDescription>Login to you account</CardDescription>
			<Separator />
		</CardHeader>
		<CardContent>
			<LoginForm />
		</CardContent>
		<CardFooter>
			<p className='ml-auto text-sm text-muted-foreground font-light'>Power by: W MEDIA</p>
		</CardFooter>
	</Card>
  )
}

export default LoginCard