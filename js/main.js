// Blog data - Easy to add new articles
const blogArticles = [
    {
        id: 1,
        title: "Introduction to ECS",
        author: "Tharuka Sandaruwan",
        date: "2025-06-29",
        excerpt: "Learn about Amazon Elastic Container Service (ECS) and how it simplifies container orchestration in the cloud.",
        content: `
            <h1>Introduction to ECS</h1>
            <div class="article-meta">
                <span>By Tharuka Sandaruwan</span>
                <span>June 29, 2025</span>
            </div>
            
            <p>Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications using Docker containers.</p>
            
            <h2>What is Amazon ECS?</h2>
            <p>Amazon ECS is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines, or schedule containers on those virtual machines.</p>
            
            <h2>Key Features of ECS</h2>
            <ul>
                <li><strong>Serverless with Fargate:</strong> Run containers without managing servers or clusters</li>
                <li><strong>Integration with AWS Services:</strong> Seamlessly works with other AWS services like Load Balancers, IAM, CloudWatch</li>
                <li><strong>Security:</strong> Built-in security features and integration with AWS security services</li>
                <li><strong>Scalability:</strong> Automatically scale your applications up or down based on demand</li>
                <li><strong>Cost-effective:</strong> Pay only for the resources you use</li>
            </ul>
            
            <h2>ECS Core Components</h2>
            
            <h3>1. Task Definition</h3>
            <p>A task definition is a blueprint that describes how a container should run. It specifies:</p>
            <ul>
                <li>Docker image to use</li>
                <li>CPU and memory requirements</li>
                <li>Environment variables</li>
                <li>Port mappings</li>
                <li>Volume mounts</li>
            </ul>
            
            <h3>2. Tasks</h3>
            <p>A task is the instantiation of a task definition within a cluster. It represents one or more running containers.</p>
            
            <h3>3. Services</h3>
            <p>An ECS service allows you to run and maintain a specified number of instances of a task definition simultaneously in an ECS cluster.</p>
            
            <h3>4. Clusters</h3>
            <p>A cluster is a logical grouping of tasks or services. It can be thought of as the infrastructure where your containers run.</p>
            
            <h2>ECS Launch Types</h2>
            
            <h3>EC2 Launch Type</h3>
            <p>With the EC2 launch type, you manage the underlying EC2 instances that make up your cluster. This gives you more control over the infrastructure but requires more management overhead.</p>
            
            <h3>Fargate Launch Type</h3>
            <p>AWS Fargate is a serverless compute engine for containers. With Fargate, you don't need to provision or manage servers - AWS manages the infrastructure for you.</p>
            
            <h2>Getting Started with ECS</h2>
            <p>Here's a simple example of creating an ECS task definition using the AWS CLI:</p>
            
            <pre><code class="language-json">{
  "family": "my-app",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "my-container",
      "image": "nginx:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/my-app",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}</code></pre>
            
            <h2>Benefits of Using ECS</h2>
            <ul>
                <li><strong>Simplified Management:</strong> No need to manage container orchestration software</li>
                <li><strong>AWS Integration:</strong> Native integration with AWS services</li>
                <li><strong>Security:</strong> Task-level security isolation</li>
                <li><strong>Monitoring:</strong> Built-in monitoring with CloudWatch</li>
                <li><strong>Load Balancing:</strong> Integration with Application Load Balancer and Network Load Balancer</li>
                <li><strong>Auto Scaling:</strong> Automatic scaling based on CloudWatch metrics</li>
            </ul>
            
            <h2>Use Cases for ECS</h2>
            <ul>
                <li>Microservices architectures</li>
                <li>Web applications</li>
                <li>API backends</li>
                <li>Batch processing jobs</li>
                <li>Machine learning workloads</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Amazon ECS provides a powerful and flexible platform for running containerized applications in the cloud. Whether you choose the EC2 launch type for more control or Fargate for serverless simplicity, ECS offers the tools and integrations needed to build scalable, reliable container-based applications.</p>
            
            <p>In future articles, we'll dive deeper into advanced ECS concepts, best practices, and real-world implementation scenarios.</p>
        `,
        tags: ["AWS", "ECS", "Containers", "Docker", "Cloud"]
    },
    {
        id: 2,
        title: "Introduction to AWS CodeBuild",
        author: "Tharuka Sandaruwan",
        date: "2025-07-18",
        excerpt: "Discover AWS CodeBuild, a fully managed continuous integration service that compiles source code, runs tests, and produces deployable software packages.",
        content: `
            <h1>Introduction to AWS CodeBuild</h1>
            <div class="article-meta">
                <span>By Tharuka Sandaruwan</span>
                <span>July 18, 2025</span>
            </div>
            
            <p>AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. With CodeBuild, you don't need to provision, manage, and scale your own build servers.</p>
            
            <h2>What is AWS CodeBuild?</h2>
            <p>AWS CodeBuild is a cloud-based build service that eliminates the need to set up, maintain, and scale build infrastructure. It provides pre-configured build environments for popular programming languages and allows you to create custom build environments to suit your specific needs.</p>
            
            <h2>Key Features of CodeBuild</h2>
            <ul>
                <li><strong>Fully Managed:</strong> No build servers to provision or manage</li>
                <li><strong>Scalable:</strong> Automatically scales up and down based on build demand</li>
                <li><strong>Pay-as-you-go:</strong> Only pay for the compute resources you use during builds</li>
                <li><strong>Security:</strong> Builds run in isolated environments with AWS security best practices</li>
                <li><strong>Integration:</strong> Seamlessly integrates with other AWS services and third-party tools</li>
                <li><strong>Custom Environments:</strong> Support for custom Docker images and build environments</li>
            </ul>
            
            <h2>How CodeBuild Works</h2>
            <p>CodeBuild works in the following way:</p>
            <ol>
                <li><strong>Source:</strong> CodeBuild retrieves source code from repositories like GitHub, Bitbucket, or AWS CodeCommit</li>
                <li><strong>Build Environment:</strong> CodeBuild provisions a temporary compute environment</li>
                <li><strong>Build Specification:</strong> CodeBuild reads the buildspec.yml file to understand build commands</li>
                <li><strong>Execution:</strong> CodeBuild runs the build commands in phases</li>
                <li><strong>Artifacts:</strong> Build outputs are stored in specified locations like S3</li>
                <li><strong>Cleanup:</strong> The temporary build environment is terminated</li>
            </ol>
            
            <h2>Build Specification (buildspec.yml)</h2>
            <p>The buildspec.yml file is the heart of your CodeBuild project. It defines the build commands and settings. Here's an example:</p>
            
            <pre><code class="language-yaml">version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 18
    commands:
      - echo Installing dependencies...
      - npm install
  
  pre_build:
    commands:
      - echo Running pre-build steps...
      - npm run lint
      - npm run test
  
  build:
    commands:
      - echo Building the application...
      - npm run build
  
  post_build:
    commands:
      - echo Build completed on \`date\`

artifacts:
  files:
    - '**/*'
  base-directory: 'build'
  
cache:
  paths:
    - 'node_modules/**/*'</code></pre>
            
            <h2>Build Phases</h2>
            <p>CodeBuild organizes the build process into several phases:</p>
            
            <h3>1. Install Phase</h3>
            <p>Install runtime versions and packages needed for the build environment.</p>
            
            <h3>2. Pre-build Phase</h3>
            <p>Run commands before the build, such as logging into registries or installing dependencies.</p>
            
            <h3>3. Build Phase</h3>
            <p>Run the actual build commands, such as compiling code or running build scripts.</p>
            
            <h3>4. Post-build Phase</h3>
            <p>Run commands after the build completes, such as packaging artifacts or sending notifications.</p>
            
            <h2>Build Environments</h2>
            <p>CodeBuild provides several managed build environments:</p>
            <ul>
                <li><strong>Amazon Linux 2:</strong> General-purpose Linux environment</li>
                <li><strong>Ubuntu:</strong> Ubuntu-based environment</li>
                <li><strong>Windows Server:</strong> Windows-based environment for .NET applications</li>
                <li><strong>Custom Docker Images:</strong> Use your own Docker images</li>
            </ul>
            
            <h2>Integration with AWS Services</h2>
            
            <h3>AWS CodePipeline</h3>
            <p>CodeBuild integrates seamlessly with CodePipeline to create complete CI/CD workflows.</p>
            
            <h3>Amazon S3</h3>
            <p>Store build artifacts in S3 buckets for later deployment or distribution.</p>
            
            <h3>AWS CloudWatch</h3>
            <p>Monitor build metrics, logs, and set up alarms for build failures.</p>
            
            <h3>AWS IAM</h3>
            <p>Control access to CodeBuild projects and resources using IAM roles and policies.</p>
            
            <h2>Example: Building a Node.js Application</h2>
            <p>Here's a complete example of setting up CodeBuild for a Node.js application:</p>
            
            <pre><code class="language-yaml">version: 0.2

env:
  variables:
    NODE_ENV: production
    
phases:
  install:
    runtime-versions:
      nodejs: 18
    commands:
      - echo Installing Node.js dependencies...
      - npm ci --only=production
  
  pre_build:
    commands:
      - echo Running tests...
      - npm test
      - echo Running security audit...
      - npm audit --audit-level moderate
  
  build:
    commands:
      - echo Building the application...
      - npm run build
      - echo Creating deployment package...
      - zip -r app.zip . -x "*.git*" "node_modules/*/test/*" "*.md"
  
  post_build:
    commands:
      - echo Build completed successfully
      - echo Uploading artifacts...

artifacts:
  files:
    - app.zip
    - appspec.yml
  name: MyApp-\$(date +%Y-%m-%d-%H-%M-%S)

cache:
  paths:
    - 'node_modules/**/*'</code></pre>
            
            <h2>Best Practices for CodeBuild</h2>
            <ul>
                <li><strong>Use Build Caching:</strong> Cache dependencies to speed up builds</li>
                <li><strong>Optimize Docker Images:</strong> Use lightweight base images and multi-stage builds</li>
                <li><strong>Secure Secrets:</strong> Use AWS Systems Manager Parameter Store or Secrets Manager</li>
                <li><strong>Monitor Builds:</strong> Set up CloudWatch alarms for build failures</li>
                <li><strong>Version Control:</strong> Keep buildspec.yml in version control</li>
                <li><strong>Resource Allocation:</strong> Choose appropriate compute types for your builds</li>
            </ul>
            
            <h2>Pricing</h2>
            <p>CodeBuild pricing is based on the compute resources used during builds:</p>
            <ul>
                <li>You pay per minute for the compute resources used</li>
                <li>Different instance types have different pricing</li>
                <li>No upfront costs or minimum fees</li>
                <li>First 100 build minutes per month are free</li>
            </ul>
            
            <h2>Common Use Cases</h2>
            <ul>
                <li><strong>Continuous Integration:</strong> Automated testing and building of code changes</li>
                <li><strong>Automated Testing:</strong> Running unit tests, integration tests, and security scans</li>
                <li><strong>Container Image Building:</strong> Building and pushing Docker images</li>
                <li><strong>Static Website Generation:</strong> Building static sites for deployment</li>
                <li><strong>Package Creation:</strong> Creating deployment packages and artifacts</li>
            </ul>
            
            <h2>Troubleshooting Common Issues</h2>
            
            <h3>Build Timeouts</h3>
            <p>Increase the timeout value or optimize your build process to complete faster.</p>
            
            <h3>Permission Errors</h3>
            <p>Ensure the CodeBuild service role has the necessary permissions for your build operations.</p>
            
            <h3>Environment Issues</h3>
            <p>Verify that the build environment has all required dependencies and tools.</p>
            
            <h2>Conclusion</h2>
            <p>AWS CodeBuild provides a powerful, scalable, and cost-effective solution for continuous integration. Its integration with other AWS services makes it an excellent choice for building modern applications in the cloud.</p>
            
            <p>Whether you're building simple web applications or complex microservices, CodeBuild can help streamline your development workflow and improve code quality through automated builds and testing.</p>
        `,
        tags: ["AWS", "CodeBuild", "CI/CD", "DevOps", "Automation"]
    }
];

