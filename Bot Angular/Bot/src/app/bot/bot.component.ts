import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import axios from 'axios';
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent {
  userInput: string = '';
  chatLog: { message: string, isReceived: boolean }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Any initialization logic you have
  }



  handleUserInput(): void {
    // Handle user's input here
    //  console.warn("om");
    
    const userMessage = this.userInput.trim();
    if (userMessage !== '') {
      // Display user's message in the chat log
      this.chatLog.push({ message: userMessage, isReceived: true });

      // Clear the input field
      this.userInput = '';

      // Check for predefined responses
      const predefinedResponses: { question: string, response: string }[] = [
        { question: 'Hi', response: 'Hello there!' },
        { question: 'How are you?', response: 'I am doing well, thank you!' },
        // Add more predefined question-response pairs here
      ];

      const matchingResponse = predefinedResponses.find(pair => pair.question.toLowerCase() === userMessage.toLowerCase());

      if (matchingResponse) {
        // Display the matching response in the chat log
        this.chatLog.push({ message: matchingResponse.response, isReceived: false });
      } else {
        // Display a default response for unrecognized questions
        this.chatLog.push({ message: "I'm sorry, I don't understand. Can you please rephrase your question?", isReceived: false });
      }
    }
  }
}

