import { getServerSession } from "next-auth"
import StoryCreationForm from "@/components/StoryCreationForm/StoryCreationForm"
import connectToDB from "@/utils/connectToDB"
import Story from "@/models/story"
import { authConfig } from "../../api/auth/[...nextauth]/route"

export interface StoryData {
  title: string
  openingSegment: string
}

const createStory = async ({
  authorId,
  title,
  openingSegment
}: {
  authorId: string
  title: string
  openingSegment: string
}) => {
  try {
    const story = new Story({
      authorId,
      title,
      openingSegment
    })
    await story.save()
  } catch (error) {
    throw new Error("Failed to create story")
  }
}

const onPostAction = async ({ title, openingSegment }: StoryData) => {
  "use server"
  try {
    await connectToDB()
    const session = await getServerSession(authConfig)
    if (!session || !session.user?.id) {
      throw new Error("User session not found")
    }
    await createStory({
      authorId: session.user.id,
      title,
      openingSegment
    })
  } catch (error) {
    console.error("Failed to post a story:", error)
  }
}

export default async function StoryCreationPage() {
  return (
    <section className="w-full h-full flex flex-col">
      <StoryCreationForm onPostAction={onPostAction} />
    </section>
  )
}