// DOM elements
const articlesContainer = document.getElementById('articles-container');
const modal = document.getElementById('article-modal');
const modalArticle = document.getElementById('modal-article');
const closeModal = document.querySelector('.close');

// Initialize the blog
document.addEventListener('DOMContentLoaded', function() {
    renderArticles();
    setupModalEvents();
    setupNavigationScroll();
    setupThemeToggle();
    loadSavedTheme();
});

// Render articles to the page
function renderArticles() {
    articlesContainer.innerHTML = '';
    
    blogArticles.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesContainer.appendChild(articleCard);
    });
}

// Create article card element
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.onclick = () => openArticle(article);
    
    card.innerHTML = `
        <h3>${article.title}</h3>
        <div class="article-meta">
            <span>By ${article.author}</span>
            <span>${formatDate(article.date)}</span>
        </div>
        <p>${article.excerpt}</p>
        <span class="read-more">Read More →</span>
    `;
    
    return card;
}

// Open article in modal
function openArticle(article) {
    modalArticle.innerHTML = `
        <div class="article-content">
            ${article.content}
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Re-initialize Prism for syntax highlighting
    if (window.Prism) {
        Prism.highlightAll();
    }
}

// Close modal
function closeArticleModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Setup modal events
function setupModalEvents() {
    closeModal.onclick = closeArticleModal;
    
    window.onclick = function(event) {
        if (event.target === modal) {
            closeArticleModal();
        }
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeArticleModal();
        }
    });
}

// Setup smooth scrolling for navigation
function setupNavigationScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility function to add new articles (for easy content management)
function addNewArticle(articleData) {
    // Assign new ID
    articleData.id = blogArticles.length + 1;
    
    // Add to the beginning of the array (latest first)
    blogArticles.unshift(articleData);
    
    // Re-render articles
    renderArticles();
}

// Theme Management Functions
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
    saveTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update Prism.js theme for syntax highlighting
    const lightTheme = document.getElementById('prism-theme');
    const darkTheme = document.getElementById('prism-theme-dark');
    
    if (theme === 'dark') {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
    } else {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
    }
    
    // Re-highlight code blocks if Prism is available
    if (window.Prism) {
        setTimeout(() => {
            Prism.highlightAll();
        }, 100);
    }
}

function saveTheme(theme) {
    localStorage.setItem('blog-theme', theme);
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('blog-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const themeToUse = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(themeToUse);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    const savedTheme = localStorage.getItem('blog-theme');
    if (!savedTheme) { // Only auto-switch if user hasn't manually selected a theme
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Export for potential use in console or future scripts
window.BlogManager = {
    articles: blogArticles,
    addArticle: addNewArticle,
    renderArticles: renderArticles,
    toggleTheme: toggleTheme,
    setTheme: setTheme
};