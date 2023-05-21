'use client'

import { ChangeEvent, useState } from 'react'

import Image from 'next/image'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files?.length) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="hidden"
      />

      {!!preview && (
        <Image
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
          width={1280}
          height={720}
        />
      )}
    </>
  )
}
