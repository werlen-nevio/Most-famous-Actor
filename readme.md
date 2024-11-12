# Most-Famous-Actor Project

## Overview
This project is a simple web application that takes a list of actor names, queries The Movie Database (TMDb) API to retrieve their popularity scores, and displays the top 3 most famous actors based on their scores.

The application features:
- An input field for entering actor names (single or comma-separated list).
- A button to trigger the search.
- A table to display the top 3 actors along with their popularity scores.

## Features
- Input actor names through a user-friendly HTML interface.
- Fetch popularity scores using TMDb API.
- Display the results in a neatly formatted table.
- Built using HTML, Bootstrap, jQuery, and JavaScript.

---

## Requirements
### Prerequisites
- A TMDb API key.

### Dependencies
- [Bootstrap 5.3.0](https://getbootstrap.com)
- [jQuery 3.7.1](https://jquery.com)

---

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-repo/most-famous-actor.git
    cd most-famous-actor
    ```

2. Create 'options' with your TMDb API key in `env.js`:
    ```javascript
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer Your-TMDb-API-Key'
        }
    };
    ```

3. Open `index.html` in your browser to launch the application.

---

## Usage

1. Enter actor names in the input field (comma-separated for multiple names).
   Example: 
   ```
   Leonardo DiCaprio, Scarlett Johansson, Tom Hanks
   ```

2. Click the **Get most famous actors** button.

3. The top 3 actors along with their popularity scores will appear in the table below.

---

## Code Structure
- **HTML UI**: Defined in `index.html`.
- **Styles**: Custom CSS in `css/style.css`.
- **JavaScript Logic**: 
  - `env.js`: Contains API key.
  - `src/main.js`: Main logic to handle API requests and UI updates.
  
---

## API Integration
This project uses The Movie Database (TMDb) API. Ensure you have a valid API key from [TMDb](https://www.themoviedb.org/) and add it to the `env.js` file.

The main script (`src/main.js`) sends requests to TMDb's search endpoint to fetch actor popularity data and ranks them.

---

## Example Workflow
1. Input: `Leonardo DiCaprio, Scarlett Johansson, Tom Hanks`
2. The application fetches their popularity scores:
   - Leonardo DiCaprio: 85.7
   - Scarlett Johansson: 92.1
   - Tom Hanks: 78.4
3. Output: The table will display the following:
   ```
   Name                Score
   Scarlett Johansson  218.781
   Leonardo DiCaprio   135.403
   Tom Hanks           107.191
   ```

---

## Contributing
Feel free to submit issues or pull requests for enhancements or bug fixes. Ensure to follow proper coding practices.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- Thanks to [TMDb](https://www.themoviedb.org/) for providing the API.
- Bootstrap for styling.
- jQuery for simplifying JavaScript development.