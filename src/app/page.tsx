"use client";

import { SessionProvider, useSession } from "next-auth/react";

export default function Home() {
  
  return (
    <div className="text-2xl m-4 p-4 h-screen w-screen flex justify-center items-center">
      <div>
        Hello there, from Homepage!
      </div>
      <div>
        <SessionProvider>
          <AuthComponent />
        </SessionProvider>
      </div>
    </div>
  );
}


function AuthComponent() {

  const {data} = useSession();

  const jsonData = JSON.stringify(data);

  return (
    <div>
      This message contains auth
      {jsonData}
    </div>
  )
}
