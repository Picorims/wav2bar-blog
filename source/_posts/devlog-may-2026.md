---
title: Devlog - May 2026
categories:
- news
- devlogs
date: 2026-05-18 14:33:00
updated: 2026-05-18 14:33:00
tags:
- news
- beta
- devlog
thumbnail: 2026-05-18_ffmpeg_autodetection.png
---

Hi!

Here is a quick update on Wav2Bar development! No inspiration for intro this time, sorry!

## FFmpeg auto-detection

This one has been requested multiple times: Wav2Bar should now be able to auto-detect an existing FFmpeg installation if it is present in PATH. You can check if it is detected directly from the settings. It is still possible to set or overwrite the path to FFmpeg from there as well (but not to specify the filename, to avoid having to specify the file for every single binary component).

{% asset_img 2026-05-18_ffmpeg_autodetection.png Auto-detection of FFmpeg status in the settings screen. %}

## Warning popup before deletion

In legacy, pressing the delete action was enough to irremediably remove the object, leaving you with the bad taste of having to recreate an entire object if it was a misclick. Now, a popup add some friction to reduce that risk. In the future, I also want to support undo/redo to some extent, but this should already be a first safe guard against that mistake (which already frustrated myself to be honest).

{% asset_img 2026-05-18_deletion_warning.png Object deletion warning popup. %}

(Yes I didn't put it on Bluesky, but it wasn't that exciting to share. Does the picture above hype you?)

## State of development

While the milestone is at 98% with a single ticket left (video export), it isn"t entirely accurate as I still have to do a bit of polishing before release (such as fixing saving which *might* be useful, and disabling non-implemented features GUI). I do not expect those to add much work though. Only testing might take a bit of time.

I am deep into export work for the past two weeks now, which comes with its lot of frustration. I knew there'd be quite some friction, but not *that much*. But it is slowly getting there. I'll also be working now side by side on both Wav2Bar and my other main project, Open Street Kart, for my sanity, because FFmpeg will drive me crazy otherwise!

I also settled for now to exporting to MKV as a format, and AV1 as a codec, effectively replacing MP4 export. I know MP4 is widely popular, but it is also proprietary, with many patent barriers and royalties to pay. It is a whole legal mess which I just do not want to deal with. AV1 is the spiritual successor to H264 and H265 (for that exact reason, yep it even annoyed Google and Amazon). It is an open-format, and safer patent wise even if not fully patent-free. By now most hardware supports it, as well as platforms such as YouTube, Facebook, or Instagram. For platforms which doesn't support it (yet), like Bluesky, Mastodon or PeerTube, and that rely on MP4/H264, the conversion to MP4 would be quite straightforward in a terminal:

`ffmpeg -i input.mkv -c:v libx264 -c:a copy output.mp4`

This command converts input.mkv into output.mp4 using H264.

That being said, I am open to recommendation of [other formats and codecs to support](https://en.wikipedia.org/wiki/Comparison_of_video_container_formats), as long as they are free (or freely licensed, or royalty-free) and open-source as well. Which doesn't give much choice.

## Conclusion

As you can see, the end of the tunnel is coming closer and closer, but some hard work still needs to be done for that last stretch. **I do not expect the first rewrite beta to be production ready with 100% confidence**, but it at least gives you something to experiment with and give feedback on! If you would like to support the project, you can check [the donation form that I opened](https://framaforms.org/would-you-donate-1771697595) (which can also be found on [Wav2Bar's website](https://picorims.github.io/wav2bar-website/) and my [portfolio website](https://picorims.github.io/)). If you prefer, you can also do a donation promise on [Liberapay](https://fr.liberapay.com/Picorims/).

That's all for me, take all care of yourselves,

~ Picorims