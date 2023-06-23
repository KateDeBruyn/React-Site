import React, { Component } from 'react'

export default class DevBlog_2 extends Component {
render(){

    const cubismUrl = 'https://docs.live2d.com/en/cubism-sdk-tutorials/sample-build-web/';
    const cubismMan = 'https://docs.live2d.com/en/cubism-sdk-manual/use-framework-web/';
    const htmlRender = 'https://stackoverflow.com/questions/33973757/how-can-i-render-html-from-another-file-in-a-react-component';
    const iframes = 'https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component';
    const typescriptDoc = 'https://www.typescriptlang.org/';
    const tsToJs = 'https://stackoverflow.com/questions/12678716/transforming-typescript-into-javascript';
    const tsCompiling = 'https://code.visualstudio.com/docs/typescript/typescript-compiling';


    return (
      <div className='content' style={{backgroundImage: `url(${GreenRoses})`}}>
        <article className='foreground'>
        <h1 className='main-heading'>Dev Blogs</h1>
            <section>
            <h2 className='section-title'>23/05/2023</h2>
            <p className='paragraph'>
            Initially I have felt React is a bit overwhelming, but like Andre said, it will be for a while.  
            React's component-based architecture and the virtual DOM intrigued me. Andre was clear and helped me 
            understand how to set up a React project, using tools like Create React App, and 
            getting acquainted with JSX syntax. The first component, the nav bar, showed React's declarative nature.
            Andre then showed us routing and navigation, using popular libraries like React Router. I 
            learned how to set up routes and navigate between different views within my application.
            I discovered the advantages of component-based styling and how it can enhance reusability and 
            maintainability in the project.
            </p>
            <p className='paragraph'>
            I did a bit of research around React and came across optimisation which Andre never showed us.
            Some YouTube tutorials that I browsed through showed React Hooks, context API, lazy loading, 
            code splitting, and memoization. You can optimise performance by minimising unnecessary re-renders 
            and making efficient use of React's reconciliation algorithm. Perhaps I'll look at that for the exam if I feel 
            my site is slow.
            </p>

            <section>
            <h2 className='section-title'>30/05/2023</h2>
            <p className='paragraph'>
            I found that you can build web samples with the <Link to={cubismUrl} className='hyperlink'>Live 2D Cubism SDK for Web </Link> 
            which may be very helpful in showcasing my internet artwork. The only issue so far is that it is in TypeScript rather than JS.
            But it offers something similar to what I'm looking for, an interface where the vtuber character is following the cursor showing 
            how it is animated. 
            <img className="wireframes-img"
                src={Live2D}
                alt="A screenshot of the Cubism Index Page showing the Vtuber Model that can follow the cursor."
                />
            </p>
            </section>
            
            </section>
            <section>    
            <h2 className='section-title'>06/06/2023</h2>
            <p className='paragraph'>
            I gave the Cubism another try after doing some research on various ways to transpile 
            TypeScript to JavaScript. I feel it’s far too advanced for me at this point, so I will 
            redirect my attention to getting a WebGL program running with the model I’m currently 
            making. I came across various sources explaining different methods. I couldn’t figure out 
            the TypeScript to JavaScript conversion so I tried to work with the index page html file that Cubism 
            offers. I first copied over its contents into my Home page html file but no luck there. I found another 
            method that allows you to import html files into your JavaScript file using iframes and 
            sources. This did not work either, but I got to see how iframes work and I feel I may be 
            using that for the WebGL program I make in Unity. It may be a useful syntax tag to know. It 
            means inline frame and is used to embed another document within the current file. These were some of 
            the places I searched for answers:
            <br/>
            <Link to={cubismMan} className='hyperlink'>Cubism Manual</Link>
            <br/>
            <Link to={htmlRender} className='hyperlink'>Rendering html doc in React</Link>
            <br/>
            <Link to={iframes} className='hyperlink'>Finding out about iframes</Link>
            <br/>
            <Link to={typescriptDoc} className='hyperlink'>TypeScript documentation</Link>
            <br/>
            <Link to={tsToJs} className='hyperlink'>TypeScript to JS</Link>
            <br/>
            <Link to={tsCompiling} className='hyperlink'>VS TypeScript Compiling</Link>
            <br/>
            </p>
            </section>
        </article>    
      </div>
    )
    }
}
