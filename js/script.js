const skills = [
    "Python","Django","Django REST Framework","Flask","FastAPI",
    "Node.js","Express","PostgreSQL","Redis","Celery",
    "React","TypeScript","JavaScript","R","SPSS",
    "Pandas","NLTK","Power BI","REST APIs","Git",
    "Docker","SQL","BeautifulSoup","Tkinter","File Automation"
];

const projects = [
    {
        title: "Text Analysis & Stock Intelligence API",
        subtitle: "NLP-Based Data Insight System",
        stack: ["Python","Flask","NLTK","Pandas","BeautifulSoup","Regex","WordCloud","Matplotlib","REST API","yFinance"],
        img: "assets/text_analysis.png",
        body: `<p>The Text Analysis & Stock Intelligence API is a modular Python-based system designed to analyze textual data and generate meaningful insights such as sentiment scores, key sentences, word statistics, and word cloud visualizations. The system was built to transform raw text into structured insights that can support decision-making, reporting, and data interpretation workflows.</p>
            <h3>Core Processing Engine</h3>
            <p>At the core of the project is the text processing engine, which performs tokenization, sentence extraction, word cleansing, lemmatization, and sentiment scoring. The system identifies key sentences using pattern recognition techniques and generates descriptive analytics such as word frequency distributions and average words per sentence. It also produces visual insights through dynamically generated word cloud images, encoded for easy transmission via APIs.</p>
            <h3>Stock Intelligence Module</h3>
            <p>To extend the usefulness of the analysis engine, a stock intelligence module was developed to integrate financial data and real-time news content. This module retrieves stock information, earnings data, and financial updates using external APIs, then extracts relevant news article content using HTML parsing techniques. The retrieved articles are processed through the NLP engine, generating sentiment insights and summaries that provide deeper understanding of market-related narratives.</p>
            <h3>REST API</h3>
            <p>The system is exposed through a Flask-based REST API, allowing users to submit text data or request stock-related analysis through defined endpoints. The API supports health checks, text analysis requests, and stock intelligence queries, returning structured JSON responses that can be integrated into dashboards, web applications, or analytics pipelines.</p>
            <h3>Skills Demonstrated</h3>
            <ul>
                <li>Natural Language Processing (NLP) & Sentiment Analysis</li>
                <li>API Development (Flask) & JSON API Design</li>
                <li>Web Scraping & HTML Parsing</li>
                <li>Data Visualization & Text Mining</li>
                <li>Modular Software Architecture & Data Aggregation Systems</li>
            </ul>`
    },
    {
        title: "CSV Batch Extractor",
        subtitle: "High-Performance CSV Filtering System",
        stack: ["Python","Pandas","CSV Processing","CLI","Memory Optimization","File Streaming","Regex"],
        img: "assets/csv_batch xctractor.png",
        body: `<p>The CSV Batch Extractor is a lightweight, high-performance Python utility designed to filter and extract relevant data from extremely large CSV files without overwhelming system memory. This project was developed to solve a real operational challenge where staff members were required to download and process CSV files containing over 3 million rows daily, using slow Excel pivot-based workflows that frequently crashed or became unresponsive.</p>
            <h3>Problem Solved</h3>
            <p>To eliminate these inefficiencies, I designed a command-line-based system that reads CSV files in controlled memory batches rather than loading the entire dataset into RAM. This streaming-based approach allows the system to process massive files efficiently, even on systems with limited resources.</p>
            <h3>Filtering Capabilities</h3>
            <p>The tool supports multiple filtering methods, including exact match, case-insensitive filtering, partial text matching, and regular expression (regex) filtering, allowing users to extract highly specific data from large datasets. It also allows users to select only required columns, reducing output size and improving processing speed.</p>
            <h3>Batch Output</h3>
            <p>To improve usability for large outputs, the system includes batch output functionality, which splits large filtered results into multiple numbered CSV files. This ensures compatibility with tools like Excel and improves file handling efficiency.</p>
            <h3>Skills Demonstrated</h3>
            <ul>
                <li>Large Dataset Processing (3M+ rows)</li>
                <li>Memory Optimization & File Streaming Techniques</li>
                <li>CLI Tool Development & Regex Implementation</li>
                <li>Performance Optimization & Batch Processing Design</li>
                <li>Real-World Problem Solving & System Efficiency Engineering</li>
            </ul>`
    },
    {
        title: "Smart File Organizer",
        subtitle: "Automated File Sorting & Monitoring System",
        stack: ["Python","Tkinter","CLI","File System Automation","PyInstaller","Logging","Configuration Management"],
        img: "assets/smart_file_organizer.png",
        body: `<p>The Smart File Organizer is a flexible Python-based automation tool designed to simplify file management by automatically organizing files into structured category folders based on their file types. This project was developed to address the common problem of cluttered directories and inefficient file handling workflows, particularly in environments where large volumes of files are frequently downloaded or generated.</p>
            <h3>Dual Interface Design</h3>
            <p>The system supports both a Graphical User Interface (GUI) and a Command Line Interface (CLI), allowing users with different technical skill levels to interact with the tool comfortably. The GUI provides a modern dark-themed interface with real-time activity feedback, while the CLI offers advanced command-based operations suitable for automation and scripting workflows.</p>
            <h3>Watch Mode</h3>
            <p>One of the key features of the system is its Watch Mode, which continuously monitors selected folders and automatically organizes newly created or added files in real time. This eliminates repetitive manual sorting and helps maintain consistently structured directories. The system also supports recursive sorting, allowing files within subfolders to be processed automatically.</p>
            <h3>Extensibility</h3>
            <p>To ensure flexibility and long-term usability, the project was designed with a configurable architecture, allowing users to extend supported file types or create new categories by editing a configuration file rather than modifying core logic. The system supports over 40 file formats across multiple categories such as audio, video, images, documents, and archives.</p>
            <h3>Additional Features</h3>
            <p>Additional features include duplicate file handling, automatic file renaming, operation logging, reverse sorting capabilities, and standalone executable generation using PyInstaller. These features make the tool suitable for both individual users and professional environments.</p>
            <h3>Skills Demonstrated</h3>
            <ul>
                <li>File System Automation & Backend System Design</li>
                <li>GUI Development (Tkinter) & CLI Tool Development</li>
                <li>Real-Time File Monitoring (Watch Mode)</li>
                <li>Logging, Error Handling & Configuration Management</li>
                <li>Software Packaging (Executable Builds) & Code Modularity</li>
            </ul>`
    }
];

