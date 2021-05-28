---
title: Beta 0.1 and general update
categories:
- news
- releases
date: 2021-05-29 00:26:40
updated:
tags:
- news
- beta
- release
thumbnail: thumbnail_wav2bar_showcase.jpg
---


Hi!

The first beta of Wav2Bar (0.1) has been released a month ago. In this post I will talk about the first impressions I have on this very first release, and give you an update on what you can expect in the future.

# Wav2Bar 0.1 is out

First things first, Wav2Bar 0.1 has been released in April 2021. This first beta includes everything that was originally intended to be in the final version (minus great UI). Allongside the package release, I also made a small showcase video about the current possibilities of the software (which you can watch [here](https://youtu.be/NWCe2zKY8Wo "Wav2bar Showcase video") if you haven't).

In this first beta, you will probably notice the user interface could really use some improvements, and that's normal. I firstly focused on having something that works, before diving too much in the UI (before working well, it has to work!). It will be improved throughout the next betas gradually. You probably also noticed that the video export can be very slow. I am aware of this problem, and while I have some ideas to try reducing it a tiny bit, it probably will stay like that for a while if not forever.

# Answer to some feedback I received

I didn't expect much feedback on the first release, especially as it has not been widely shared (a few social media posts and some shared links on Discord). A lot of commercial tools, online generators from templates and tutorials for these exists on the Internet, which makes it very difficult to be viewed anyway.

Firstly I would like to give many thanks to the few people that tried it and provided direct feedback as well as some kind words about the project. It is very fullfilling to know it is helpful to some people! I also want to thanks those who stared the project on GitHub, that's not something I expected and it's also very motivating to see people interested in the project.

Now, I also got some suggestions that I would like to share and talk about. Someone on GitHub suggested a Linux CLI for the tool. While this is just a too big task to handle for a solo driven project, I like the idea to be able to launch an export from the command line given a created project. That's not something I would implement anytime soon, but I put it in my todo list as a suggestion for a future update.

Someone by mail also suggested 2 things more graphical related. Firstly, he mentionned that the preview and the actual video could sometimes have differences in terms of rendering. While the objects are rendered the exact same way, the speed of the visualisation or the behavior of the particles can show some differences between the two. This is something that I am aware of, but that can't be fixed, due to how this is processed behind the scenes. The export performs a *"delayed"* rendering that renders each frame independently with strict respect of time. The preview however is performed by another API and is real time computation of the audio data. That means that if the FPS drop, the preview will inevitably be impacted because some frames are skipped, but the smoothing processes always base itself on the previous frame. I do not consider it an issue because, as the term preview imply, the goal is to give a precise enough idea of how the rendering will look, rather than live rendering how it will exactly look at export. While some improvements could surely be done, this would complexify the backend rendering, and right now refactoring the code and improving the user interface is in my opinion more important to deal with.

Secondly, he also suggested to add support for some additional effects (besides the shadow feature). This is something I had in mind since the beginning but that I had planned for much later when the software would have evolved enough. However, I may come back on my decision and add it much earlier. On the technical side, it would be quite easy to support, as SVG filters exists for the web and vector graphics, and it can do pretty [impressive stuff](https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/ "The Art Of SVG Filters And Why It Is Awesome") when you know how to use it. On the UI side however, making UI to craft these would be very tedious and require probably months of development, considering all the available options. The compromise I see is to add support for plain text SVG filters, and let the user deal with external tools to craft them (such as [this one](https://svgfilters.client.io/ "SVG Filter Builder") called SVG Filter Builder).

# What to expect in the future updates on the short term

## The Git LFS issue

Before doing any new update, I have to fix an issue related to Git LFS. I discovered (with quite a lot of frustration because it is not mentioned anywhere, and is hidden in obscure sub menus until the day you receive a mail telling that you used 80% of the bandwidth) that GitHub impose 1GB of bandwidth for Git LFS downloads. Considering GitHub requires Git LFS for everything that is bigger than 100MB (and the Electron framework has a 100MB executable itself), that means nobody (not even me) can download Git LFS assets more than about 8 times a month. If I do, it is locked until next month. This include git clones, zip download from the front page of the project (green download button), but also forks and everything done on them. This is not sustainable at all on the long term, and paying $5 per month for 50Gb of bandwidth isn't worth it at all (what if it becomes not enough again?).

To address this issue, I will get rid of the node_modules folder and manually add the source code archive in future releases. I will also remove FFmpeg from the repository (It was not tracked anymore since a while back but still exists on the remote master branch, but there is absolutely no reason for it not to go away). Basically, I will just get rid of Git LFS from the entire project. However, I have to make sure to do it right, and try not to mess up the repository when doing so. That's why I will do it when I have enough free time to do it without too much pressure or stress. That also means no new beta will be published before this is addressed.

## What is planned in the near future

Right now, the main goals are to gradually refactor the code behind the scenes and mostly work on the user interface. In the next major beta (0.2), one of the improvements that I'd especially like to bring would be to improve size and position interaction in the control panel (for example, one click centering without having to do it approximately or to open the calculator). There might be a color picker as well, but I'm not yet sure the way I want to implement it (web version or more advanced one from an external library).

I will also experiment with SVG filters and see if I can bring it as an experimental feature as well. What this means is that support for all kinds of masks and (static) effects could be possible on all objects, allowing stuff like color manipulation, source manipulation (for shadows, offsets, extrusion...), applying effects like blur or distortion, noise based effects, etc. If that is a success, it could be a pretty big improvement to the rendering capabilities! Animated SVG filters however won't work, due to the way the export rendering works.

I will also make a small experiment on the export rendering to see if I can slightly improve performances by choosing .jpg over .png for screenshots. I have no expectations but want to see if it can have an impact (while keeping in mind the rendering quality of course).

# May and June are (going to be) calm

Since Wav2Bar 0.1.1, you might have noticed there have been pretty much no changes done, and that's because May and June are extremely busy for me. I have right now many university projects to deal with, and also started to get seriously behind with university work for personal reasons (mostly due to permanent high speed in all subjects). For that reason and to avoid burnout, I need to put Wav2Bar on the side until I'm done with this year's exams.

However, I remain available to answer [issue reports and feature requests on GitHub](https://github.com/Picorims/wav2bar/issues). You can also reach me more directly on the [Discord Server](https://discord.gg/EVGzfdP) or by mail.

That's about it for this post, enjoy your day/night :).

~ Picorims