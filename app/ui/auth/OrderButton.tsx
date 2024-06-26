import { auth } from "@/app/auth";
import { db } from "@/prisma/db";
import { Button } from "@mui/material";
import Link from "next/link";

export default async function ProfileButton() {
  const session = await auth();

  const loggedInUser = session?.user?.email as string | undefined;

  if (loggedInUser) {
    const foundUser = await db.user.findFirst({
      where: { email: loggedInUser },
    });

    if (foundUser) {
      return (
        <Button
          component={Link}
          href="/profile"
          color="inherit"
          sx={{
            fontSize: "1rem",
            "@media (max-width: 600px)": {
              fontSize: "0.75rem",
            },
          }}
        >
          Ordrar
        </Button>
      );
    }
  }
  if (!session) return null;
}
