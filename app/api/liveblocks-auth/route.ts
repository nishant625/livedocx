import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { colors } from "@clerk/themes/dist/clerk-js/src/ui/foundations/colors";
import { Liveblocks } from "@liveblocks/node";
import { redirect } from "next/navigation";



export async function POST(request: Request) {
    const clerkUser=await currentUser();
  // Get the current user from your database
  if(!clerkUser) redirect('/sign-in');

  const {id,firstName,lastName,emailAddresses,imageUrl}=clerkUser;

  const user = {
    id,
    info:{
        id,
        name: `${firstName} ${lastName}`,
        email:emailAddresses[0].emailAddress,
        avatar:imageUrl,
        color:getUserColor(id),
    }
  }

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email,
      groupIds:[], // Optional
    },
    { userInfo: user.info },
  );

  return new Response(body, { status });
}