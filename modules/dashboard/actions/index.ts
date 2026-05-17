"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { revalidatePath } from "next/cache";

type Language = "javascript" | "python" | "c" | "cpp" | "html";

export const toggleStarMarked = async (
  playgroundId: string,
  isChecked: boolean,
) => {
  const user = await currentUser();
  const userId = user?.id;

  if (!user?.id) {
    throw new Error("User Id is Required");
  }

  try {
    if (isChecked) {
      await db.starMark.create({
        data: {
          userId,
          playgroundId,
          isMarked: true,
        },
      });
    } else {
      await db.starMark.delete({
        where: {
          userId_playgroundId: {
            userId,
            playgroundId,
          },
        },
      });
    }

    revalidatePath("/dashboard");

    return {
      success: true,
      isMarked: isChecked,
    };
  } catch (err) {
    console.error("Error updating star mark:", err);

    return {
      success: false,
      error: "Failed to update star mark",
    };
  }
};

export const getAllPlaygroundForUser = async () => {
  const user = await currentUser();

  try {
    return await db.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        Starmark: {
          where: {
            userId: user?.id!,
          },
          select: {
            isMarked: true,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const createPlayground = async (data: {
  title: string;
  language: Language;
  description?: string;
}) => {
  const user = await currentUser();

  const { language, title, description } = data;

  try {
    const playground = await db.playground.create({
      data: {
        title,
        description,
        template: language,
        userId: user?.id,
      },
    });

    revalidatePath("/dashboard");

    return playground;
  } catch (err) {
    console.error(err);
  }
};

export const deleteProjectById = async (id: string) => {
  try {
    await db.playground.delete({
      where: { id },
    });

    revalidatePath("/dashboard");
  } catch (err) {
    console.error(err);
  }
};

export const editProjectById = async (
  id: string,
  data: {
    title: string;
    description: string;
  },
) => {
  try {
    await db.playground.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard");
  } catch (err) {
    console.error(err);
  }
};

export const duplicateProjectById = async (id: string) => {
  try {
    const originalPlayground = await db.playground.findUnique({
      where: { id },
    });

    if (!originalPlayground) {
      throw new Error("Original playground not found");
    }

    const duplicatedPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (Copy)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: originalPlayground.userId,
      },
    });

    revalidatePath("/dashboard");

    return duplicatedPlayground;
  } catch (err) {
    console.error(err);
  }
};