---
title: Getting Started
sidebar_position: 2
---

# Getting Started

This guide will help you get started with VertoXR and understand the basic app usage.

Connect your glasses with the app

<img
src={require('../static/uploads/vertoxr_ss_not_connected.png').default}
alt="Image"
width="500"
/>

## Modes

Select the mode to use app

<img
src={require('../static/uploads/ss_choose_mode.png').default}
alt="Image"
width="500"
/>

### Immersive Workspace- Quick Start

First make sure your glasses are in extended display mode and then choose your glasses as display in next step,
This display will be used to render the ArSpace

<img
src={require('../static/uploads/ss_choose_glasses_monitor.png').default}
alt="Image"
width="500"
/>

Choose the display setup and click on `Launch` button, ( If you see no desktops in glasses, try moving your head or Press R to recenter )

- Check [ArSpace Controls](#controls) for more info

<img
src={require('../static/uploads/ss_quick_start_mode.png').default}
alt="Image"
width="500"
/>

### Immersive Workspace- Custom Setup

This is for advanced users to create a custom ArSpace setup

<img
src={require('../static/uploads/ss_advanced_mode.png').default}
alt="Image"
width="500"
/>

- Add multiple virtual desktops using `Add Desktop` button
- You can expand the desktop tile to select ArSpace rendering resolution ( its not the actual desktop resolution )
- Higher rendering resolution might cause lag, choose according to your system configuration
- Enable/Disable display toggle to show that display in ArSpace
- Click `Launch` button to start ArSpace in glasses
- You can save multiple display setups from your ArSpace menu
- You can create Custom `DisplaySetup` from ArSpace in glasses, Check [ArSpace Display](#display)
- Check [ArSpace Controls](#controls) for more info

### Game Mode

This mode is for using glasses to play games with SteamVR ( Coming soon ), WebXR ( Coming soon ), Mouse emulation or use OpenTrack

First calibrate your glasses on a flat surface
Then start the mode you want to use

<img
src={require('../static/uploads/ss_game_mode.png').default}
alt="Image"
width="500"
/>

## ArSpace Menu

### Display

You will see a ArSpace Menu in top right corner in your glasses

<img
src={require('../static/uploads/ar_space_menu_displays.png').default}
alt="Image"
width="500"
/>

- Expand `Display` and enter `Layout Setup Name` and click `Save` to save the setup and reuse that later from App `Custom Display Setup`
- `Enable display control` toggle will be used to display or enable the desktop controls in ArSpace with mouse and keyboard
- `Reset Displays` will rearrange the displays in Grid
- `Sync Displays` will try to sync the display arrangement of ArSpace with actual system arrangement, to move your cursor between windows freely

### Glasses

Adjust the glasses yaw, pitch and roll sensitivity for better experience

### Calibration

Put your glasses on flat surface and start calibration, you can start calibration from VertoXR app or by pressing `Space` keyboard shortcut in ArSpace

### KeyBindings

Adjust keybindings for Global and Input accordingly, Global keybindings are for using shortcuts from anywhere in your system, Input keybindings will only work in ArSpace

## Controls

### ArSpace Controls

- Press `Middle mouse button` or Keyboard Shortcut ( Check ArSpace Menu ) to bring your cursor back in ArSpace from anywhere
- Use **WASDQE** keys to move around in ArSpace ( Your cursor must be in ArSpace )
- Hold empty area in ArSpace with your cursor and drag to explore ArSpace
- **Head Movement**: Move your head for 3DOF experience

### Display Manipulation

- **Move Displays**: Hold the display in ArSpace with left mouse button and drag
- **Rotate Displays**: Hold the display in ArSpace with right mouse button and drag
- **Alternative Control**: Hold displays with left/right mouse button and use `WASDQE`
- **Enter Display**: Click on Display to enter in it and control
- **Exit Display**: Use `Middle mouse button` or keyboard shortcut to bring your cursor back to ArSpace
- **Enter another display**: bring your cursor back to ArSpace and enter in another display, or try to use `Sync Displays` from ArSpace menu to arrange displays in proper order and move cursor between them ( This might not work as expected if displays not arranged properly )
- **Reset Displays** Click `Reset Displays` from ArSpace menu to rearrange all the displays properly
- **Recenter Displays** Press `R` keyboard key in ArSpace to recenter the displays 

After Manipulating displays and arranging your setup properly, you can save the setup layout from ArSpace menu to reuse that for next time

## Next Steps

- Check [Device Configuration](./device_config) for device specific setup
- Join our [Discord community](https://discord.gg/pmAErJmGk5) for real-time support
- Check our [FAQ section](./faq) for additional troubleshooting
- Visit our [GitHub repository](https://github.com/rohitsangwan01/Verto_XR) to report issues
