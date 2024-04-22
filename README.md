# Next To Go Races

This race app allows you to check the latest racing game updates. 
It has the details of game details and timings such as race name, race number and starting time with the coundown timer.

Please go ahead and play around  :)

## Covered :

  - There a button in landing screen called "Click to see Next To Go races", once you clicking on the button you will be able to the race details in list.
  - Fetches list of race details from API (https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10) and displays a list of race details.
  - Show race details in Flatlist (race name, race number and starting time)
  - User only can see 5 race items in the list all the time
  - List displayed in ascending order based on starting time
  - First race item will get disapperared after 6 seconds
  - When user press race list item, will be able to see the race categories based on "category_id" in the toggle view.
  - Used **Redux** for state management.
  - Project working on both Android and iOS
  - Project running on latest RN 0.73.7
  - Designed basic UI for better understanding

## Not Covered :  Willing to implement in the future.

  - I tried to implement the countdown timer accurately, however facing some issue in timer logic and couldn’t remove the item based on the starting time.
  - Instead removed item in 6 seconds
  - I still have some doubt in displaying categories whether i understood properly or not, based on time constraints i couldn't ask doubt on Friday. Sorry for that :(
    
## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design pattern and proper folder structure Architecture && tried TDD approach)
  - **Execution** - App runs successfully in both Android and iOS
  - **Testability** - Used **Jest** for Unit testing and **@testing-library/react-native** for component testing.
  - **Code readability and style** - Written clean code and very convenient to read. Kept style files wisely. 
    (Tried to use all latest methods)

## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	remove **yarn.lock** file from download code

- Step 3 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Packages used : (Technologies)

  Project is created with:

  - react "18.2.0"
  - react-native "0.73.7",
  - typescript "5.0.4"
  - redux "^4.0.5",
  - react-redux "^7.2.0",
  - redux-saga "^1.1.3"
  - redux-mock-store "^1.5.4",
  - jest "^29.6.3" - devDependencies
  - @testing-library/react-native "^12.4.5" - devDependencies
  - used Prettier for code formatting

## Thinking & Decisions :

  - For API calls used "Fetch", since we have only one api call i decided to use "Fetch", if we have further nested API call i would rather go with "axios"
  - I have used "Redux" to pass the data throughout the application and used memoizations (Prefered "redux-saga" for app scalability)
       ("Using the following rule of thumb: don’t use memoization if you can’t quantify the performance gains.")
  - Always prefer to use hooks and created custom hooks for business logic
  - Handled all the "NULL" checks in all components
  - Provided Loader (Activity indicator) before API calling. Loader will shown in upper middle of the screen, just for user interaction.
  - Created ColourPalette for maintaining colors
  - Created constants for maintaining all application hardcoded text
  - Created Constant file for maintaining API url's

## outputs :

https://github.com/shivagunasehkaran/RaceApp/assets/11419839/be9b06e2-d320-4557-be3d-b379c74da0a8


## Happy coding ...
