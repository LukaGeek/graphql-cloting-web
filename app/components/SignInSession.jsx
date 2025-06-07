import { signOut, useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import Link from "next/link";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { GET_WHITELIST } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import ErrorToast from "./Toasts/ErrorToast";

export default function SignInSession() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_WHITELIST);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.refresh();
  };

  if (loading || status === "loading")
    return <Loader className="animate-spin" />;
  if (error)
    return <ErrorToast message={`Error loading whitelist: ${error.message}`} />;

  const whitelist = data?.whitelist;
  const isWhitelisted = whitelist?.some(
    (user) => user?.email === session?.user?.email
  );

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform cursor-pointer hover:scale-105 shadow-md"
            src={session?.user?.image || undefined}
          />
        </DropdownTrigger>
        <DropdownMenu
          className="bg-white shadow-2xl rounded-xl w-64 py-3 text-gray-700"
          aria-label="User Menu"
          variant="flat"
        >
          {!session?.user ? (
            <>
              <DropdownItem
                textValue="Sign In"
                key="sign_in"
                className="px-4 py-3 hover:bg-green-50 text-green-600 font-semibold transition"
              >
                <Link href="/login" prefetch={false}>
                  Sign In
                </Link>
              </DropdownItem>
              <DropdownItem
                textValue="Sign Up"
                key="sign_up"
                className="px-4 py-3 hover:bg-green-50 text-green-600 font-semibold transition"
              >
                <Link href="/register" prefetch={false}>
                  Sign Up
                </Link>
              </DropdownItem>
            </>
          ) : (
            <>
              <DropdownItem
                textValue="Username"
                key="user_name"
                className="px-4 py-2 cursor-default text-sm text-gray-500"
              >
                {session.user.name && (
                  <div className="flex gap-1">
                    <div>Username:</div>
                    <div className="text-black font-semibold">
                      {session.user.name}
                    </div>
                  </div>
                )}
              </DropdownItem>
              <DropdownItem
                textValue="Email"
                key="user_email"
                className="px-4 py-2 cursor-default text-sm text-gray-500"
              >
                {session.user.email && (
                  <div className="flex gap-1">
                    <div>Email:</div>
                    <div className="text-black font-semibold">
                      {session.user.email}
                    </div>
                  </div>
                )}
              </DropdownItem>

              <DropdownItem
                textValue="Status"
                key="user_status"
                className="px-4 py-2 cursor-default text-sm text-gray-500"
              >
                <div className="flex gap-1">
                  <div>Status:</div>
                  <div className="text-black font-semibold">
                    {isWhitelisted ? "Admin" : "User"}
                  </div>
                </div>
              </DropdownItem>

              <DropdownItem textValue="div">
                <div className="my-2 mx-2 h-px bg-gray-200" />
              </DropdownItem>

              {isWhitelisted && (
                <>
                  <DropdownItem
                    textValue="Manage Whitelist"
                    key="whitelist"
                    className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold transition rounded-md"
                  >
                    <Link
                      href="/whitelist"
                      className="block w-full"
                      prefetch={false}
                    >
                      Manage Whitelist
                    </Link>
                  </DropdownItem>

                  <DropdownItem
                    textValue="Manage Products"
                    key="products"
                    className="px-4 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-semibold transition rounded-md"
                  >
                    <Link
                      href="/admin"
                      className="block w-full"
                      prefetch={false}
                    >
                      Manage Products
                    </Link>
                  </DropdownItem>
                </>
              )}

              <DropdownItem
                textValue="Sign Out"
                key="logout"
                onPress={handleSignOut}
                className="px-4 py-2 hover:bg-red-50 text-red-600 font-semibold transition"
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
