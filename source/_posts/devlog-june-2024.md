---
title: (Dev)log - June 2024
categories:
- news
- devlogs
date: 2024-06-09 19:36:07
updated: 2024-06-09 19:36:07
tags:
- news
- beta
- devlog
thumbnail: w2b_penpot_2.jpg
---

Hi!

Long time no see uh? You thought the project was dead? Ok, the git history is very calm, but I would rather call it hibernation. Anyway, quite a lot happened since the last time even though it might not look like it, and this post will serve as recap of all of it. I will also talk about the future I envision for the project. Though, as always, life is busy, etc. You know the rules and so do I.

## Wav2Bar 0.3.x releases

Since the last post, three minor versions were released. They were mostly dedicated to bug fixes, though some user interface improvements also made their way out. Notably, the sidebar is now resizable and some tabs received a little lifting.

{% asset_img w2b_0_3_3_before_after.png The project tab before and after 0.3 minor updates %}

This was possible thanks to yet another refactor. Yet another iteration. One too much. I was starting to write my own UI framework, that does't make any sense anymore! (It's a nice challenge, don't get me wrong, but it is only fun for a moment.)

## Are we rewriting yet?

I am now quite sure I won't touch the existing app ever again other than for important and low work patches. I strongly think the small time dedicated to that project should rather go in an effort to start better from scratch. It is the best option for the long term. At first I thought: "Oh well, they'll forget about it and move on.". Though, quite surprisingly, I kept receiving mails, issue reports, messages on the Discord server, and even pull requests to patch the unpatchable! YouTube videos citing Wav2Bar in their description continue to be released as well. And at least a thousand more copies were downloaded within the last year. Which means, some people are still suffering on this thing (guys why? :')).

So I gave a first try to that idea by prototyping some UI. It was the opportunity to try PenPot for UI design, and I came up with this:

{% asset_img w2b_penpot_1.jpg The first iteration of the user interface redesign %}

link: https://design.penpot.app/#/view/82e31d90-3829-8139-8002-c506ce8814c1?page-id=82e31d90-3829-8139-8002-c506ce8814c2&section=interactions&index=0&share-id=dbcc1ffd-3b06-8112-8002-ee511a3f3cd7 

There were three main goals here: better user experience, more control over space for the screen and a user interface closer to standards.

After that, I decided to go into prototyping again. In reality I was thinking about technologies for a rewrite for years. But I settled more or less while doing this redesign. So I tried to do a [very simple visualizer using Tauri](https://github.com/Picorims/audio-visualization-tauri). I couldn't do everything I envisioned (notably progressive buffering of audio spectrum data and on-demand transmission of such data), but it was still promising. With Tauri v2.0 coming around the corner, there is still room for performance improvement, and even the possibility (although very unlikely) of supporting Android. Not iOS, sorry, that's too expensive to support (or DIY, that's the nice thing with open-source after all). So I consider now that once this version is out, I can kick-off the rewrite. Finally.

Meanwhile, I still did some design here and there to iterate a second time on the user interface. With some bit of experience gained here, I tried to make a better use of colors and spacing (to my developer knowledge, I am not a designer!).

{% asset_img w2b_penpot_2.jpg The second iteration of the user interface redesign %}
{% asset_img w2b_penpot_2_buttons.jpg New buttons %}
{% asset_img w2b_penpot_2_inputs.jpg New inputs %}

while it is very similar feature wise, I feel like having a more polished ground for starting developing the user interface. Not all interactions are represented, but what I stated above is still true (collapsible parts notably).

## Ok, now what?

I hope to start developing the project again this summer. I hope. I can't and won't promise anything, but I hope. With the prototype at hand, and design ready to use, it doesn't feel that ambitious, as long as I calm down my perfectionism at least while reaching a stable state, before going too deep into optimizations. The first step is reaching feature parity and backward support for existing saves, while potentially doing some small improvements. But I already need to envision the future while architecturing the new app. That's where you come in.

## I need you!

Yes, you. Are you using Wav2Bar? Do you plan to do it? Would you use it if it was better? Then hop onto my Discord server (https://discord.gg/EVGzfdP) and vote on polls! The first one is already open! You can also continue to open issues on GitHub, they will be taken into consideration. There aren't so many users (at all), so your voice has power!

So now, that's up to you too. Show me that you would be interested. I am anyway, but the more support I get, the more motivating it will be.

Have a nice day/evening/night, and see you hopefully not in two years :').

~ Picorims