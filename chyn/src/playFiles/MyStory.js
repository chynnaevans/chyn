import React from 'react';
import './App.css';

import myDesign from './images/y12Designs.png';
import tumblrTheme from './images/tumblrTheme.png';
import homersLast from './images/homerslast.png';
import cs from './images/cs.png';
import bne from './images/uberbne.jpg';

class MyStory extends React.Component {
	render() {
		return(
		<div id="container">
			<div id="mainText">
				<p>You can check out more about my professional experience on my <a href="http://linkedin.com/in/chynnaevans">LinkedIn</a>. I have come into engineering in a pretty ~weird~
				way and I get alot of questions about it. Here's the story!</p>

				<br />
				<div id="mainCard">
				<h1>High School</h1>
				<p>I'll be the first to admit, I wasn't the best student in high school. In my senior years, I took physics, advanced math, home economics, art, and PE.
				Home ec was always my favourite. Not your usual mix of subjects.</p>

				<p>
				I wanted to work in fashion. My plan was to get my BFA majoring in fashion, that was the only uni course I had applied for.
				 The pic on the right is a page out of my portfolio, from my senior project.</p>

				 <p>
				 My focus was on art & home ec, with very little time left over for maths & physics. </p>

				 <p>
				 If any past, current, or future employers are reading this: I'm not like that anymore I swear lol. I just want to set the picture that I wasn't your typical STEM student.</p>

				 <p>
				 In fact, my high school withdrew me from science in year 10 without consulting me or my parents because they thought I'd be better placed in a retail course.
				 I was apparently wasting time by being in a STEM class.</p>

				</div>
				<div id="mainCard">
				<img src={myDesign} alt="4 designs from my fashion portfolio"/>
				</div>

				<div id="mainCard">
				<h1>Extra Curriculars</h1>
				<p>
				 Throughout school I played a bunch of sports; I always did at leat 1 club sport & 1 school sport. </p>

				<p>
				Any waking moment I had outside of school and sport, I spent making themes & banners (gifs/logos) for people on Tumblr.
				I used super vanilla HTML/CSS and a touch of JavaScript with huge credits to StackOverflow & copy + paste.
				</p>

				<p>
				This truly didn't help with my grades lol.
				</p>

				<p>
				I was never a rockstar coder & didn't do anything fancy. I wouldn't have been able to name you a single use for coding, let alone a coding language.
				</p>

				<p>
				I also held a few part-time jobs during high school:
				</p>
				<ul>
				<li>Basketball Ref</li>
				<li>Smoothie maker (Boost Juice)</li>
				<li>Barista (Zarraffas Coffee)</li>
				</ul>
				</div>
				<div id="mainCard">
				<img src={tumblrTheme} alt="Theme that I coded in high school" />
				</div>

				<div id="mainCard">
				<h1>Uni attempt #1</h1>

				<p>QUT's BFA(Fashion) was an incredibly exclusive course & I (unfortunately) didn't make the cut straight out of high school.</p>

				<p>I decided that the next best thing would be a Bachelor of Science with a major in Mathematics. I absolutely LOVED it, 
				but after taking an intro to statistical modelling class which was centred around Python, I realised that I <strike>wanted</strike> needed more coding in my life.</p>

				<p>
				I completed 1 semester of my BS(math) and took the second semester off. In that time, I worked as a team supervisor at Zarraffas.
				</p>

				<p>Confession: I was not ready to be in uni once I graduated high school. I wasn't committed to my study & had a 3.75 GPA on a 7.0 scale that semester.
				</p>
				</div>

				<div id="mainCard">
				<img src={homersLast} height="450px"/>
				</div>

				<div id="mainCard">
				<h1>Uni attempt #2</h1>
				<p>
				In 2016 I started my Bachelor of IT (Computer Science). I had a dual minor in Artificial Intelligence & Networks and Cyber Security.
				There weren't many girls in CS to start off with, let alone in 2 of the ~nerdiest~ minors you could choose. I was often the only girl in the class.
				</p>

				<p>
				CS was the BEST!! I made the Dean's List & graduated with distinction.</p>

				<p>
				In my first 1.5 years of the degree I was working ~25hrs a week as an assistant manager at a coffee shop. 
				At the same time, I was in 2 competitive cheer teams & was competing gymnastics.
				</p>

				<p>
				I didn't have time for clubs or extracurriculars at uni, and I didn't do any internships.
				</p>

				<p>
				My whole time at uni was about figuring out what I was interested in & have a fantastic time learning it all.
				</p>
				</div>

				<div class="mainCard">
				<img src={cs} width="670px"/>
				</div>

				<div id="mainCard">
				<h1>Uber</h1>

				<p>
				I came across a job ad for Uber Eats; I had no idea what the job description meant but knew it was an awesome opportunity to get a foot in the door.
				I wrote my resume and applied for the job in 30 minutes before I stepped into an exam. 
				</p>

				<p>
				That day, I started interviewing for the role. I got the job and started working in Sales at Uber Eats. I ended up working around the clock, while still going to uni full-time & training 3-6hrs a day for cheer and gymnastics.
				</p>

				<h2>Moving to analytics</h2>
				<p>
				I started automating manual processes for our team. Then I started networking with other sales teams & ops teams to find problems I could solve for them.
				I was trying to hustle into a more tech-y role.
				</p>

				<p>
				10 months later, I was officially moved into an operations role.
				</p>

				<p>
				I used the resources & tools that I had at my disposal to learn as much as possible about our business. 
				Every chance I could, I'd sit in on meetings, introduce myself to other teams, and conduct <i>rogue analysis</i> to help other teams.
				</p>

				<p>
				Once I found a topic that I was OBSESSED with (Uber Eats matching/dispatching) I became the subject matter expert for our region.
				I worked to understand the marketplace, products, and services that surrounded the domain & actively found ways to work with the tech team to add value.
				</p>

				<h2>Engineering</h2>
				<p>
				After working at Uber for ~1.5 years, I was about to graduate unviersity. I had no idea what software engineering was really like but I knew I wanted to work in this dispatch team.
				I worked to find an engineer internally who could help me understand what was expected from a new grad engineer & what the interviews would be like.
				</p>

				<p>
				I worked for a few months to get a better understanding of distributed systems, general coding principles, and algorithms/data structures.
				</p>

				<p>
				At the same time, I cold emailed ~30 hiring managers at Uber to try and understand what being an engineer really looked like. 
				I spoke to quite a few of them & one eventually interviewed me for his team!!
				</p>

				<p>
				I got the job in NYC (in my dream team, in my dream city!!!!!!) and moved in May 2019.
				</p>
				</div>

				<div id="mainCard">
				<img src={bne} />
				</div>
			</div>
		</div>
		)
	}
}

export {MyStory};