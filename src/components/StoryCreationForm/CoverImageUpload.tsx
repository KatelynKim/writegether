import React, { useState } from "react"
const CoverImageUpload = () => {
  const [imagePreview, setImagePreview] = useState("")

  const onImageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return <div className="w-full lg:aspect-w-1 lg:aspect-h-1">
    <input
      id="image-upload"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={onImageChangeHandler}
    />
    <label
      htmlFor="image-upload"
      className="w-full h-full justify-center items-center min-h-[100px] flex flex-col cursor-pointer border-2 border-dashed border-neon-yellow-600 bg-background lg:bg-neon-yellow-100 rounded text-black hover:bg-neon-yellow-200"
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Uploaded cover"
          className="w-full h-full"
        />
      ) : (
        <>
          <img src="/icons/photo.svg" width={40} alt="Upload cover photo" />
          <p>Upload Cover Photo</p>
        </>
      )}
    </label>
  </div>

}

export default CoverImageUpload