import { convertToRaw, Editor, EditorState, RichUtils } from 'draft-js'
import React, { useState } from 'react'
import { addCategory, createCategory, submitComment } from '../../apis'
import { FaCode, FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'

const CommentForm = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const rawData = convertToRaw(editorState.getCurrentContent())
  // console.log(rawData)
  console.log(rawData)
  const userAvatarLink = ''

  const handleSentComment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('send comment')
    createCategory()
  }

  const onCodeBlockClick = (e: any) => {
    e.preventDefault()
    setEditorState(RichUtils.toggleCode(editorState))
  }

  return (
    <form method="post" onSubmit={handleSentComment} className="w-[100%] mb-8 text-[20px] flex items-center gap-10">
      <div>
        {userAvatarLink ? (
          <Image src={userAvatarLink} alt="avatar user" className=" rounded-full" width={100} height={100}></Image>
        ) : (
          <FaUserCircle className="text-5xl" />
        )}
      </div>

      <div className="w-[100%] ">
        <div className="border-b-2 text-2xl w-[100%] mb-2">
          <Editor editorState={editorState} onChange={setEditorState} />
        </div>
        <span
          onClick={onCodeBlockClick}
          className="flex items-center p-2 gap-3 w-[110px] dark:hover:text-dark_accentColor cursor-pointer hover:border-b-2 hover:border-dark_accentColor"
        >
          <FaCode />
          code
        </span>
        <input type="submit" value="send" className="float-right cursor-pointer button px-12" />
      </div>
    </form>
  )
}

export default CommentForm
