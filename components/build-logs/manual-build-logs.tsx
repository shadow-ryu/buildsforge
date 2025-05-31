// components/MarkdownEditorWithToolbar.tsx
'use client'

import { useState, useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownEditorWithToolbar({
  content = '',
  onChange,
  className = '',
}: {
  content?: string
  onChange: (value: string) => void
  className?: string
}) {
  const [value, setValue] = useState<string>(content)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const updateValue = (newVal: string) => {
    setValue(newVal)
    onChange(newVal)
  }

  const insertAtCursor = (insertText: string, wrap?: [string, string]) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = textarea.value.slice(start, end)
    const insertContent = wrap
      ? `${wrap[0]}${selected || insertText}${wrap[1]}`
      : insertText

    const updated =
      textarea.value.slice(0, start) +
      insertContent +
      textarea.value.slice(end)

    updateValue(updated)
    // restore cursor
    setTimeout(() => {
      textarea.focus()
      textarea.selectionStart = textarea.selectionEnd = start + insertContent.length
    }, 0)
  }

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="editor">
          <div className="flex gap-2 flex-wrap mb-2">
            <Button onClick={() => insertAtCursor('Heading', ['# ', ''])}>H1</Button>
            <Button onClick={() => insertAtCursor('Heading', ['## ', ''])}>H2</Button>
            <Button onClick={() => insertAtCursor('**bold**', ['**', '**'])}>Bold</Button>
            <Button onClick={() => insertAtCursor('*italic*', ['*', '*'])}>Italic</Button>
            <Button onClick={() => insertAtCursor('inline code', ['`', '`'])}>Inline Code</Button>
            <Button onClick={() => insertAtCursor('```js\ncode block\n```')}>Code Block</Button>
            <Button onClick={() => insertAtCursor('- List item\n- List item')}>List</Button>
            <Button onClick={() => insertAtCursor('![alt text](https://example.com/image.png)')}>Image</Button>
            <Button onClick={() => insertAtCursor('[Link text](https://example.com)')}>Link</Button>
          </div>
          <Textarea
            ref={textareaRef}
            rows={20}
            value={value}
            onChange={(e) => updateValue(e.target.value)}
            className="w-full border p-4 font-mono text-sm"
            placeholder="Write your markdown here..."
          />
        </TabsContent>

        <TabsContent value="preview">
          <div className="prose prose-neutral dark:prose-invert max-w-none p-4 border rounded-md">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
