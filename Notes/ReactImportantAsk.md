React.js Low-Level Design Questions That Every Frontend Developer Should Know

Had another React interview yesterday and realized these LLD questions keep coming up again and again. Sharing the most common ones that I've encountered across multiple companies.

1. 𝗧𝗵𝗲 𝗖𝗹𝗮𝘀𝘀𝗶𝗰 𝗖𝗼𝘂𝗻𝘁𝗲𝗿 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 : 
- They always start with this. 
- Build a counter that increments, decrements, and resets.
- Sounds simple right? But then they ask you to optimize re-renders and
 handle edge cases.
- The trick is using useCallback and thinking about state updates.

2. 𝗧𝗼𝗱𝗼 𝗟𝗶𝘀𝘁 𝘄𝗶𝘁𝗵 𝗟𝗼𝗰𝗮𝗹 𝗦𝘁𝗼𝗿𝗮𝗴𝗲 :
- This one tests your understanding of useEffect and data persistence.
- They want to see if you know when to sync with localStorage and how to
 handle component cleanup.
- Most people forget to handle the case when localStorage is disabled.

3. 𝗦𝗲𝗮𝗿𝗰𝗵 𝘄𝗶𝘁𝗵 𝗗𝗲𝗯𝗼𝘂𝗻𝗰𝗶𝗻𝗴 : 
- Almost every company asks this.
- Create a search input that doesn't fire API calls on every keystroke.
- The challenge is implementing debouncing correctly and canceling
 previous requests.
- Custom hooks are your friend here.

4. 𝗠𝗼𝗱𝗮𝗹 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 : 
- Build a reusable modal that can be triggered from anywhere in the app.
- They're testing your knowledge of portals, focus management, and event
 bubbling.
- Don't forget about accessibility and escape key handling.

5. 𝗜𝗻𝗳𝗶𝗻𝗶𝘁𝗲 𝗦𝗰𝗿𝗼𝗹𝗹 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 :
- This separates junior from mid-level developers.
- You need to understand intersection observers, virtualization concepts, and
 performance optimization.
- Loading states and error handling are crucial.

6. 𝗙𝗼𝗿𝗺 𝘄𝗶𝘁𝗵 𝗩𝗮𝗹𝗶𝗱𝗮𝘁𝗶𝗼𝗻:
- Create a form with real-time validation and error messages.
- They want to see if you understand controlled vs uncontrolled components,
 validation patterns, and user experience considerations.

7. 𝗧𝗵𝗲𝗺𝗲 𝗦𝘄𝗶𝘁𝗰𝗵𝗲𝗿:
- Build a dark/light mode toggle that persists across sessions.
- Tests your knowledge of Context API, CSS variables, and system
 preferences.
- The tricky part is handling the initial flash of unstyled content.

8. 𝗔𝘂𝘁𝗼-𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁:
- Search suggestions that appear as you type.
- This combines debouncing, API calls, keyboard navigation, and accessibility. - Handling loading states and empty results properly is key.

The Pattern I Notice Every interviewer wants to see these things:
- Clean, readable code structure
- Proper state management
- Performance considerations
- Error handling
- Accessibility basics
- Testing approach

𝗠𝘆 𝗔𝗱𝘃𝗶𝗰𝗲: Practice building these components from scratch. Don't just copy-paste from tutorials. Understand why you're making each design decision. Most importantly, always ask clarifying questions before you start coding.
