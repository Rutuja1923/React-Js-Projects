# TeaDisplay Component  

## Description  

This project demonstrates a simple React component called **TeaDisplay** that displays details about different types of tea.  

### Features  

1. **Basic Static Component**  
   - Initially, the `TeaDisplay` component displays hardcoded details about a specific tea, including its **name, origin, and description**.  

2. **Dynamic Component with Props**  
   - The component is updated to accept **props** (`name`, `origin`, and `description`) to make it reusable.  
   - A parent component (`App.js`) passes different tea data to `TeaDisplay`, ensuring it updates dynamically.  

3. **Rendering Multiple Components**  
   - The parent component contains an **array of tea objects**.  
   - It uses `.map()` to iterate over the array and renders multiple `TeaDisplay` components, each displaying unique tea information.  

This setup makes the component flexible and scalable for displaying various types of tea dynamically.  
