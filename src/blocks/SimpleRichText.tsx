import RichTextParser from '@/utils/RichTextParser'
import React from 'react'

export default function SimpleRichText({body}:{body:any}) {
  return (
    <div className='p-10'>
      <RichTextParser className={''} content={body} customClassNames={''}/>
    </div>
  )
}
