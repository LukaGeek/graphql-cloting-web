import { useSession, signOut } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import Link from "next/link";

export default function SignInSession() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform cursor-pointer hover:scale-105 shadow-lg"
            src={session?.user?.image}
          />
        </DropdownTrigger>
        <DropdownMenu
          className="bg-white shadow-xl rounded-lg w-56 py-2 text-gray-700"
          aria-label="Profile Actions"
          variant="flat"
        >
          {!session?.user ? (
            <DropdownItem
              textValue="Sign In"
              key="sign_in"
              className="px-4 py-2 rounded-md text-green-500 hover:bg-green-50 cursor-pointer font-bold transition"
            >
              <Link href="/login" className="flex items-center w-full h-full">
                Sign In
              </Link>
            </DropdownItem>
          ) : (
            <>
              <DropdownItem
                textValue={`Signed in as ${session.user.email}`}
                key="profile"
                className="flex flex-col gap-1 px-4 py-2 cursor-default"
              >
                <p className="text-xs text-gray-500">Signed in as</p>
                <p className="font-medium text-gray-900">
                  {session.user.email}
                </p>
                <div className="my-2 h-px w-44 bg-gray-200"></div>
              </DropdownItem>
              <DropdownItem
                textValue="Sign Out"
                key="logout"
                className="px-4 py-2 rounded-md text-red-500 hover:bg-red-50 cursor-pointer font-extrabold transition"
                onPress={() => signOut()}
              >
                Sign Out
              </DropdownItem>
            </>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
