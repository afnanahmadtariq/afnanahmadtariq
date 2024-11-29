// Set your desired GitHub username here
const username = "octocat";  // Change this for other profiles

// Fetch and display GitHub profile data
async function fetchProfileData() {
    const profile = document.getElementById('profile');
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const bio = document.getElementById('bio');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const location = document.getElementById('location');
    const company = document.getElementById('company');
    const blog = document.getElementById('blog');
    const twitter = document.getElementById('twitter');
    const reposList = document.getElementById('repos-list');

    profile.style.opacity = 0; // Hide profile temporarily

    // Fetch data from GitHub API
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        // Profile Data
        avatar.src = data.avatar_url;
        name.textContent = data.name || "No Name";
        bio.textContent = data.bio || "No Bio Available";
        location.textContent = data.location || "No Location";
        company.textContent = data.company || "No Company";
        blog.textContent = data.blog || "#";
        twitter.textContent = data.twitter_username || "No Twitter";

        blog.href = data.blog || "#";
        twitter.href = data.twitter_username ? `https://twitter.com/${data.twitter_username}` : "#";

        // Stats
        repos.textContent = data.public_repos;
        followers.textContent = data.followers;
        following.textContent = data.following;

        // Repositories
        reposList.innerHTML = ""; // Clear previous repos
        const reposData = await fetch(data.repos_url);
        const reposJson = await reposData.json();
        
        reposJson.slice(0, 4).forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');
            repoCard.innerHTML = `
                <h4><a href="${repo.html_url}" target="_blank">${repo.name}</a></h4>
                <p>${repo.description || 'No description available.'}</p>
            `;
            reposList.appendChild(repoCard);
        });

        profile.style.opacity = 1; // Show profile again
    } catch (error) {
        alert("User not found or unable to fetch data");
        profile.style.opacity = 1; // Show profile on error
    }
}

// Call the function to fetch profile data when the page loads
window.onload = fetchProfileData;
