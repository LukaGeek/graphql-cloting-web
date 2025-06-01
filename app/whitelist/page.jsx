"use client";

import { useEffect, useState, useMemo } from "react";
import AdminPageMain from "../components/AdminPage";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableCell, TableBody } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, GET_WHITELIST } from "@/graphql/queries";
import { ADD_TO_WHITELIST, REMOVE_FROM_WHITELIST } from "@/graphql/mutations";

export default function Whitelist() {
  const [userSearch, setUserSearch] = useState("");
  const [whitelistSearch, setWhitelistSearch] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  const { data: usersData } = useQuery(GET_USERS);
  const { data: whitelistData, refetch } = useQuery(GET_WHITELIST);
  const [addToWhitelistMutation] = useMutation(ADD_TO_WHITELIST);
  const [removeFromWhitelistMutation] = useMutation(REMOVE_FROM_WHITELIST);

  const users = usersData?.users ?? [];
  const whitelistedUsers = whitelistData?.whitelist ?? [];

  useEffect(() => {
    if (status === "loading") return;
    if (session?.user?.email !== "lukalinchiki0@gmail.com") {
      setTimeout(() => router.push("/"), 0);
    }
  }, [session, status, router]);

  async function addToWhitelist(user) {
    await addToWhitelistMutation({
      variables: {
        name: user.name,
        email: user.email,
      },
    });
    refetch();
  }

  async function removeFromWhitelist(email) {
    await removeFromWhitelistMutation({
      variables: { email },
    });
    refetch();
  }

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.email.toLowerCase().includes(userSearch.toLowerCase())
    );
  }, [users, userSearch]);

  const filteredWhitelist = useMemo(() => {
    return whitelistedUsers.filter((user) =>
      user.email.toLowerCase().includes(whitelistSearch.toLowerCase())
    );
  }, [whitelistedUsers, whitelistSearch]);

  return (
    <AdminPageMain>
      <div className="flex flex-col lg:flex-row gap-8 p-8 min-h-screen text-gray-900">
        <Card className="p-6 w-full lg:w-1/3 h-[800px] overflow-y-auto rounded-3xl shadow-xl border border-gray-300 bg-white/80 backdrop-blur-lg custom-scrollbar">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">User Emails</h2>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-2 text-gray-500" size={20} />
            <Input
              type="text"
              placeholder="Search users..."
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              className="pl-10 py-3 w-full border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <ul>
            {filteredUsers.map((user) => (
              <li
                key={user.email}
                className="border-b border-gray-200 p-3 flex justify-between items-center rounded-lg transition hover:bg-gray-200 hover:scale-105"
              >
                {user.email}
                <Button
                  size="sm"
                  className="bg-gray-700 hover:bg-gray-900 text-white transition shadow-md rounded-xl"
                  onClick={() => addToWhitelist(user)}
                >
                  <Plus size={16} />
                </Button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="h-[800px] p-8 w-full lg:w-2/3 rounded-3xl shadow-xl border border-gray-300 bg-white/80 backdrop-blur-lg overflow-hidden">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Whitelisted Users
          </h2>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-2 text-gray-500" size={20} />
            <Input
              type="text"
              placeholder="Search whitelisted users..."
              value={whitelistSearch}
              onChange={(e) => setWhitelistSearch(e.target.value)}
              className="pl-10 py-3 w-full border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="overflow-y-auto max-h-[620px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <Table className="w-full">
              <TableBody>
                {filteredWhitelist.map((user) => (
                  <motion.tr
                    key={user.email}
                    className="border-b rounded-lg border-gray-200 hover:bg-gray-200 hover:scale-102 transition-transform"
                  >
                    <TableCell className="px-6 py-4 text-gray-900 font-medium">
                      {user.name}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-gray-700">
                      {user.email}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        className="bg-red-500 hover:bg-red-700 text-white shadow-md transition rounded-xl"
                        onClick={() => removeFromWhitelist(user.email)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </AdminPageMain>
  );
}
