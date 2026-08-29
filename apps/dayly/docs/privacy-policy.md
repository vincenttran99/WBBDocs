---
sidebar_position: 2
title: Privacy Policy
---

# Privacy Policy

**App:** Dayly — Daily Planner & Habits  
**Bundle ID / Package:** `com.dayly.planner.habits`  
**Platforms:** iOS (App Store), Android (Google Play)  
**Effective date:** August 29, 2026  
**Last updated:** August 29, 2026  
**Publisher / data controller:** WBB  
**Contact:** [vincenttrandeveloper@gmail.com](mailto:vincenttrandeveloper@gmail.com)

---

## Summary — the short version

Dayly is designed so that the things you write stay on your phone.

- **Your planner and habits never leave your device.** Task titles, habit names, reminder times, and your completion history are stored only in Dayly's local storage on your phone. There is no cloud sync, no backend copy, and no way for us to read them.
- **There is no account.** No sign-up, no email required, no password, no social login. Nothing ties the app to your identity.
- **No ads, no ad SDKs, no tracking across other apps or websites.** Dayly is built with the advertising identifier (IDFA / GAID) support switched off, so it does not ask for App Tracking Transparency permission — because it has nothing to track you with.
- **We never sell your personal information.**
- **What does leave the device:** anonymous usage statistics and crash reports (to make the app work better), device-attestation tokens (to stop abuse of our servers), and — only if you choose to send one — the content of a report you submit through the in-app report form.

The rest of this policy explains each of those points precisely.

---

## 1. Scope

This policy applies to the Dayly mobile app distributed on the Apple App Store and Google Play, including its home-screen widgets, and to any future updates, to the extent that the features described are actually enabled on your device.

It does not cover Apple's or Google's own processing of your data as store and platform operators, which is governed by their own privacy policies.

## 2. Data that stays on your device

Dayly stores the following **locally on your phone only**. It is not transmitted to us or to anyone else.

| What | Details |
| --- | --- |
| **Tasks** | Title, date, colour, position in the day's list, creation time, archive state. |
| **Habits** | Name, colour, recurrence (daily, or chosen weekdays), start and end date, position on the habit calendar. |
| **Completions** | Which task or habit you ticked off, and on which day. This is what draws the colour ribbons on the habit calendar. |
| **Reminder times** | The time of day you asked a task or habit to remind you, used to schedule a local notification on the device. |
| **Preferences** | Language, appearance, notification settings, and other app options you set. |
| **Widget snapshot** | A copy of today's tasks and the current month's ribbon, written to a private shared container on your device (an iOS App Group / the Android widget provider) so the home-screen widget can draw itself. It stays inside your device's sandbox. |
| **Purchase entitlement state** | A local record of whether a paid plan is active, so the app knows what to unlock while offline. |
| **A random anonymous ID** | A randomly generated identifier (a UUID) created on first use of the report form. It contains no personal information and is not derived from your device, phone number, email, or advertising identifier. It exists so that if you send several reports we can see they came from the same install. |
| **Your email, if you typed one into the report form** | Remembered locally so you do not have to retype it next time. |
| **Technical housekeeping** | A cached device-performance tier (used to pick animation quality), the timestamp of the last daily task rollover, and a cached list of our other apps shown on the "more apps" cards. |

**Deletion.** All of the above is removed when you delete the app, or when you clear the app's data in your device settings. Because we never receive it, we cannot restore it for you — if you want a copy, export or note it down before uninstalling.

## 3. Data processed off the device

### 3.1 Usage analytics — Google Firebase Analytics

Dayly records anonymous, aggregated usage events so we can see which features are used and where people get stuck. Examples of what is recorded:

- which screen you are viewing (Habits, Planner, Settings, report form, paywall);
- that the notification permission prompt was shown, and whether it was allowed;
- that the paywall was opened, a plan was selected, and whether a purchase started, completed, failed, or was cancelled — **and which plan tier**, never payment details;
- that a subscription became active, or that "restore purchases" was tapped;
- that the app's rating prompt was shown;
- that unfinished tasks were rolled over to today, and **how many**;
- that a report was submitted, and how many images were attached.

**What is never sent as analytics:** the text of your tasks, habit names, notes, reminder times, or your completion history. Event values are limited in length and stripped to plain identifiers before being sent.

Firebase assigns an **app-instance ID** to your installation and receives basic technical context (platform, OS version, app version, device model, coarse region/language, IP address at the time of the request). Dayly is configured **without advertising-identifier support** (`AnalyticsWithoutAdIdSupport`), so no IDFA or Google Advertising ID is collected and this data is not used for advertising or cross-app tracking. The app-instance ID is reset if you delete and reinstall the app, or clear app data.

