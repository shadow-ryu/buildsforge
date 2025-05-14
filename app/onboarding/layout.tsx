import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   const { sessionClaims } = await auth();
    console.log("Session claims:", sessionClaims);
  if (sessionClaims?.metadata?.onboardingComplete === true) {
    redirect('/dashboard'); 
  }

  return <>{children}</>;
}
