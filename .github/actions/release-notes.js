const { Octokit } = require("@octokit/action")

async function main() {
    const octokit = new Octokit()
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/")

    const release = await octokit.repos.getLatestRelease({
        owner,
        repo,
    })

    const { data } = await octokit.request("GET /repos/:owner/:repo/compare/:tag_1...:tag_2", {
        owner,
        repo,
        tag_1: release.data.tag_name,
        tag_2: "HEAD",
    })

    console.log(data)
}

main()
