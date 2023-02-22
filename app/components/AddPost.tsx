'use client'

import React, { useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import axios, { AxiosError } from 'axios'

import toast from 'react-hot-toast'

const AddPost = () => {

    const [title, setTitle] = useState<any>('')
    const [isDisable, setIsDisable] = useState(false)
    let toastedPostID: string


    //criar um post
    const { mutate } = useMutation(
        async (title: string) => await axios.post('/api/posts/addPost', { title }), 
        {
            onError: (error: any) => {
                if(error instanceof AxiosError) {
                    toast.error(error?.response?.data.message, {id: toastedPostID})
                }
                setIsDisable(false)
        },
            onSuccess: (data: string) => {
                toast.success("Post feito com sucesso!", {id: toastedPostID})
                setTitle("")
                setIsDisable(false)
            }
    })

    const submitPost = async (e: React.FormEvent) => {
        e.preventDefault()
        toastedPostID = toast.loading("Criando sua publicação!", {id: toastedPostID})
        setIsDisable(true)
        mutate(title)
    }

    return (
        <form onSubmit={submitPost} className='bg-white my-8 p-8 rounded-md'>
            <div className='flex flex-col my-4'>
                <textarea 
                    onChange={(e) => setTitle(e.target.value)} 
                    name="title" 
                    value={title} 
                    placeholder="O que você está pensando..."
                    className='p-4 text-lg rounded-md my-2 bg-gray-200'
                    >
                </textarea>
            </div>
            <div className={`flex items-center justify-between gap-2`}>
                <p className={`font-bold text-sm ${title.length > 300 ? 'text-red-700' : 'text-gray-700'}`}>{`${title.length}/300`}

                </p>
                <button 
                    disabled={isDisable}
                    className='text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25'
                    type='submit'
                >Criar um post
                </button>
            </div>
        </form>
    )
}

export default AddPost