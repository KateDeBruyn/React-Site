import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Theory.css'
import GreenRoses from '../../assets/shutterstock_185445815.jpg';


export default class DevBlog_3 extends Component {
render(){

    const cubismMan = 'https://docs.live2d.com/en/cubism-sdk-manual/use-framework-web/';
    const htmlRender = 'https://stackoverflow.com/questions/33973757/how-can-i-render-html-from-another-file-in-a-react-component';
    const iframes = 'https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component';
    const typescriptDoc = 'https://www.typescriptlang.org/';
    const tsToJs = 'https://stackoverflow.com/questions/12678716/transforming-typescript-into-javascript';
    const tsCompiling = 'https://code.visualstudio.com/docs/typescript/typescript-compiling';

    return (
      <div className='content' style={{backgroundImage: `url(${GreenRoses})`}}>
        <article className='foreground'>
        <h1 className='main-heading'>Dev Blog Three</h1>
            <section>
            <date className='section-title'>06/06/2023</date>    
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
