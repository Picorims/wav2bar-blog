---
title: Introducing Wav2Bar Beta 0.3.0
categories:
- news
- releases
date: 2022-01-21 17:19:38
updated:
tags:
- news
- beta
- release
thumbnail: 2022-01-20_beta-0-3.png
---

Hi!

Here's a quick tour around what's new with Wav2Bar 0.3.0. This update is mostly a technical update preparing the addition of new visual objects, but it also includes many small improvements.

If you would like to give some inputs about future updates, then you might be interested by [this form](https://framaforms.org/wav2bar-feedback-16012022-1642357540 "Wav2Bar Feedback form").

## Visual objects

### Particle flows

The particle flow visual object received some upgrades. When the audio is not playing, some options will still trigger a visual update, to see how these settings affect the overall look of the particles. Also, if you feel the need to, particle flow containers can now be rotated.

### Timers

Timers are now positioned differently. When upgrading from an older save, the adjustments will be done automatically.

### Background

The background visual object has been removed. It was duplicating the visual object for images and shapes while just having less features (like moving or scaling the background for a better fit). When upgrading an old save, all background objects will be converted to image/shape objects, without any visual changes.

### Other

The default color of objects is now randomized at creation. This makes it less ambiguous when the object is created on another. Before, as all objects were white by default, you wouldn't notice easily that it was added. Now, unless you just have no luck, colors will be different.

{% asset_img 2022-01-20_beta-0-3_random_color.png Objects with randomized colors %}

Some default values have also been changed for newly created objects.

## User interface

### Responsiveness

Some adjustments have been made to the user interface to make it more responsive in general. When big tasks are happening in the background, a loading screen is now displayed to lock the user interface

{% asset_img 2022-01-20_beta-0-3_loading.png The loading screen indicator %}

Moreover, the audio control panel and the user interface at the top of the screen in general had problematic issues (to the left). It would not react well to small windows. The buttons are now smaller, and the audio group has been split in two to overcome that (to the right).

{% asset_img 2022-01-20_beta-0-3_top_ui.png The user interface at the top is more responsive %}

Finally, the user interface should also be more responsive when resizing the window. 

### Visual objects

Changing an object's name is now done using a dedicated field in the rack (to the right), instead of going through a modal window (to the left).

{% asset_img 2022-01-20_beta-0-3_rename.png Renaming an object %}

Additionally, irrelevant options (i.e that have no effect) in some objects are no longer available (timers, visualizers). In consequence they are no longer stored as well with these objects. This should remove some confusion on usage.

### Other improvements

The help have been improved and updated, especially for saves and object creation. The logs folder is now directly accessible from the settings tab.

## Technical changes and performance improvements

The main reason the 0.3.0 update is a technical update is that the way saves and visual objects are changed have been drastically changed (if not rewritten). This makes it much easier to maintain visual objects in the long term, especially for bug fixing and general improvements. Although it is still not perfect and has still problematic flaws (such as with user interface interactions), it will make it easier to add new features and visual objects with the minimum of required code.

During this process, I took the opportunity to improve performances on some visual objects. In particular, Particle flows should run better when a big ammount of particle is simulated. Otherwise, changing some parameters on bar visualizers should create less lag. While the first change may affect the export speed (I have not tested however), the second one only affects the edition phase. In such situation, the user interface will be more responsive as a result.

## License
The license has been changed from MIT to GPL-3.0-or-later. For more information, see the [January 2022 devlog](https://picorims.github.io/wav2bar-blog/public/2022/01/16/devlog-january-2022/ "Devlog January 2022").

## Fixes

This update also fixes numerous issues that appeared in 0.1.x and 0.2.x updates.

- **Visual objects**
    - Changing the color of a waves visualizer while audio is paused now updates the color visually. Same for particle flows.
    - Particle flow's flow type parameter provides help again.
- **Command Line Interface**
    - Video export via CLI works again.
- **User interface**
    - When opening a new save, existing user interface from old visual objects are now effectively removed.
    - Interacting with control panel's top tabs no longer moves the rest of the user interface.
    - The top of the screen was hard to see, and hidden no matter what behind the top user interface (in some zoom and window size scenarios). There is now a minimum of padding above the screen.
    - The window no longer flashes to white when being first opened.
    - About section no longer have the text centered.

## Security

Electron has been updated from v12 to v16 and dependencies have been updated as well.

## Linux packages

Wav2Bar is now available for Linux as a .zip file (compiled from Ubuntu). I am still having issues creating .deb and .rpm packages. Thus for the next update I will take a look at .flatpak, with the aim to cover more Linux distributions. If you encounter issues while using Wav2Bar on Linux, you can report bugs directly on the GitHub repository.

## 0.3.x

If any bug is found, it will be addressed in a small update. Otherwise, before going straight into new features, I will make a small update to continue improving the user interface (especially the project tab that is awful) and try to integrate ffmpeg directly into Wav2Bar packages.

## Yes, it took a while

I know this update took a long time to be released. The refactoring was much deeper than I anticipated. In addition, university work required me to delay the release of this update. I am aware this can be annoying, especially when bugs goes in the way of your workflow. These are the flows that comes with it being a side project...

Anyways, I hope you will enjoy this update, and I see you for the next one!

~ Picorims