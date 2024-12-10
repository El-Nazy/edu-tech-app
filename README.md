
# **Question Management Application**

A responsive Question and Answer management application where users can view their questions, replies, and interact by replying or navigating through multiple pages of content.

## **Features**

- **User-Friendly Layout**:
  - Sidebar for navigation.
  - Full-width responsive header.
  - Main content area displaying questions, replies, and an input box for new replies.

- **Core Functionalities**:
  - List of questions with author details.
  - Replies associated with each question.
  - Input field for submitting replies.
  - Pagination for navigating multiple pages.

- **Responsive Design**:
  - Sidebar adjusts to full width on smaller devices.
  - Header spans the full width of the viewport.

## **Project Structure**

```
src/
├── components/
│   ├── Header.jsx         // Full-width header component
│   ├── Sidebar.jsx        // Sidebar navigation menu
│   ├── QuestionItem.jsx   // Component for displaying individual questions
│   ├── ReplyItem.jsx      // Component for displaying replies
│   ├── ReplyInput.jsx     // Input box for submitting replies
│   ├── Pagination.jsx     // Pagination component
    ├── Card.jsx         
│   ├── Footer.jsx        
│   ├── Grid.jsx   
│   ├── Prefer.jsx      
│   ├── QuestionCard.jsx     
├── pages/
 ├── auth    // forder for auth
 ├── forum    // forder for main page
     ── Home.jsx    // Main page showing the user's intrest
│   ├── QuestionYou.jsx    // page showing the user's questions and replies
    ├── QuestionAsk.jsx    // page showing the where user should ask questions
```

## **Technologies Used**

- **Frontend**:
  - React.js: For building the user interface.
  - Tailwind CSS: For responsive styling.

- **Styling Framework**:
  - Tailwind CSS for utility-first CSS classes.

## **Setup and Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/samuelsuu/edu-tech-app.git
   cd edu-tech-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at:
   ```bash
   http://localhost:5173/
   ```

## **Components**

### 1. **Header**
- A top navigation bar spanning the entire width of the screen.
- Fully responsive to ensure a consistent look across devices.

### 2. **Sidebar**
- Contains navigation options for different sections of the app.
- Spans the full height of the screen.
- Shrinks to full width on smaller devices.

### 3. **QuestionItem**
- Displays a single question.
- Includes the author, email, content, and time of the question.

### 4. **ReplyItem**
- Displays a single reply.
- Includes the author's name, time of the reply, and reply content.

### 5. **ReplyInput**
- Provides an input field for users to submit replies.

### 6. **Pagination**
- Allows users to navigate between pages of questions or replies.

## **Responsive Design**

The layout has been designed to be fully responsive:
- The sidebar occupies 25% of the width on larger screens but adjusts to full width on smaller screens.
- The header is always full-width.

## **Future Enhancements**

- **Dynamic Data**: Fetch questions and replies dynamically using an API.
- **Authentication**: Add user login and registration for a personalized experience.
- **Search and Filters**: Enable searching and filtering questions based on categories or keywords.
- **State Management**: Implement Redux or React Context for better data management.

## **Contributing**

Contributions are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## **Live Site**

Check out the live version of the application:  
👉 [Edu-Tech Titans](https://edu-tech-titans.netlify.app/)


## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## **Contact**

For any inquiries or support, feel free to contact the project owner:
- **Email**: [uwaemesamuel5@gmail.com]
