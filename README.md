# AI Model Marketplace

This document provides an overview of the features implemented in this application and guidance on how to explore and interact with it.

## Demo Video

https://github.com/siddhesh1051/AI-Hub/assets/91652255/54157712-b6e7-4f09-babc-e0c346a102ad


## Overview

The AI Models Marketplace project is developed using Next.js, employing a mock API and data generated using JSONPlaceholder [API Link](https://my-json-server.typicode.com/siddhesh1051/siddhesh1051-json-server/models). This application is completely responsive and encompasses the following features:

## Features

### 1. Browsing Models

The application presents a comprehensive list of available models for users to explore. Leveraging a mock API created using JSON Placeholder, users can browse through the different models seamlessly and can view the important information on card itself.

### 2. Featured Models Wall

Specific models are displayed in a different wall where they are sorted according to the views and likes they received.

### 3. Model Details Pages

Each model has its dedicated page where users can delve deeper into its specifics. These pages include descriptions of the model and its provider, code snippets demonstrating usage examples, and similar models as well.

### 4. Categories Pages
In this page the user can find the AI models listed on the website with his/her's choice of Categories comprising of Text generation, image generation etc. 


### 5. Model Creation Space

Providers can upload information about their models seamlessly through the application, like Name of model, code snippet example etc. so that they can be added to the marketplace page

### 6. "Try it Out" Functionality

Users can experiment with specific models without writing any code(Dummy feature). For example, image-to-text models allow users to upload images, with the model generating corresponding text outputs.

## Demo

To explore the AI Model Showcase Application:

Visit Live Link : https://aihub-atlan.vercel.app/

## Tech Stack 

NextJS (Reactjs framework), Tailwind css

#### npm packages used: 
###### sonner (for toast)
###### axios (for API Calls)
###### react-code-blocks (To show code snippet)
###### lucide-react (for icons)

## Speed Insights
#### Load Time: 1-1.5 secs
To measure the load time I have used vercel's analytics package @vercel/speed-insights. The information regarding each session is visible on vercel's dashboard.







---

## Speed Insights Screenshots

![Desktop Screenshot](/screenshots/desktop.png)
![Mobile Screenshot](/screenshots/mobile.png)

## Optimisation
- Used Image tag in nextjs instead of img which comes with lazy loading inbuilt.
- A Loading state is shown until the API loads the data so that user will stay at the page.



