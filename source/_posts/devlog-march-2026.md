---
title: Devlog - March 2026
categories:
- news
- devlogs
date: 2026-03-31 18:31:11
updated: 2026-03-31 18:31:11
tags:
- news
- beta
- devlog
thumbnail: thumbnail-devlog-march-2026.png
---

Hi!

Here are some news about what has been going on in the last month regarding Wav2Bar development! If you follow [my Bluesky account](https://bsky.app/profile/picorims.bsky.social), you'll know most of it, but I want to talk about other things as well! Let's get started, shall we?

## Development

While the pace of development hasn't been regular this first quarter, a few important features were migrated into the rewrite of Wav2Bar. And it comes with some UI improvements as well!

### Zoom

While migrating, I decided to switch from a dropdown to a number input. I believe that more freedom is worth the slightly slower change across big steps. It also allows much more drastic values, if you need to do pixel perfect work or have a huge resolution configured.

{% asset_img 2026-03-31_w2b_zoom_before.png Zoom UI in the current beta. %}
{% asset_img 2026-03-31_w2b_zoom_after.png Zoom UI in the rewrite (upcoming beta). %}

### Working directory replacing the portable app

Unfortunately, the framework I use for the rewrite, Tauri, [does not support portable apps]("https://github.com/orgs/tauri-apps/discussions/3048") (at least not officially). However I still personally like to choose where data is stored, especially because all the computers I got never got that much space on the system drive compared to the data drive. And I know it is the case for some users, that complained about it. So the workaround is setting up a working directory, where temporary files, settings, and cache will be stored. This technically allows to have multiple workspaces, however it is not supported nor the intended use.

{% asset_img 2026-03-01_w2b_working_dir.png New working directory setting. %}

### Images... and border radius... and box shadows...

Migration of images truly turned into a rabbit hole. I underestimated the need for a migration of CSS properties (box-shadow, border-radius) to not have awful GUI handling and constant translations, which led to a new save schema (which I wanted to avoid in the first beta, but oh well...). But then, the text inputs were not fitting anymore, so I had to do a new UI for them. Which was a good excuse for improving some of it now. Which lead to a new fancy border radius edition GUI! At that point, given the schema was updated, and the UI as well, I thought that I might as well actually implement them now as well.

{% asset_img 2026-03-31_w2b_image_before.png Image object in the current beta. %}
{% asset_img 2026-03-31_w2b_image_after.png Image object in the upcoming beta. %}

If you are curious about the behaviour of the new border radius GUI, I posted a video over on Bluesky which you can watch there:

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:oraiik766uyivmqxdrwe46wi/app.bsky.feed.post/3mheabm3k6k2g" data-bluesky-cid="bafyreieu5ckvjm4wkgkwudbfgwhvc7eadiek7y65x7ybmtsybpw4i2bbmi" data-bluesky-embed-color-mode="system"><p lang="en">#wav2bar border-radius linking. I hope this makes sense because it was a pain to implement 🥲!

#foss #opensource #motiongraphics #audiovisualizer<br><br><a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi/post/3mheabm3k6k2g?ref_src=embed">[image or embed]</a></p>&mdash; Picorims (<a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi?ref_src=embed">@picorims.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi/post/3mheabm3k6k2g?ref_src=embed">18 mars 2026 à 20:35</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

### Current work - object deletion

Yes, I have been working on that rewrite all the time without the ability to delete any object. Silly, right? Well no more, and it even now warns you about doing dangerous things that would take minutes to redo!

I won't share screenshots now as it is still WIP, but expect some post on Bluesky once I am happy with it.

## Next beta when?

The milestone estimation says the next beta is around 87% complete. For reference, it was at around 75% in December, and 25% in early 2025. More of the remaining tasks are chores that I do not expect to take much time, or might be delayed if taking too much of it compared to its relevance. The truly last remaining task is the culmination of all the past work: video export.

I don't know yet if I'll support multiple formats, or quality settings, or other things there. I want to make it work first, get feedback on it and make it stable before going into all the fancy settings.

I have also not decided yet which format it will export to. There is a lot of legal mess in the video field, from FFmpeg license to video and audio format patents. You should be able to use your own version of FFmpeg, but there still is the question of which format is allowed. And both mp3 and mp4 are risky formats. Now, to not bring any confusion, I do not plan to phase out mp3 out of nowhere and break old projects. But I wanted to share the thinking that is occuring around that, because there is no obvious solution, and I mite iterate a bit before landing on anything.

Some of my considerations include WebM and AV1 for videos, and OPUS and OGG for audio. If you have suggestions of other free and open formats, feel free to share them with me!

## Let's talk money

I have always refused donations until now to not have to deal with the boring French bureaucracy that comes with it. I am starting to reconsider that decision after noticing some uptick of activity in the last few months. If you would be willing to support the project monetarily (thank you for that, truly!), I invite you to answer [the donation form that I opened]("https://framaforms.org/would-you-donate-1771697595") (which can also be found on [Wav2Bar's website]("https://picorims.github.io/wav2bar-website/") and my [portfolio website]("https://picorims.github.io/")). If you prefer, you can also do a donation promise on [Liberapay]("https://fr.liberapay.com/Picorims/").

I would love to be able to live from FOSS development (and yes, I know it can be hell, and what I expose myself to in terms of user behaviour). This could be one way of achieving it, even part-time. But I need to assess if it is worth it, because opening donations would also generate some monthly fees for me, and so if I lose money it isn't really worth it... Which is why only "fake" donations are possible right now. No pressure though! Wav2Bar is free because I know that video software is expensive for many. It's ok if you can't or don't want to! Sharing the project, reporting bugs, opening feature request tickets, giving honest feedback are all very valuable. You might soon also be able to translate the app as well! This is basically checking if it could also partially pay the bills, or if it's (likely) utopic.

## Conclusion

That's it for now! Feel free to get in touch if you have any questions. And if you want to monitor the progress more closely, both the [Bluesky account]("https://bsky.app/profile/picorims.bsky.social") and [GitHub milestone]("https://github.com/Picorims/wav2bar-reborn/milestone/1") are ways to have more frequent feedback. Just keep in mind that progress bar is a rough approximation, as finding bugs or shortcomings will always push it backwards! I also sometimes do polls on the [Discord Server]("https://discord.gg/EVGzfdP"), if that resonates with you.

Anyways, happy Easter if you celebrate it, and beware of upcoming trolls because we are March 31st!

~ Picorims