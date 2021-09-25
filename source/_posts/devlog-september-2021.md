---
title: Devlog - September 2021
categories:
- news
- devlogs
date: 2021-09-25 23:21:51
updated: 2021-09-25 23:44:26
tags:
- news
- beta
- devlog
thumbnail: thumbnail-devlog-september-2021.png
---

Hi!

I have been quite silent since Wav2Bar 0.2.0 release on July. I think now is a good opportunity to let you know how things are going, as well as giving plans for the next month. Let's get started!

## On going and planned updates

### Wav2Bar 0.3.0 development

Wav2Bar 0.3.0 development Started in early August. This update is mostly a technical update, and thus for many reasons.

In the current implementation, each object has its own independent setup. That means that every time a change has to be made, it has to be repeated for every objects, which is very time consuming. Right now there are six available objects, so common changes and bug fixes have to be made six times. Let's be honest, this is absolutely not sustainable on the long term. That's why some heavy refactoring is being made in the background since August.

That said refactoring has been almost finished this week. So I would say add that one third of the update has been completed. I know this is taking a lot of times, but this is necessary to be able to implement new visualizers. So what else has to be made?

### Roadmap

Here is a roadmap of the future updates and planned features. This roadmap is absolutely not set in stone, and is subject to changes if needed as the times goes. But this should give you a good picture of what direction development is taking.

- **0.3.0**
    - **Write converter to new save format.** With the heavy refactoring, the inner structure of saves has changed quite a lot. So there is some work to do so support older saves.
    - **Fix 0.2.2 issue where opening a new project doesn't clean up old objects' interface.**
    - **Hide/show object feature.** This quality of life feature would help focusing on specific objects during design. I don't know yet if this will be saved or not.
    - **Some layout fixes.** Updating the framework used to make Wav2Bar, Electron, introduced some quirks in the UI. It is also the opportunity to fix very small issues like the fact that the top audio controls take a lot of space. That make the screen less easily visible completely.
    - **Display object borders on hovering of its settings.** It is not always easy to see the boundaries of an object (like particle flow objects), which doesn't help setting its size. This feature aim to fix this.
- **0.3.1**
    - **convert CLI command.** This quick command would convert the save to a newer said version. I also consider a potential folder support to make migrations easier if you like to keep up to date saves.
    - **Keep track of last used folder in file explorer.** Because always starting from home folder and doing all the clicks again is annoying!
- **0.4.0**
    - **Continue internal refactoring, but less.** Some last changes have to be made in objects property handling so the rest listed below is easier to do.
    - **New visualizers.** Yes. Finally. Two would be a great goal to start with. I need to experiment stuff.
    - **Extend existing objects customization.** That includes more options for text and particle flows.
- **0.4.1**
    - **favorite folders in file explorer.** This can act as shortcuts.
- **Box of ideas for the future (i.e possible but not confirmed)**
    - full CLI with dedicated terminal and script reading
    - more particle options
    - gradient UI
    - custom color picker
    - more visualizers
    - better linux support (once I find the good moment to setup a Linux dev environment)
    - keyboard shortcuts
    - mouse interactions to manipulate objects
    - translations
    - helper to make cool designs by picking between choices.
    - factory templates
    - More accurate preview (time based instead of frame based)

## Cool, when does it come ?

As always, because I am the only maintainer and developer of Wav2Bar, and as this is done on my free time, this depends of multiple factors. That includes workload given by the university, my physical health (wrists specifically if you are familiar with RSI), and the rest of life. I am doing my best to push this project forward and satisfy requests, but I also need to find balance with life, that goes without saying.

## Contribution

I will be preparing a CONTRIBUTING.md file on GitHub soon primarily for documentation on the project, but also to get something if someone would ever be interested to contribute. If it is your case, please contact me at picorims.contact@gmail.com so we can discuss the topic (in the current state it is not ready for that, in terms of git branches).

That's it for today's devlog, stay tuned!

~ Picorims