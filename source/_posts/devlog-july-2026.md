---
title: Devlog - July 2026
categories:
- news
- devlogs
date: 2026-07-15 15:45:00
updated: 2026-07-15 15:45:00
tags:
- news
- beta
- devlog
thumbnail: 2026-07-15_devlog_july_2026.png
---

Hi!

This month was supposed to be a beta release month, but things are still too unstable to be shared (almost), so it'll be a devlog instead!

## Video Export

Video export is finally done and working. I couldn't manage to get rid of file system caching, which means there are still a bunch of frames dumped on disk like the legacy build. BUT, they are now concatenated every now and then into chunks of video, and then these chunks become the final video. Which means that in general the disk usage should still be much better. Unfortunately, the video export remain slow, and it is still something I'd like to improve in the future. Though, it is better to have something that works first before aiming for perfection.

I also switched to using WEBM as a container and VP9 for the video codec. The reason is that AV1 support is still limited across online platforms, and even more so for hardware encoding (my own, recent laptop do not support it, and it is *extremely* slow). VP9 is more or less the ancestor, and still much safer patent wise than MP4/H264, while also offering better compression and quality. Similarly, WEBM is more supported across online platforms than MKV, hence the change. This does not have any impact on quality. Adding back support for AV1 in the future wouldn't be too complicated, now that export is more flexible. It is just not the right time to do so.

## Feature parity with legacy

I also finalized importing saves from the legacy project (saved from version beta-0.3.0 and above). While some fixes remain necessary, I have not noticed any errors blocking import anymore. Overall the fidelity is pretty good, even though I can't guarantee an exact match on visualizer spectrums and amplitude, or particle speed. Drop shadow rendering being different, there might be slight visual changes, but that should remain small. Note that text shadow being cropped is a known bug, I intend to have the old behaviour back.

{% asset_img 2026-07-15_devlog_july_2026.png Before after comparison of the same project in Wav2Bar beta 0.3.4 and Wav2Bar rewrite 1.0.0-indev %}

## Fixed audio spectrum

In earlier footage, I had shared some previews of audio visualization. Which was looking funky. Well, it was wrong, and there were quite a few issues around it that have since been fixed. No more "weird triangle shapes". I would like to also display the actual frequency range in the UI in the future to have it be less opaque, but for now my target is an initial beta with the minimum needed.

## Bugs, bugs everywhere

{% asset_img 2026-07-15_bugs_everywhere_meme.jpg "Bugs, bugs everywhere" caption above the Buzz showing things to Woody meme template. %}

As I said earlier, I wanted to release a beta this month. Together with disabling unimplemented feature buttons (text lines, undo/redo, new project, help, to name a few), video export was the biggest blocking point. I did a sanity test over a built bundle on Windows, thinking I'd notice some small issues but mostly go through a formality. How naive. It *never* happens this way. I should have seen it coming.

{% asset_img 2026-07-15_test_20_min_meme.jpg Test results pie over 20 minutes in and out meme template. %}

"That pie doesn't look that bad." Wait, there's more.

{% asset_img 2026-07-11_w2b_sanity_test_bugs_1.png Wav2Bar 1.0.0-beta.1 sanity test bug. %}
{% asset_img 2026-07-11_w2b_sanity_test_bugs_2.png Wav2Bar 1.0.0-beta.1 sanity test bug. %}
{% asset_img 2026-07-11_w2b_sanity_test_bugs_3.png Wav2Bar 1.0.0-beta.1 sanity test bug. %}
{% asset_img 2026-07-11_w2b_sanity_test_bugs_4.png Wav2Bar 1.0.0-beta.1 sanity test bug. %}
{% asset_img 2026-07-11_w2b_sanity_test_bugs_5.png Wav2Bar 1.0.0-beta.1 sanity test bug. %}
{% asset_img 2026-07-11_w2b_sanity_test_bugs_6.png Wav2Bar 1.0.0-beta.1 sanity test bug. %}

This cannot be considered production ready. That being said, I'll still release it as a nightly build if you want to dabble with it a bit (you can get it on [GitHub releases](https://github.com/Picorims/wav2bar-reborn/releases)). **THIS IS NOT PRODUCTION READY, only use it for test purposes and BACKUP YOUR SAVES!** You've been warned, use at your own risk! While I do not expect save corruption or file system issues, I *do* expect weird visual glitches and video export issues (audio spectrum missing in the first frames, video cropped at the end notably). I will attach a PDF resuming all of my findings so you can make an informed decision on trying it or not.

## So, beta when?

Given that I lost some time due to the big heatwaves we got in France in the last few weeks and that the little work slots were spent on Wav2Bar, I want to keep myself the end of this month which will be also sparse work for my other big project, Open Street Kart. Not all issues are blocking, and it will mostly depend of how tricky it is to fix the worst ones. I'd expect to have something for late August, but as always, no promise (especially as I initially thought I could get it by March of this year, so 4 months ago).

## The future

The past months, I have looked heavily into how to monetize my projects in order to be able to earn something off them, as I struggle to find a job position in which I wouldn't put the nail in the coffin for my mental health. Outside of my very own needs and features I personally want, time spent on other topics will heavily depend on monetary support I can get for pursuing the work on the software, especially as I make space for the other project, Open Street Kart. I plan to set-up a Patreon or equivalent with a first tier at around 1-2€ as well as a way for single donations ([liberapay](https://liberapay.com/Picorims/)?), as I know that a lot of users pick Wav2Bar for economic reasons. The form I had opened on that topic is still open, and you can find it on my website as well as Wav2Bar's through the yellow "Donate" button (or [here](https://framaforms.org/would-you-donate-1771697595)). Of course, you should *never* put yourself at financial risk, do it if you can and want to! (Well you can't right now, only show an intent, but still.)

## Conclusion

That's it for now. As you can see, things are moving forward, slowly but surely. And I am still looking forward to adding more exciting features, as well as look for community translation. But that's pointless if the base software is unstable, buggy as hell, and in the end not reliable. And this is the priority right now.

Stay safe, and as some CSS guy often says, "Make your corner of the internet a little bit more awesome.".

~ Picorims