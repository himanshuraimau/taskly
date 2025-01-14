# Taskly

A React Native mobile application built with Expo that includes a shopping list manager and a car wash reminder system.

## Features

### Shopping List Manager
- Add items to your shopping list
- Mark items as complete/incomplete
- Delete items from the list
- Automatic sorting (incomplete items first, then completed items)
- Haptic feedback for interactions
- Persistent storage using AsyncStorage

### Car Wash Reminder
- Countdown timer showing time until next car wash is due
- Visual indicators when car wash is overdue
- Push notification reminders
- Confetti animation when marking car wash as complete
- History view of all completed car washes
- 14-day interval between recommended car washes

## Technical Stack

- React Native / Expo
- TypeScript
- AsyncStorage for data persistence
- Expo Notifications for push notifications
- Expo Haptics for tactile feedback
- date-fns for date manipulation
- react-native-confetti-cannon for celebrations

## Key Components

- `TimeSegment`: Reusable component for displaying time units
- `ShoppingListItem`: Component for individual shopping list entries
- Storage utilities for data persistence
- Push notification registration handler

## Project Structure

```
taskly/
├── app/
│   ├── index.tsx           # Shopping list screen
│   └── counter/
│       ├── index.tsx       # Car wash timer screen
│       └── history.tsx     # Car wash history screen
├── components/
│   └── TimeSegment.tsx     # Time display component
├── utils/
│   ├── storage.ts          # AsyncStorage utilities
│   └── registerForPushNotificationsAsync.ts
└── theme.ts                # App styling constants
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the Expo development server:
```bash
npm start
```

## Device Permissions

The app requires the following permissions:
- Notifications (for car wash reminders)
- Haptics (for tactile feedback)

## Dependencies

See package.json for complete list of dependencies including:
- expo
- react-native
- @react-native-async-storage/async-storage
- expo-notifications
- expo-haptics
- date-fns
- react-native-confetti-cannon