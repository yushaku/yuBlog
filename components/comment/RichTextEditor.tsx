import React, { useState } from 'react'
import { Editor, EditorState } from 'draft-js'

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  // const onBoldClick = (e: any) => {
  //   e.preventDefault()
  //   setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  // }
  // const onCodeBlockClick = (e: any) => {
  //   e.preventDefault()
  //   setEditorState(RichUtils.toggleCode(editorState))
  // }

  return (
    <div className=" min-h-[100px] text-2xl border-b-2 p-2">
      {/* <span onMouseDown={onBoldClick} className="cursor-pointer">
        Bold
      </span> */}
      <Editor editorState={editorState} onChange={setEditorState} />
      {/* <span onMouseDown={onCodeBlockClick} className="cursor-pointer border-2 px-4">
        code
      </span> */}
    </div>
  )
}

export default RichTextEditor
