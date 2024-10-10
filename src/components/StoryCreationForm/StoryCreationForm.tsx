"use client"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import ImageUploadInput from "./ImageUploadInput"
import { StoryData } from "@/app/(main-app)/begin-a-story/page"

const StoryCreationForm = ({
  onPostAction
}: {
  onPostAction: (data: StoryData) => Promise<void>
}) => {
  const onSubmitHandler = (data: StoryData) => {
    onPostAction(data)
  }
  const form = useForm({
    defaultValues: {
      title: "",
      openingSegment: ""
    }
  })
  return (
    <Form {...form}>
      <h1 className="text-lg lg:text-4xl font-bold mb-12"> Create a story </h1>
      <form
        className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-24"
        onSubmit={form.handleSubmit(onSubmitHandler)}
      >
        <div className="flex-grow space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title of your story" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="openingSegment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opening segment</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex flex-col lg:w-1/4 space-y-4">
          <ImageUploadInput />
        </div>
      </form>
    </Form>
  )
}

export default StoryCreationForm
