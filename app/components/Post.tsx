'use client'

import Image from "next/image"
import Link from "next/link"

import React from 'react'

const Post = ({ avatar, name, postTitle, id, Comment }) => {
  return (
    <div className="bg-white my-8 rounded-b-lg">
        <div className="flex items-center gap-2">
            <Image
                className="rounded-full"
                width={32}
                height={32}
                src={avatar}
                alt="avatar"
            />
            <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
            <p className="break-al">{postTitle}</p>
        </div>
        <div className="flex gap-4 cursor-pointer items-center">
            <Link href={`/post/${id}`}>
                <p className="text-sm font-bold text-gray-700">{Comment.length}Comentários</p>
            </Link>
        </div>
    </div>
  )
}

export default Post