"use client";

import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import userAvatar from "@/assets/user.webp";
import React from "react";

const ProfilePage = () => {
  const {data,isPending } = authClient.useSession();
  if(isPending){
      return <p className="text-center mt-20">Loading...</p>;
    }
    const user = data?.user;
  return (
    <div className="container mx-auto pt-20">
      <Card className="p-8 shadow-md text-center w-8/12 mx-auto border border-indigo-500/50 shadow-indigo-200">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto relative">
          <Image
            src={user?.image || userAvatar}
            alt={user?.name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Info */}
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>

        <p className="text-gray-500">{user?.email}</p>

        {/* Button */}
        <div className="mt-6">
            <UpdateUserModal/>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
