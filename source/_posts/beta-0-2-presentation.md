---
title: Introducing Wav2Bar Beta 0.2.0
categories:
- news
- releases
date: 2021-07-21 18:01:35
updated: 2021-07-21 18:28:11
tags:
- news
- beta
- release
thumbnail: 2021-07-21-155400-wav2bar-0-2-0-beta.png
---


Hi!

Wav2Bar 0.2.0 has just been released with multiple improvements to try out. Here is a quick tour over the major changes of this version. For detailed changelogs, see the [Github Releases page](https://github.com/Picorims/wav2bar/releases/tag/v0.2.0 "Wav2Bar 0.2.0 changelogs").

# SVG Filters support

SVG filters are now supported on all objects, which allows you to interact with the graphical output in many ways. ***This feature is useful if you want to add visual effects to an object: blur, glow, image correction, distortion, extrusion, outline, shadows, lighting, etc.*** For instance, the outlined visualizer of the thumbnail and the image blurring on the thumbnail have both been made with SVG filters!

SVG filters are added by pasting them in a dedicated field. A filter is defined within a `<filter></filter>` tag, all separated by `[#]`. So multiple filters are added by entering `<filter></filter>[#]<filter></filter>[#]...`. Within a filter tag, you define the filter by following the SVG specification. Now, everyone is not an expert in SVG, and the syntax can be intimidating. Hopefully, there are many resources on the Internet to help you out crafting them:

- [SVG Filter Builder](https://svgfilters.com/): A graphical user interface for making SVG filters. Paste the result between `<filter></filter>` to make it work with Wav2Bar. Alternatively, you can use other tools like Inkscape to make them.
- [A compilation of useful resources to learn SVG filters](https://speckyboy.com/svg-filter-tutorials/ "The 10 Best SVG Filter Resources & Tutorials"): It also showcase what you can do with SVG filters.
- [maketext.io](https://maketext.io/): Doesn't work out of the box, but great for inspiration.
- [RIP Tutorial](https://riptutorial.com/svg/topic/3262/filters): Another tutorial with examples.

This is definitely not a feature for everyone, but if you want to push Wav2Bar into its limits, that's a good way to do it.

## Simple example

Lets take the following filter:
```svg
<filter>
    <feGaussianBlur stdDeviation="5.5" result="coloredBlur"/>
    <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
    </feMerge> 
</filter>
```
This filter produces a glow effect, by blurring the source, and drawing it behind. Here is the end result:

{% asset_img 2021-07-21-162137-beta-0-2-glow-example.png Glow effect on a visualizer with SVG filters %}

# User interface improvements

This update also includes improvements for the user interface, mainly for object interaction.

{% asset_img 2021-07-21-wav2bar-0-2-beta-before-after.png Glow effect on a visualizer with SVG filters %}

The user interface is globally more compact to display more options on screen, without having to scroll too much. Everything is also more aligned to improve readability. In some cases, when an invalid value is entered by the user, it will show in red, meaning the value has been ignored as it is not valid. Right now it is only effective on number fields, however it may be extended to text fields in the future.

Some new features have been introduced as well. ***Some shortcut buttons have been added to easily resize and position objects. A color picker has also been added.*** It only initialize with hex values, but support multiple formats (except alpha). You can still tweak the colors with the string field if you need to.

{% asset_img 2021-07-21-w2b-0-2-beta-color-picker.png Glow effect on a visualizer with SVG filters %}

Some small tweaks have also been made here and there.

# Experimental export mode

When Wav2Bar exports a video, it first generates all frames as images, and then combine them into a video. Right now, the PNG format is used, and video exporting is painfully slow.

As an experimentation, you can now choose to use JPEG images with 100% quality instead. ***While it shouldn't impact the video quality, it should however make the export generally two times faster, and sometimes up to six times faster!***. The difference in speed is visually noticeable when looking at the progress.

Keeping the export window behind the main window can also improve exporting speed and performance.

# Bug fixes

Multiple bugs have been patched in this release. The most noticeable are listed below:
- Changing the points count of a visualizer no longer breaks its display.
- Text overline was not showing properly.
- Updated the font size help bubble, that was outdated.
- Removed "audio not saved" from the saving option title, this was only accurate in pre 0.1.0-beta releases. ***(Audio has always been saved in public releases!)***

# What's next ?

I will probably make a 0.2.x update adding CLI support for some basic tasks. While not very useful for most users, it can be useful for Linux users wanting to automate some tasks. It will also be useful for myself for development purposes.

As for 0.3.0, it will atleast include a major rewrite of objects. Right now, its structure is not sustainable on the long term, and should be more flexible and extendable. It is also a good opportunity to add some quality of life features to them. This update may or may not receive major features, as this is a big task. However it is a necessary step towards maybe adding new visualizers.

Enjoy!

~ Picorims