# 🎯 Number Guessing Game

A simple and interactive **Number Guessing Game** built using **HTML, CSS, and JavaScript**.

The game generates a random number between **1 and 100**, and the player has to guess the number within a maximum of **20 attempts**. After every guess, the game provides feedback to help the player find the correct number.

## Live link

https://jocular-sunshine-591857.netlify.app/

## 📸 Project Preview

<img width="1022" height="630" alt="image" src="https://github.com/user-attachments/assets/07569f29-33c8-4eea-99e4-eeb1644f62f0" />




## 🚀 Features

- 🎲 **Random Number Generation**
  - Generates a random number between 1 and 100 for every new game.

- 🔢 **Number Input**
  - Allows the user to enter a number as their guess.

- ⌨️ **Enter Key Support**
  - The user can submit a guess by pressing the **Enter** key.

- 💬 **Instant Feedback**
  - Displays messages based on the user's guess:
    - Try a higher number.
    - Try a lower number.
    - Correct number.

- 📊 **Attempt Counter**
  - Keeps track of the number of attempts made by the player.

- ⭐ **Score System**
  - The game starts with a score of 20.
  - The score decreases after each valid guess.

- 🛑 **Maximum Attempts**
  - The player can make a maximum of 20 attempts.

- 🏆 **Correct Number Display**
  - Displays the correct number when the player successfully guesses it or when the maximum attempts are reached.

- 🔄 **Reset Game**
  - Allows the player to restart the game with a newly generated random number.

- ✅ **Input Validation**
  - Prevents empty input.
  - Checks whether the entered value is a valid number.
  - Only accepts numbers between 1 and 100.

## 🛠️ Technologies Used

- **HTML5** — Structure of the game
- **CSS3** — Styling and user interface
- **JavaScript** — Game logic, random number generation, validation, attempts, score, and DOM manipulation

## 📂 Project Structure

```text
Number-Guessing-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎮 How to Play

1. Open the game in your browser.
2. Enter a number between **1 and 100**.
3. Click the **Submit** button or press **Enter**.
4. Read the feedback message.
5. Try a higher or lower number based on the feedback.
6. Continue until you guess the correct number.
7. You can click **Reset** to start a new game.

## 📋 Game Rules

- The target number is randomly generated between **1 and 100**.
- Only numbers between 1 and 100 are accepted.
- The maximum number of attempts is **20**.
- The initial score is **20**.
- The score decreases by 1 after every valid guess.
- The game ends when the correct number is guessed or the maximum attempts are reached.

## 🧠 JavaScript Concepts Used

This project demonstrates several basic JavaScript concepts:

- `Math.random()`
- `Math.floor()`
- Variables and constants
- Arrays
- Functions
- Conditional statements
- Event listeners
- DOM manipulation
- Keyboard events
- Input validation
- Template literals
- `Number.isFinite()`

## 🔑 Main JavaScript Logic

The random number is generated using:

```javascript
Math.floor(Math.random() * (Max_No - Min_No + 1)) + Min_No;
```

The formula generates a random integer between the minimum and maximum values.

## 📸 Feature Images



### 1. Game Interface

<img width="1022" height="630" alt="image" src="https://github.com/user-attachments/assets/b5632227-85bb-4bdd-b72e-53622664b51e" />


### 2. Higher / Lower Feedback

## Higher
<img width="890" height="634" alt="image" src="https://github.com/user-attachments/assets/42a934e0-e518-4a10-b55e-d95d59b25fbc" />

## Lower

<img width="844" height="583" alt="image" src="https://github.com/user-attachments/assets/5cd7afd4-c891-4f9d-bf08-ade488ab2740" />





### 3. Correct Guess

<img width="772" height="563" alt="image" src="https://github.com/user-attachments/assets/80d01a5a-0e8d-4872-b267-1652b9c16e43" />


### 4. Game Over

<img width="716" height="530" alt="image" src="https://github.com/user-attachments/assets/fb62459a-6dd6-44b8-a159-ecac160fb49d" />


### 5. Reset Game

<img width="803" height="546" alt="image" src="https://github.com/user-attachments/assets/e8982352-6471-4593-9df3-fa7537e82085" />



## 🎯 Purpose of the Project

The purpose of this project is to understand how **HTML, CSS, and JavaScript work together** to create an interactive web application.

It helps demonstrate:

- Form/input handling
- DOM manipulation
- Event handling
- Random number generation
- Conditional logic
- Game state management
- Basic validation

## 📌 Future Improvements

Possible improvements include:

- Add difficulty levels
- Add a high-score system
- Add a timer
- Prevent duplicate guesses
- Add animations
- Add sound effects
- Add a restart/new-game button
- Store high scores using `localStorage`
- Make the game fully responsive for mobile devices

## 👨‍💻 Author

**Dharmik**

### ⭐ Project

**Number Guessing Game**

Built as a practical project using **HTML, CSS & JavaScript**.
