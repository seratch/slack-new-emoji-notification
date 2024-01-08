## New Slack Emoji Notifications Built with Slack's Automation Platform

This example demonstrates how to build a "standard" (=free) workflow that sends notifications whenever a new emoji is created.

## Getting Started

### Install Slack CLI

If you are not yet familiar with Slack's Automation platform, I suggest visiting its website to gain an understanding of it: https://api.slack.com/automation To run this app, you must install [the Slack CLI](https://api.slack.com/automation/quickstart) and follow the steps using the `slack login` command.

### Clone this template

Run `slack create -t https://github.com/seratch/slack-new-emoji-notification` to clone this template:

```
$ slack create -t https://github.com/seratch/slack-new-emoji-notification
⚙️  Creating a new Slack app in ~/tmp/jolly-turtle-321

📦 Installed project dependencies

✨ jolly-turtle-321 successfully created

🧭 Explore the documentation to learn more
   Read the README.md or peruse the docs over at api.slack.com/automation
   Find available commands and usage info with slack help

📋 Follow the steps below to begin development
   Change into your project directory with cd jolly-turtle-321/
   Develop locally and see changes in real-time with slack run
   When you're ready to deploy for production use slack deploy

$ cd jolly-turtle-321/
```

### Set a valid channel ID to notify new emojis

Create a new channel to post notifications and copy its channel ID:

<img src="https://github.com/seratch/slack-new-emoji-notification/assets/19658/c803cb04-870d-44b3-993f-3bbc08609a49" width=600 />

Replace the channel ID in `workflows/new_emoji_notification.ts` as below:

<img src="https://github.com/seratch/slack-new-emoji-notification/assets/19658/3be6d4ba-86cc-47d6-828c-5c55677d674f" width=600 />

If you want to customize the notification message, you can edit the "message" parameter as well.

If you're an Enterprise Grid customer, you must pass `team_ids` in the trigger definition alongside the channel ID. For more details, please refer to the comment in the code.

### Deploy the app

Now that the app is prepared for deployment, you can run `slack deploy` command. You will be asked to create a trigger. Don't skip creating it. If you fail to create it for some reason, you can do the same with `slack trigger create --trigger-def triggers/emoji_created_event.ts`.

```
$ slack deploy
? Choose a deployed environment Install to a new team
? Install to a new team seratch T03E*****

🔔 If you leave this team, you can no longer manage the installed apps
   Installed apps will belong to the team if you leave the workspace

📚 App Manifest
   Created app manifest for "jolly-turtle-321" in "Acme Corp"

🏠 App Install
   Installing "jolly-turtle-321" app to "Acme Corp"
   Updated app icon: assets/default_new_app_icon.png
   Finished in 5.9s

⚡ Listing triggers installed to the app...
   There are no triggers installed for the app

⚡ Create a trigger
   Searching for trigger definition files under 'triggers/*'...
   Found 1 trigger definition file

? Choose a trigger definition file: triggers/emoji_created_event.ts

⚡ Trigger successfully created!

   Emoji Creation Trigger Ft06CS8E31V0 (event)
   Created: 2024-01-07 17:38:42 +09:00 (1 second ago)
   Collaborators:
     Kaz Sera @seratch U03E94MK0
   Can be found and used by:
     everyone in the workspace
   Hint:
     Invite your app to the channel to receive the events
   Warning:
     Slack Connect channels are unsupported


🎁 App packaged and ready to deploy
   0.001MB was packaged in 0.1s

🚀 jolly-turtle-321 deployed in 7.5s
   App Owner:  seratch (U03E*****)
   Workspace:  Acme Corp (T03E*****)
   Dashboard:  https://slack.com/apps/A06CPA*****

🌩  Visit Slack to try out your live app!
   When you make any changes, update your app by re-running slack deploy

💌 We would love to know how things are going
   Survey your development experience with slack feedback --name platform-improvements

$
```

Whenever someone creates a new custom emoji, the channel receives a notification like this!

<img src="https://github.com/seratch/slack-new-emoji-notification/assets/19658/072b0da6-1a32-40d4-88be-821b68e2a3dd" width=600 />

To customize the app name and icon, you can modify `manifest.ts` and add your own icon image file within the `assets/` directory.

That's it :tada: As long as you refrain from adding custom steps to this workflow, Slack's automation platform won't charge addition cost for it. For more information, kindly refer to [the help page](https://slack.com/help/articles/15363357403411).

Enjoy automating anything!
