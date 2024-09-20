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
      <h1 className='text-4xl mb-27 font-bold text-black'>Markdown Previewer</h1>
      <h1 className='h-8 flex flex-row items-center bg-head-color w-[80%] pl-5 text-black'>
        <img className='w-7 h-7 mr-3 rounded' src={hd} alt="editor logo" />
        Editor
      </h1>
      <div className= "mt-0 w-[80%]">
      <textarea 
      className='bg-slate-300 overflow-auto border mt-34 resize-none h-full min-h-[50vh] w-full min-w-[100%] scroll-auto mb-44' 
      name="editor" 
      id="editor"
      value={counter}
      onChange={(e) => setCounter(e.target.value)}
      ></textarea>
      </div>
      {/* <h1 className='h-8 flex flex-row justify-center mb-10 text-xl font-semibold items-center bg-head-color w-[100%] pl-5 text-black'>
        <img className='w-7 h-7 mr-3 rounded' src={hd} alt="editor logo" />
        Preview
      </h1> */}

      <div className="">

<h1 className='text-4xl mb-27 font-bold text-center mb-40 text-black'>Preview</h1>
      <h1 className=' h-8 flex flex-row items-center bg-head-color w-[100%] pl-5 text-black'>
        <img className='w-7 h-7 mr-3 rounded' src={hd} alt="editor logo" />
        Editor
      </h1>
      <div id="preview" className= "bg-slate-300 overflow-auto border mt-34 resize-none min-h-[20vh] w-full min-w-[80%]  scroll-auto mb-44 ">
      <ReactMarkdown 
      className=''
      
      >{counter}</ReactMarkdown>
      </div>

      </div>

      
    </div>
  )
}

export default App

// // errors



// 6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element
// #editor's  markdown does not render correctly on window load : expected '<h1>Welcome to my React Markdown Prev…' to equal '<h1>Welcome to my React Markdown Prev…'
// AssertionError: #editor's  markdown does not render correctly on window load : expected '<h1>Welcome to my React Markdown Prev…' to equal '<h1>Welcome to my React Markdown Prev…'
//     at Proxy.h (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:531:2123)
//     at Proxy.u (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:407:130)
//     at n.strictEqual (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:556:655)
//     at n.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:159995)
//     at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:265533
//     at Kb.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:265828)
//     at CC.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:280794)
//     at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:281730
//     at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:280133)
//     at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:280203
// 7. OPTIONAL BONUS (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as <br> (line break) elements (HINT: read the Marked.js docs for this one!).
// See the marked.js options for this and other cool features : expected +0 to equal 2
// AssertionError: See the marked.js options for this and other cool features : expected +0 to equal 2
//     at Proxy.h (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:531:2123)
//     at Proxy.u (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:407:130)
//     at n.strictEqual (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:556:655)
//     at n.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:162020)
//     at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:265533
//     at Kb.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:265828)
//     at CC.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:280794)
//     at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:281730
//     at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:280133)
//     at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:280203