import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Theory.css';
import PointButton from '../components/PointsButton';
import ModernGreen from '../assets/pics/modern_floral_green.png';
import Moodboard from '../assets/Moodboard.png';


export default class Rationale extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
            <section>
            <h1 className='main-heading'>Artwork Rationale</h1>
            <section>
            <p className='paragraph'>
            Internet Art is described as forms of art that are "conceived through the internet, on the internet, and for the internet" 
            (Ricci 2020). Also known as Net Art (originally net.art), it is artwork that also have distinguishable qualities such as 
            connectivity, global reach, multimediality, immateriality, interactivity, and equality (Baumgärtel in Ricci 2020). The 
            internet is a digital and online space that is ever-growing and ever-changing and so is the art alongside it. From the end 
            of an era of art on Adobe Flash to the rise of AI masterpieces, artists are constantly finding the tools to harness the internet as their medium. 
            </p>
            <p className='paragraph'>
            The rise of 'virtual YouTubing' (vtubing) over the past 7 years has reimagined forms of certain types of art and has initiated new 
            contexts and conventions of vtuber artwork for and on the internet. Vtubers (virtual Youtubers) are people online who use a 2D or 3D 
            virtual avatars to represent themselves in digital spaces. These avatars, especially the 2D ones, are typically anime-styled characters. 
            I mentioned 'reimagined forms' of art because the historic context of these avatar artworks come from Japanese manga. While manga artwork 
            was already reimagined through film and animation industries, virtual YouTubing saw the art style become a form of self-representation 
            and now includes the art of performance. The art, the representation, and the performance have already begun adhering to conventions and 
            their contexts. Mailloux (1983) defines convention as shared practices that can be imbued with tradition, repetition, regularity, and 
            interpretation. Conventions have an interdependent relationship with context. For example, traditional conventions are based off "past 
            regularities in action" which are themselves are based off context. Action in convention has a contextual nature, and context can also call 
            upon certain conventions to be adhered to. Mailloux uses the example of meeting new people, one typically will introduce themselves over 
            and over again in a setting where multiple new people are met. This context calls for the social convention of greetings, but the convention 
            arises because of the context, thus showing an interdependent relationship.
            </p>
            <p className='paragraph'>
            Vtubers can be found on platforms like YouTube and Twitch and are often livestreaming when performing their character. A parasocial 
            convention that has risen in livestreaming is that of greeting too. Streamers will typically greet and welcome in members of chat that 
            are either regulars or newcomers. I would call this a semi-parasocial convention as relationships online, especially in the case of 
            streamers who are not met in person, are formed through virtual social connections and interactions that are not always two-ways (between 
            viewer and a media figure, the streamer). Interestingly, parasocial relationships have been described traditionally as one-dimensional 
            (Blight 2016: 9), but more recently have been considered as one-and-half-way as the communication and interaction between viewer and 
            streamer can be reciprocal (Kowert & Daniel Jr. 2021) when streamers engage with their chat (their community). Parasocial interactions 
            are understood to be a viewer’s response to a media performer in a “media exposure situation” (Dibble et al. in Blight 2016: 8). Blight 
            goes on to state that these parasocial interactions exist exclusively to the exposure of the online media figure (2016: 8), showing how 
            internet spaces, particularly in livestreaming platforms, become the exclusive online area where these interactions can only take place. 
            The internet as a medium acts not only as a tool to initiate these interactions, but the medium itself creates the space for these actions, 
            along with their conventions and the context of, to take place. On a side note, I would like to also call these interactions semi-parasocial 
            because of the streamer's tendency to respond to viewers interactions. A vtuber like Niwwu will respond with "ouch" or "hey!" when chat 
            redeems an interaction to throw something at her avatar, thus she is responding to these semi-parasocial interactions between her and her community. 
            </p>
            <h2 className='section-title'>
            You may be thinking now, "Well Keighty, that interesting and all, but what does this have to do with your artwork?"
            </h2>
            <p className='paragraph'>
            My internet art showcases these interactions and parasocial relationships that are formed in artworks mediated by the internet. 
            It also showcases what I previously mentioned about manga art being reimagined through vtuber art and performance. But before I get 
            into that, I would like to emphasise the importance of how the artwork enables self-representation. In my essay on gender identity 
            and performance in vtubers, I stated:
            </p>
            <p className='paragraph-indented'>
            "The representation of the digital body, and its sense of self, in vtubing is done through the avatar. Teo (in Van der Walt 2018: 90) 
            defines the avatar as “a public profile of the self-identity to present a chosen image”. Van der Walt furthers this by describing the 
            avatar’s image as a persona that “presents a self-representation where certain identity traits are carefully selected and presented 
            as public performance” (2018: 90). Forms of digital persona are afforded by the avatar and allow vtubers to live and perform in the 
            digital public (Taylor 2002, Byron 2022)" (De Bruyn 2023: 13).
            </p>
            <p className='paragraph'>
            The digital public and the digital self-exist because of the internet. And as a medium, the internet affords these spaces the ability 
            to allow artworks, like vtuber avatars, to become systems of online representation (okay, slow down Stuart Hall wannabe). I wanted 
            to highlight this because I feel this is incredibly powerful, and empowering for humans, thanks to the internet.
            </p>
            <p className='paragraph'>
            Back to the artwork as artwork. Baumgärtel's characteristics of internet art are key ways to investigating my own art piece. 
            Connectivity comes in the form of the interconnection of platforms, systems, applications that were used to materialise Fio. 
            The internet made all of this possible. Adobe Photoshop and Live 2D Cubism, the software I used to draw and then rig her, were 
            made available to me via the internet. The tutorials I watched to learn how to correctly draw and rig were made accessible 
            via the internet. I then used the net to actualise her and her true home, the Twitch platform, is also made accessible... 
            you get the point. Thus, Fio is an internet art piece because of her connectivity in her materialisation. Next is global reach, 
            which is made possible by Twitch. Anyone who can connect online (which is a statement that slightly contests 'global reach' 
            as not everyone can be online) can view and interact with Fio, making her the perfect net.art candidate. Third is her 
            multimediality. She is the interconnection of imagery, graphics, animation, and code (and blood, sweat, and tears from yours 
            truly). Again, the internet as her medium allows the amalgamation of these elements to produce her. Moving on to immateriality. 
            I feel that just the term 'vtuber' foregrounds her immateriality. She is virtual, she does not exist physically in the real 
            world. Interactivity has previously been discussed and I do feel that the interactions with Fio are explicit. Interactivity 
            plays a huge role in the consumption of Fio, it being one of the key ingredients to consuming her as an artwork. And finally, 
            there is equality. I find this feature a difficult one to unpack. Is she equal to other vtubers? Does she have equal rights 
            to humans? Is there equality in the accessibility of her? Ricci does not expand on what Baumgärtel means by this, so I may 
            leave these questions open-ended and unanswered, but further exploration would be important to justifying her as an internet 
            artwork by Baumgärtel's standards. 
            </p>
            <p className='paragraph'>
            But hopefully what I have provided has shown how Fio is internet art and that this part of the rationale has done a better 
            job at showing how the internet acts as the medium in which she exists (hopefully better that my first essay). 
            Finally, I conclude with how I came about creating her and what inspired me to do so. When you are done reading this, I 
            hope you find a new perspective on Fio and vtubers in general as there is a richness that the field has to offer.
            </p>
            </section>

            <section>
            <p className='paragraph'>
            I chose to do a Vtuber character as my internet art
            project because she is composed of animated artwork that exists only through my livestreams on the internet. 
            This is something we discussed when trying to define 'Internet Art'. Our class felt that it is artwork that 
            cannot exist without the internet. Vtubers originate from YouTube, the term itself means 'Viritual YouTuber'.
            Thus, vtuber artwork, the art of character design and animation, was born and only exists in online platforms that 
            require the internet. Vtubing and researching vtuber identity is currently my passion project across two of my university 
            courses so I felt Interactive Media would be a good place to showcase the practical side of the project. In my research 
            course, I have dived into vtuber gender performance and identity and it has strengthened my internet art's design process.
            </p>
            <h2 className='section-title'>Moodboard and Inspiration</h2>
            <img 
                className="wireframes-img"
                src={Moodboard}
                alt="A screenshot of the vtuber, Niwwu"
            />
            <p className='paragraph'>
            My inspiration for the artwork and subsequently the website came from various sources. The Vtuber Intro Card is what inpsired 
            my index/home page. I explain this further in my <Link to='/design' className='hyperlink'>Design section</Link>. I wanted 
            something a bit more unique than a red rose so that is what inspired the green colour. Green is quite an energising colour, 
            a quality that the vtuber character has to her. But I used darker greens to help 'calm' the areas of focus on the site as I 
            felt bright greens may be distracting when trying to read a paragraph like this. In the moodboard is a screenshot of Code Miko. 
            She is one of my biggest vtuber inspirations, though she is in 3D. For my digital prac next semester, I will be embarking on a 
            3D journey! 
            </p>
            </section>
            
            <div className='button-position-page'>
            <PointButton />
            </div>
            
            <p className='paragraph'>References</p>
            <p className='paragraph'>Blight, M. G. 2016. Relationships to video game streamers: Examining gratifications, parasocial relationships, fandom, and community affiliation online. Dissertation (Doctor of Philosophy in Communication). The University of Wisconsin-Milwaukee.</p>
            <p className='paragraph'>De Bruyn, K. 2023. Vtuber Gender Identity and Performance. Honours Research Project (Digital Humanities). The University of Witwatersrand. </p>
            <p className='paragraph'>Kowert, R. and Daniel Jr., E. 2021. The one-and-a-half sided parasocial relationship: The curious case of live streaming. <i>Computers in Human Behavior Reports</i> 4(2021), August-December: 1-7. </p>
            <p className='paragraph'>Mailloux, S. 1983. Convention and Context. <i>New Literary History</i> 14(2), Winter: 399-307.</p>
            <p className='paragraph'>Ricci, B. 2020. <i>Artland Magazine.</i> Agents Of Change: The Internet. Net Art and How The World Wide Web Has Created A New Medium. Online. https://magazine.artland.com/agents-of-change-internet-net-art-how-the-world-wide-web-has-affected-the-way-we-make-art/. 23 June 2023.</p>
            
            </section>
        </article>
      </div>
    )
  }
}
