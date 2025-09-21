---
title: FAQ
sidebar_position: 3
---

# Frequently Asked Questions

<details>
<summary>Black screen with small image in the upper-left hand corner</summary>

If you see a blank screen with a small image in the upper-left hand corner, this means that the AR Space is working, but there might be an issue with the capture/render process leaving the screen to remain blank.

This issue may be seen on both Windows and Mac OS (Intel / Apple Silicon) but have different workarounds.

**Symptoms:**

- Blank/black screen
- Small image visible in the upper-left corner
- AR Space appears to be functioning

**Platforms affected:**

- Windows
- Mac OS (Intel)
- Mac OS (Apple Silicon)

**Note:** This is a known issue with different workarounds available depending on your operating system.

</details>

<details>
<summary>Location of the VertoXR application logs</summary>

The easy way to find the application logs is to use the COG button from the application window to reveal the BUG button. This button will open the directory location of the logs in the respective operating system.

In case you are not able to access it, here are the file paths using the built-in environmental variables of the respective operating system.

**For Windows:**

```
%homedrive%%homepath%\AppData\Local\verto_xr\logs
```

**For Mac OS:**

```
/Users/${USER}/Library/Application Support/verto_xr/logs
```

**Steps to access logs:**

1. Open VertoXR application
2. Click the COG (settings) button
3. Click the BUG button that appears
4. This will open the logs directory in your file explorer

</details>

<details>
<summary>I see the display in the glasses, but still see "No glasses connected" message in the app</summary>

This symptom is typically seen with computers that do not have built-in support for ALT-DP output for USB-C. Commonly used with a DP-to-USB-C adapter or an HDMI-to-USB-C adapter to provide ALT-DP when the source computer does not support it natively. Most likely, the issue is either with the configuration or the adapter itself, where the USB data from the slow lanes is not being transmitted between the computer and the glasses.

### Why this happens

AR glasses are not presented as a single monolithic device. It is presented to the computer as a display and separate discrete USB peripherals. These individual USB peripherals support features such as USB Audio Class for speakers and USB IMU for glasses orientation.

Since the glasses are an ALT-DP display, the lanes meant for high-speed USB data are switched off the USB bus. This allows a foreign data signal to be transported over these lanes. This is how the Alternate Mode for USB-C works. In this case, the lanes are connected to the graphics processor to transport DisplayPort data to the glasses. This is why you can see a display through your glasses.

The reason why VertoXR doesn't acknowledge your glasses is probably due to the low-speed USB lanes not getting a connection between the computer and the glasses. On most ALT-DP adapters, the port or plug that supports USB power also channels low-speed USB data for the various USB components of the glasses, ensuring full functionality.

### Common causes and workarounds

**Symptom:** The cable or port connected for power/data isn't working.

- **Workaround:** Try a different USB port on your computer or a different USB cable. Not all USB-C cables are fully functional; some of the cheaper USB-C cables only have enough pins to support power for charging, but not for data transfer.

**Symptom:** You are using a female-to-female USB-C Adapter.

- **Workaround:** Flip the orientation of one of the plugs going into the female coupler. Female adapters are outside of the USB-IF scope for USB-C and violate the specification since female ports are supposed to handle orientation in both ways. Since USB-C cables do not have lane redundancy for the slow lanes, you have to match the orientation of the two cables manually.

**Symptom:** The adapter does not support data.

- **Workaround:** Get a different ALT-DP adapter; it is either malfunctioning or wasn't designed to support USB data.

### Getting help

If you are still having problems, please leave feedback here, and we can help. Also, if you have a known-working or a known-not-working adapter, please post the make, model, and where it was purchased. That way, we can crowdsource adapters used worldwide, since not all adapters are equal or available globally.

</details>
