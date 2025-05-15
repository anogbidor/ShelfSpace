// src/data/books.ts
export const initialBooks = [
  {
    id: 1,
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    year: 2008,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    rating: 4.7,
    pages: 464,
    description:
      "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    isFavorite: true,
    link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
  },
  {
    id: 2,
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    year: 2017,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg',
    rating: 4.8,
    pages: 616,
    description:
      'The definitive guide to designing scalable, reliable systems for data-rich applications.',
    isFavorite: false,
    link: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
  },
  {
    id: 3,
    title: 'The Pragmatic Programmer: Your Journey To Mastery',
    author: 'David Thomas, Andrew Hunt',
    year: 2019,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/71H7gtYQ6qL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.7,
    pages: 352,
    description:
      'This book teaches you approaches to software development that will make your code better and your life easier.',
    isFavorite: true,
    link: 'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
  },
  {
    id: 4,
    title: 'Introduction to Algorithms',
    author:
      'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    year: 2009,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX342_SY445_QL70_FMwebp_.jpg',
    rating: 4.6,
    pages: 1312,
    description:
      'The leading textbook on algorithms, widely used in universities worldwide.',
    isFavorite: false,
    link: 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844',
  },
  {
    id: 5,
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson, Gerald Jay Sussman',
    year: 1996,
    genre: 'Computer Science',
    cover: 'https://m.media-amazon.com/images/I/51H17RlBm8L._SY425_.jpg',
    rating: 4.6,
    pages: 657,
    description:
      'A classic computer science text that emphasizes important programming concepts.',
    isFavorite: false,
    link: 'https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871',
  },
  {
    id: 6,
    title: "You Don't Know JS Yet: Get Started",
    author: 'Kyle Simpson',
    year: 2020,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/71WR5UCecAL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.7,
    pages: 280,
    description:
      "The first book in the You Don't Know JS Yet series, covering the foundations of JavaScript.",
    isFavorite: true,
    link: 'https://www.amazon.com/You-Dont-Know-JS-Yet/dp/3864906468',
  },
  {
    id: 7,
    title: 'The Art of Computer Programming',
    author: 'Donald E. Knuth',
    year: 2011,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/81sBXQeDnAL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.8,
    pages: 896,
    description:
      "The bible of fundamental algorithms and the work that taught many of today's software developers most of what they know.",
    isFavorite: false,
    link: 'https://www.amazon.com/Art-Computer-Programming-Vol-Fundamental/dp/0201896834',
  },
  {
    id: 8,
    title: 'Code Complete: A Practical Handbook of Software Construction',
    author: 'Steve McConnell',
    year: 2004,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/51bV1h1pRZL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    pages: 914,
    description:
      'Widely considered one of the best practical guides to programming, this book will make you a better programmer.',
    isFavorite: true,
    link: 'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670',
  },
  {
    id: 9,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    year: 2015,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.7,
    pages: 708,
    description:
      'The most widely used book for technical interview preparation, with 189 programming questions and solutions.',
    isFavorite: false,
    link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850',
  },
  {
    id: 10,
    title: 'Head First Design Patterns',
    author: 'Eric Freeman, Elisabeth Robson',
    year: 2004,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/61APhXCksuL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    pages: 694,
    description:
      'A brain-friendly guide to design patterns that helps you learn through visuals, puzzles, and more.',
    isFavorite: true,
    link: 'https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124',
  },
  {
    id: 11,
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    author: 'Robert C. Martin',
    year: 2011,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/51uO-K+V5dL._SX342_SY445_QL70_FMwebp_.jpg',
    rating: 4.6,
    pages: 256,
    description:
      'This book shows how to approach software development with honor, self-respect, and pride.',
    isFavorite: false,
    link: 'https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073',
  },
  {
    id: 12,
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    year: 2018,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/51JkDfACNIL._SX342_SY445_QL70_FMwebp_.jpg',
    rating: 4.6,
    pages: 448,
    description:
      'The definitive guide to refactoring, explaining principles and best practices for improving existing code.',
    isFavorite: true,
    link: 'https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0134757599',
  },
  {
    id: 13,
    title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
    author: 'Eric Evans',
    year: 2003,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/51OWGtzQLLL._SX342_SY445_QL70_FMwebp_.jpg',
    rating: 4.6,
    pages: 560,
    description:
      'This book provides a framework for making design decisions that accelerate software projects.',
    isFavorite: false,
    link: 'https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215',
  },
  {
    id: 14,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/81kqrwS1nNL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.4,
    pages: 176,
    description:
      'This book reveals the good parts of JavaScript that are worth adopting and the bad parts to avoid.',
    isFavorite: false,
    link: 'https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742',
  },
  {
    id: 15,
    title: "Don't Make Me Think: A Common Sense Approach to Web Usability",
    author: 'Steve Krug',
    year: 2014,
    genre: 'Web Design',
    cover:
      'https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    pages: 216,
    description:
      'A classic book about human-computer interaction and web usability.',
    isFavorite: true,
    link: 'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515',
  },
  {
    id: 16,
    title: 'The Mythical Man-Month: Essays on Software Engineering',
    author: 'Frederick P. Brooks Jr.',
    year: 1995,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/71ZYz4VuvQL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    pages: 336,
    description:
      'A classic collection of essays on software engineering and project management.',
    isFavorite: false,
    link: 'https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959',
  },
  {
    id: 17,
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    year: 1994,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg',
    rating: 4.7,
    pages: 416,
    description: 'The seminal work on design patterns in software development.',
    isFavorite: true,
    link: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
  },
  {
    id: 18,
    title:
      'The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations',
    author: 'Gene Kim, Jez Humble, Patrick Debois, John Willis',
    year: 2016,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/71Z6H2O1oIL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.7,
    pages: 480,
    description:
      'This book shows how to replicate the transformational outcomes achieved by high-performing organizations.',
    isFavorite: false,
    link: 'https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002',
  },
  {
    id: 19,
    title: 'Site Reliability Engineering: How Google Runs Production Systems',
    author: 'Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy',
    year: 2016,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/71Swqqe7YAL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    pages: 552,
    description:
      "This book explains how Google's SRE team builds, deploys, monitors, and maintains some of the largest software systems in the world.",
    isFavorite: false,
    link: 'https://www.amazon.com/Site-Reliability-Engineering-Production-Systems/dp/149192912X',
  },
  {
    id: 20,
    title:
      'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
    author: 'Gene Kim, Kevin Behr, George Spafford',
    year: 2013,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/71Swqqe7YAL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    pages: 432,
    description:
      'A novel that reveals how DevOps techniques can help organizations win in the marketplace.',
    isFavorite: true,
    link: 'https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592',
  },
  {
    id: 21,
    title:
      'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation',
    author: 'Jez Humble, David Farley',
    year: 2010,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/51B7kuCw+FL._SX379_BO1,204,203,200_.jpg',
    rating: 4.6,
    pages: 512,
    description:
      'This book provides a blueprint for creating an automated, reliable software release process.',
    isFavorite: false,
    link: 'https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912',
  },
  {
    id: 22,
    title: 'Effective Java',
    author: 'Joshua Bloch',
    year: 2017,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/51wl8cinkYL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    rating: 4.8,
    pages: 416,
    description:
      'The definitive guide to Java programming language best practices.',
    isFavorite: true,
    link: 'https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997',
  },
  {
    id: 23,
    title:
      'Python Crash Course: A Hands-On, Project-Based Introduction to Programming',
    author: 'Eric Matthes',
    year: 2019,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/71NUZ+rHN2L._AC_UF1000,1000_QL80_.jpg',
    rating: 4.7,
    pages: 544,
    description: 'A fast-paced, no-nonsense guide to programming in Python.',
    isFavorite: false,
    link: 'https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280',
  },
  {
    id: 24,
    title: 'The Go Programming Language',
    author: 'Alan A. A. Donovan, Brian W. Kernighan',
    year: 2015,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/51W5b6p8QwL._SX379_BO1,204,203,200_.jpg',
    rating: 4.7,
    pages: 380,
    description:
      'The definitive guide to Go programming from the creators of the language.',
    isFavorite: false,
    link: 'https://www.amazon.com/Programming-Language-Addison-Wesley-Professional-Computing/dp/0134190440',
  },
  {
    id: 25,
    title: 'Rust Programming Language',
    author: 'Steve Klabnik, Carol Nichols',
    year: 2019,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/71snugAl+VL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.8,
    pages: 560,
    description:
      'The official guide to Rust, a systems programming language that runs blazingly fast.',
    isFavorite: true,
    link: 'https://www.amazon.com/Rust-Programming-Language-2nd/dp/1718503105',
  },
  {
    id: 26,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marijn Haverbeke',
    year: 2018,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/51-5ZXYtcML._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    rating: 4.6,
    pages: 472,
    description: 'A comprehensive introduction to JavaScript programming.',
    isFavorite: false,
    link: 'https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507',
  },
  {
    id: 27,
    title: 'Learning React: Modern Patterns for Developing React Apps',
    author: 'Alex Banks, Eve Porcello',
    year: 2020,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg',
    rating: 4.7,
    pages: 330,
    description:
      'A comprehensive guide to learning React.js and building modern web applications.',
    isFavorite: false,
    link: 'https://www.amazon.com/Learning-React-Modern-Patterns-Developing/dp/1492051721',
  },
  {
    id: 28,
    title: 'Deep Learning with Python',
    author: 'François Chollet',
    year: 2017,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/61qbj4KwauL._SX379_BO1,204,203,200_.jpg',
    rating: 4.6,
    pages: 384,
    description: 'An introduction to deep learning using Python and Keras.',
    isFavorite: true,
    link: 'https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438',
  },
  {
    id: 29,
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell, Peter Norvig',
    year: 2020,
    genre: 'Computer Science',
    cover:
      'https://m.media-amazon.com/images/I/71v2NtxlVVL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6,
    pages: 1136,
    description:
      'The standard text on artificial intelligence, used in over 1400 universities worldwide.',
    isFavorite: false,
    link: 'https://www.amazon.com/Artificial-Intelligence-Modern-Approach-4th/dp/0134610997',
  },
  {
    id: 30,
    title: 'The C Programming Language',
    author: 'Brian W. Kernighan, Dennis M. Ritchie',
    year: 1988,
    genre: 'Programming',
    cover:
      'https://m.media-amazon.com/images/I/51RjR1VACWL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    rating: 4.7,
    pages: 288,
    description:
      'The classic introduction to C programming from the creators of the language.',
    isFavorite: true,
    link: 'https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628',
  },
]
