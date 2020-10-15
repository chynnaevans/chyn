![2019-20 regular season field goals](https://64.media.tumblr.com/bda6701522b1d9ba8591fd69bc19c693/f6d389176a4f0596-6c/s540x810/9b0eeb96251de0ae09d25afeac4795351611ae18.png)

# 2019-20 Regular Season FG%
## Aug 2020

On today’s episode of “Chynna Just Wants To Start Work But Has To Wait 2-4 Months For Her Visa”, I whipped up a visual analysis of the top field goal percentages for the 2019-20 NBA regular season.

Inspired by Kirk Goldsberry’s [top scorers](https://twitter.com/kirkgoldsberry/status/1295378753875357696) graphic posted yesterday, I created this visualisation to check out the *best* scorers.

The zones used are the NBAs classifications of left/right/centre, and in-the-paint/mid-range/3pt/back court. In order to combat against ultra low attempts, I filtered out any player who shot less than the median attempt.

Coincidentally, Kirk Goldsberry posted the [exact same analysis](https://twitter.com/kirkgoldsberry/status/1295757051029643264) 10 minutes after I finished mine! He’s used hard coded values for min attempts to be considered. 

I’m very happy to see some Brooklyn representation!!!!!!

---

[![How Apple created music's best device and then ruined it](http://img.youtube.com/vi/V_gQ6n1mcZA/0.jpg)](http://www.youtube.com/watch?v=V_gQ6n1mcZA "How Apple created music's best device and then ruined it")

# I just want iPods back
## June 2020

I came across this video mid-Youtube rabbithole and was hit hard by the nostalgia and longing to listen to my music distraction-free. Give the video a watch, or, just continue to read my unsolicited opinion!

### Why did the iPod go out of fashion?

This video very aptly explains why Apple’s iPod was the single greatest music listening experience that we’ve experienced: you can plug into distraction-free music, wherever you go.

So why did it die?

When the iPod touch came out, it quickly replaced its internet free predecessors. We had a shiny new gadget, we wanted it. We wanted all of the functionality we could muster, crammed into one device. But do consumers always know best? Given the choice to switch back to an iPod Nano, I would take it.

### I may be crazy, but give me a Nano

I’ll be the first to admit that I love Spotify. The recommendations and personalisation are unprecedented and make the listening experience incredibly seamless. In an age without radio, Spotify is the saviour we need to discover new music and support small artists. But you have to ask yourself, how often are you truly disconnected from your phone?

For me, I’ll never be further than 1 AirPod connectivity radius from my phone. If someone wants to reach me, they can. I’ve been conditioned to answer calls, texts, and emails immediately, no matter the time or day. I wholeheartedly believe that this is to do with the fact that **everyone** is connected. You can be sure – to some level of certainty – that the person you’re texting will see the message within 5 minutes. Is it rude to respond later? No. Will you feel guilty for not responding straight away? Yes.

This has a huge impact on social development and mental health. If you grow up believing that you must be at the beck and call of anyone – even strangers – on the other side of your phone, it will undoubtedly translate into real life. Gen Z is famous for simultaneously being aggressive and fearless activists while being terrified to raise simple concerns about a meal to their waiter. We have been conditioned to put ourselves last. If we were to break the chain of absurd interconnectedness and relieve the expectations of always being available, we would have a much better chance of forgiving ourselves for taking a moment to focus on us. 

### But how could the Nano succeed?

The solution is two-fold: change the marketing strategy, and increase functionality.

As I write this, I realise that now might be the time for Spotify to enter the game of audio devices. What the consumers love is the ability to stream & discover music, audiobooks, and podcasts, with pseudo-unlimited storage. 

### Marketing

There are two distinct target audiences for this device: Boomers & Zoomers. Okay, I actually mean (Boomers + Gen X) & Zoomers, but it sounded cooler the first way.

In my experience, Gen X & Boomers enjoy clean and simple tech. They want to listen to their music. That’s it. Targeting towards them would look like nostalgia, simplicity, and discovery. Keep the experience similar to what they’ve had before but play up the disconnectedness.

These generations are generally late-adopters who rely on the recommendations of their (grand)children. That’s where the Gen Z come to play.

Gen Z want simple. They want retro. They want to care about their mental health and the wellbeing of others. Give them the option to jump back in time to an mp3 player that will allow them to be completely disconnected. Listen to your music without the fear of getting a call or text. Play up the long-term goal of releaving the pressure to be on standby every second of every day. Open up discussions around the benefit this could provide & let them recognise these expectations within themselves. Your Gen Z will be your early-adopters, and eventually influence the Gen X & Boomers.

### The device

Design is next; designing an updated, successful mp3 device will be tough. Perhaps seperated mp3 players are cyclical with the fashion. Regardless, fashion has brought us bumbags and handbags for all genders. Now more than ever, we don’t care about the number or size of devices we’re carrying around. 

The physical device will need to be sustainably and ethically produced. Gen Z want to reduce waste and ensure fair trading and construction processes. Give an insight into how the devices are made. Employ underprivileged or underserved communities in good positions for fair wages. These devices will be more expensive, but it’s necessary.

### The software

Functionality should be at a minimum, but equatable to a Spotify or Apple Music app on your smartphone. This device can be supremely optimised for audio playback and discovery. Here’s my vision:

Load time is next to nothing. We cache not only the songs that the user generally listens to, but also the songs that we think the user might want to listen to. We need to find an optimal starting point (what song/playlist we expect the user to listen to first) and press the user to start there. This will allow us to deliver the super-low latency experience almost every time. 

We optimise the cache based on the listening habits of the user. If this user historically listens to the same song/s on repeat, we use an LSU (least recently used) cache. This will delete the least recently used files and allow us to constantly keep in memory the songs that we believe the user will want to access in the near-term future. Similarly, if a user generally listens to entire playlists, we use a MRU (most recently used) cache which will bias towards discarding the most recently listend to music. 

Extrapolating listening habits to premptively load and cache songs will be another huge part of a successful stand-alone mp3 device. Imagine a device that would allow you to continue on your Taylor Swift deepdive while you’re stuck in the NYC subway for 30 minutes. This would be revolutionary to oh-so-many New Yorkers who currently need to make sure all of their audio is downloaded prior to subway trips. 

We can use an exploratory method to determine the current listening path of the user. If you imagine a tree data structure and we’re traversing using an A\* algorithm. The head node is the current song, and we generate its children based on historic listening habits of the user, along with those of the wider listening community. If I’m listening to Baby by Justin Bieber (Ft. Ludacris), it’s pretty likely that my next song will either be: old school JB, newer JB, other nostalgic songs from the late 2000s, or back to my normal listening habits. With each additional song that I make a decision on (ie. listen to or skip), we become more certain about what my next choice will be. By doing this, and expanding the cache in an A\* kind of way, we can try to keep all songs of interest in memory, all the time.

We need Spotify for one main reason: data. This optimised caching system will only work if we have incredible amounts of data. To get this data, we need trust, time, and good data storage and modelling practices. Starting as a new company trying to gather this data would either be incredibly expensive, or incredibly time consuming. 

Can someone please build this?? (and can I pls help???)