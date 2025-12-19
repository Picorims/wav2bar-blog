---
title: Devlog - December 2025
categories:
- news
- devlogs
date: 2025-12-19 18:05:00
updated: 2025-12-19 18:05:00
tags:
- news
- beta
- devlog
thumbnail: thumbnail_w2b_screenshot_2025-12-18.png
---

Hi!

I said in the last post that I would see you hopefully not in two years. Well I am glad to tell you that it is *only* one year and a half 😅! Anyway, the (new) GitHub repository has been quite busy these past months, and I think it is a good moment for telling people what's going on with the project.

## It's alive!

Last time (yes I know a while ago), I have shown you a mock-up of what the new UI for the rewrite could look like. Well now it is getting more and more functional: You can configure the project, the settings, open and save files, create visual objects, tweak their settings and see most of the final result (I still have to figure out how to migrate shadows and border radius). What's mostly left is migrating images/shapes, some tricky properties and video export. In fact the first beta from this rewrite is more or less 75% done as of writing these lines (you can check the progress on [the milestones](https://github.com/Picorims/wav2bar-reborn/milestones) or the [GitHub Project](https://github.com/users/Picorims/projects/3/views/7)).

Though, while the first beta will only focus on feature parity, it still comes with many nice improvements: light and dark themes, internationalization, resizable panes, a better user experience for creating objects, etc.

{% asset_img 2025-12-18_w2b_light_theme.png Screenshot of Wav2Bar with the light theme %}
{% asset_img 2025-12-18_w2b_add_object.png Screenshot of Wav2Bar with the new "add object" modal %}

## New communication channel

In addition to the [Discord server](https://discord.gg/EVGzfdP), [GitHub Discussions](https://github.com/Picorims/wav2bar-reborn/discussions), and the (very calm) [YouTube channel](https://www.youtube.com/@picorims), I will now try to post updates on [Bluesky](https://bsky.app/profile/picorims.bsky.social) as well. This replaces my old Twitter account which has been inactive for a while now.

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:oraiik766uyivmqxdrwe46wi/app.bsky.feed.post/3m7nbzo7es22r" data-bluesky-cid="bafyreiajawbvc23tkyaylb5sghb3vihgbfebfcbhpwejnkrv6qzj65s42y" data-bluesky-embed-color-mode="system"><p lang="en">Snowing in #wav2bar 🌨️ ... Hopefully better than in the legacy app (more evenly spread).

#opensource #foss #audiovisualizer #motiondesign<br><br><a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi/post/3m7nbzo7es22r?ref_src=embed">[image or embed]</a></p>&mdash; Picorims (<a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi?ref_src=embed">@picorims.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi/post/3m7nbzo7es22r?ref_src=embed">10 décembre 2025 à 15:39</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:oraiik766uyivmqxdrwe46wi/app.bsky.feed.post/3m6fqu563422m" data-bluesky-cid="bafyreiab6dzbn3oqvhrwgssci7n6rilwib6iia2jkpkefphvf2tkzdz7mi" data-bluesky-embed-color-mode="system"><p lang="en">I thought I&#x27;d get more motivation by sharing progress on my projects, this time on #wav2bar rewrite with the first working visualizer.

#foss #opensource #motiondesign #audiovisualizer<br><br><a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi/post/3m6fqu563422m?ref_src=embed">[image or embed]</a></p>&mdash; Picorims (<a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi?ref_src=embed">@picorims.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:oraiik766uyivmqxdrwe46wi/post/3m6fqu563422m?ref_src=embed">24 novembre 2025 à 22:18</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

## Release when?

Right now, I am unemployed, so I have more time to work on it. But I may work again at any time. The three last month allowed me to close dozens of tickets and move from ~25% to ~75% done regarding the first beta. If I keep the current pace, I'd expect to release it between January and March 2026 (no promise, as always, just an estimate). That being said I'll probably consider nightly builds to prepare building releases. **Those won't be production ready at all (if usable at all), and most likely be *very* unstable**. But if you want to spoil yourself or see how it behaves against your saves, you can always try it if you want to.

## Thanks (again) for the messages!

Wav2Bar is really a marathon for me, the longest dev project I ever worked on. Receiving messages from users saying that they enjoy the software despite its quirks and bugs truly help me stay motivated. People passing by on Discord, sending an email, starring the GitHub repository, the mentions in YouTube descriptions or on social media... Or even that one guy that liked Wav2Bar the day after I decided to add it to [AlternativeTo](https://alternativeto.net/software/wav2bar/). All of that is very much appreciated ❤️. Looking at the release stats and YouTube showcase video views, it looks like the project is gaining a bit of traction without myself being able to explain why (or is that AI?). If it gets to help more people that's motivating as well for sure. I am always curious about how it gets used, so do not hesitate to share it!

## Conclusion

Anyway, I think I said all I had to say for this post. If you want to have a chat, you can always check the Discord server or mail me (picorims.contact@gmail.com). If you have suggestions, feel free to check the list of [open issues](https://github.com/Picorims/wav2bar-reborn/issues). And if you think of contributing (👀), you can check the `up-for-grabs` labelled tickets, and `CONTRIBUTING.md`. Hopefully, with internationalization being around the corner, and a [better documentation of the specs](https://github.com/Picorims/wav2bar-reborn/blob/develop/docs/manual_end_to_end_test_template.csv) it should become easier for non-devs contributions to become possible. I also plan to make a video, article or wiki page explaining the new beta. I postponed that for too long, and looking back, it confused many users.

Enjoy the winter holidays if you have the luck to have some (otherwise wishing you the best for going through it and hoping it still has some positivity for you, even if it is not winter or a celebration season in your country/culture), and I see you next year (hopefully not in December)!

~ Picorims