Processor: **Google LLC / Firebase** — see the [Firebase privacy documentation](https://firebase.google.com/support/privacy).

### 3.2 Crash reports — Google Firebase Crashlytics

If the app crashes or hits a fatal error, a crash report is sent so we can fix it. A report contains the stack trace, the app version, the device model, the OS version, and technical state at the moment of the crash. It does **not** contain your tasks, habits, or notes, and it is not used to identify you.

Processor: **Google LLC / Firebase**.

### 3.3 Abuse prevention — Google Firebase App Check

Before Dayly talks to our Firebase services, it asks the operating system to prove the app is a genuine, untampered install: **App Attest / DeviceCheck** on iOS, **Play Integrity** on Android. The result is a short-lived attestation token. This protects our backend from spam and abuse. The token attests the *app*, not you — it carries no personal data and cannot be used to identify you.

Processors: **Apple Inc.** (App Attest / DeviceCheck) and **Google LLC** (Play Integrity, Firebase App Check).

### 3.4 The in-app report form (bug report / feedback / feature suggestion)

This is the only place where you deliberately send us content. It is entirely optional — the app is fully usable without ever opening it.

When you submit a report, the following is stored in **Cloud Firestore** and **Firebase Storage**:

- the **email address** you enter (so we can reply — you choose whether to give a real one);
- the **report type** (bug report, feedback, or feature suggestion);
- your **message** (up to 2,000 characters);
- up to **3 images** you attach (max 5 MB each);
- the **anonymous ID** described in section 2, the **platform** (iOS/Android), the **app version**, and a **server timestamp**.

**About attached images.** The photo picker is opened only when you tap to attach an image, and only the images you select are made available to the app — Dayly never gets access to your photo library as a whole. On Android the system photo picker is used, so the app declares no broad media-storage permission at all. Dayly does not read location or other EXIF metadata from your photos; however, the image file you choose is uploaded as you selected it, so if you would rather not share embedded metadata, please attach a screenshot rather than an original camera photo.

**Retention.** Reports are kept while we work through them and for a reasonable period afterwards as a record of what was fixed and why. You can ask us to delete your report and its attachments at any time — see [section 8](#8-retention) and [section 9](#9-your-rights).

### 3.5 Remote configuration and our other apps

Dayly reads two small, public, read-only collections from Cloud Firestore:

- a flag telling the app whether the report form is currently accepting submissions, and
- the list of our other apps shown on the "more apps" cards (name, short description, store link), which is cached on your device.

These are reads only — nothing about you is sent. As with any network request, Google receives your IP address and basic technical data to serve the response. Tapping one of those cards hands off to the App Store or Google Play, which then operates under Apple's or Google's own policies.

### 3.6 Images loaded from our storage

Some illustrations shown in the app are fetched from Firebase Storage over HTTPS, carrying the App Check token described in [section 3.3](#33-abuse-prevention--google-firebase-app-check). Google receives your IP address and technical request data in the process.

### 3.7 Purchases and subscriptions

Dayly offers optional paid plans (monthly, yearly, and lifetime). Payment is processed **entirely by Apple or Google** through the store on your device.

- We never see or receive your card number, bank details, or billing address.
- The app receives only **entitlement and transaction status** from the store — which product was purchased and whether it is currently active — which it uses to unlock paid features and stores locally on the device.
- "Restore purchases" asks the store to re-report purchases already tied to your Apple Account / Google Account.
- Managing or cancelling a subscription opens the store's own subscription screen.

Apple's and Google's handling of your purchase data is governed by their privacy policies, not this one.

### 3.8 Notifications — local only

Habit and task reminders are **local notifications**, scheduled on your device by your device, at the times you set. Dayly has **no push infrastructure**: it registers no push token, contains no remote-notification entitlement, and cannot send you a message from our side. Nothing about your reminders is transmitted anywhere.

You can grant or revoke notification permission at any time in your system settings; the app keeps working without it, minus the reminders.

### 3.9 Rating prompt

Dayly may ask the operating system to display the **native App Store / Google Play rating dialog**. The dialog, and any review you write in it, are handled by Apple or Google. We only record internally that the prompt was shown (see [section 3.1](#31-usage-analytics--google-firebase-analytics)); we never see whether or how you rated the app.

## 4. Permissions Dayly asks for — and the ones it does not

| Permission | Why | Required? |
| --- | --- | --- |
| **Notifications** | To deliver the habit and task reminders you set. | Optional |
| **Photo library (selected photos only)** | To attach images to a report you are sending us. On iOS this is asked when you tap attach; on Android the system photo picker is used and no media permission is declared. | Optional |

Dayly deliberately does **not** request or use: camera, microphone, location, contacts, calendar, health data, exact-alarm scheduling, broad media/storage access, motion sensors, or the advertising identifier / App Tracking Transparency prompt. These are actively stripped from the app's manifest at build time rather than merely left unused.

## 5. How we use the data

We process the limited data described above to:

- provide the planner, habit calendar, widgets, and reminders;
- keep the app stable — diagnosing crashes and errors;
- understand which features are used, so we know what to improve or remove;
- unlock paid features you bought, via Apple or Google;
- reply to a report you sent us, and fix what it describes;
- protect our services from abuse and comply with legal obligations.

We do **not** use your data for advertising, profiling, automated decision-making, or cross-app or cross-site tracking. **We do not sell personal information**, and we do not "share" it for cross-context behavioural advertising as those terms are used in California law.

## 6. Legal bases (EEA / UK)

Where the GDPR or UK GDPR applies to you:

| Purpose | Legal basis |
| --- | --- |
| Providing the app's features | Performance of a contract (Art. 6(1)(b)) |
| Crash reporting, abuse prevention, security | Legitimate interests (Art. 6(1)(f)) — keeping the app working and our services safe |
| Usage analytics | Legitimate interests (Art. 6(1)(f)), or your consent where local law requires it |
| Handling a report you send us | Performance of a contract / your consent (Art. 6(1)(a)) — you choose to send it |
| Notifications | Your consent, given through the system permission prompt (Art. 6(1)(a)) |
| Legal and record-keeping obligations | Legal obligation (Art. 6(1)(c)) |

You may object to processing based on legitimate interests, and withdraw consent at any time — for notifications, by revoking the permission in system settings.

## 7. Recipients, sub-processors, and international transfers

| Recipient | Role | Data involved |
| --- | --- | --- |
| **Google LLC / Firebase** | Analytics, Crashlytics, App Check, Firestore, Storage | Usage events, crash reports, attestation tokens, report content, IP address |
| **Apple Inc.** | App Store distribution, in-app purchases, App Attest/DeviceCheck, local notifications, rating prompt | Purchase and entitlement data, attestation |
| **Google LLC (Play)** | Play Store distribution, in-app billing, Play Integrity, rating prompt | Purchase and entitlement data, attestation |

These providers process data on servers in the United States and other countries, which may be outside your country of residence. Where required, such transfers rely on the safeguards those providers offer — including the European Commission's Standard Contractual Clauses and, where applicable, the EU–US Data Privacy Framework. Each provider processes data under its own privacy policy.

We use no advertising networks, no attribution or MMP SDKs, and no analytics providers beyond the ones named above.

## 8. Retention

| Data | Kept for |
| --- | --- |
| Everything in [section 2](#2-data-that-stays-on-your-device) (on your device) | Until you delete it in the app, clear app data, or uninstall Dayly |
| Analytics events | For the retention period configured in Firebase Analytics (by default up to 14 months for event-level data), then deleted or aggregated |
| Crash reports | Typically up to 90 days, per Crashlytics' retention |
| Reports you send us, and attached images | While being handled, and for a reasonable period afterwards as a record; deleted earlier on request |
| App Check tokens | Short-lived; refreshed automatically and not retained as records |

## 9. Your rights

Depending on where you live — including under the GDPR/UK GDPR, the CCPA/CPRA in California, and comparable laws elsewhere — you may have the right to access, correct, delete, restrict, or object to the processing of your personal information, to receive a copy of it in a portable format, to withdraw consent, and not to be discriminated against for exercising these rights.

**In practice, for Dayly:**

- **Data on your device** — you control it directly. Delete individual tasks and habits in the app, clear the app's data in system settings, or uninstall the app. We hold no copy, so there is nothing for us to delete.
- **Analytics and crash data** — reinstalling the app, or clearing app data, resets the app-instance ID and disconnects future data from past data. To have data associated with your current installation deleted, email us; we will need the app-instance ID or the approximate dates so we can locate it.
- **A report you sent us** — email us from the address you used, or quote the report, and we will delete the report and its attachments.

Write to **[vincenttrandeveloper@gmail.com](mailto:vincenttrandeveloper@gmail.com)**. We aim to respond within 30 days. You may also lodge a complaint with your local data protection authority; in the EEA, that is the authority for your country of residence.

## 10. Children

Dayly is a general-audience productivity app. It is not directed at children under 13 (or the higher minimum age set by your local law, such as 16 in parts of the EEA), and we do not knowingly collect personal information from children. The app contains no ads, no social features, no user-to-user content, and no external links other than to the app stores.

If you are a parent or guardian and believe a child has sent us personal information through the report form, contact us and we will delete it.

## 11. Security

Data on your device is protected by the operating system's app sandbox and device encryption. Data in transit is sent over HTTPS/TLS. Access to our Firebase project is restricted to the publisher, requests are attested with App Check, and Firestore security rules limit what the app can read and write.

No method of transmission or storage is completely secure, and we cannot guarantee absolute security.

## 12. Changes to this policy

We may update this policy as the app changes. The "Last updated" date at the top will change, and for material changes — for example a genuinely new category of data collection — we will give notice in the app or on the store listing before the change takes effect. Continuing to use the app after a change takes effect means the updated policy applies.

## 13. Contact

**Email:** [vincenttrandeveloper@gmail.com](mailto:vincenttrandeveloper@gmail.com)  
**Publisher:** WBB