(function buildTicker() {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    const all = [...skills, ...skills];
    track.innerHTML = all.map(s => `<span class="ticker-item">${s}</span>`).join('');
})();

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('project-detail').style.display = 'none';
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
    const navEl = document.getElementById('nav-' + id);
    if (navEl) navEl.classList.add('active');
    document.getElementById('nav-links').classList.remove('open');
    window.scrollTo(0, 0);
}

function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('open');
}

function showDetail(index) {
    const p = projects[index];
    document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
    document.getElementById('detail-img').src = p.img;
    document.getElementById('detail-img').alt = p.title;
    document.getElementById('detail-title').textContent = p.title;
    document.getElementById('detail-subtitle').textContent = p.subtitle;
    document.getElementById('detail-stack').innerHTML = p.stack.map(s => `<span class="skill-tag">${s}</span>`).join('');
    document.getElementById('detail-body').innerHTML = p.body;
    document.getElementById('project-detail').style.display = 'block';
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
    document.getElementById('nav-projects').classList.add('active');
    window.scrollTo(0, 0);
}

function backToProjects() {
    document.getElementById('project-detail').style.display = 'none';
    showPage('projects');
}

document.querySelectorAll('nav ul li a').forEach(a =>
    a.addEventListener('click', e => e.preventDefault())
);

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
