import React, { Component } from 'react';
import '../styles/Theory.css'

//Imagery
import Layers from '../assets/theory/Layers.png';
import Niwwu from '../assets/theory/Niwwu.png';
import NiwwuBlanket from '../assets/theory/NiwwuBlanket.png';
import NiwwuRigging from '../assets/theory/NiwwuRigging.png';
import Tomari from '../assets/theory/Tomari.jpg';

export default class Essay extends Component {
  render() {
    return (
      <div>
        <article>
        <section>
              <h3>Essay</h3>
              <div className='paragraph'>
                <p>Over the years, 2D and 3D modelling and animating has seeped into many different industries. 
                  Typically, we would find modelling and animation closely tied to film and game design industries. 
                  However, in more recent years, modelling and animation has made its way to the internet through 
                  livestreaming and media platforms like YouTube and Twitch. Vtubing and Vtubers are one of the 
                  best examples to show the ways in which this internet art form functions and exists and what it 
                  means for modelling and animation industries. Vtubers are defined as 'virtual YouTubers', content
                  creators who use virtual 2D or 3D avatars as representations of themselves or a character they portray. 
                  Vtubers are not limited to YouTube, and many create content on other livestreaming platforms like Twitch. 
                  In this text I will be analysing a Vtuber rig from the character Niwwu, a Twitch streamer who has dawned 
                  the persona of a strawberry cat girl who owns a cat café.
                </p>
                <img
                class=""
                src={Niwwu}
                alt="A screenshot of the vtuber, Niwwu"
                />
                <p>
                This is Niwwu's typical character model, also referred to as avatar. She has strawberry pink hair and 
                cat ears and wears a Japanese inspired maiden outfit. Here Niwwu is against a backdrop of her neko, cat, 
                café desserts, the context in which this streamer exists. Vtuber's often dawn a fictional persona and 
                perform as this character in the context of their lore. Further on in this analysis I will touch on 
                identity and gender expression - two theories that are being critically looked at in studies on Vtubers. 
                I have come across a number of academic texts on Vtubers in my research component of this passion project 
                and find I am fascinated with the formation of identity and gender performance in Vtuber character development. 
                However, Niwwu will be analysed first to address the conceptual, aesthetic, and technical underpinnings of 
                creating Vtuber characters. Vtuber characters are forms of art that cannot exist without the internet and 
                who cannot be experienced without harnessing the internet.
                <br/>
                Below is a still taken from one of Niwwu's YouTube videos showing her working on rigging her mouth in Live2D 
                Cubism, an animating software typically used for vtuber rigs. In the top left corner, you can see the mesh 
                of the mouth, her lower lip, that she is working on by deforming into different shapes. To the left of that 
                is a version of her model that she was streaming with at the time of this video. To the right is what her 
                usual character model looks like.
                </p>
                <img
                class=""
                src={NiwwuRigging}
                alt="A screenshot of the vtuber, Niwwu"
                />
                <p>
                Nearly each feature of vtuber models is drawn separately from one another so that it can be rigged and 
                animated independently. For example, the mouth is usually divided into the top lip, top teeth, tongue, 
                inside the mouth, bottom teeth, and the bottom lip. Each of these features are rigged using meshes that 
                help deform the feature in different shapes. I learned that the shapes the mouth deforms between are 
                usually based on the shapes real-life mouths make when pronouncing E, A, O, and U. Animators also 
                include a sad, neutral, and happy smile that the model's mouth can deform to. In the picture above, 
                the grid with the green dots shows all the key deformations Niwwu has created for her mouth movement. 
                Personally, the biggest ongoing technical challenge for me is the head as a whole - warping and deforming 
                the hair, eyebrows, eyes, nose, and mouth to the right angles and positions. The 'micro' rigging, like 
                the eyes and mouth, have been slightly easier because they are smaller to control. On the following page 
                is an example of what and how features are typically separated and thus animated individually. 
                </p>
                <img
                class=""
                src={Layers}
                alt="Different facial features on different layers from a vtuber anatomy drawing"
                />
                <p>
                Every step of the design process in making a vtuber model is important. Good drawing sets you up for 
                better animating, and better animations set you up for smoother facial tracking output. You can get the 
                most out of your expressions if every step of the design process was done with care. And what this is 
                ultimately important for is the viewers who will engage with your character.
                <b/>
                I feel it is easy to connect with most, and typical, vtubers because the way in which they are animated 
                humanises them. The concepts and aesthetics around Vtubers speak to this humanisation. Many vtubers 
                showcase themselves as anime styled characters with the general aesthetic leaning towards manga - Japanese 
                comic book art. Characters drawn and presented in this way are usually cute, lively, spirited and over 
                exaggerate their unique characteristics. Many are also sultry with certain features like slanted eyes to 
                emphasise this. But not only are most vtuber model's 'human' in presentation, their movement, physics, 
                and expressions give life to any 2D or 3D avatar too and this is how viewers connect with the vtuber. 
                </p>
                <p>
                Niwwu connects with her audience by falling into the kawaii, cute, category of vtubers. She is a cute, 
                almost chibi styled character that is represented by her big, round strawberry eyes, puffy pigtails, 
                and small body. Not only does she exaggerate her features, but she emphasises a lot of her lore in 
                her character too. She also speaks in a cute heightened voice to emphasises her kawaii aesthetic. 
                Her design is based on a mixture between a strawberry and a cat, and she uses this to differ and 
                contextualise herself to her viewers and the larger vtubing community. Not all vtubers follow these 
                conventions, but there are general trends that prospective vtubers, like myself, can follow when creating a new model.
                <br/>
                I chose to analyse Niwwu not only because of her technical ability, concept, and aesthetic, but mainly because 
                of the interactions you as a viewer can have with her personally. This is where internet as a medium plays 
                an important role. Niwwu exists on platforms like Twitch and YouTube. On Twitch you can watch her livestream, 
                talk to her and engage with the model if you have an internet connection. Thus, the internet facilitates the 
                experience you can have with this artwork as the same engagements the platforms and technology offer could not 
                be had in real life or in person. I also define Niwwu as an artwork not only because of the model's design, 
                but because of the nuanced character development that accompanies and brings life to the drawn and animated art. 
                </p>
                <p>
                Niwwu has many ways in which you can engage with her during her livestreams. Having an internet connection 
                allows you to watch Niwwu live on Twitch and accumulate Twitch's in-channel currency called channel points. 
                The longer you watch, the more points you gain and are able to spend. Channel points are spent to redeem 
                specific interactions with the streamer or the stream itself. Niwwu has numerous redemptions that allow 
                viewers to physically change the way she looks or offer physical interactions. Some of her interactions 
                include putting a moustache on her face or a parrot, cat or mini Niwwu on her head. Viewers can virtually 
                wrap her up in a blanket, throw cake at her, have a hand pet her head, make her wear a hat, make her bald, 
                and put her in jail. Below is a screenshot of Niwwu in a blanket after a viewer redeemed that interaction.
                </p>
                <img
                class=""
                src={NiwwuBlanket}
                alt="A screenshot of the vtuber, Niwwu"
                />
                <p>
                The internet allows for these unique interactions and engagements between Niwwu and her community, and on 
                a more broader level, between an artwork and its audience. Niwwu's artistry reminds me of what Carrier 
                (2020) notes, “the next generation of artists will very likely work for the internet more than for the 
                aura of the original”. In Niwwu's context, the aura of her original artwork, her character, actually only 
                exists online. So, I argue that the next generation of artists not only work on and for the internet, 
                but their original and its aura are bound to the internet already, like in the context of vtubers.
                </p>
                <p>
                The other topic I would like to address now is that of vtuber identity and gender expression, specifically 
                focusing on the latter. I wanted to include this in the analysis because I feel it is another way in 
                which the internet is being harnessed and how internet art is allowing users to express themselves. The 
                rise of Vtubers over the past 7 years has brought about interesting discussions over theories of online 
                body representation, identity construction, and gender performance. This text will take a closer look at 
                certain theoretic avenues surrounding Vtubers, particularly focusing on gender performance. I looked at 
                Tomari Mari, a male vtuber who presents themselves as a female character. This text will examine Tomari 
                Mari's character model to address thoughts and questions around gender expression in Vtubing.
                </p>
                <img
                class=""
                src={Tomari}
                alt="A screenshot of the vtuber, Niwwu"
                />
                <p>
                Above is an image of Tomari Mari, a young rabbit girl who has been described as highly sociable, polite, 
                cheerful, and feminine (Otapedia). She follows typical anime design conventions which include but are not 
                limited to fair skin, blushed cheeks, a round face with a pointed chin, a small and usually undefined 
                mouth, and large, colourful, and spirited eyes. She is performed by a Japanese male who is anonymous and 
                is part of the Babiniku group of online virtual avatars. Babiniku is a Japanese term that means 'virtual 
                female incarnation'. These avatars typically take on an anime style appearance and are referred to as 
                bishōjo, a beautiful and kawaii (cute) girl.
                </p>
                <p>
                  I feel the term 'incarnation' is perfect as it highlights some of the reasons behind babiniku vtubers by 
                  inferring the desire to embody femininity. Incarnation is an embodiment of something other. For men who 
                  may feel constricted in their real-life physical body, the accessibility of a different virtual body 
                  seems appealing. This was studied by Liudmila Bredikhina (2020) who interviewed numerous English, French 
                  and Japanese Vtubers. 16% of the English vtubers and 50% of the Japanese vtubers she surveyed were men 
                  using female rigs. Furthermore, 9% of En-Vtubers and 24% of J-Vtubers used their own male voice without 
                  modifications while 2% of En-Vtubers and 20% of J-Vtubers used voice modifications to sound female. 16% 
                  of En-Vtubers and J-Vtubers trained their voice to sound more feminine (Bredikhana 2020, pg. 2-3). The 
                  percentages show that most babiniku vtubers are performing their female characters with female sounding 
                  voices, further embodying the conventional femininity of their avatars. But it is interesting to note 
                  that a fair portion of these vtubers, especially in the context of Japanese culture, are using their 
                  natural male voices. I find this fascinating because it challenges the conventions and social norms we 
                  have around femininity and what is 'means' to be female. Do you have to sound like a female in order 
                  to be female? How does voice play a part in gender expression? Why are some men using their natural 
                  voice and others using modifications? Bredikhana's survey found that babiniku vtubers chose that 
                  orientation because they felt being female made them more desirable and they felt the need to be 
                  “released from one's physical gender identity and social norms” (Bredikhana 2020, pg. 3). She also 
                  found that voice modifications were used for privacy and anonymity reasons. So, there is more to 
                  changing the voice than just the desire to sound conventionally feminine. Perhaps there is also the 
                  element of emotional expression and the social norms that exist around gender and emotion. Women have 
                  been stereotyped to be overly emotional and public about their emotional states, typically leading to 
                  more public 'tolerance'. I say tolerance with a pinch of salt as I feel we are well aware of intolerance 
                  of women's (and men's) emotions in many cases. Men have been stereotyped to be less emotionally expressive 
                  and often face backlash when being open about their emotional states. Therefore, taking on a female persona, 
                  participating in babiniku, may enable these men to feel more comfortable in expressing themselves and their 
                  emotional states to the public. But what babiniku vtubers truly represent to me is the ability for the internet 
                  and internet art to offer spaces of gender expression.
                </p>
                <p>
                I have attempted to address both the conceptual, aesthetic and technical aspects of vtubing as an internet art 
                form as well as touch on what internet art affords humans online. The underpinning note here is how internet 
                functions as a medium to facilitate these artworks. The modelling and animation industry has become a field 
                in which art, identity, and gender performance intersect and vtubers are strong representations of this. 
                Hopefully we will see more psychological and philosophical research on vtubers as the craft grows as it offers 
                us insight into what makes us online humans.
                </p>
                <p>
                References
                <br/>
                Bredikhina, L. (2020). Designing identity in VTuber Era. Available at: https://www.researchgate.net/publication/363587218_Designing_identity_in_VTuber_Era.  Accessed: 30 March 2023.
                <br/>
                Carrier, D. (2020). The Work of Art in the Age of the Internet. Available at: https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/.
                <br/>
                Tomari Mari - Vtuber. Otapedia. Available at: https://otakumode.com/otapedia/creator/vtuber/tomari_mari.
                </p>
              </div>
            </section>
        </article>
      </div>
    )
  }
}