import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Logout from "../Logout/Logout";
import classes from "./SignInSession.module.css";

export default function SignInSession() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button className={classes.signIn}>
        {!session?.user ? (
          <Link href="/login">Sign In</Link>
        ) : (
          <div className="flex items-center gap-x-2 text-sm">
            {session.user.name}
            {session.user.image && (
              <Image
                src={session.user.image}
                width={30}
                height={30}
                alt="User Avatar"
                className="rounded-full"
              />
            )}
            <div className={classes.signOut} onClick={() => signOut()}>
              <Logout />
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
