import { Button } from "../ui/button"
import { LoadingSpinner } from "../ui/spinner"
import CoverImageUpload from "./CoverImageUpload"

const StorySettingsBar = ({
  isLoading
}: {
  isLoading: boolean
}) => {
  return (
    <>
      <CoverImageUpload />
      <Button
        type="submit"
        className="bg-neon-yellow-600 w-full hover:bg-neon-yellow-800 text-white"
        disabled={isLoading}
      >
        {isLoading ? <LoadingSpinner /> : "POST"}
      </Button>
    </>
  )
}

export default StorySettingsBar
