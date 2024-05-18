import React from 'react'

function Me() {
    return (
        <div>
            <h1 className="title">About Me</h1>
            <section id="about" className="section">
                <p>
                    I am a (almost) full stack web developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript and React. I am also learning now Typescript and the Next.js framework. I am always eager to learn new technologies and improve my skills.
                </p>
            </section>
            <section id="personal" className="section">
                <p>
                    I am currently on my last year of CS at University of Padua. I am planning on taking a gap year to give full focus to my business, because I really want to make it grow.

                    In my free time I like to scuba dive, play videogames or go on a bike ride. I am also a cybersecurity passionate and I am always looking for new ways to improve my security and privacy.
                </p>
            </section>

            <section id="music" className="section">
                <h2 className="title">Music I Love</h2>
                <p>
                    If you don't care about anything else, and just want to know what music I like, here you are, consider this a "safe space":
                </p>

            </section>
        </div>
    )
}

export default Me