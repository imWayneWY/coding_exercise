import React, {useEffect, useState} from 'react'
import MarkdownIt from 'markdown-it'
import readme from './../README.md'

const Readme = () => {
  const [md, setMd] = useState(null)
  useEffect(() => {
    fetch(readme)
    .then(res => res.text())
    .then(text => setMd(
      new MarkdownIt(
        {html: true, linkify: true}
      ).render(text)
    ))
  })
  return(<div dangerouslySetInnerHTML={{__html: md}}/>)
}

export default Readme