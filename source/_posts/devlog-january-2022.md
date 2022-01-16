---
title: Devlog - January 2022
categories:
- news
- devlogs
date: 2022-01-16 21:18:04
updated: 2022-01-16 21:18:04
tags:
- news
- beta
- devlog
thumbnail: thumbnail-devlog-january-2022.png
---

Hi!

It has been a while since the last update, so here's a recap of what happened development wise. I will also discuss some
other topics regarding the near future of Wav2Bar.

## So, where's 0.3.0?

I was initially planning to release Wav2Bar 0.3.0 two weeks ago. It turns out university required my full attention since December. But things calmed down again, and everything I wanted to integrate into 0.3.0 is done. My goal right now is to release it by the next Sunday, hopefully with a Linux .zip file this time. As for .deb and .rpm, I still have issues making them, so I will probably take a look at other supported formats such as flatpak.

I will make a dedicated post for the 0.3.0 update, but I can give you a quick grasp of what's new. First, some bugs from the latest release, such as video export from the command line or UI issues when switching projects have been patched in this version. Some outdated help have also been updated. Otherwise, since it is mostly a techinal update, it is mostly a bunch of small improvements here and there. Overall, I have made small improvements to the user interface layout and responsivity, in particular concerning the audio control part. The particle rendering is now updated when you tweak some settings, even when the audio is paused (for most of the visual options). A random color is picked for objects at creation so they are visible when on top of other objects (especially white objects). You can now also access logs from the settings (useful for bug reporting). Finally, the user interface is now locked behind a loading animation when the software is busy in background and shouldn't be touched.

On the development side, I made some technical improvements to the development environment, such as adding ESLint and starting to integrate unit tests (I finally found how to integrate unit testing to Electron, after two years!). What it basically mean is more protection against bugs for future releases, as the number of tests grows.

## Updating the license from MIT to GPL

**TL;DR: This change will allow to integrate FFmpeg instead of installing it manually, and it forces reuse of Wav2Bar source code to remain open source.**

From day one, Wav2Bar has been licensed under the [MIT license](https://opensource.org/licenses/MIT "MIT License"), which is a permissive license. MIT allows pretty much anything as long as the copyright notice is kept.

However I encountered an issue when I wanted to integrate FFmpeg to Wav2Bar for installation convenience. FFmpeg is either licensed under [LGPL-2.1](https://opensource.org/licenses/LGPL-2.1 "GNU Lesser General Public License version 2.1") or later, or [GPL-2.0](https://opensource.org/licenses/GPL-2.0 "GNU General Public License version 2") or later license depending of integrated libraries. To make things simple, GPL is a license encouraging free software, that require any derivative work to also be licensed under GPL. LGPL is a variant which is a bit less restrictive on that, but works more or less the same way. In other words, if I want to directly provide FFmpeg into Wav2Bar packages, I need to comply by the GPL, and license the whole software as GPL. The reason is that Wav2Bar uses libx264 to encode .mp4 videos, and this library is licensed under GPL, so the LGPL can't be used (alternatives like openh264 exists but aren't as performant).

That is why Wav2Bar will soon be licensed under GPL-3.0 or later. Older versions will remain licensed under MIT, as they have been distributed under MIT, this only affect future releases. The GPL license is a very controversial topic, considering its ability to spread everywhere. However I consider it the best choice right now for the user interest (conveniency for FFmpeg of course, but more broadly user rights). I considered the option to dual license Wav2Bar under both MIT and GPL, with the MIT version not receiving FFmpeg, but this is more trouble that I don't want to handle, considering the limited time I can offer for Wav2Bar development.

This won't affect your use of Wav2Bar is any way, and the project remain free and open-source as it always has been.

## Future releases: give your feedback!

**I have created a form [here](https://framaforms.org/wav2bar-feedback-16012022-1642357540 "Give feedback on Wav2Bar") (full link: https://framaforms.org/wav2bar-feedback-16012022-1642357540) to get feedback about the usability of Wav2Bar and most wanted features. If you have five minutes, I would really appreciate some user input! No personal information is required.**

## GitHub

I may do some changes about how things are organized on GitHub, like launch a GitHub Projects to track progress (I have my own local board, this would be for you, users, to see development progress), or use branches.

## That's it!

Thanks for reading! I hope you enjoyed this devlog, and I'll keep you updated when Wav2Bar 0.3.0 is out. For now, have a nice day/evening/night!

~ Picorims