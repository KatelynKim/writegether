import z from 'zod'

const schema = z.object({
  title: z.string().trim().min(1, {
    message: "Title is required."
  }),
  openingSegment: z.string().trim().min(1, {
    message: "Opening segment is required"
  })
})


export default schema