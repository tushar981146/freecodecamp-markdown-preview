import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import hd from './assets/th.jpeg'


function App() {

  let markText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`
  

  const [counter, setCounter] = useState("")


  useEffect(() => {
    setCounter(markText);
  }, []);

  return (
    <div className="h-full w-[100vw] flex items-center flex-col bg-blue-400 scroll-auto">
      <h1 className='text-4xl mt-9 mb-39 font-bold text-black'>Markdown Previewer</h1>
      <h1 className='h-8 flex flex-row items-center bg-head-color w-[80%] pl-5 text-black'>
        <img className='w-7 h-7 mr-3 rounded' src={hd} alt="editor logo" />
        Editor
      </h1>
      <div className= "mt-0 w-[80%]">
      <textarea 
      className='bg-slate-300 overflow-auto border mt-34 resize-none h-full min-h-[50vh] w-full min-w-[100%] scroll-auto mb-36' 
      name="editor" 
      id="editor"
      value={counter}
      onChange={(e) => setCounter(e.target.value)}
      ></textarea>
      </div>
     
      <h1 className='text-6xl mb-27 font-bold text-center mb-10 text-black'>Preview</h1>
      <h1 className=' h-8 flex flex-row items-center bg-head-color w-[80%] pl-5 text-black'>
        <img className='w-7 h-7 mr-3 rounded' src={hd} alt="editor logo" />
        Editor
      </h1>
      <div className="h-[50vh] w-[80vw] overflow-auto bg-slate-300 mb-60">

      <div id="preview" className= "overflow-auto border mt-34 resize-none min-h-[20vh]  min-w-[80%]  scroll-auto ">
      <ReactMarkdown>{counter}</ReactMarkdown>
      </div>
      

      </div>

      
    </div>
  )
}

export default App